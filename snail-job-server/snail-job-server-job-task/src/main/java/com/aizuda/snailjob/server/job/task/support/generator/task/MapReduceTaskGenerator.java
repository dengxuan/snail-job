package com.aizuda.snailjob.server.job.task.support.generator.task;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.lang.Assert;
import cn.hutool.core.util.StrUtil;
import com.aizuda.snailjob.common.core.enums.JobTaskStatusEnum;
import com.aizuda.snailjob.common.core.enums.JobTaskTypeEnum;
import com.aizuda.snailjob.common.core.util.JsonUtil;
import com.aizuda.snailjob.common.core.util.StreamUtils;
import com.aizuda.snailjob.common.log.SnailJobLog;
import com.aizuda.snailjob.server.common.cache.CacheRegisterTable;
import com.aizuda.snailjob.server.common.dto.RegisterNodeInfo;
import com.aizuda.snailjob.server.common.exception.SnailJobServerException;
import com.aizuda.snailjob.server.common.util.ClientInfoUtils;
import com.aizuda.snailjob.server.job.task.dto.JobTaskExtAttrsDTO;
import com.aizuda.snailjob.server.job.task.enums.MapReduceStageEnum;
import com.aizuda.snailjob.server.job.task.support.JobTaskConverter;
import com.aizuda.snailjob.template.datasource.persistence.mapper.JobTaskMapper;
import com.aizuda.snailjob.template.datasource.persistence.po.JobTask;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * 生成Map Reduce任务
 *
 * @author: opensnail
 * @date : 2024-06-12
 * @since : sj_1.1.0
 */
@Component
@RequiredArgsConstructor
public class MapReduceTaskGenerator extends AbstractJobTaskGenerator {

    private final JobTaskMapper jobTaskMapper;
    private final TransactionTemplate transactionTemplate;

    @Override
    public JobTaskTypeEnum getTaskInstanceType() {
        return JobTaskTypeEnum.MAP_REDUCE;
    }

    @Override
    protected List<JobTask> doGenerate(final JobTaskGenerateContext context) {
        // TODO 若没有客户端节点JobTask是否需要创建????
        Set<RegisterNodeInfo> serverNodes = CacheRegisterTable.getServerNodeSet(context.getGroupName(),
            context.getNamespaceId());
        if (CollUtil.isEmpty(serverNodes)) {
            SnailJobLog.LOCAL.error("无可执行的客户端信息. jobId:[{}]", context.getJobId());
            return Lists.newArrayList();
        }

        List<RegisterNodeInfo> nodeInfoList = new ArrayList<>(serverNodes);

        switch (context.getMrStage()) {
            case MAP -> {
                // MAP任务
                return createMapJobTasks(context, nodeInfoList, serverNodes);
            }
            case REDUCE -> {
                // REDUCE任务
                return createReduceJobTasks(context, nodeInfoList, serverNodes);
            }
            default -> throw new SnailJobServerException("Map reduce stage is not existed");
        }
    }

