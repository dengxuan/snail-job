package com.aizuda.snailjob.client.common;

import com.aizuda.snailjob.client.common.rpc.supports.scan.EndPointInfo;
import com.aizuda.snailjob.client.common.rpc.supports.scan.EndPointInfo;

import java.util.List;

/**
 *
 * @author: opensnail
 * @date : 2024-04-11 22:34
 */
public interface Scanner {

	List<EndPointInfo> doScan();
}
