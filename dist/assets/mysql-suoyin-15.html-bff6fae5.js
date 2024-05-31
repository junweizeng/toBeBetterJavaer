import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as e,d as i,b as n,e as r}from"./app-72970f25.js";const t={},s=r(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>大家好，我是<strong>田螺</strong>。</p><p>金三银四很快就要来啦，准备了索引的15连问，相信大家看完肯定会有帮助的。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-561417b5-d542-4494-9483-6124a0331a2f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1-索引是什么" tabindex="-1"><a class="header-anchor" href="#_1-索引是什么" aria-hidden="true">#</a> 1. 索引是什么？</h2><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-60177b59-879d-4ee9-9425-e13e79a1eac2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>索引是一种能提高数据库查询效率的数据结构。它可以比作一本字典的目录，可以帮你快速找到对应的记录。</li><li>索引一般存储在磁盘的文件中，它是占用物理空间的。</li><li>正所谓水能载舟，也能覆舟。适当的索引能提高查询效率，过多的索引会影响数据库表的插入和更新功能。</li></ul><h2 id="_2-mysql索引有哪些类型" tabindex="-1"><a class="header-anchor" href="#_2-mysql索引有哪些类型" aria-hidden="true">#</a> 2. MySQL索引有哪些类型</h2><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-7be424ca-9043-4cf4-bd4e-084d2a2ad1aa.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>数据结构维度</strong></p><ul><li>B+树索引：所有数据存储在叶子节点，复杂度为<code>O(logn)</code>，适合范围查询。</li><li>哈希索引: 适合等值查询，检索效率高，一次到位。</li><li>全文索引：<code>MyISAM</code>和<code>InnoDB</code>中都支持使用全文索引，一般在文本类型<code>char,text,varchar</code>类型上创建。</li><li><code>R-Tree</code>索引: 用来对<code>GIS</code>数据类型创建<code>SPATIAL</code>索引</li></ul><p><strong>物理存储维度</strong></p><ul><li>聚集索引：聚集索引就是以主键创建的索引，在叶子节点存储的是表中的数据。（<code>Innodb</code>存储引擎）</li><li>非聚集索引：非聚集索引就是以非主键创建的索引，在叶子节点存储的是主键和索引列。（<code>Innodb</code>存储引擎）</li></ul><p><strong>逻辑维度</strong></p><ul><li>主键索引：一种特殊的唯一索引，不允许有空值。</li><li>普通索引：<code>MySQL中</code>基本索引类型，允许空值和重复值。</li><li>联合索引：多个字段创建的索引，使用时遵循最左前缀原则。</li><li>唯一索引：索引列中的值必须是唯一的，但是允许为空值。</li><li>空间索引：<code>MySQL5.7</code>之后支持空间索引，在空间索引这方面遵循<code>OpenGIS</code>几何数据模型规则。</li></ul><h2 id="_3-索引什么时候会失效" tabindex="-1"><a class="header-anchor" href="#_3-索引什么时候会失效" aria-hidden="true">#</a> 3. 索引什么时候会失效？</h2><ul><li>查询条件包含<code>or</code>，可能导致索引失效</li><li>如果字段类型是字符串，<code>where</code>时一定用引号括起来，否则索引失效</li><li><code>like</code>通配符可能导致索引失效。</li><li>联合索引，查询时的条件列不是联合索引中的第一个列，索引失效。</li><li>在索引列上使用 mysql 的内置函数，索引失效。</li><li>对索引列运算（如，<code>+、-、*、/</code>），索引失效。</li><li>索引字段上使用<code>（！= 或者 &lt; &gt;，not in）</code>时，可能会导致索引失效。</li><li>索引字段上使用<code>is null， is not null</code>，可能导致索引失效。</li><li>左连接查询或者右连接查询查询关联的字段编码格式不一样，可能导致索引失效。</li><li>mysql 估计使用全表扫描要比使用索引快,则不使用索引。</li></ul><h2 id="_4-哪些场景不适合建立索引" tabindex="-1"><a class="header-anchor" href="#_4-哪些场景不适合建立索引" aria-hidden="true">#</a> 4. 哪些场景不适合建立索引？</h2><ul><li>数据量少的表，不适合加索引</li><li>更新比较频繁的也不适合加索引</li><li>区分度低的字段不适合加索引（如性别）</li><li><code>where、group by、order by</code>等后面没有使用到的字段，不需要建立索引</li><li>已经有冗余的索引的情况（比如已经有<code>a,b</code>的联合索引，不需要再单独建立<code>a</code>索引）</li></ul><h2 id="_5-为什么要用-b-树-为什么不用二叉树" tabindex="-1"><a class="header-anchor" href="#_5-为什么要用-b-树-为什么不用二叉树" aria-hidden="true">#</a> 5. 为什么要用 B+树，为什么不用二叉树？</h2><blockquote><p>可以从几个维度去看这个问题，查询是否够快，效率是否稳定，存储数据多少， 以及查找磁盘次数，为什么不是二叉树，为什么不是平衡二叉树，为什么不是 B 树，而偏偏是 B+树呢？</p></blockquote><p><strong>为什么不是一般二叉树？</strong></p><p>如果二叉树特殊化为一个链表，相当于全表扫描。平衡二叉树相比于二叉查找 树来说，查找效率更稳定，总体的查找速度也更快。</p><p><strong>为什么不是平衡二叉树呢？</strong></p><p>我们知道，在内存比在磁盘的数据，查询效率快得多。如果树这种数据结构作 为索引，那我们每查找一次数据就需要从磁盘中读取一个节点，也就是我们说 的一个磁盘块，但是平衡二叉树可是每个节点只存储一个键值和数据的，如果 是 B 树，可以存储更多的节点数据，树的高度也会降低，因此读取磁盘的次数 就降下来啦，查询效率就快啦。</p><p><strong>那为什么不是 B 树而是 B+树呢？</strong></p><ul><li>B+树非叶子节点上是不存储数据的，仅存储键值，而 B 树节点中不仅存储 键值，也会存储数据。innodb 中页的默认大小是 16KB，如果不存储数据，那 么就会存储更多的键值，相应的树的阶数（节点的子节点树）就会更大，树就 会更矮更胖，如此一来我们查找数据进行磁盘的 IO 次数有会再次减少，数据查 询的效率也会更快。</li><li>B+树索引的所有数据均存储在叶子节点，而且数据是按照顺序排列的，链 表连着的。那么 B+树使得范围查找，排序查找，分组查找以及去重查找变得 异常简单。</li></ul><h2 id="_6-一次b-树索引树查找过程" tabindex="-1"><a class="header-anchor" href="#_6-一次b-树索引树查找过程" aria-hidden="true">#</a> 6. 一次B+树索引树查找过程</h2><blockquote><p>假设有以下表结构，并且初始化了这几条数据</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE \`employee\` (
  \`id\` int(11) NOT NULL,
  \`name\` varchar(255) DEFAULT NULL,
  \`age\` int(11) DEFAULT NULL,
  \`date\` datetime DEFAULT NULL,
  \`sex\` int(1) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`idx_age\` (\`age\`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into employee values(100,&#39;小伦&#39;,43,&#39;2021-01-20&#39;,&#39;0&#39;);
insert into employee values(200,&#39;俊杰&#39;,48,&#39;2021-01-21&#39;,&#39;0&#39;);
insert into employee values(300,&#39;紫琪&#39;,36,&#39;2020-01-21&#39;,&#39;1&#39;);
insert into employee values(400,&#39;立红&#39;,32,&#39;2020-01-21&#39;,&#39;0&#39;);
insert into employee values(500,&#39;易迅&#39;,37,&#39;2020-01-21&#39;,&#39;1&#39;);
insert into employee values(600,&#39;小军&#39;,49,&#39;2021-01-21&#39;,&#39;0&#39;);
insert into employee values(700,&#39;小燕&#39;,28,&#39;2021-01-21&#39;,&#39;1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这条查询SQL，需要执行几次的树搜索操作？可以画下对应的索引树结构图~</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from Temployee where age=32;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实这个，这个大家可以先画出<code>idx_age</code>普通索引的索引结构图，大概如下：</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-baca02c4-1ed6-421f-9ad4-e3e63dd58efa.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再画出<code>id</code>主键索引，我们先画出聚族索引结构图，如下：</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-8bf752f5-772b-4308-b51c-d06406428866.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这条 SQL 查询语句执行大概流程是这样的：</p><ul><li>搜索<code>idx_age</code> 索引树，将<code>磁盘块1</code>加载到内存，由于<code>32&lt;43</code>,搜索左路分支，到磁盘寻址<code>磁盘块2</code>。</li><li>将<code>磁盘块2</code>加载到内存中，由于<code>32&lt;36</code>,搜索左路分支，到磁盘寻址<code>磁盘块4</code>。</li><li>将<code>磁盘块4</code>加载到内存中，在内存继续遍历，找到<code>age=32</code>的记录，取得<code>id = 400</code>.</li><li>拿到<code>id=400</code>后，回到<code>id主键索引树</code>。</li><li>搜索<code>id主键索引树</code>，将<code>磁盘块1</code>加载到内存，因为<code>300&lt;400&lt;500</code>,所以在选择中间分支，到磁盘寻址<code>磁盘块3</code>。</li><li>虽然在<code>磁盘块3</code>，找到了id=400，但是它不是叶子节点，所以会继续往下找。到磁盘寻址<code>磁盘块8</code>。</li><li>将<code>磁盘块8</code>加载内存，在内存遍历，找到<code>id=400</code>的记录，拿到<code>R4</code>这一行的数据，好的，大功告成。</li></ul><h2 id="_7-什么是回表-如何减少回表" tabindex="-1"><a class="header-anchor" href="#_7-什么是回表-如何减少回表" aria-hidden="true">#</a> 7. 什么是回表？如何减少回表？</h2><p>当查询的数据在索引树中，找不到的时候，需要回到<strong>主键索引树</strong>中去获取，这个过程叫做<strong>回表</strong>。</p><p>比如在<strong>第6</strong>小节中，使用的查询SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from Temployee where age=32;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要查询所有列的数据，<code>idx_age</code>普通索引不能满足，需要拿到主键id的值后，再回到<code>id</code>主键索引查找获取，这个过程就是回表。</p><h2 id="_8-什么是覆盖索引" tabindex="-1"><a class="header-anchor" href="#_8-什么是覆盖索引" aria-hidden="true">#</a> 8. 什么是覆盖索引？</h2><p>如果我们查询SQL的<code>select *</code> 修改为 <code>select id, age</code>的话，其实是<strong>不需要回表</strong>的。因为<code>id</code>和<code>age</code>的值，都在<code>idx_age</code>索引树的叶子节点上，这就涉及到覆盖索引的知识点了。</p><blockquote><p>覆盖索引是<code>select</code>的数据列只用从索引中就能够取得，不必回表，换句话说，查询列要被所建的索引覆盖。</p></blockquote><h2 id="_9-聊聊索引的最左前缀原则" tabindex="-1"><a class="header-anchor" href="#_9-聊聊索引的最左前缀原则" aria-hidden="true">#</a> 9. 聊聊索引的最左前缀原则</h2><p>索引的最左前缀原则，可以是<strong>联合索引的最左N个字段</strong>。比如你建立一个组合索引<code>（a,b,c）</code>，其实可以相当于建了<code>（a），（a,b）,(a,b,c)</code>三个索引，大大提高了索引复用能力。</p><p>当然，最左前缀也可以是<strong>字符串索引的最左M个字符。</strong>。比如，你的普通索引树是酱紫：</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-65c3f954-df70-439b-b0e1-1009007d6560.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个SQL: <code>select * from employee where name like &#39;小%&#39; order by age desc;</code> 也是命中索引的。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-3c751d80-02df-43cf-acc7-aafdb409811b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_10-索引下推了解过吗-什么是索引下推" tabindex="-1"><a class="header-anchor" href="#_10-索引下推了解过吗-什么是索引下推" aria-hidden="true">#</a> 10. 索引下推了解过吗？什么是索引下推</h2><p>给你这个SQL：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from employee where name like &#39;小%&#39; and age=28 and sex=&#39;0&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>name</code>和<code>age</code>为联合索引（<code>idx_name_age</code>）。</p><p>如果是<strong>Mysql5.6之前</strong>，在<code>idx_name_age</code>索引树，找出所有名字第一个字是<code>“小”</code>的人，拿到它们的<code>主键id</code>，然后回表找出数据行，再去对比年龄和性别等其他字段。如图：</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-b5ccdd0e-f299-49ac-9176-8e2c475f606f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有些朋友可能觉得奇怪，<code>idx_name_age（name,age)</code>不是联合索引嘛？为什么选出包含<code>“小”</code>字后，不再顺便看下年龄<code>age</code>再回表呢，不是更高效嘛？所以呀，<code>MySQL 5.6</code>就引入了<strong>索引下推优化</strong>，可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。</p><p>因此，MySQL5.6版本之后，选出包含<code>“小”</code>字后，顺表过滤<code>age=28</code></p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-4b37d45c-b5a2-4ff7-8125-ccd1e89eed42.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_11-大表如何添加索引" tabindex="-1"><a class="header-anchor" href="#_11-大表如何添加索引" aria-hidden="true">#</a> 11. 大表如何添加索引</h2><p>如果一张表数据量级是千万级别以上的，那么，如何给这张表添加索引？</p><p>我们需要知道一点，<strong>给表添加索引的时候</strong>，<strong>是会对表加锁的</strong>。如果不谨慎操作，有可能出现生产事故的。可以参考以下方法：</p><ol><li>先创建一张跟原表<code>A</code>数据结构相同的新表<code>B</code>。</li><li>在新表<code>B</code>添加需要加上的新索引。</li><li>把原表<code>A</code>数据导到新表<code>B</code></li><li><code>rename</code>新表<code>B</code>为原表的表名<code>A</code>，原表<code>A</code>换别的表名；</li></ol><h2 id="_12-如何知道语句是否走索引查询" tabindex="-1"><a class="header-anchor" href="#_12-如何知道语句是否走索引查询" aria-hidden="true">#</a> 12. 如何知道语句是否走索引查询？</h2><p><code>explain</code>查看SQL的执行计划，<strong>这样就知道是否命中索引了</strong>。</p><p>当<code>explain</code>与<code>SQL</code>一起使用时，MySQL将显示来自优化器的有关语句执行计划的信息。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-mysqlsylwkz-1a294975-c9dd-4077-95fc-2a972911a3ab.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一般来说，我们需要重点关注<code>type、rows、filtered、extra、key</code>。</p><h3 id="_1-2-1-type" tabindex="-1"><a class="header-anchor" href="#_1-2-1-type" aria-hidden="true">#</a> 1.2.1 type</h3><p>type表示<strong>连接类型</strong>，查看索引执行情况的一个重要指标。以下性能从好到坏依次：<code>system &gt; const &gt; eq_ref &gt; ref &gt; ref_or_null &gt; index_merge &gt; unique_subquery &gt; index_subquery &gt; range &gt; index &gt; ALL</code></p><ul><li>system：这种类型要求数据库表中只有一条数据，是<code>const</code>类型的一个特例，一般情况下是不会出现的。</li><li>const：通过一次索引就能找到数据，一般用于主键或唯一索引作为条件，这类扫描效率极高，，速度非常快。</li><li>eq_ref：常用于主键或唯一索引扫描，一般指使用主键的关联查询</li><li>ref : 常用于非主键和唯一索引扫描。</li><li>ref_or_null：这种连接类型类似于<code>ref</code>，区别在于<code>MySQL</code>会额外搜索包含<code>NULL</code>值的行</li><li>index_merge：使用了索引合并优化方法，查询使用了两个以上的索引。</li><li>unique_subquery：类似于<code>eq_ref</code>，条件用了<code>in</code>子查询</li><li>index_subquery：区别于<code>unique_subquery</code>，用于非唯一索引，可以返回重复值。</li><li>range：常用于范围查询，比如：between ... and 或 In 等操作</li><li>index：全索引扫描</li><li>ALL：全表扫描</li></ul><h3 id="_1-2-2-rows" tabindex="-1"><a class="header-anchor" href="#_1-2-2-rows" aria-hidden="true">#</a> 1.2.2 rows</h3><p>该列表示MySQL估算要找到我们所需的记录，需要读取的行数。对于InnoDB表，此数字是估计值，并非一定是个准确值。</p><h3 id="_1-2-3-filtered" tabindex="-1"><a class="header-anchor" href="#_1-2-3-filtered" aria-hidden="true">#</a> 1.2.3 filtered</h3><p>该列是一个百分比的值，表里符合条件的记录数的百分比。简单点说，这个字段表示存储引擎返回的数据在经过过滤后，剩下满足条件的记录数量的比例。</p><h3 id="_1-2-4-extra" tabindex="-1"><a class="header-anchor" href="#_1-2-4-extra" aria-hidden="true">#</a> 1.2.4 extra</h3><p>该字段包含有关MySQL如何解析查询的其他信息，它一般会出现这几个值：</p><ul><li>Using filesort：表示按文件排序，一般是在指定的排序和索引排序不一致的情况才会出现。一般见于order by语句</li><li>Using index ：表示是否用了覆盖索引。</li><li>Using temporary: 表示是否使用了临时表,性能特别差，需要重点优化。一般多见于group by语句，或者union语句。</li><li>Using where : 表示使用了where条件过滤.</li><li>Using index condition：MySQL5.6之后新增的索引下推。在存储引擎层进行数据过滤，而不是在服务层过滤，利用索引现有的数据减少回表的数据。</li></ul><h4 id="_1-2-5-key" tabindex="-1"><a class="header-anchor" href="#_1-2-5-key" aria-hidden="true">#</a> 1.2.5 key</h4><p>该列表示<strong>实际用到的索引</strong>。一般配合<code>possible_keys</code>列一起看。</p><h2 id="_13-hash-索引和-b-树区别是什么-你在设计索引是怎么抉择的" tabindex="-1"><a class="header-anchor" href="#_13-hash-索引和-b-树区别是什么-你在设计索引是怎么抉择的" aria-hidden="true">#</a> 13.Hash 索引和 B+树区别是什么？你在设计索引是怎么抉择的？</h2><ul><li>B+树可以进行范围查询，Hash 索引不能。</li><li>B+树支持联合索引的最左侧原则，Hash 索引不支持。</li><li>B+树支持 order by 排序，Hash 索引不支持。</li><li>Hash 索引在等值查询上比 B+树效率更高。（但是索引列的重复值很多的话，Hash冲突，效率降低）。</li><li>B+树使用 like 进行模糊查询的时候，like 后面（比如%开头）的话可以起到优化的作用，Hash 索引根本无法进行模糊查询。</li></ul><h2 id="_14-索引有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#_14-索引有哪些优缺点" aria-hidden="true">#</a> 14.  索引有哪些优缺点？</h2><p><strong>优点：</strong></p><ul><li>索引可以加快数据查询速度，减少查询时间</li><li>唯一索引可以保证数据库表中每一行的数据的唯一性</li></ul><p><strong>缺点：</strong></p><ul><li>创建索引和维护索引要耗费时间</li><li>索引需要占物理空间，除了数据表占用数据空间之外，每一个索引还要占用一定的物理空间</li><li>以表中的数据进行增、删、改的时候，索引也要动态的维护。</li></ul><h2 id="_15-聚簇索引与非聚簇索引的区别" tabindex="-1"><a class="header-anchor" href="#_15-聚簇索引与非聚簇索引的区别" aria-hidden="true">#</a> 15. 聚簇索引与非聚簇索引的区别</h2><p>聚簇索引并不是一种单独的索引类型，而是一种<strong>数据存储方式</strong>。它表示索引结构和数据一起存放的索引。非聚集索引是<strong>索引结构和数据分开存放的索引</strong>。</p><p>接下来，我们分不同存存储引擎去聊哈~</p><p>在<code>MySQL</code>的<code>InnoDB</code>存储引擎中， 聚簇索引与非聚簇索引最大的区别，在于叶节点是否存放一整行记录。聚簇索引叶子节点存储了一整行记录，而非聚簇索引叶子节点存储的是主键信息，<strong>因此，一般非聚簇索引还需要回表查询。</strong></p><ul><li>一个表中只能拥有一个聚集索引（因为一般聚簇索引就是<strong>主键索引</strong>），而非聚集索引一个表则可以存在多个。</li><li>一般来说，相对于非聚簇索引，聚簇索引查询效率更高，因为不用回表。</li></ul><p>而在<code>MyISM</code>存储引擎中，它的主键索引，普通索引都是非聚簇索引，因为数据和索引是分开的，叶子节点都使用<strong>一个地址指向真正的表数据</strong>。</p><p>给个赞支持一下，谢谢啦~</p>`,96),g={href:"https://mp.weixin.qq.com/s?__biz=Mzg3NzU5NTIwNg==&mid=2247503690&idx=1&sn=73655f41a98f21217468115888aeeceb&chksm=cf221063f855997590d48e605ac3cadbad14f4e91b71acf471a520a9ed9be2a9f2e2c5b64450#rd",target:"_blank",rel:"noopener noreferrer"};function p(h,b){const d=o("ExternalLinkIcon");return c(),l("div",null,[s,e("blockquote",null,[e("p",null,[i("参考链接："),e("a",g,[i("https://mp.weixin.qq.com/s?__biz=Mzg3NzU5NTIwNg==&mid=2247503690&idx=1&sn=73655f41a98f21217468115888aeeceb&chksm=cf221063f855997590d48e605ac3cadbad14f4e91b71acf471a520a9ed9be2a9f2e2c5b64450#rd"),n(d)]),i("，出处：捡田螺的小男孩，整理：沉默王二")])])])}const f=a(t,[["render",p],["__file","mysql-suoyin-15.html.vue"]]);export{f as default};
