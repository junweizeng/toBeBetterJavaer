import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as g,a as e,d as a,b as r,e as c}from"./app-72970f25.js";const p={},b=e("p",null,"作为一名开发者，免不了要和数据库打交道，于是我们就需要一款顺手的数据库管理工具。很长一段时间里，Navicat 都是我的首选，但最近更换了一台新电脑，之前的绿色安装包找不到了。",-1),s=e("p",null,"于是就琢磨着，找一款免费的，功能和 Navicat 有一拼的数据库管理工具来替代。好朋友 macrozheng 给我推荐了 DBeaver，试用完后体验真心不错，于是就来给大家安利一波。",-1),d=e("h2",{id:"一、关于-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、关于-dbeaver","aria-hidden":"true"},"#"),a(" 一、关于 DBeaver")],-1),l=e("p",null,"DBeaver 是一个跨平台的数据库管理工具，支持 Windows、Linux 和 macOS。它有两个版本，企业版和社区版，对于个人开发者来说，社区版的功能已经足够强大。",-1),v={href:"https://github.com/dbeaver/dbeaver/blob/devel/LICENSE.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dbeaver/dbeaver",target:"_blank",rel:"noopener noreferrer"},u=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-1.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("p",null,"DBeaver 支持几乎所有主流的数据库，包括关系型数据库和非关系数据库。",-1),h=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-2.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),j=e("h2",{id:"二、安装-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、安装-dbeaver","aria-hidden":"true"},"#"),a(" 二、安装 DBeaver")],-1),_=e("p",null,"可以通过 DBeaver 官方下载安装包，也可以通过 GitHub 下载 release 版本。",-1),D={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},B=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-3.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),x=e("p",null,"根据自己电脑的操作系统下载对应的安装包，完整安装后，第一步要做的是配置 Maven 镜像，否则在后续下载数据库驱动的时候会非常的慢。",-1),y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-4.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),z={href:"https://github.com/itwanger/toBeBetterJavaer/blob/master/docs/maven/maven.md",target:"_blank",rel:"noopener noreferrer"},k={href:"http://maven.aliyun.com/nexus/content/groups/public",target:"_blank",rel:"noopener noreferrer"},L=c('<p>和配置 Maven 镜像一样，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置完成后，记得把阿里云镜像仓库置顶。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、管理数据源" tabindex="-1"><a class="header-anchor" href="#三、管理数据源" aria-hidden="true">#</a> 三、管理数据源</h2><p>像使用 Navicat 一样，我们需要先建立连接，这里就以 MySQL 为例。点击「连接」小图标，选择数据库。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击下一步，这时候需要填写数据库连接信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「测试链接」，如果使用默认的 Maven 仓库时，下载驱动会非常慢，如下图所示，还容易失败「踩过的坑就不要再踩了」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你前面按照我说的配置了阿里云的 Maven 镜像，程序就不一样了，点了「测试链接」，瞬间会弹出「连接已成功」的提示框。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>链接成功后，就可以看到数据库中的表啊、视图啊、索引啊等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四、管理表" tabindex="-1"><a class="header-anchor" href="#四、管理表" aria-hidden="true">#</a> 四、管理表</h2><p>数据库连接成功后，最重要的还是操作表。</p><p><strong>01、查看表</strong></p><p>选择一张表，双击后就可以看到表的属性了，可以查看表的列、约束（主键）、外键、索引等等信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「DDL（Data Definition Language，数据定义语言）」可以看到详细的建表语句。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「数据」可以查看表的数据，底部有「新增」、「修改」、「删除」等行操作按钮。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以在顶部的过滤框中填写筛选条件，然后直接查询结果。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果不想显示某一列的话，可以直接点击「自定义结果集」图表，将某个字段的状态设置为不可见即可。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>02、新增表</strong></p><p>在左侧选择「表」，然后右键选择「新建表」即可建表id。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后在右侧列的区域右键，选择「新建列」即可添加字段。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比如说我们新建一个主键 ID，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 DBeaver 中，<code>[v]</code> 表示真，<code>[]</code> 表示否。紧接着在「约束」里选择 ID 将其设置为主键。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最后点击保存，会弹出一个建表语句的预览框，点击「执行」即可完成表的创建。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="五、执行-sql" tabindex="-1"><a class="header-anchor" href="#五、执行-sql" aria-hidden="true">#</a> 五、执行 SQL</h2><p>右键数据库表，选择右键菜单中的「SQL 编辑器」可以打开 SQL 编辑面板。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后编辑 SQL 语句，点击运行的小图标就可以查询数据了。这个过程会有语法提示，非常 nice。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DBeaver 有一个很亮眼的操作就是，可以直接选中一条结果集，然后右键生成 SQL。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比如说 insert 语句，这样再插入一条重复性内容的时候就非常方便了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="六、外观配置" tabindex="-1"><a class="header-anchor" href="#六、外观配置" aria-hidden="true">#</a> 六、外观配置</h2><p>可以在首选项里对外观进行设置，比如说把主题修改为暗黑色。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后界面就变成了暗黑系。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还可以设置字体大小等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从整体的风格来看，DBeaver 和 Eclipse 有些类似，事实上也的确如此，DBeaver 是基于 Eclipse 平台构建的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/DBeaver-29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="七、总结" tabindex="-1"><a class="header-anchor" href="#七、总结" aria-hidden="true">#</a> 七、总结</h2><p>总体来说，DBeaver是一款非常优秀的开源数据库管理工具了，功能很全面，日常的开发基本上是够用了。对比收费的 Navicat 和 DataGrip，可以说非常良心了。大家如果遇到收费版不能使用的时候，可以来体验一下社区版 DBeaver。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',60);function N(S,M){const t=n("ExternalLinkIcon");return o(),g("div",null,[b,s,d,l,e("p",null,[a("DBeaver 是由 Java 编写的，默认使用 JDK 11 进行编译。社区版基于 "),e("a",v,[a("Apache-2.0 License"),r(t)]),a(" 在 GitHub 上开源，目前已获得 24k+ 的星标。")]),e("blockquote",null,[e("p",null,[e("a",f,[a("https://github.com/dbeaver/dbeaver"),r(t)])])]),u,m,h,j,_,e("blockquote",null,[e("p",null,[a("官方下载地址："),e("a",D,[a("https://dbeaver.io/download/"),r(t)])])]),B,x,y,e("p",null,[a("因为 DBeaver 是基于 "),e("a",z,[a("Maven 构建"),r(t)]),a("的，数据库驱动也就是链接数据库的 JDBC 驱动是通过 Maven 仓库下载的。选择「首选项」→「Maven」，添加阿里云镜像地址：")]),e("blockquote",null,[e("p",null,[e("a",k,[a("http://maven.aliyun.com/nexus/content/groups/public"),r(t)])])]),L])}const q=i(p,[["render",N],["__file","DBeaver.html.vue"]]);export{q as default};
