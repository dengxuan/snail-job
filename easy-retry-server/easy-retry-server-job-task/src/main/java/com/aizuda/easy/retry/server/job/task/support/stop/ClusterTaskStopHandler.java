package com.aizuda.easy.retry.server.job.task.support.stop;

import akka.actor.ActorRef;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.util.ClientInfoUtils;
import com.aizuda.easy.retry.server.job.task.support.JobTaskConverter;
import com.aizuda.easy.retry.server.job.task.dto.RealStopTaskInstanceDTO;
import com.aizuda.easy.retry.common.core.enums.JobTaskTypeEnum;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobTask;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author opensnail
 * @date 2023-10-02 12:59:53
 * @since 2.4.0
 */
@Component
@Slf4j
public class ClusterTaskStopHandler extends AbstractJobTaskStopHandler {


    @Override
    public JobTaskTypeEnum getTaskType() {
        return JobTaskTypeEnum.CLUSTER;
    }

    @Override
    public void doStop(TaskStopJobContext context) {
        List<JobTask> jobTasks = context.getJobTasks();

        RealStopTaskInstanceDTO taskInstanceDTO = JobTaskConverter.INSTANCE.toRealStopTaskInstanceDTO(context);
        taskInstanceDTO.setClientId(ClientInfoUtils.clientId(jobTasks.get(0).getClientInfo()));

        ActorRef actorRef = ActorGenerator.jobRealStopTaskInstanceActor();
        actorRef.tell(taskInstanceDTO, actorRef);

    }


}
