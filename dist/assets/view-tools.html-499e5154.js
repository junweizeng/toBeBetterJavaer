const e=JSON.parse('{"key":"v-b0679202","path":"/jvm/view-tools.html","title":"JVM 性能监控工具之可视化篇","lang":"zh-CN","frontmatter":{"title":"JVM 性能监控工具之可视化篇","shortTitle":"JVM 性能监控之可视化篇","category":["Java核心"],"tag":["Java虚拟机"],"description":"本篇我们介绍了一些可视化的性能监控工具，包括 JConsole、VisualVM、Java Mission Control 等，阿里的 Arthas 我们留到后面单独去讲。","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,性能监控,可视化工具,JConsole,VisualVM,Java Mission Control"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/view-tools.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"JVM 性能监控工具之可视化篇"}],["meta",{"property":"og:description","content":"本篇我们介绍了一些可视化的性能监控工具，包括 JConsole、VisualVM、Java Mission Control 等，阿里的 Arthas 我们留到后面单独去讲。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:30:35.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:30:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM 性能监控工具之可视化篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:30:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"JConsole","slug":"jconsole","link":"#jconsole","children":[{"level":3,"title":"JConsole 连接 Java 程序","slug":"jconsole-连接-java-程序","link":"#jconsole-连接-java-程序","children":[]},{"level":3,"title":"Java 程序概况","slug":"java-程序概况","link":"#java-程序概况","children":[]},{"level":3,"title":"内存监控","slug":"内存监控","link":"#内存监控","children":[]},{"level":3,"title":"线程监控","slug":"线程监控","link":"#线程监控","children":[]},{"level":3,"title":"类加载情况","slug":"类加载情况","link":"#类加载情况","children":[]},{"level":3,"title":"VM 概要","slug":"vm-概要","link":"#vm-概要","children":[]}]},{"level":2,"title":"VisualVM","slug":"visualvm","link":"#visualvm","children":[{"level":3,"title":"VisualVM 安装插件","slug":"visualvm-安装插件","link":"#visualvm-安装插件","children":[]},{"level":3,"title":"生成、浏览堆转储快照","slug":"生成、浏览堆转储快照","link":"#生成、浏览堆转储快照","children":[]},{"level":3,"title":"分析程序性能","slug":"分析程序性能","link":"#分析程序性能","children":[]}]},{"level":2,"title":"Java Mission Control","slug":"java-mission-control","link":"#java-mission-control","children":[{"level":3,"title":"MBean Server","slug":"mbean-server","link":"#mbean-server","children":[]},{"level":3,"title":"飞行记录器（Flight Recorder）","slug":"飞行记录器-flight-recorder","link":"#飞行记录器-flight-recorder","children":[]}]},{"level":2,"title":"第三方工具","slug":"第三方工具","link":"#第三方工具","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1704710205000,"updatedTime":1713511835000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.81,"words":2943},"filePathRelative":"jvm/view-tools.md","localizedDate":"2024年1月8日","excerpt":"<h1> 第十五节：JVM 性能监控之可视化篇</h1>\\n<p>前面我们已经讲了 <a href=\\"https://javabetter.cn/jvm/console-tools.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JVM 性能监控工具之命令行篇</a>，本篇我们来介绍一些可视化的性能监控工具，包括 JConsole、VisualVM、Java Mission Control 等，阿里的 Arthas 我们留到后面单独去讲。</p>\\n<p>可视化工具比命令行工具强大的地方就在于这些工具提供了更直观、更易于理解的性能数据视图，肉眼看上去，脑子就能快速 get 到问题所在，那这篇就来带大家看看这些工具的强大之处。</p>"}');export{e as data};
