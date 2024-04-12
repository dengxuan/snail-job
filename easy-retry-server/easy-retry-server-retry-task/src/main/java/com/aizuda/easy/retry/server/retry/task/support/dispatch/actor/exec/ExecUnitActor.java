package com.aizuda.easy.retry.server.retry.task.support.dispatch.actor.exec;

import akka.actor.AbstractActor;
import com.aizuda.easy.retry.client.model.DispatchRetryDTO;
import com.aizuda.easy.retry.client.model.DispatchRetryResultDTO;
import com.aizuda.easy.retry.common.core.enums.StatusEnum;
import com.aizuda.easy.retry.common.log.EasyRetryLog;
import com.aizuda.easy.retry.common.core.model.EasyRetryHeaders;
import com.aizuda.easy.retry.common.core.model.Result;
import com.aizuda.easy.retry.common.core.util.JsonUtil;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.rpc.client.RequestBuilder;
import com.aizuda.easy.retry.server.common.dto.RegisterNodeInfo;
import com.aizuda.easy.retry.server.common.util.DateUtils;
import com.aizuda.easy.retry.server.retry.task.client.RetryRpcClient;
import com.aizuda.easy.retry.server.common.dto.RetryLogMetaDTO;
import com.aizuda.easy.retry.server.retry.task.support.RetryTaskConverter;
import com.aizuda.easy.retry.server.retry.task.support.context.MaxAttemptsPersistenceRetryContext;
import com.aizuda.easy.retry.server.retry.task.support.retry.RetryExecutor;
import com.aizuda.easy.retry.template.datasource.persistence.po.RetryTask;
import com.aizuda.easy.retry.template.datasource.persistence.po.SceneConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.concurrent.Callable;

/**
 * 重试结果执行器
 *
 * @author opensnail
 * @date 2021-10-30
 * @since 2.0
 */
@Component(ActorGenerator.EXEC_UNIT_ACTOR)
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class ExecUnitActor extends AbstractActor {

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(RetryExecutor.class, retryExecutor -> {

            MaxAttemptsPersistenceRetryContext context = (MaxAttemptsPersistenceRetryContext) retryExecutor.getRetryContext();
            RetryTask retryTask = context.getRetryTask();
            RegisterNodeInfo serverNode = context.getServerNode();
            SceneConfig sceneConfig = context.getSceneConfig();

            try {

                if (Objects.nonNull(serverNode)) {

                    retryExecutor.call((Callable<Result<DispatchRetryResultDTO>>) () -> {

                        Result<DispatchRetryResultDTO> result = callClient(retryTask, serverNode, sceneConfig);
                        // 回调接口请求成功，处理返回值
                        if (StatusEnum.YES.getStatus() != result.getStatus()) {
                        } else {
                            DispatchRetryResultDTO data = JsonUtil.parseObject(JsonUtil.toJsonString(result.getData()), DispatchRetryResultDTO.class);
                            result.setData(data);
                        }

                        return result;
                    });

                }

            } catch (Exception e) {
                RetryLogMetaDTO retryLogMetaDTO = RetryTaskConverter.INSTANCE.toLogMetaDTO(retryTask);
                retryLogMetaDTO.setTimestamp(DateUtils.toNowMilli());
                EasyRetryLog.REMOTE.error("请求客户端异常. <|>{}<|>",  retryTask.getUniqueId(), retryLogMetaDTO, e);
            } finally {
                getContext().stop(getSelf());

            }

        }).build();
    }

    /**
     * 调用客户端
     *
     * @param retryTask {@link RetryTask} 需要重试的数据
     * @return 重试结果返回值
     */
    private Result<DispatchRetryResultDTO> callClient(RetryTask retryTask, RegisterNodeInfo serverNode, SceneConfig sceneConfig) {

        DispatchRetryDTO dispatchRetryDTO = new DispatchRetryDTO();
        dispatchRetryDTO.setIdempotentId(retryTask.getIdempotentId());
        dispatchRetryDTO.setScene(retryTask.getSceneName());
        dispatchRetryDTO.setExecutorName(retryTask.getExecutorName());
        dispatchRetryDTO.setArgsStr(retryTask.getArgsStr());
        dispatchRetryDTO.setUniqueId(retryTask.getUniqueId());
        dispatchRetryDTO.setRetryCount(retryTask.getRetryCount());
        dispatchRetryDTO.setGroupName(retryTask.getGroupName());
        dispatchRetryDTO.setNamespaceId(retryTask.getNamespaceId());

        // 设置header
        EasyRetryHeaders easyRetryHeaders = new EasyRetryHeaders();
        easyRetryHeaders.setEasyRetry(Boolean.TRUE);
        easyRetryHeaders.setEasyRetryId(retryTask.getUniqueId());

        RetryRpcClient rpcClient = RequestBuilder.<RetryRpcClient, Result>newBuilder()
                .nodeInfo(serverNode)
                .failover(Boolean.TRUE)
                .allocKey(retryTask.getSceneName())
                .routeKey(sceneConfig.getRouteKey())
                .executorTimeout(sceneConfig.getExecutorTimeout())
                .client(RetryRpcClient.class)
                .build();

        return rpcClient.dispatch(dispatchRetryDTO, easyRetryHeaders);
    }


}
