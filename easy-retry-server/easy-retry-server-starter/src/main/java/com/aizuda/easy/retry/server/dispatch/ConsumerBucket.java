package com.aizuda.easy.retry.server.dispatch;

import lombok.Data;

import java.util.Set;

/**
 * @author www.byteblogs.com
 * @date 2023-09-21 23:30:22
 * @since 2.4.0
 */
@Data
public class ConsumerBucket {

   private Set<Integer> buckets;
}
