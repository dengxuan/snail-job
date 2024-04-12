package com.aizuda.easy.retry.server.web.service.convert;

import com.aizuda.easy.retry.server.web.model.request.SceneConfigRequestVO;
import com.aizuda.easy.retry.template.datasource.persistence.po.SceneConfig;
import com.aizuda.easy.retry.server.web.model.request.GroupConfigRequestVO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * @author: opensnail
 * @date : 2021-11-26 13:49
 */
@Mapper
public interface SceneConfigConverter {

    SceneConfigConverter INSTANCE = Mappers.getMapper(SceneConfigConverter.class);

    SceneConfig toSceneConfigRequestVO(SceneConfigRequestVO requestVO);

}
