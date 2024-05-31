import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a,d as n,b as p,e}from"./app-72970f25.js";const i={},u=a("h1",{id:"_6-14-comparable和comparator的区别",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_6-14-comparable和comparator的区别","aria-hidden":"true"},"#"),n(" 6.14 Comparable和Comparator的区别")],-1),r={href:"https://javabetter.cn/collection/PriorityQueue.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://javabetter.cn/basic-extra-meal/comparable-omparator.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<p>Comparable 和 Comparator 是 Java 的两个接口，从名字上我们就能够读出来它们俩的相似性：以某种方式来比较两个对象。</p><p>但它们之间到底有什么区别呢？请随我来，打怪进阶喽！</p><h3 id="_01、comparable" tabindex="-1"><a class="header-anchor" href="#_01、comparable" aria-hidden="true">#</a> 01、Comparable</h3><p>Comparable 接口的定义非常简单，源码如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个类实现了 Comparable 接口（只需要干一件事，重写 <code>compareTo()</code> 方法），就可以按照自己制定的规则将由它创建的对象进行比较。下面给出一个例子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cmower</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cmower</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Cmower</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cmower</span> wanger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Cmower</span> wangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>wanger<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>wangsan<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wanger<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;比较年轻有为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wangsan<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;比较年轻有为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我创建了一个 Cmower 类，它有两个字段：age 和 name。Cmower 类实现了 Comparable 接口，并重写了 <code>compareTo()</code> 方法。</p><p>程序输出的结果是“沉默王三比较年轻有为”，因为他比沉默王二小三岁。这个结果有什么凭证吗？</p>`,9),m=a("code",null,"compareTo()",-1),v=a("code",null,"ClassCastException",-1),b={href:"https://javabetter.cn/basic-extra-meal/generic.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="_02、comparator" tabindex="-1"><a class="header-anchor" href="#_02、comparator" aria-hidden="true">#</a> 02、Comparator</h3><p>Comparator 接口的定义相比较于 Comparable 就复杂的多了，不过，核心的方法只有两个，来看一下源码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> o1<span class="token punctuation">,</span> <span class="token class-name">T</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个方法 <code>compare(T o1, T o2)</code> 的返回值可能为负数，零或者正数，代表的意思是第一个对象小于、等于或者大于第二个对象。</p><p>第二个方法 <code>equals(Object obj)</code> 需要传入一个 Object 作为参数，并判断该 Object 是否和 Comparator 保持一致。</p><p>有时候，我们想让类保持它的原貌，不想主动实现 Comparable 接口，但我们又需要它们之间进行比较，该怎么办呢？</p><p>Comparator 就派上用场了，来看一下示例。</p><h4 id="_1-原封不动的-cmower-类。" tabindex="-1"><a class="header-anchor" href="#_1-原封不动的-cmower-类。" aria-hidden="true">#</a> 1）原封不动的 Cmower 类。</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cmower</span>  <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cmower 类有两个字段：age 和 name，意味着该类可以按照 age 或者 name 进行排序。</p><h4 id="_2-再来看-comparator-接口的实现类。" tabindex="-1"><a class="header-anchor" href="#_2-再来看-comparator-接口的实现类。" aria-hidden="true">#</a> 2）再来看 Comparator 接口的实现类。</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CmowerComparator</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cmower</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Cmower</span> o1<span class="token punctuation">,</span> <span class="token class-name">Cmower</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照 age 进行比较。当然也可以再实现一个比较器，按照 name 进行自然排序，示例如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CmowerNameComparator</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cmower</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Cmower</span> o1<span class="token punctuation">,</span> <span class="token class-name">Cmower</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> o2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> o2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-再来看测试类。" tabindex="-1"><a class="header-anchor" href="#_3-再来看测试类。" aria-hidden="true">#</a> 3）再来看测试类。</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Cmower</span> wanger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Cmower</span> wangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Cmower</span> wangyi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cmower</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cmower</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>wanger<span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>wangsan<span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>wangyi<span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CmowerComparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cmower</span> c <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了三个对象，age 不同，name 不同，并把它们加入到了 List 当中。然后使用 List 的 <code>sort()</code> 方法进行排序，来看一下输出的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沉默王三
沉默王二
沉默王一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着沉默王三的年纪比沉默王二小，排在第一位；沉默王一的年纪比沉默王二大，排在第三位。和我们的预期完全符合。</p><p>借此机会，再来看一下 sort 方法的源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保存当前队列的 modCount 值，用于检测 sort 操作是否非法</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> expectedModCount <span class="token operator">=</span> modCount<span class="token punctuation">;</span>
    <span class="token comment">// 调用 Arrays.sort 对 elementData 数组进行排序，使用传入的比较器 c</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> elementData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 检查操作期间 modCount 是否被修改，如果被修改则抛出并发修改异常</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>modCount <span class="token operator">!=</span> expectedModCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 增加 modCount 值，表示队列已经被修改过</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),w={href:"https://javabetter.cn/basic-extra-meal/generic.html",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"Comparator<? super E> c",-1),C=e('<h3 id="_03、到底该用哪一个" tabindex="-1"><a class="header-anchor" href="#_03、到底该用哪一个" aria-hidden="true">#</a> 03、到底该用哪一个？</h3><p>通过上面的两个例子可以比较出 Comparable 和 Comparator 两者之间的区别：</p><ul><li>一个类实现了 Comparable 接口，意味着该类的对象可以直接进行比较（排序），但比较（排序）的方式只有一种，很单一。</li><li>一个类如果想要保持原样，又需要进行不同方式的比较（排序），就可以定制比较器（实现 Comparator 接口）。</li><li>Comparable 接口在 <code>java.lang</code> 包下，而 <code>Comparator</code> 接口在 <code>java.util</code> 包下，算不上是亲兄弟，但可以称得上是表（堂）兄弟。</li></ul><p>举个不恰当的例子。我想从洛阳出发去北京看长城，体验一下好汉的感觉，要么坐飞机，要么坐高铁；但如果是孙悟空的话，翻个筋斗就到了。我和孙悟空之间有什么区别呢？</p><p>孙悟空自己实现了 Comparable 接口（他那年代也没有飞机和高铁，没得选），而我可以借助 Comparator 接口（现代化的交通工具）。</p><p>好了，关于 Comparable 和 Comparator 我们就先聊这么多。总而言之，如果对象的排序需要基于自然顺序，请选择 <code>Comparable</code>，如果需要按照对象的不同属性进行排序，请选择 <code>Comparator</code>。</p><hr>',7),y={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},f={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=a("p",null,[n("微信搜 "),a("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),n(" 即可免费领取。")],-1),j=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function x(q,T){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,a("blockquote",null,[a("p",null,[n("在前面学习"),a("a",r,[n("优先级队列"),p(s)]),n("的时候，我们曾提到过 Comparable和Comparator，那这篇继续以面试官的角度去切入，一起来看。")])]),a("p",null,[n("那天，小二去马蜂窝面试，面试官老王一上来就甩给了他一道面试题：请问Comparable和Comparator有什么区别？小二差点笑出声，因为三年前，也就是 2021 年，他在《"),a("a",k,[n("二哥的Java进阶之路"),p(s)]),n("》上看到过这题😆。")]),d,a("p",null,[n("凭证就在于 "),m,n(" 方法，该方法的返回值可能为负数，零或者正数，代表的意思是该对象按照排序的规则小于、等于或者大于要比较的对象。如果指定对象的类型与此对象不能进行比较，则引发 "),v,n(" 异常（自从有了"),a("a",b,[n("泛型"),p(s)]),n("，这种情况就少有发生了）。")]),g,a("p",null,[n("可以看到，参数就是一个 Comparator 接口，并且使用了"),a("a",w,[n("泛型"),p(s)]),n(),h,n("。")]),C,a("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),a("a",y,[n("二哥的 Java 进阶之路"),p(s)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",f,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),p(s)])]),_,j])}const J=t(i,[["render",x],["__file","comparable-omparator.html.vue"]]);export{J as default};
