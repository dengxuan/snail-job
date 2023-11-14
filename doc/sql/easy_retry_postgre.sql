-- PostgreSQL DDL

CREATE TABLE group_config
(
    id                BIGSERIAL PRIMARY KEY,
    group_name        VARCHAR(64)  NOT NULL,
    description       VARCHAR(256) NOT NULL,
    group_status      SMALLINT     NOT NULL DEFAULT 0,
    version           INT          NOT NULL,
    group_partition   INT          NOT NULL,
    id_generator_mode SMALLINT     NOT NULL DEFAULT 1,
    init_scene        SMALLINT     NOT NULL DEFAULT 0,
    bucket_index      INT          NOT NULL DEFAULT 0,
    create_dt         TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt         TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_name_group_config" ON "group_config" ("group_name");

COMMENT ON COLUMN "group_config"."id" IS '主键';
COMMENT ON COLUMN "group_config"."group_name" IS '组名称';
COMMENT ON COLUMN "group_config"."description" IS '组描述';
COMMENT ON COLUMN "group_config"."group_status" IS '组状态 0、未启用 1、启用';
COMMENT ON COLUMN "group_config"."version" IS '版本号';
COMMENT ON COLUMN "group_config"."group_partition" IS '分区';
COMMENT ON COLUMN "group_config"."id_generator_mode" IS '唯一id生成模式 默认号段模式';
COMMENT ON COLUMN "group_config"."init_scene" IS '是否初始化场景 0:否 1:是';
COMMENT ON COLUMN "group_config"."bucket_index" IS 'bucket';
COMMENT ON COLUMN "group_config"."create_dt" IS '创建时间';
COMMENT ON COLUMN "group_config"."update_dt" IS '修改时间';
COMMENT ON TABLE "group_config" IS '组配置';

CREATE TABLE notify_config
(
    id               BIGSERIAL PRIMARY KEY,
    group_name       VARCHAR(64)  NOT NULL,
    notify_status    SMALLINT  NOT NULL DEFAULT 0,
    notify_type      SMALLINT     NOT NULL DEFAULT 0,
    notify_attribute VARCHAR(512) NOT NULL,
    notify_threshold INT          NOT NULL DEFAULT 0,
    notify_scene     SMALLINT     NOT NULL DEFAULT 0,
    description      VARCHAR(256) NOT NULL DEFAULT '',
    create_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_group_name ON notify_config (group_name);

COMMENT ON COLUMN "notify_config"."id" IS '主键';
COMMENT ON COLUMN "notify_config"."group_name" IS '组名称';
COMMENT ON COLUMN "notify_config"."notify_status" IS '通知状态 0、未启用 1、启用';
COMMENT ON COLUMN "notify_config"."notify_type" IS '通知类型 1、钉钉 2、邮件 3、企业微信';
COMMENT ON COLUMN "notify_config"."notify_attribute" IS '配置属性';
COMMENT ON COLUMN "notify_config"."notify_threshold" IS '通知阈值';
COMMENT ON COLUMN "notify_config"."notify_scene" IS '通知场景';
COMMENT ON COLUMN "notify_config"."description" IS '描述';
COMMENT ON COLUMN "notify_config"."create_dt" IS '创建时间';
COMMENT ON COLUMN "notify_config"."update_dt" IS '修改时间';
COMMENT ON TABLE "notify_config" IS '通知配置';


CREATE TABLE retry_dead_letter_0
(
    id            BIGSERIAL PRIMARY KEY,
    unique_id     VARCHAR(64)  NOT NULL,
    group_name    VARCHAR(64)  NOT NULL,
    scene_name    VARCHAR(64)  NOT NULL,
    idempotent_id VARCHAR(64)  NOT NULL,
    biz_no        VARCHAR(64)  NOT NULL DEFAULT '',
    executor_name VARCHAR(512) NOT NULL DEFAULT '',
    args_str      TEXT         NOT NULL,
    ext_attrs     TEXT         NOT NULL,
    task_type     SMALLINT     NOT NULL DEFAULT 1,
    create_dt     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_name_unique_id_retry_dead_letter" ON "retry_dead_letter_0" ("group_name", "unique_id");
CREATE INDEX "idx_group_name_scene_name_retry_dead_letter" ON "retry_dead_letter_0" ("group_name", "scene_name");
CREATE INDEX "idx_idempotent_id_retry_dead_letter" ON "retry_dead_letter_0" ("idempotent_id");
CREATE INDEX "idx_biz_no_retry_dead_letter" ON "retry_dead_letter_0" ("biz_no");
CREATE INDEX "idx_create_dt_retry_dead_letter" ON "retry_dead_letter_0" ("create_dt");

COMMENT ON COLUMN "retry_dead_letter_0"."id" IS '主键';
COMMENT ON COLUMN "retry_dead_letter_0"."unique_id" IS '同组下id唯一';
COMMENT ON COLUMN "retry_dead_letter_0"."group_name" IS '组名称';
COMMENT ON COLUMN "retry_dead_letter_0"."scene_name" IS '场景id';
COMMENT ON COLUMN "retry_dead_letter_0"."idempotent_id" IS '幂等id';
COMMENT ON COLUMN "retry_dead_letter_0"."biz_no" IS '业务编号';
COMMENT ON COLUMN "retry_dead_letter_0"."executor_name" IS '执行器名称';
COMMENT ON COLUMN "retry_dead_letter_0"."args_str" IS '执行方法参数';
COMMENT ON COLUMN "retry_dead_letter_0"."ext_attrs" IS '扩展字段';
COMMENT ON COLUMN "retry_dead_letter_0"."task_type" IS '任务类型 1、重试数据 2、回调数据';
COMMENT ON COLUMN "retry_dead_letter_0"."create_dt" IS '创建时间';
COMMENT ON TABLE "retry_dead_letter_0" IS '死信队列表';

CREATE TABLE retry_task_0
(
    id              BIGSERIAL PRIMARY KEY,
    unique_id       VARCHAR(64)  NOT NULL,
    group_name      VARCHAR(64)  NOT NULL,
    scene_name      VARCHAR(64)  NOT NULL,
    idempotent_id   VARCHAR(64)  NOT NULL,
    biz_no          VARCHAR(64)  NOT NULL DEFAULT '',
    executor_name   VARCHAR(512) NOT NULL DEFAULT '',
    args_str        TEXT         NOT NULL,
    ext_attrs       TEXT         NOT NULL,
    next_trigger_at TIMESTAMP    NOT NULL,
    retry_count     INT          NOT NULL DEFAULT 0,
    retry_status    SMALLINT     NOT NULL DEFAULT 0,
    task_type       SMALLINT     NOT NULL DEFAULT 1,
    create_dt       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_name_unique_id_retry_task" ON "retry_task_0" ("group_name", "unique_id");
CREATE INDEX "idx_group_name_scene_name_retry_task" ON "retry_task_0" ("group_name", "scene_name");
CREATE INDEX "idx_retry_status_retry_task" ON "retry_task_0" ("retry_status");
CREATE INDEX "idx_idempotent_id_retry_task" ON "retry_task_0" ("idempotent_id");
CREATE INDEX "idx_biz_no_retry_task" ON "retry_task_0" ("biz_no");
CREATE INDEX "idx_create_dt_retry_task" ON "retry_task_0" ("create_dt");

COMMENT ON COLUMN "retry_task_0"."id" IS '主键';
COMMENT ON COLUMN "retry_task_0"."unique_id" IS '同组下id唯一';
COMMENT ON COLUMN "retry_task_0"."group_name" IS '组名称';
COMMENT ON COLUMN "retry_task_0"."scene_name" IS '场景名称';
COMMENT ON COLUMN "retry_task_0"."idempotent_id" IS '幂等id';
COMMENT ON COLUMN "retry_task_0"."biz_no" IS '业务编号';
COMMENT ON COLUMN "retry_task_0"."executor_name" IS '执行器名称';
COMMENT ON COLUMN "retry_task_0"."args_str" IS '执行方法参数';
COMMENT ON COLUMN "retry_task_0"."ext_attrs" IS '扩展字段';
COMMENT ON COLUMN "retry_task_0"."next_trigger_at" IS '下次触发时间';
COMMENT ON COLUMN "retry_task_0"."retry_count" IS '重试次数';
COMMENT ON COLUMN "retry_task_0"."retry_status" IS '重试状态 0、重试中 1、成功 2、最大重试次数';
COMMENT ON COLUMN "retry_task_0"."task_type" IS '任务类型 1、重试数据 2、回调数据';
COMMENT ON COLUMN "retry_task_0"."create_dt" IS '创建时间';
COMMENT ON COLUMN "retry_task_0"."update_dt" IS '修改时间';
COMMENT ON TABLE "retry_task_0" IS '任务表';

CREATE TABLE retry_task_log
(
    id            BIGSERIAL PRIMARY KEY,
    unique_id     VARCHAR(64)  NOT NULL,
    group_name    VARCHAR(64)  NOT NULL,
    scene_name    VARCHAR(64)  NOT NULL,
    idempotent_id VARCHAR(64)  NOT NULL,
    biz_no        VARCHAR(64)  NOT NULL DEFAULT '',
    executor_name VARCHAR(512) NOT NULL DEFAULT '',
    args_str      TEXT         NOT NULL,
    ext_attrs     TEXT         NOT NULL,
    retry_status  SMALLINT     NOT NULL DEFAULT 0,
    task_type     SMALLINT     NOT NULL DEFAULT 1,
    create_dt     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "idx_group_name_scene_name_retry_task_log" ON "retry_task_log" ("group_name", "scene_name");
CREATE INDEX "idx_retry_status_retry_task_log" ON "retry_task_log" ("retry_status");
CREATE INDEX "idx_idempotent_id_retry_task_log" ON "retry_task_log" ("idempotent_id");
CREATE INDEX "idx_unique_id" ON "retry_task_log" ("unique_id");
CREATE INDEX "idx_biz_no_retry_task_log" ON "retry_task_log" ("biz_no");
CREATE INDEX "idx_create_dt_retry_task_log" ON "retry_task_log" ("create_dt");

COMMENT ON COLUMN "retry_task_log"."id" IS '主键';
COMMENT ON COLUMN "retry_task_log"."unique_id" IS '同组下id唯一';
COMMENT ON COLUMN "retry_task_log"."group_name" IS '组名称';
COMMENT ON COLUMN "retry_task_log"."scene_name" IS '场景名称';
COMMENT ON COLUMN "retry_task_log"."idempotent_id" IS '幂等id';
COMMENT ON COLUMN "retry_task_log"."biz_no" IS '业务编号';
COMMENT ON COLUMN "retry_task_log"."executor_name" IS '执行器名称';
COMMENT ON COLUMN "retry_task_log"."args_str" IS '执行方法参数';
COMMENT ON COLUMN "retry_task_log"."ext_attrs" IS '扩展字段';
COMMENT ON COLUMN "retry_task_log"."retry_status" IS '重试状态 0、重试中 1、成功 2、最大次数';
COMMENT ON COLUMN "retry_task_log"."task_type" IS '任务类型 1、重试数据 2、回调数据';
COMMENT ON COLUMN "retry_task_log"."create_dt" IS '创建时间';
COMMENT ON TABLE "retry_task_log" IS '任务日志基础信息表';

CREATE TABLE retry_task_log_message
(
    id          BIGSERIAL PRIMARY KEY,
    group_name  VARCHAR(64) NOT NULL,
    unique_id   VARCHAR(64) NOT NULL,
    create_dt   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    message     TEXT        NOT NULL,
    client_info VARCHAR(128)         DEFAULT NULL
);

CREATE INDEX "idx_group_name_unique_id" ON "retry_task_log_message" ("group_name", "unique_id");
CREATE INDEX "idx_create_dt" ON "retry_task_log_message" ("create_dt");
COMMENT ON COLUMN "retry_task_log_message"."id" IS '主键';
COMMENT ON COLUMN "retry_task_log_message"."group_name" IS '组名称';
COMMENT ON COLUMN "retry_task_log_message"."unique_id" IS '同组下id唯一';
COMMENT ON COLUMN "retry_task_log_message"."create_dt" IS '创建时间';
COMMENT ON COLUMN "retry_task_log_message"."message" IS '异常信息';
COMMENT ON COLUMN "retry_task_log_message"."client_info" IS '客户端地址 clientId#ip:port';
COMMENT ON TABLE "retry_task_log_message" IS '任务调度日志信息记录表';

CREATE TABLE scene_config
(
    id               BIGSERIAL PRIMARY KEY,
    scene_name       VARCHAR(64)  NOT NULL,
    group_name       VARCHAR(64)  NOT NULL,
    scene_status     SMALLINT     NOT NULL DEFAULT 0,
    max_retry_count  INT          NOT NULL DEFAULT 5,
    back_off         SMALLINT     NOT NULL DEFAULT 1,
    trigger_interval VARCHAR(16)  NOT NULL DEFAULT '',
    deadline_request BIGINT       NOT NULL DEFAULT 60000,
    route_key        SMALLINT     NOT NULL DEFAULT 4,
    executor_timeout INT          NOT NULL DEFAULT 5,
    description      VARCHAR(256) NOT NULL DEFAULT '',
    create_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_group_name_scene_name" ON "scene_config" ("group_name","scene_name");
COMMENT ON COLUMN "scene_config"."id" IS '主键';
COMMENT ON COLUMN "scene_config"."scene_name" IS '场景名称';
COMMENT ON COLUMN "scene_config"."group_name" IS '组名称';
COMMENT ON COLUMN "scene_config"."scene_status" IS '组状态 0、未启用 1、启用';
COMMENT ON COLUMN "scene_config"."max_retry_count" IS '最大重试次数';
COMMENT ON COLUMN "scene_config"."back_off" IS '1、默认等级 2、固定间隔时间 3、CRON 表达式';
COMMENT ON COLUMN "scene_config"."trigger_interval" IS '间隔时长';
COMMENT ON COLUMN "scene_config"."deadline_request" IS 'Deadline Request 调用链超时 单位毫秒';
COMMENT ON COLUMN "scene_config"."description" IS '描述';
COMMENT ON COLUMN "scene_config"."route_key" IS '路由策略';
COMMENT ON COLUMN "scene_config"."executor_timeout" IS '超时时间';
COMMENT ON COLUMN "scene_config"."create_dt" IS '创建时间';
COMMENT ON COLUMN "scene_config"."update_dt" IS '修改时间';
COMMENT ON TABLE "scene_config" IS '场景配置';

CREATE TABLE server_node
(
    id           BIGSERIAL PRIMARY KEY,
    group_name   VARCHAR(64)  NOT NULL,
    host_id      VARCHAR(64)  NOT NULL,
    host_ip      VARCHAR(64)  NOT NULL,
    context_path VARCHAR(256) NOT NULL DEFAULT '/',
    host_port    INT          NOT NULL,
    expire_at    TIMESTAMP    NOT NULL,
    node_type    SMALLINT     NOT NULL,
    ext_attrs VARCHAR(256) DEFAULT '',
    create_dt    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_host_id_host_ip" ON "server_node" ("host_id","host_ip");
CREATE INDEX "idx_expire_at_node_type" ON "server_node" ("expire_at","node_type");
COMMENT ON COLUMN "server_node"."id" IS '主键';
COMMENT ON COLUMN "server_node"."group_name" IS '组名称';
COMMENT ON COLUMN "server_node"."host_id" IS '主机id';
COMMENT ON COLUMN "server_node"."host_ip" IS '机器ip';
COMMENT ON COLUMN "server_node"."context_path" IS '客户端上下文路径 server.servlet.context-path';
COMMENT ON COLUMN "server_node"."host_port" IS '机器端口';
COMMENT ON COLUMN "server_node"."expire_at" IS '过期时间';
COMMENT ON COLUMN "server_node"."node_type" IS '节点类型 1、客户端 2、是服务端';
COMMENT ON COLUMN "server_node"."ext_attrs" IS '扩展字段';
COMMENT ON COLUMN "server_node"."create_dt" IS '创建时间';
COMMENT ON COLUMN "server_node"."update_dt" IS '修改时间';
COMMENT ON TABLE "server_node" IS '服务器节点';

CREATE TABLE distributed_lock
(
    id         BIGSERIAL PRIMARY KEY,
    name       VARCHAR(64)  NOT NULL,
    lock_until TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    locked_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    locked_by  VARCHAR(255) NOT NULL,
    create_dt  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE distributed_lock ADD CONSTRAINT uk_name UNIQUE (name);

COMMENT ON COLUMN "distributed_lock"."id" IS '主键';
COMMENT ON COLUMN "distributed_lock"."name" IS '锁名称';
COMMENT ON COLUMN "distributed_lock"."lock_until" IS '锁定时长';
COMMENT ON COLUMN "distributed_lock"."locked_at" IS '锁定时间';
COMMENT ON COLUMN "distributed_lock"."locked_by" IS '锁定者';
COMMENT ON COLUMN "distributed_lock"."create_dt" IS '创建时间';
COMMENT ON COLUMN "distributed_lock"."update_dt" IS '修改时间';
COMMENT ON TABLE "distributed_lock" IS '锁定表';


CREATE TABLE system_user
(
    id        BIGSERIAL PRIMARY KEY,
    username  VARCHAR(64)  NOT NULL,
    password  VARCHAR(128) NOT NULL,
    role      SMALLINT     NOT NULL DEFAULT 0,
    create_dt TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_username" ON "system_user" ("username");
COMMENT ON COLUMN "system_user"."id" IS '主键';
COMMENT ON COLUMN "system_user"."username" IS '账号';
COMMENT ON COLUMN "system_user"."password" IS '密码';
COMMENT ON COLUMN "system_user"."role" IS '角色：1-普通用户、2-管理员';
COMMENT ON COLUMN "system_user"."create_dt" IS '创建时间';
COMMENT ON COLUMN "system_user"."update_dt" IS '修改时间';
COMMENT ON TABLE "system_user" IS '系统用户表';

-- pwd: admin
INSERT INTO system_user (username, password, role)
VALUES ('admin', '465c194afb65670f38322df087f0a9bb225cc257e43eb4ac5a0c98ef5b3173ac', 2);

CREATE TABLE system_user_permission
(
    id             BIGSERIAL PRIMARY KEY,
    group_name     VARCHAR(64) NOT NULL,
    system_user_id BIGINT      NOT NULL,
    create_dt      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_group_name_system_user_id" ON "system_user_permission" ("group_name","system_user_id");
COMMENT ON COLUMN "system_user_permission"."id" IS '主键';
COMMENT ON COLUMN "system_user_permission"."group_name" IS '组名称';
COMMENT ON COLUMN "system_user_permission"."system_user_id" IS '系统用户id';
COMMENT ON COLUMN "system_user_permission"."create_dt" IS '创建时间';
COMMENT ON COLUMN "system_user_permission"."update_dt" IS '修改时间';
COMMENT ON TABLE "system_user_permission" IS '系统用户权限表';


CREATE TABLE sequence_alloc
(
    id         BIGSERIAL PRIMARY KEY,
    group_name VARCHAR(64) NOT NULL DEFAULT '',
    max_id     BIGINT      NOT NULL DEFAULT 1,
    step       INT         NOT NULL DEFAULT 100,
    update_dt  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "uk_group_name" ON "sequence_alloc" ("group_name");
COMMENT ON COLUMN "sequence_alloc"."id" IS '主键';
COMMENT ON COLUMN "sequence_alloc"."group_name" IS '组名称';
COMMENT ON COLUMN "sequence_alloc"."max_id" IS '最大id';
COMMENT ON COLUMN "sequence_alloc"."step" IS '步长';
COMMENT ON COLUMN "sequence_alloc"."update_dt" IS '更新时间';
COMMENT ON TABLE "sequence_alloc" IS '号段模式序号ID分配表';

-- 分布式调度DDL
CREATE TABLE job
(
    id               BIGSERIAL PRIMARY KEY,
    group_name       VARCHAR(64)  NOT NULL,
    job_name         VARCHAR(64)  NOT NULL,
    args_str         TEXT         NOT NULL,
    args_type        SMALLINT     NOT NULL DEFAULT 1,
    next_trigger_at  BIGINT       NOT NULL,
    job_status       SMALLINT     NOT NULL DEFAULT 1,
    task_type        SMALLINT     NOT NULL DEFAULT 1,
    route_key        SMALLINT     NOT NULL DEFAULT 4,
    executor_type    SMALLINT     NOT NULL DEFAULT 1,
    executor_info    VARCHAR(255)          DEFAULT NULL,
    trigger_type     SMALLINT     NOT NULL,
    trigger_interval VARCHAR(255) NOT NULL,
    block_strategy   SMALLINT     NOT NULL DEFAULT 1,
    executor_timeout INT          NOT NULL DEFAULT 0,
    max_retry_times  INT          NOT NULL DEFAULT 0,
    parallel_num     INT          NOT NULL DEFAULT 1,
    retry_interval   INT          NOT NULL DEFAULT 0,
    bucket_index     INT          NOT NULL DEFAULT 0,
    resident         SMALLINT     NOT NULL DEFAULT 0,
    description      VARCHAR(256) NOT NULL DEFAULT '',
    ext_attrs        VARCHAR(256)          DEFAULT NULL,
    create_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted          SMALLINT     NOT NULL DEFAULT 0
);

CREATE INDEX "idx_group_name_to_job" ON "job" ("group_name");
CREATE INDEX "idx_job_status_bucket_index_job" ON "job" ("job_status", "bucket_index");
CREATE INDEX "idx_create_dt_job" ON "job" ("create_dt");

COMMENT ON COLUMN "job"."id" IS '主键';
COMMENT ON COLUMN "job"."group_name" IS '组名称';
COMMENT ON COLUMN "job"."job_name" IS '名称';
COMMENT ON COLUMN "job"."args_str" IS '执行方法参数';
COMMENT ON COLUMN "job"."args_type" IS '参数类型';
COMMENT ON COLUMN "job"."next_trigger_at" IS '下次触发时间';
COMMENT ON COLUMN "job"."job_status" IS '重试状态 0、关闭、1、开启';
COMMENT ON COLUMN "job"."task_type" IS '任务类型 1、集群 2、广播 3、切片';
COMMENT ON COLUMN "job"."route_key" IS '路由策略';
COMMENT ON COLUMN "job"."executor_type" IS '执行器类型';
COMMENT ON COLUMN "job"."executor_info" IS '执行器名称';
COMMENT ON COLUMN "job"."trigger_type" IS '触发类型 1.CRON 表达式 2. 固定时间';
COMMENT ON COLUMN "job"."trigger_interval" IS '间隔时长';
COMMENT ON COLUMN "job"."block_strategy" IS '阻塞策略 1、丢弃 2、覆盖 3、并行';
COMMENT ON COLUMN "job"."executor_timeout" IS '任务执行超时时间，单位秒';
COMMENT ON COLUMN "job"."max_retry_times" IS '最大重试次数';
COMMENT ON COLUMN "job"."parallel_num" IS '并行数';
COMMENT ON COLUMN "job"."retry_interval" IS '更新重试间隔(s)';
COMMENT ON COLUMN "job"."bucket_index" IS 'bucket';
COMMENT ON COLUMN "job"."resident" IS '是否是常驻任务';
COMMENT ON COLUMN "job"."description" IS '描述';
COMMENT ON COLUMN "job"."ext_attrs" IS '扩展字段';
COMMENT ON COLUMN "job"."create_dt" IS '创建时间';
COMMENT ON COLUMN "job"."deleted" IS '逻辑删除 1、删除';
COMMENT ON COLUMN "job"."update_dt" IS '更新时间';
COMMENT ON TABLE "job" IS '任务信息';

CREATE TABLE job_log_message
(
    id            BIGSERIAL PRIMARY KEY,
    group_name    VARCHAR(64) NOT NULL,
    job_id        BIGINT      NOT NULL,
    task_batch_id BIGINT      NOT NULL,
    task_id       BIGINT      NOT NULL,
    message       TEXT        NOT NULL,
    ext_attrs     VARCHAR(256)         DEFAULT '',
    create_dt     TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "idx_group_name_to_job_log_message" ON "job_log_message" ("group_name");
CREATE INDEX "idx_task_batch_id_task_id_to_job_log_message" ON "job_log_message" ("task_batch_id", "task_id");
CREATE INDEX "idx_create_dt_to_job_log_message" ON "job_log_message" ("create_dt");
COMMENT ON COLUMN "job_log_message"."id" IS '主键';
COMMENT ON COLUMN "job_log_message"."group_name" IS '组名称';
COMMENT ON COLUMN "job_log_message"."job_id" IS '任务信息id';
COMMENT ON COLUMN "job_log_message"."task_batch_id" IS '任务批次id';
COMMENT ON COLUMN "job_log_message"."task_id" IS '调度任务id';
COMMENT ON COLUMN "job_log_message"."message" IS '调度信息';
COMMENT ON COLUMN "job_log_message"."create_dt" IS '创建时间';
COMMENT ON COLUMN "job_log_message"."ext_attrs" IS '扩展字段';
COMMENT ON TABLE "job_log_message" IS '调度日志';

CREATE TABLE job_task
(
    id             BIGSERIAL PRIMARY KEY,
    group_name     VARCHAR(64) NOT NULL,
    job_id         BIGINT      NOT NULL,
    task_batch_id  BIGINT      NOT NULL,
    parent_id      BIGINT      NOT NULL DEFAULT 0,
    task_status    SMALLINT    NOT NULL DEFAULT 0,
    retry_count    INT         NOT NULL DEFAULT 0,
    client_info    VARCHAR(128)         DEFAULT NULL,
    result_message TEXT        NOT NULL,
    args_str       TEXT        NOT NULL,
    args_type      SMALLINT    NOT NULL DEFAULT 1,
    ext_attrs      VARCHAR(256)         DEFAULT '',
    create_dt      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX "idx_group_name_to_job_task" ON "job_task" ("group_name");
CREATE INDEX "idx_task_batch_id_task_status_to_job_task" ON "job_task" ("task_batch_id", "task_status");
CREATE INDEX "idx_create_dt_to_job_task" ON "job_task" ("create_dt");
COMMENT ON COLUMN "job_task"."id" IS '主键';
COMMENT ON COLUMN "job_task"."group_name" IS '组名称';
COMMENT ON COLUMN "job_task"."job_id" IS '任务信息id';
COMMENT ON COLUMN "job_task"."task_batch_id" IS '任务批次id';
COMMENT ON COLUMN "job_task"."parent_id" IS '父执行器id';
COMMENT ON COLUMN "job_task"."task_status" IS '执行的状态 0、失败 1、成功';
COMMENT ON COLUMN "job_task"."retry_count" IS '重试次数';
COMMENT ON COLUMN "job_task"."client_info" IS '客户端地址 clientId#ip:port';
COMMENT ON COLUMN "job_task"."result_message" IS '调度信息';
COMMENT ON COLUMN "job_task"."args_str" IS '执行方法参数';
COMMENT ON COLUMN "job_task"."args_type" IS '参数类型';
COMMENT ON COLUMN "job_task"."create_dt" IS '创建时间';
COMMENT ON COLUMN "job_task"."update_dt" IS '创建时间';
COMMENT ON COLUMN "job_task"."ext_attrs" IS '扩展字段';
COMMENT ON TABLE "job_task" IS '任务实例';

CREATE TABLE job_task_batch
(
    id                BIGSERIAL PRIMARY KEY,
    group_name        VARCHAR(64) NOT NULL,
    job_id            BIGINT      NOT NULL,
    parent_id         VARCHAR(64) NOT NULL DEFAULT '',
    task_batch_status SMALLINT    NOT NULL DEFAULT 0,
    operation_reason  SMALLINT    NOT NULL DEFAULT 0,
    execution_at      BIGINT      NOT NULL DEFAULT 0,
    ext_attrs         VARCHAR(256)         DEFAULT '',
    deleted           SMALLINT    NOT NULL DEFAULT 0,
    create_dt         TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_dt         TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "idx_group_name_to_job_task_batch" ON "job_task_batch" ("group_name");
CREATE INDEX "idx_job_id_task_batch_status_to_job_task_batch" ON "job_task_batch" ("job_id", "task_batch_status");
CREATE INDEX "idx_create_dt_to_job_task_batch" ON "job_task_batch" ("create_dt");
COMMENT ON COLUMN "job_task_batch"."id" IS '主键';
COMMENT ON COLUMN "job_task_batch"."group_name" IS '组名称';
COMMENT ON COLUMN "job_task_batch"."job_id" IS '任务信息id';
COMMENT ON COLUMN "job_task_batch"."task_batch_status" IS '任务批次状态 0、失败 1、成功';
COMMENT ON COLUMN "job_task_batch"."operation_reason" IS '操作原因';
COMMENT ON COLUMN "job_task_batch"."execution_at" IS '任务执行时间';
COMMENT ON COLUMN "job_task_batch"."parent_id" IS '父节点';
COMMENT ON COLUMN "job_task_batch"."deleted" IS '逻辑删除 1、删除';
COMMENT ON COLUMN "job_task_batch"."create_dt" IS '创建时间';
COMMENT ON COLUMN "job_task_batch"."update_dt" IS '创建时间';
COMMENT ON COLUMN "job_task_batch"."ext_attrs" IS '扩展字段';
COMMENT ON TABLE "job_task" IS '任务批次';
