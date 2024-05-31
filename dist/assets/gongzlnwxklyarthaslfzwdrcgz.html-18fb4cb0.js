const e=JSON.parse('{"key":"v-4e9743e5","path":"/nice-article/juejin/gongzlnwxklyarthaslfzwdrcgz.html","title":"工作六年，我学会了用 Arthas 来辅助我的日常工作","lang":"zh-CN","frontmatter":{"title":"工作六年，我学会了用 Arthas 来辅助我的日常工作","shortTitle":"工作六年，我学会了用 Arthas 来辅助我的日常工作","description":"如何通过 arthas 来解决日常工作中的疑难问题，如何通过 arthas 处理工作以前需要 debug，需要打印日志才能找的 bug。 集合案例来谈谈如何使用 arthas 这些命令。","tag":["优质文章"],"author":"uzong","category":["掘金社区"],"head":[["meta",{"name":"keywords","content":"Java"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/juejin/gongzlnwxklyarthaslfzwdrcgz.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"工作六年，我学会了用 Arthas 来辅助我的日常工作"}],["meta",{"property":"og:description","content":"如何通过 arthas 来解决日常工作中的疑难问题，如何通过 arthas 处理工作以前需要 debug，需要打印日志才能找的 bug。 集合案例来谈谈如何使用 arthas 这些命令。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-16T11:39:30.000Z"}],["meta",{"property":"article:author","content":"uzong"}],["meta",{"property":"article:tag","content":"优质文章"}],["meta",{"property":"article:modified_time","content":"2024-01-16T11:39:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工作六年，我学会了用 Arthas 来辅助我的日常工作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-16T11:39:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"uzong\\"}]}"]]},"headers":[{"level":2,"title":"工作六年，我学会了用 Arthas 来辅助我的日常工作","slug":"工作六年-我学会了用-arthas-来辅助我的日常工作","link":"#工作六年-我学会了用-arthas-来辅助我的日常工作","children":[]},{"level":2,"title":"📆 那些辛酸的过往","slug":"📆-那些辛酸的过往","link":"#📆-那些辛酸的过往","children":[]},{"level":2,"title":"📕一、通过命令执行方法--vmtool","slug":"📕一、通过命令执行方法-vmtool","link":"#📕一、通过命令执行方法-vmtool","children":[]},{"level":2,"title":"🖥️二、热部署 # redefine && retransform","slug":"🖥️二、热部署-redefine-retransform","link":"#🖥️二、热部署-redefine-retransform","children":[]},{"level":2,"title":"📑三、OGNL && 条件过滤","slug":"📑三、ognl-条件过滤","link":"#📑三、ognl-条件过滤","children":[]},{"level":2,"title":"🔖 四、其他命令汇总","slug":"🔖-四、其他命令汇总","link":"#🔖-四、其他命令汇总","children":[]},{"level":2,"title":"📌五、一些限制 && 注意事项","slug":"📌五、一些限制-注意事项","link":"#📌五、一些限制-注意事项","children":[]},{"level":2,"title":"📇六、好文推荐","slug":"📇六、好文推荐","link":"#📇六、好文推荐","children":[]},{"level":2,"title":"🧣七、最后的话","slug":"🧣七、最后的话","link":"#🧣七、最后的话","children":[]}],"git":{"createdTime":1705287817000,"updatedTime":1705405170000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":11.15,"words":3346},"filePathRelative":"nice-article/juejin/gongzlnwxklyarthaslfzwdrcgz.md","localizedDate":"2024年1月15日","excerpt":"<h2> 工作六年，我学会了用 Arthas 来辅助我的日常工作</h2>\\n<p><em>很久就想写一篇介绍 Arthas 的文章，虽然 Arthas 已有大量文章介绍；但我依然想结合我的实际工作，来聊聊这款我喜爱的 Java 监控诊断产品。</em></p>\\n<blockquote>\\n<p>🔊一位 Java 开发者的使用总结，只谈使用经验，不聊原理。</p>\\n</blockquote>\\n<h2> 📆 那些辛酸的过往</h2>\\n<p><strong><em>历历在目的场景</em>🥹</strong>(❁´◡<code>❁)(❁´◡</code>❁)</p>\\n<ul>\\n<li>客户线上问题，应该如何复现，让客户再点一下吗？</li>\\n<li>异常被吃掉，手足无措，看是哪个家伙写的，竟然是自己！</li>\\n<li>排查别人线上的 bug，不仅代码还没看懂，还没一行日志，捏了一把汗！</li>\\n<li>预发 debug，稍微时间长点，群里就怨声载道！</li>\\n<li>加日志重新部署，半个小时就没了，问题还没有找到，头顶的灯却早已照亮了整层楼......</li>\\n<li>线上机器不能 debug，也不能开 debug 端口，重新部署会不会破坏现场呢?</li>\\n<li>怀疑入参有问题，怀疑合并代码有问题，怀疑没有部署成功，全是问号......</li>\\n<li>一个问题排查一天，被 Diss 排查问题慢......</li>\\n</ul>"}');export{e as data};