    private List<JobTask> createReduceJobTasks(JobTaskGenerateContext context, List<RegisterNodeInfo> nodeInfoList,
        Set<RegisterNodeInfo> serverNodes) {

        // TODO  reduce阶段的并行度
        int reduceParallel = 10;

        List<JobTask> jobTasks = jobTaskMapper.selectList(new LambdaQueryWrapper<JobTask>()
            .select(JobTask::getResultMessage, JobTask::getExtAttrs)
            .eq(JobTask::getTaskBatchId, context.getTaskBatchId()));

        // 若存在已经生成的reduce任务不需要重新生成
        boolean existedReduce = jobTasks.stream()
            .filter(jobTask -> StrUtil.isNotBlank(jobTask.getExtAttrs()))
            .map(jobTask -> JsonUtil.parseObject(jobTask.getExtAttrs(), JobTaskExtAttrsDTO.class))
            .anyMatch(jobTaskExtAttrsDTO -> MapReduceStageEnum.REDUCE.name().equals(jobTaskExtAttrsDTO.getMrStage()));
        if (existedReduce) {
            SnailJobLog.LOCAL.warn("The reduce task already exists. taskBatchId:[{}]", context.getTaskBatchId());
            return Lists.newArrayList();
        }

        // 这里需要判断是否是map
        List<String> allMapJobTasks = StreamUtils.toList(jobTasks, JobTask::getResultMessage);

        List<List<String>> partition = Lists.partition(allMapJobTasks, reduceParallel);

        JobTaskExtAttrsDTO jobTaskExtAttrsDTO = new JobTaskExtAttrsDTO();
        jobTaskExtAttrsDTO.setMapName(context.getMapName());
        jobTaskExtAttrsDTO.setTaskType(JobTaskTypeEnum.MAP_REDUCE.getType());
        jobTaskExtAttrsDTO.setMrStage(MapReduceStageEnum.REDUCE.name());

        jobTasks = new ArrayList<>(partition.size());

        final List<JobTask> finalJobTasks = jobTasks;
        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(final TransactionStatus status) {
                for (int index = 0; index < partition.size(); index++) {
                    RegisterNodeInfo registerNodeInfo = nodeInfoList.get(index % serverNodes.size());
                    // 新增任务实例
                    JobTask jobTask = JobTaskConverter.INSTANCE.toJobTaskInstance(context);
                    jobTask.setClientInfo(ClientInfoUtils.generate(registerNodeInfo));
                    jobTask.setArgsType(context.getArgsType());
                    jobTask.setArgsStr(JsonUtil.toJsonString(partition.get(index)));
                    jobTask.setTaskStatus(JobTaskStatusEnum.RUNNING.getStatus());
                    jobTask.setResultMessage(Optional.ofNullable(jobTask.getResultMessage()).orElse(StrUtil.EMPTY));
                    jobTask.setExtAttrs(jobTaskExtAttrsDTO.toString());
                    Assert.isTrue(1 == jobTaskMapper.insert(jobTask),
                        () -> new SnailJobServerException("新增任务实例失败"));
                    finalJobTasks.add(jobTask);
                }
            }
        });

        return finalJobTasks;
    }

    private @Nullable List<JobTask> createMapJobTasks(final JobTaskGenerateContext context,
        final List<RegisterNodeInfo> nodeInfoList, final Set<RegisterNodeInfo> serverNodes) {
        List<?> mapSubTask = context.getMapSubTask();
        if (CollUtil.isEmpty(mapSubTask)) {
            SnailJobLog.LOCAL.warn("Map sub task is empty. TaskBatchId:[{}]", context.getTaskBatchId());
            return Lists.newArrayList();
        }

        JobTaskExtAttrsDTO jobTaskExtAttrsDTO = new JobTaskExtAttrsDTO();
        jobTaskExtAttrsDTO.setMapName(context.getMapName());
        jobTaskExtAttrsDTO.setTaskType(JobTaskTypeEnum.MAP_REDUCE.getType());
        jobTaskExtAttrsDTO.setMrStage(MapReduceStageEnum.MAP.name());
        List<JobTask> jobTasks = new ArrayList<>(mapSubTask.size());

        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(final TransactionStatus status) {

                for (int index = 0; index < mapSubTask.size(); index++) {
                    RegisterNodeInfo registerNodeInfo = nodeInfoList.get(index % serverNodes.size());
                    // 新增任务实例
                    JobTask jobTask = JobTaskConverter.INSTANCE.toJobTaskInstance(context);
                    jobTask.setClientInfo(ClientInfoUtils.generate(registerNodeInfo));
                    jobTask.setArgsType(context.getArgsType());
                    jobTask.setArgsStr(JsonUtil.toJsonString(mapSubTask.get(index)));
                    jobTask.setTaskStatus(JobTaskStatusEnum.RUNNING.getStatus());
                    jobTask.setResultMessage(Optional.ofNullable(jobTask.getResultMessage()).orElse(StrUtil.EMPTY));
                    jobTask.setExtAttrs(jobTaskExtAttrsDTO.toString());
                    Assert.isTrue(1 == jobTaskMapper.insert(jobTask),
                        () -> new SnailJobServerException("新增任务实例失败"));
                    jobTasks.add(jobTask);
                }
            }
        });


        return jobTasks;
    }
}
