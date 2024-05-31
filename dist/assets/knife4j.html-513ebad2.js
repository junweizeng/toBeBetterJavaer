import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,d as a,b as t,e}from"./app-72970f25.js";const l={},u={href:"https://javabetter.cn/springboot/swagger.html",target:"_blank",rel:"noopener noreferrer"},r=e('<p>但随着系统功能的不断增加，接口数量的爆炸式增长，Swagger 的使用体验就会变得越来越差，比如请求参数为 JSON 的时候没办法格式化，返回结果没办法折叠，还有就是没有提供搜索功能。</p><p>今天我们介绍的主角 Knife4j 弥补了这些不足，赋予了 Swagger 更强的生命力和表现力。</p><h2 id="关于-knife4j" tabindex="-1"><a class="header-anchor" href="#关于-knife4j" aria-hidden="true">#</a> 关于 Knife4j</h2><p>Knife4j 的前身是 swagger-bootstrap-ui，是 springfox-swagger-ui 的增强 UI 实现。swagger-bootstrap-ui 采用的是前端 UI 混合后端 Java 代码的打包方式，在微服务的场景下显得非常臃肿，改良后的 Knife4j 更加小巧、轻量，并且功能更加强大。</p><p>springfox-swagger-ui 的界面长这个样子，说实话，确实略显丑陋。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>swagger-bootstrap-ui 增强后的样子长下面这样。单纯从直观体验上来看，确实增强了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那改良后的 Knife4j 不仅在界面上更加优雅、炫酷，功能上也更加强大：后端 Java 代码和前端 UI 模块分离了出来，在微服务场景下更加灵活；还提供了专注于 Swagger 的增强解决方案。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>官方文档：</p>',11),d={href:"https://doc.xiaominfo.com/knife4j/documentation/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"码云地址：",-1),g={href:"https://gitee.com/xiaoym/knife4j",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"示例地址：",-1),b={href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="整合-knife4j" tabindex="-1"><a class="header-anchor" href="#整合-knife4j" aria-hidden="true">#</a> 整合 Knife4j</h2><p>Knife4j 完全遵循了 Swagger 的使用方式，所以可以无缝切换。</p><p>第一步，在 pom.xml 文件中添加 Knife4j 的依赖（<strong>不需要再引入 springfox-boot-starter</strong>了，因为 Knife4j 的 starter 里面已经加入过了）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.github.xiaoymin&lt;/groupId&gt;
    &lt;artifactId&gt;knife4j-spring-boot-starter&lt;/artifactId&gt;
    &lt;!--在引用时请在maven中央仓库搜索3.X最新版本号--&gt;
    &lt;version&gt;3.0.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，配置类 SwaggerConfig 还是 Swagger 时期原来的配方。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableOpenApi</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Docket</span> docket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">OAS_30</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//apis： 添加swagger接口提取范围</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;top.codingmore.controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> docket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;编程猫实战项目笔记&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;编程喵是一个 Spring Boot+Vue 的前后端分离项目&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">contact</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://codingmore.top&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;www.qing_gee@163.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;v1.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，新建测试控制器类 Knife4jController.java：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>tags <span class="token operator">=</span> <span class="token string">&quot;测试 Knife4j&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/knife4j&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Knife4jController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;沉默王二又帅又丑&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f={href:"https://javabetter.cn/springboot/swagger.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>先在 application.yml 文件中加入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  mvc:
    path match:
      matching-strategy: ANT_PATH_MATCHER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再在 SwaggerConfig.java 中添加：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BeanPostProcessor</span> <span class="token function">springfoxHandlerProviderBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessAfterInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">WebMvcRequestHandlerProvider</span> <span class="token operator">||</span> bean <span class="token keyword">instanceof</span> <span class="token class-name">WebFluxRequestHandlerProvider</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">customizeSpringfoxHandlerMappings</span><span class="token punctuation">(</span><span class="token function">getHandlerMappings</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">private</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">RequestMappingInfoHandlerMapping</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">customizeSpringfoxHandlerMappings</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> mappings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> copy <span class="token operator">=</span> mappings<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>mapping <span class="token operator">-&gt;</span> mapping<span class="token punctuation">.</span><span class="token function">getPatternParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mappings<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mappings<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RequestMappingInfoHandlerMapping</span><span class="token punctuation">&gt;</span></span> <span class="token function">getHandlerMappings</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Field</span> field <span class="token operator">=</span> <span class="token class-name">ReflectionUtils</span><span class="token punctuation">.</span><span class="token function">findField</span><span class="token punctuation">(</span>bean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;handlerMappings&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RequestMappingInfoHandlerMapping</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> field<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span> <span class="token operator">|</span> <span class="token class-name">IllegalAccessException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上步骤均完成后，开始下一步，否则要么项目启动的时候报错，要么在文档中看不到测试的文档接口。</p><p>第五步，运行 Spring Boot 项目，浏览器地址栏输入以下地址访问 API 文档，查看效果。</p>`,6),j={href:"http://localhost:8080/doc.html",target:"_blank",rel:"noopener noreferrer"},_=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-0a9eb2b1-bace-4f47-ace9-8a5f9f280279.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),w=n("p",null,"是不是比 Swagger 简洁大方多了？如果想测试接口的话，可以直接点击接口，然后点击「测试」，点击发送就可以看到返回结果了。",-1),y=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-16b1b553-1667-4222-9f29-2e5dfc8917a0.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),x=n("h2",{id:"knife4j-的功能特点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#knife4j-的功能特点","aria-hidden":"true"},"#"),a(" Knife4j 的功能特点")],-1),q={href:"http://localhost:9002/doc.html",target:"_blank",rel:"noopener noreferrer"},S=e('<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-3cfbf598-b94a-4081-aab3-06af1eef612c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>简单来介绍下 Knife4j 的 功能特点：</p><p><strong>1）支持登录认证</strong></p><p>Knife4j 和 Swagger 一样，也是支持头部登录认证的，点击「authorize」菜单，添加登录后的信息即可保持登录认证的 token。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果某个 API 需要登录认证的话，就会把之前填写的信息带过来。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>2）支持 JSON 折叠</strong></p><p>Swagger 是不支持 JSON 折叠的，当返回的信息非常多的时候，界面就会显得非常的臃肿。Knife4j 则不同，可以对返回的 JSON 节点进行折叠。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>3）离线文档</strong></p><p>Knife4j 支持把 API 文档导出为离线文档（支持 markdown 格式、HTML 格式、Word 格式），</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用 Typora 打开后的样子如下，非常的大方美观。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>4）全局参数</strong></p><p>当某些请求需要全局参数时，这个功能就很实用了，Knife4j 支持 header 和 query 两种方式。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后进行请求的时候，就会把这个全局参数带过去。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>5）搜索 API 接口</strong></p><p>Swagger 是没有搜索功能的，当要测试的接口有很多的时候，当需要去找某一个 API 的时候就傻眼了，只能一个个去拖动滚动条去找。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在文档的右上角，Knife4j 提供了文档搜索功能，输入要查询的关键字，就可以检索筛选了，是不是很方便？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>目前支持搜索接口的地址、名称和描述。</p><h2 id="尾声" tabindex="-1"><a class="header-anchor" href="#尾声" aria-hidden="true">#</a> 尾声</h2><p>除了我上面提到的增强功能，Knife4j 还提供了很多实用的功能，大家可以通过官网的介绍一一尝试下，生产效率会提高不少。</p>',28),I={href:"https://doc.xiaominfo.com/knife4j/documentation/enhance.html",target:"_blank",rel:"noopener noreferrer"},z=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/knife4j-15.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),P=n("hr",null,null,-1),K={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"编程喵",-1),M=n("hr",null,null,-1),B=n("h2",{id:"源码路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码路径","aria-hidden":"true"},"#"),a(" 源码路径")],-1),H={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-knife4j",target:"_blank",rel:"noopener noreferrer"},O=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function R(T,N){const s=o("ExternalLinkIcon");return i(),c("div",null,[n("p",null,[a("一般在使用 Spring Boot 开发前后端分离项目的时候，都会用到 "),n("a",u,[a("Swagger"),t(s)]),a("（戳链接详细了解）。")]),r,n("blockquote",null,[n("p",null,[n("a",d,[a("https://doc.xiaominfo.com/knife4j/documentation/"),t(s)])])]),k,n("blockquote",null,[n("p",null,[n("a",g,[a("https://gitee.com/xiaoym/knife4j"),t(s)])])]),m,n("blockquote",null,[n("p",null,[n("a",b,[a("https://gitee.com/xiaoym/swagger-bootstrap-ui-demo"),t(s)])])]),v,n("p",null,[a("第四步，由于 springfox 3.0.x 版本 和 Spring Boot 2.6.x 版本有冲突，所以还需要先解决这个 bug，一共分两步（在"),n("a",f,[a("Swagger"),t(s)]),a(" 那篇已经解释过了，这里不再赘述，但防止有小伙伴在学习的时候再次跳坑，这里就重复一下步骤）。")]),h,n("blockquote",null,[n("p",null,[a("访问地址（和 Swagger 不同）："),n("a",j,[a("http://localhost:8080/doc.html"),t(s)])])]),_,w,y,x,n("p",null,[a("编程喵🐱实战项目中已经整合好了 Knife4j，在本地跑起来后，就可以查看所有 API 接口了。编程喵中的管理端（codingmore-admin）端口为 9002，启动服务后，在浏览器中输入 "),n("a",q,[a("http://localhost:9002/doc.html"),t(s)]),a(" 就可以访问到了。")]),S,n("blockquote",null,[n("p",null,[n("a",I,[a("https://doc.xiaominfo.com/knife4j/documentation/enhance.html"),t(s)])])]),z,P,n("p",null,[a("更多内容，只针对《二哥的Java进阶之路》星球用户开放，需要的小伙伴可以"),n("a",K,[a("戳链接🔗"),t(s)]),a("加入我们的星球，一起学习，一起卷。。"),A,a("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),M,B,n("blockquote",null,[n("ul",null,[n("li",null,[a("编程喵："),n("a",H,[a("https://github.com/itwanger/coding-more"),t(s)])]),n("li",null,[a("codingmore-knife4j："),n("a",C,[a("https://github.com/itwanger/codingmore-learning"),t(s)])])])]),O])}const J=p(l,[["render",R],["__file","knife4j.html.vue"]]);export{J as default};
