package com.aizuda.easy.retry.common.log;

import cn.hutool.core.io.resource.ResourceUtil;
import cn.hutool.core.lang.caller.CallerUtil;
import cn.hutool.core.map.SafeConcurrentHashMap;
import cn.hutool.core.util.ServiceLoaderUtil;
import com.aizuda.easy.retry.common.log.dialect.console.ConsoleLogFactory;
import com.aizuda.easy.retry.common.log.dialect.jdk.JdkLogFactory;

import java.net.URL;
import java.util.Map;

/**
 * 日志工厂类
 *
 * @author wodeyangzipingpingwuqi
 */
public abstract class LogFactory {

    /**
     * 日志框架名，用于打印当前所用日志框架
     */
    protected String name;
    /**
     * 日志对象缓存
     */
    private final Map<Object, com.aizuda.easy.retry.common.log.Log> logCache;

    /**
     * 构造
     *
     * @param name 日志框架名
     */
    public LogFactory(String name) {
        this.name = name;
        logCache = new SafeConcurrentHashMap<>();
    }

    /**
     * 获取日志框架名，用于打印当前所用日志框架
     *
     * @return 日志框架名
     * @since 4.1.21
     */
    public String getName() {
        return this.name;
    }

    /**
     * 获得日志对象
     *
     * @param name 日志对象名
     * @return 日志对象
     */
    public com.aizuda.easy.retry.common.log.Log getLog(String name) {
        return logCache.computeIfAbsent(name, o -> createLog((String) o));
    }

    /**
     * 获得日志对象
     *
     * @param clazz 日志对应类
     * @return 日志对象
     */
    public com.aizuda.easy.retry.common.log.Log getLog(Class<?> clazz) {
        return logCache.computeIfAbsent(clazz, o -> createLog((Class<?>) o));
    }

    /**
     * 创建日志对象
     *
     * @param name 日志对象名
     * @return 日志对象
     */
    public abstract com.aizuda.easy.retry.common.log.Log createLog(String name);

    /**
     * 创建日志对象
     *
     * @param clazz 日志对应类
     * @return 日志对象
     */
    public abstract com.aizuda.easy.retry.common.log.Log createLog(Class<?> clazz);

    /**
     * 检查日志实现是否存在<br>
     * 此方法仅用于检查所提供的日志相关类是否存在，当传入的日志类类不存在时抛出ClassNotFoundException<br>
     * 此方法的作用是在detectLogFactory方法自动检测所用日志时，如果实现类不存在，调用此方法会自动抛出异常，从而切换到下一种日志的检测。
     *
     * @param logClassName 日志实现相关类
     */
    protected void checkLogExist(Class<?> logClassName) {
        // 不做任何操作
    }

    // ------------------------------------------------------------------------- Static start

    /**
     * @return 当前使用的日志工厂
     */
    public static LogFactory getCurrentLogFactory() {
        return com.aizuda.easy.retry.common.log.GlobalLogFactory.get();
    }

    /**
     * 自定义日志实现
     *
     * @param logFactoryClass 日志工厂类
     * @return 自定义的日志工厂类
     */
    public static LogFactory setCurrentLogFactory(Class<? extends LogFactory> logFactoryClass) {
        return com.aizuda.easy.retry.common.log.GlobalLogFactory.set(logFactoryClass);
    }

    /**
     * 自定义日志实现
     *
     * @param logFactory 日志工厂类对象
     * @return 自定义的日志工厂类
     */
    public static LogFactory setCurrentLogFactory(LogFactory logFactory) {
        return com.aizuda.easy.retry.common.log.GlobalLogFactory.set(logFactory);
    }

    /**
     * 获得日志对象
     *
     * @param name 日志对象名
     * @return 日志对象
     */
    public static com.aizuda.easy.retry.common.log.Log get(String name) {
        return getCurrentLogFactory().getLog(name);
    }

    /**
     * 获得日志对象
     *
     * @param clazz 日志对应类
     * @return 日志对象
     */
    public static com.aizuda.easy.retry.common.log.Log get(Class<?> clazz) {
        return getCurrentLogFactory().getLog(clazz);
    }

    /**
     * @return 获得调用者的日志
     */
    public static com.aizuda.easy.retry.common.log.Log get() {
        return get(CallerUtil.getCallerCaller());
    }

    /**
     * 决定日志实现
     * <p>
     * 依次按照顺序检查日志库的jar是否被引入，如果未引入任何日志库，则检查ClassPath下的logging.properties，存在则使用JdkLogFactory，否则使用ConsoleLogFactory
     *
     * @return 日志实现类
     */
    public static LogFactory create() {
        final LogFactory factory = doCreate();
        //factory.getLog(LogFactory.class).debug("Use [{}] Logger As Default.", factory.name);
        factory.getLog(LogFactory.class);
        return factory;
    }

    /**
     * 决定日志实现
     * <p>
     * 依次按照顺序检查日志库的jar是否被引入，如果未引入任何日志库，则检查ClassPath下的logging.properties，存在则使用JdkLogFactory，否则使用ConsoleLogFactory
     *
     * @return 日志实现类
     */
    private static LogFactory doCreate() {
        final LogFactory factory = ServiceLoaderUtil.loadFirstAvailable(LogFactory.class);
        if (null != factory) {
            return factory;
        }

        // 未找到任何可支持的日志库时判断依据：当JDK Logging的配置文件位于classpath中，使用JDK Logging，否则使用Console
        final URL url = ResourceUtil.getResource("logging.properties");
        return (null != url) ? new JdkLogFactory() : new ConsoleLogFactory();
    }
    // ------------------------------------------------------------------------- Static end

    public static final Throwable extractThrowable(Object... arguments) {
        if (arguments == null || arguments.length == 0) {
            return null;
        }

        final Object lastEntry = arguments[arguments.length - 1];
        if (lastEntry instanceof Throwable) {
            return (Throwable) lastEntry;
        }
        return null;
    }
}
