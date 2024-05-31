import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as o,a as e,d as n,b as i,e as r}from"./app-72970f25.js";const d={},g=r(`<h1 id="java-34道精选高频面试题必看" tabindex="-1"><a class="header-anchor" href="#java-34道精选高频面试题必看" aria-hidden="true">#</a> Java：34道精选高频面试题必看👍</h1><h2 id="_1-介绍一下-java-吧" tabindex="-1"><a class="header-anchor" href="#_1-介绍一下-java-吧" aria-hidden="true">#</a> 1.介绍一下 java 吧</h2><p>java 是一门<strong>开源的跨平台的面向对象的</strong>计算机语言.</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>跨平台是因为 java 的 class 文件是运行在虚拟机上的,其实跨平台的,而<strong>虚拟机是不同平台有不同版本</strong>,所以说 java 是跨平台的.</p><p>面向对象有几个特点:</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>1.<strong>封装</strong><ul><li>两层含义：一层含义是把对象的属性和行为看成一个密不可分的整体，将这两者&#39;封装&#39;在一个不可分割的<strong>独立单元</strong>(即对象)中</li><li>另一层含义指&#39;信息隐藏，把不需要让外界知道的信息隐藏起来，有些对象的属性及行为允许外界用户知道或使用，但不允许更改，而另一些属性或行为，则不允许外界知晓，或只允许使用对象的功能，而尽可能<strong>隐藏对象的功能实现细节</strong>。</li></ul></li></ul><p><strong>优点</strong>:</p><blockquote><p>1.良好的封装能够<strong>减少耦合</strong>，符合程序设计追求&#39;高内聚，低耦合&#39;。<br><br> 2.<strong>类内部的结构可以自由修改</strong>。<br><br> 3.可以对成员变量进行更<strong>精确的控制</strong>。<br><br> 4.<strong>隐藏信息</strong>实现细节。<br></p></blockquote><ul><li>2.<strong>继承</strong><ul><li>继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。</li></ul></li></ul><p><strong>优点</strong>:</p><blockquote><p>1.提高类代码的<strong>复用性</strong><br><br> 2.提高了代码的<strong>维护性</strong><br></p></blockquote><ul><li>3.<strong>多态</strong><ul><li>多态是同一个行为具有多个不同表现形式或形态的能力。Java语言中含有方法重载与对象多态两种形式的多态： <ul><li>1.<strong>方法重载</strong>：在一个类中，允许多个方法使用同一个名字，但方法的参数不同，完成的功能也不同。</li><li>2.<strong>对象多态</strong>：子类对象可以与父类对象进行转换，而且根据其使用的子类不同完成的功能也不同（重写父类的方法）。</li></ul></li></ul></li></ul><p><strong>优点</strong></p><blockquote><ol><li><strong>消除类型之间的耦合关系</strong><br></li><li><strong>可替换性</strong><br></li><li><strong>可扩充性</strong><br></li><li><strong>接口性</strong><br></li><li><strong>灵活性</strong><br></li><li><strong>简化性</strong><br></li></ol></blockquote><h2 id="_2-java-有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#_2-java-有哪些数据类型" aria-hidden="true">#</a> 2.java 有哪些数据类型？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>java 主要有两种数据类型</p><ul><li>1.<strong>基本数据类型</strong><ul><li>基本数据有<strong>八个</strong>, <ul><li>byte,short,int,long属于数值型中的整数型</li><li>float,double属于数值型中的浮点型</li><li>char属于字符型</li><li>boolean属于布尔型</li></ul></li></ul></li><li>2.<strong>引用数据类型</strong><ul><li>引用数据类型有<strong>三个</strong>,分别是类,接口和数组</li></ul></li></ul><h2 id="_3-接口和抽象类有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-接口和抽象类有什么区别" aria-hidden="true">#</a> 3.接口和抽象类有什么区别？</h2><ul><li>1.接口是抽象类的变体，<strong>接口中所有的方法都是抽象的</strong>。而抽象类是声明方法的存在而不去实现它的类。</li><li>2.接口可以多继承，抽象类不行。</li><li>3.接口定义方法，不能实现，默认是 <strong>public abstract</strong>，而抽象类可以实现部分方法。</li><li>4.接口中基本数据类型为 <strong>public static final</strong> 并且需要给出初始值，而抽类象不是的。</li></ul><h2 id="_4-重载和重写什么区别" tabindex="-1"><a class="header-anchor" href="#_4-重载和重写什么区别" aria-hidden="true">#</a> 4.重载和重写什么区别？</h2><p>重写：</p><ul><li>1.参数列表必须<strong>完全与被重写的方法</strong>相同，否则不能称其为重写而是重载.</li><li>2.<strong>返回的类型必须一直与被重写的方法的返回类型相同</strong>，否则不能称其为重写而是重载。</li><li>3.访问<strong>修饰符的限制一定要大于被重写方法的访问修饰符</strong></li><li>4.重写方法一定<strong>不能抛出新的检查异常或者比被重写方法申明更加宽泛的检查型异常</strong>。</li></ul><p>重载：</p><ul><li>1.必须具有<strong>不同的参数列表</strong>；</li><li>2.可以有不同的返回类型，只要参数列表不同就可以了；</li><li>3.可以有<strong>不同的访问修饰符</strong>；</li><li>4.可以抛出<strong>不同的异常</strong>；</li></ul><h2 id="_5-常见的异常有哪些" tabindex="-1"><a class="header-anchor" href="#_5-常见的异常有哪些" aria-hidden="true">#</a> 5.常见的异常有哪些？</h2><ul><li>NullPointerException 空指针异常</li><li>ArrayIndexOutOfBoundsException 索引越界异常</li><li>InputFormatException 输入类型不匹配</li><li>SQLException SQL异常</li><li>IllegalArgumentException 非法参数</li><li>NumberFormatException 类型转换异常<br> 等等....</li></ul><h2 id="_6-异常要怎么解决" tabindex="-1"><a class="header-anchor" href="#_6-异常要怎么解决" aria-hidden="true">#</a> 6.异常要怎么解决？</h2><p>Java标准库内建了一些通用的异常，这些类以Throwable为顶层父类。</p><p>Throwable又派生出<strong>Error类和Exception类</strong>。</p><p>错误：Error类以及他的子类的实例，代表了JVM本身的错误。错误不能被程序员通过代码处理，Error很少出现。因此，程序员应该关注Exception为父类的分支下的各种异常类。</p><p>异常：Exception以及他的子类，代表程序运行时发送的各种不期望发生的事件。可以被Java异常处理机制使用，是异常处理的核心。</p><p>处理方法:</p><ul><li>1.<strong>try()catch(){}</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
// 程序代码
}catch(ExceptionName e1){
//Catch 块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.<strong>throw</strong><ul><li>throw 关键字作用是抛出一个异常，抛出的时候是抛出的是一个异常类的实例化对象，在异常处理中，try 语句要捕获的是一个异常对象，那么此异常对象也可以自己抛出</li></ul></li><li>3.<strong>throws</strong><ul><li>定义一个方法的时候可以使用 throws 关键字声明。使用 throws 关键字声明的方法表示此方法不处理异常，而交给方法调用处进行处理。</li></ul></li></ul><h2 id="_7-arraylist-和-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#_7-arraylist-和-linkedlist-的区别" aria-hidden="true">#</a> 7.arrayList 和 linkedList 的区别？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>1.ArrayList 是实现了基于<strong>数组</strong>的，存储空间是连续的。LinkedList 基于<strong>链表</strong>的，存储空间是不连续的。（LinkedList 是双向链表）</p></li><li><p>2.对于<strong>随机访问</strong> get 和 set ，ArrayList 觉得优于 LinkedList，因为 LinkedList 要移动指针。</p></li><li><p>3.对于<strong>新增和删除</strong>操作 add 和 remove ，LinedList 比较占优势，因为 ArrayList 要移动数据。</p></li><li><p>4.同样的数据量 LinkedList 所占用空间可能会更小，因为 ArrayList 需要<strong>预留空间</strong>便于后续数据增加，而 LinkedList 增加数据只需要<strong>增加一个节点</strong></p></li></ul><h2 id="_8-hashmap-1-7-和-hashmap-1-8-的区别" tabindex="-1"><a class="header-anchor" href="#_8-hashmap-1-7-和-hashmap-1-8-的区别" aria-hidden="true">#</a> 8.hashMap 1.7 和 hashMap 1.8 的区别？</h2><p>只记录<strong>重点</strong></p><table><thead><tr><th style="text-align:left;">不同点</th><th style="text-align:center;">hashMap 1.7</th><th style="text-align:right;">hashMap 1.8</th></tr></thead><tbody><tr><td style="text-align:left;">数据结构</td><td style="text-align:center;">数组+链表</td><td style="text-align:right;">数组+链表+红黑树</td></tr><tr><td style="text-align:left;">插入数据的方式</td><td style="text-align:center;">头插法</td><td style="text-align:right;">尾插法</td></tr><tr><td style="text-align:left;">hash 值计算方式</td><td style="text-align:center;">9次扰动处理(4次位运算+5次异或)</td><td style="text-align:right;">2次扰动处理(1次位运算+1次异或)</td></tr><tr><td style="text-align:left;">扩容策略</td><td style="text-align:center;">插入前扩容</td><td style="text-align:right;">插入后扩容</td></tr></tbody></table><h2 id="_9-hashmap-线程不安全体现在哪里" tabindex="-1"><a class="header-anchor" href="#_9-hashmap-线程不安全体现在哪里" aria-hidden="true">#</a> 9.hashMap 线程不安全体现在哪里？</h2><p>在 <strong>hashMap1.7 中扩容</strong>的时候，因为采用的是头插法，所以会可能会有循环链表产生，导致数据有问题，在 1.8 版本已修复，改为了尾插法</p><p>在任意版本的 hashMap 中，如果在<strong>插入数据时多个线程命中了同一个槽</strong>，可能会有数据覆盖的情况发生，导致线程不安全。</p><h2 id="_10-那么-hashmap-线程不安全怎么解决" tabindex="-1"><a class="header-anchor" href="#_10-那么-hashmap-线程不安全怎么解决" aria-hidden="true">#</a> 10.那么 hashMap 线程不安全怎么解决？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>一.给 hashMap <strong>直接加锁</strong>,来保证线程安全</li><li>二.使用 <strong>hashTable</strong>,比方法一效率高,其实就是在其方法上加了 synchronized 锁</li><li>三.使用 <strong>concurrentHashMap</strong> , 不管是其 1.7 还是 1.8 版本,本质都是<strong>减小了锁的粒度,减少线程竞争</strong>来保证高效.</li></ul><h2 id="_11-concurrenthashmap-1-7-和-1-8-有什么区别" tabindex="-1"><a class="header-anchor" href="#_11-concurrenthashmap-1-7-和-1-8-有什么区别" aria-hidden="true">#</a> 11.concurrentHashMap 1.7 和 1.8 有什么区别</h2><p>只记录<strong>重点</strong></p><table><thead><tr><th style="text-align:left;">不同点</th><th style="text-align:center;">concurrentHashMap 1.7</th><th style="text-align:right;">concurrentHashMap 1.8</th></tr></thead><tbody><tr><td style="text-align:left;">锁粒度</td><td style="text-align:center;">基于segment</td><td style="text-align:right;">基于entry节点</td></tr><tr><td style="text-align:left;">锁</td><td style="text-align:center;">reentrantLock</td><td style="text-align:right;">synchronized</td></tr><tr><td style="text-align:left;">底层结构</td><td style="text-align:center;">Segment + HashEntry + Unsafe</td><td style="text-align:right;">Synchronized + CAS + Node + Unsafe</td></tr></tbody></table><h2 id="_12-介绍一下-hashset-吧" tabindex="-1"><a class="header-anchor" href="#_12-介绍一下-hashset-吧" aria-hidden="true">#</a> 12.介绍一下 hashset 吧</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图是 set 家族整体的结构，</p><p>set 继承于 Collection 接口，是一个<strong>不允许出现重复元素，并且无序的集合</strong>.</p><p>HashSet 是<strong>基于 HashMap 实现</strong>的，底层<strong>采用 HashMap 来保存元素</strong></p><p>元素的哈希值是通过元素的 hashcode 方法 来获取的, HashSet 首先判断两个元素的哈希值，如果哈希值一样，接着会比较 equals 方法 如果 equls 结果为 true ，HashSet 就视为同一个元素。如果 equals 为 false 就不是同一个元素。</p><h2 id="_13-什么是泛型" tabindex="-1"><a class="header-anchor" href="#_13-什么是泛型" aria-hidden="true">#</a> 13.什么是泛型？</h2><p>泛型:<strong>把类型明确的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型</strong></p><h2 id="_14-泛型擦除是什么" tabindex="-1"><a class="header-anchor" href="#_14-泛型擦除是什么" aria-hidden="true">#</a> 14.泛型擦除是什么？</h2><p>因为泛型其实只是在编译器中实现的而虚拟机并不认识泛型类项，所以要在虚拟机中将泛型类型进行擦除。也就是说，<strong>在编译阶段使用泛型，运行阶段取消泛型，即擦除</strong>。 擦除是将泛型类型以其父类代替，如String 变成了Object等。其实在使用的时候还是进行带强制类型的转化，只不过这是比较安全的转换，因为在编译阶段已经确保了数据的一致性。</p><h2 id="_15-说说进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#_15-说说进程和线程的区别" aria-hidden="true">#</a> 15.说说进程和线程的区别？</h2><p><strong>进程是系统资源分配和调度的基本单位</strong>，它能并发执行较高系统资源的利用率.</p><p><strong>线程</strong>是<strong>比进程更小</strong>的能独立运行的基本单位,创建、销毁、切换成本要小于进程,可以减少程序并发执行时的时间和空间开销，使得操作系统具有更好的并发性。</p><h2 id="_16-volatile-有什么作用" tabindex="-1"><a class="header-anchor" href="#_16-volatile-有什么作用" aria-hidden="true">#</a> 16.volatile 有什么作用？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>1.保证内存可见性</strong><ul><li>可见性是指线程之间的可见性，一个线程修改的状态对另一个线程是可见的。也就是一个线程修改的结果，另一个线程马上就能看到。</li></ul></li><li><strong>2.禁止指令重排序</strong><ul><li>cpu 是和缓存做交互的，但是由于 cpu 运行效率太高，所以会不等待当前命令返回结果从而继续执行下一个命令，就会有乱序执行的情况发生</li></ul></li></ul><h2 id="_17-什么是包装类-为什么需要包装类" tabindex="-1"><a class="header-anchor" href="#_17-什么是包装类-为什么需要包装类" aria-hidden="true">#</a> 17.什么是包装类？为什么需要包装类？</h2><p><strong>Java 中有 8 个基本类型，分别对应的 8 个包装类</strong></p><ul><li>byte -- Byte</li><li>boolean -- Boolean</li><li>short -- Short</li><li>char -- Character</li><li>int -- Integer</li><li>long -- Long</li><li>float -- Float</li><li>double -- Double</li></ul><p><strong>为什么需要包装类</strong>:</p><ul><li>基本数据类型方便、简单、高效，但泛型不支持、集合元素不支持</li><li>不符合面向对象思维</li><li>包装类提供很多方法，方便使用，如 Integer 类 toHexString(int i)、parseInt(String s) 方法等等</li></ul><h2 id="_18-integer-a-1000-integer-b-1000-a-b-的结果是什么-那如果-a-b-都为1-结果又是什么" tabindex="-1"><a class="header-anchor" href="#_18-integer-a-1000-integer-b-1000-a-b-的结果是什么-那如果-a-b-都为1-结果又是什么" aria-hidden="true">#</a> 18.Integer a = 1000，Integer b = 1000，a==b 的结果是什么？那如果 a，b 都为1，结果又是什么？</h2><p>Integer a = 1000，Integer b = 1000，a==b 结果为<strong>false</strong></p><p>Integer a = 1，Integer b = 1，a==b 结果为<strong>true</strong></p><p>这道题主要考察 Integer 包装类缓存的范围,<strong>在-128~127之间会缓存起来</strong>,比较的是直接缓存的数据,在此之外比较的是对象</p><h2 id="_19-jmm-是什么" tabindex="-1"><a class="header-anchor" href="#_19-jmm-是什么" aria-hidden="true">#</a> 19.JMM 是什么？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>JMM 就是 <strong>Java内存模型</strong>(java memory model)。因为在不同的硬件生产商和不同的操作系统下，内存的访问有一定的差异，所以会造成相同的代码运行在不同的系统上会出现各种问题。所以java内存模型(JMM)<strong>屏蔽掉各种硬件和操作系统的内存访问差异，以实现让java程序在各种平台下都能达到一致的并发效果</strong>。</p><p>Java内存模型规定所有的变量都存储在主内存中，包括实例变量，静态变量，但是不包括局部变量和方法参数。每个线程都有自己的工作内存，线程的工作内存保存了该线程用到的变量和主内存的副本拷贝，线程对变量的操作都在工作内存中进行。<strong>线程不能直接读写主内存中的变量</strong>。</p><p>每个线程的工作内存都是独立的，<strong>线程操作数据只能在工作内存中进行，然后刷回到主存</strong>。这是 Java 内存模型定义的线程基本工作方式。</p><h2 id="_20-创建对象有哪些方式" tabindex="-1"><a class="header-anchor" href="#_20-创建对象有哪些方式" aria-hidden="true">#</a> 20.创建对象有哪些方式</h2><p>有<strong>五种创建对象的方式</strong></p><ul><li>1、new关键字</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p1 = new Person();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>2.Class.newInstance</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p1 = Person.class.newInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>3.Constructor.newInstance</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Constructor&lt;Person&gt; constructor = Person.class.getConstructor();
Person p1 = constructor.newInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.clone</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p1 = new Person();
Person p2 = p1.clone();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5.反序列化</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p1 = new Person();
byte[] bytes = SerializationUtils.serialize(p1);
Person p2 = (Person)SerializationUtils.deserialize(bytes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-讲讲单例模式懒汉式吧" tabindex="-1"><a class="header-anchor" href="#_21-讲讲单例模式懒汉式吧" aria-hidden="true">#</a> 21.讲讲单例模式懒汉式吧</h2><p>直接贴代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 懒汉式
public class Singleton {
// 延迟加载保证多线程安全
    Private volatile static Singleton singleton;
    private Singleton(){}
    public static Singleton getInstance(){
        if(singleton == null){
            synchronized(Singleton.class){
                if(singleton == null){
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 volatile 是<strong>防止指令重排序，保证对象可见</strong>，防止读到半初始化状态的对象</li><li>第一层if(singleton == null) 是为了防止有多个线程同时创建</li><li>synchronized 是加锁防止多个线程同时进入该方法创建对象</li><li>第二层if(singleton == null) 是防止有多个线程同时等待锁，一个执行完了后面一个又继续执行的情况</li></ul>`,99),c={href:"https://blog.csdn.net/fly910905/article/details/79286680",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="_22-volatile-有什么作用" tabindex="-1"><a class="header-anchor" href="#_22-volatile-有什么作用" aria-hidden="true">#</a> 22.volatile 有什么作用</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>1.<strong>保证内存可见性</strong><ul><li>当一个被volatile关键字修饰的变量被一个线程修改的时候，其他线程可以立刻得到修改之后的结果。当一个线程向被volatile关键字修饰的变量<strong>写入数据</strong>的时候，虚拟机会<strong>强制它被值刷新到主内存中</strong>。当一个线程<strong>读取</strong>被volatile关键字修饰的值的时候，虚拟机会<strong>强制要求它从主内存中读取</strong>。</li></ul></li><li>2.<strong>禁止指令重排序</strong><ul><li>指令重排序是编译器和处理器为了高效对程序进行优化的手段，cpu 是与内存交互的，而 cpu 的效率想比内存高很多，所以 cpu 会在不影响最终结果的情况下，不等待返回结果直接进行后续的指令操作，而 volatile 就是给相应代码加了<strong>内存屏障</strong>，在屏障内的代码禁止指令重排序。</li></ul></li></ul><h2 id="_23-怎么保证线程安全" tabindex="-1"><a class="header-anchor" href="#_23-怎么保证线程安全" aria-hidden="true">#</a> 23.怎么保证线程安全？</h2><ul><li>1.synchronized关键字 <ul><li>可以用于代码块，方法（静态方法，同步锁是当前字节码对象；实例方法，同步锁是实例对象）</li></ul></li><li>2.lock锁机制</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lock lock = new ReentrantLock();
lock. lock();
try {
    System. out. println(&quot;获得锁&quot;);
} catch (Exception e) {
   
} finally {
    System. out. println(&quot;释放锁&quot;);
    lock. unlock();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-synchronized-锁升级的过程" tabindex="-1"><a class="header-anchor" href="#_24-synchronized-锁升级的过程" aria-hidden="true">#</a> 24.synchronized 锁升级的过程</h2><p>在 Java1.6 之前的版本中，synchronized 属于重量级锁，效率低下，<strong>锁是</strong> cpu 一个<strong>总量级的资源</strong>，每次获取锁都要和 cpu 申请，非常消耗性能。</p><p>在 <strong>jdk1.6 之后</strong> Java 官方对从 JVM 层面对 synchronized 较大优化，所以现在的 synchronized 锁效率也优化得很不错了，Jdk1.6 之后，为了减少获得锁和释放锁所带来的性能消耗，引入了偏向锁和轻量级锁，<strong>增加了锁升级的过程</strong>，由无锁-&gt;偏向锁-&gt;自旋锁-&gt;重量级锁<br><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-10.png" alt="" loading="lazy"></p><p>增加锁升级的过程主要是<strong>减少用户态到核心态的切换，提高锁的效率，从 jvm 层面优化锁</strong></p><h2 id="_25-cas-是什么" tabindex="-1"><a class="header-anchor" href="#_25-cas-是什么" aria-hidden="true">#</a> 25.cas 是什么？</h2><p>cas 叫做 CompareAndSwap，<strong>比较并交换</strong>，很多地方使用到了它，比如锁升级中自旋锁就有用到，主要是<strong>通过处理器的指令来保证操作的原子性</strong>，它主要包含三个变量：</p><ul><li><strong>1.变量内存地址</strong></li><li><strong>2.旧的预期值 A</strong></li><li><strong>3.准备设置的新值 B</strong></li></ul><p>当一个线程需要修改一个共享变量的值，完成这个操作需要先取出共享变量的值，赋给 A，基于 A 进行计算，得到新值 B，在用预期原值 A 和内存中的共享变量值进行比较，<strong>如果相同就认为其他线程没有进行修改</strong>，而将新值写入内存</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>CAS的缺点</strong></p><ul><li><p><strong>CPU开销比较大</strong>：在并发量比较高的情况下，如果许多线程反复尝试更新某一个变量，却又一直更新不成功，又因为自旋的时候会一直占用CPU，如果CAS一直更新不成功就会一直占用，造成CPU的浪费。</p></li><li><p><strong>ABA 问题</strong>：比如线程 A 去修改 1 这个值，修改成功了，但是中间 线程 B 也修改了这个值，但是修改后的结果还是 1，所以不影响 A 的操作，这就会有问题。可以用<strong>版本号</strong>来解决这个问题。</p></li><li><p><strong>只能保证一个共享变量的原子性</strong></p></li></ul><h2 id="_26-聊聊-reentrantlock-吧" tabindex="-1"><a class="header-anchor" href="#_26-聊聊-reentrantlock-吧" aria-hidden="true">#</a> 26.聊聊 ReentrantLock 吧</h2><p>ReentrantLock 意为<strong>可重入锁</strong>，说起 ReentrantLock 就不得不说 AQS ，因为其底层就是<strong>使用 AQS 去实现</strong>的。</p><p>ReentrantLock有两种模式，一种是公平锁，一种是非公平锁。</p><ul><li>公平模式下等待线程入队列后会严格按照队列顺序去执行</li><li>非公平模式下等待线程入队列后有可能会出现插队情况</li></ul><p><strong>公平锁</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>第一步：<strong>获取状态的 state 的值</strong><ul><li>如果 state=0 即代表锁没有被其它线程占用，执行第二步。</li><li>如果 state!=0 则代表锁正在被其它线程占用，执行第三步。</li></ul></li><li>第二步：<strong>判断队列中是否有线程在排队等待</strong><ul><li>如果不存在则直接将锁的所有者设置成当前线程，且更新状态 state 。</li><li>如果存在就入队。</li></ul></li><li>第三步：<strong>判断锁的所有者是不是当前线程</strong><ul><li>如果是则更新状态 state 的值。</li><li>如果不是，线程进入队列排队等待。</li></ul></li></ul><p><strong>非公平锁</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>获取状态的 state 的值 <ul><li>如果 state=0 即代表锁没有被其它线程占用，则设置当前锁的持有者为当前线程，该操作用 CAS 完成。</li><li>如果不为0或者设置失败，代表锁被占用进行下一步。</li></ul></li><li>此时<strong>获取 state 的值</strong><ul><li>如果是，则给state+1，获取锁</li><li>如果不是，则进入队列等待</li><li>如果是0，代表刚好线程释放了锁，此时将锁的持有者设为自己</li><li>如果不是0，则查看线程持有者是不是自己</li></ul></li></ul><h2 id="_27-多线程的创建方式有哪些" tabindex="-1"><a class="header-anchor" href="#_27-多线程的创建方式有哪些" aria-hidden="true">#</a> 27.多线程的创建方式有哪些？</h2><ul><li>1、<strong>继承Thread类</strong>，重写run()方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo extends Thread{
    //重写父类Thread的run()
    public void run() {
    }
    public static void main(String[] args) {
        Demo d1 = new Demo();
        Demo d2 = new Demo();
        d1.start();
        d2.start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.<strong>实现Runnable接口</strong>，重写run()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo2 implements Runnable{

    //重写Runnable接口的run()
    public void run() {
    }
    
    public static void main(String[] args) {
        Thread t1 = new Thread(new Demo2());
        Thread t2 = new Thread(new Demo2());
        t1.start();
        t2.start();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.<strong>实现 Callable 接口</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo implements Callable&lt;String&gt;{

    public String call() throws Exception {
        System.out.println(&quot;正在执行新建线程任务&quot;);
        Thread.sleep(2000);
        return &quot;结果&quot;;
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        Demo d = new Demo();
        FutureTask&lt;String&gt; task = new FutureTask&lt;&gt;(d);
        Thread t = new Thread(task);
        t.start();
        //获取任务执行后返回的结果
        String result = task.get();
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.<strong>使用线程池创建</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo {
    public static void main(String[] args) {
        Executor threadPool = Executors.newFixedThreadPool(5);
        for(int i = 0 ;i &lt; 10 ; i++) {
            threadPool.execute(new Runnable() {
                public void run() {
                    //todo
                }
            });
        }
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-线程池有哪些参数" tabindex="-1"><a class="header-anchor" href="#_28-线程池有哪些参数" aria-hidden="true">#</a> 28.线程池有哪些参数？</h2><ul><li><p><strong>1.corePoolSize</strong>：<strong>核心线程数</strong>，线程池中始终存活的线程数。</p></li><li><p><strong>2.maximumPoolSize</strong>: <strong>最大线程数</strong>，线程池中允许的最大线程数。</p></li><li><p><strong>3.keepAliveTime</strong>: <strong>存活时间</strong>，线程没有任务执行时最多保持多久时间会终止。</p></li><li><p><strong>4.unit</strong>: <strong>单位</strong>，参数keepAliveTime的时间单位，7种可选。</p></li><li><p><strong>5.workQueue</strong>: 一个<strong>阻塞队列</strong>，用来存储等待执行的任务，均为线程安全，7种可选。</p></li><li><p><strong>6.threadFactory</strong>: <strong>线程工厂</strong>，主要用来创建线程，默及正常优先级、非守护线程。</p></li><li><p><strong>7.handler</strong>：<strong>拒绝策略</strong>，拒绝处理任务时的策略，4种可选，默认为AbortPolicy。</p></li></ul><h2 id="_29-线程池的执行流程" tabindex="-1"><a class="header-anchor" href="#_29-线程池的执行流程" aria-hidden="true">#</a> 29.线程池的执行流程？</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>判断线程池中的线程数<strong>是否大于设置的核心线程数</strong><ul><li>如果<strong>小于</strong>，就<strong>创建</strong>一个核心线程来执行任务</li><li>如果<strong>大于</strong>，就会<strong>判断缓冲队列是否满了</strong><ul><li>如果<strong>没有满</strong>，则<strong>放入队列</strong>，等待线程空闲时执行任务</li><li>如果队列已经<strong>满了</strong>，则判断<strong>是否达到了线程池设置的最大线程数</strong><ul><li>如果<strong>没有达到</strong>，就<strong>创建新线程</strong>来执行任务</li><li>如果已经<strong>达到了</strong>最大线程数，则<strong>执行指定的拒绝策略</strong></li></ul></li></ul></li></ul></li></ul><h2 id="_30-线程池的拒绝策略有哪些" tabindex="-1"><a class="header-anchor" href="#_30-线程池的拒绝策略有哪些" aria-hidden="true">#</a> 30.线程池的拒绝策略有哪些？</h2><ul><li><strong>AbortPolicy</strong>：直接丢弃任务，抛出异常，这是默认策略</li><li><strong>CallerRunsPolicy</strong>：只用调用者所在的线程来处理任务</li><li><strong>DiscardOldestPolicy</strong>：丢弃等待队列中最旧的任务，并执行当前任务</li><li><strong>DiscardPolicy</strong>：直接丢弃任务，也不抛出异常</li></ul><h2 id="_31-介绍一下四种引用类型" tabindex="-1"><a class="header-anchor" href="#_31-介绍一下四种引用类型" aria-hidden="true">#</a> 31.介绍一下四种引用类型?</h2><ul><li><strong>强引用 StrongReference</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object obj = new Object(); 
//只要obj还指向Object对象，Object对象就不会被回收
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>垃圾回收器不会回收被引用的对象，哪怕内存不足时，JVM 也会直接抛出 OutOfMemoryError，除非赋值为 null。</p><ul><li><strong>软引用 SoftReference</strong></li></ul><p>软引用是用来描述一些非必需但仍有用的对象。在内存足够的时候，软引用对象不会被回收，只有在内存不足时，系统则会回收软引用对象，如果回收了软引用对象之后仍然没有足够的内存，才会抛出内存溢出异常。</p><ul><li><strong>弱引用 WeakReference</strong></li></ul><p>弱引用的引用强度比软引用要更弱一些，无论内存是否足够，只要 JVM 开始进行垃圾回收，那些被弱引用关联的对象都会被回收。</p><ul><li><strong>虚引用 PhantomReference</strong></li></ul><p>虚引用是最弱的一种引用关系，如果一个对象仅持有虚引用，那么它就和没有任何引用一样，它随时可能会被回收，在 JDK1.2 之后，用 PhantomReference 类来表示，通过查看这个类的源码，发现它只有一个构造函数和一个 get() 方法，而且它的 get() 方法仅仅是返回一个null，也就是说将永远无法通过虚引用来获取对象，虚引用必须要和 ReferenceQueue 引用队列一起使用，NIO 的堆外内存就是靠其管理。</p><h2 id="_32-深拷贝、浅拷贝是什么" tabindex="-1"><a class="header-anchor" href="#_32-深拷贝、浅拷贝是什么" aria-hidden="true">#</a> 32.深拷贝、浅拷贝是什么？</h2><ul><li>浅拷贝并不是真的拷贝，只是<strong>复制指向某个对象的指针</strong>，而不复制对象本身，新旧对象还是共享同一块内存。</li><li>深拷贝会另外<strong>创造一个一模一样的对象</strong>，新对象跟原对象不共享内存，修改新对象不会改到原对象。</li></ul><h2 id="_33-聊聊-threadlocal-吧" tabindex="-1"><a class="header-anchor" href="#_33-聊聊-threadlocal-吧" aria-hidden="true">#</a> 33.聊聊 ThreadLocal 吧</h2><ul><li>ThreadLocal其实就是<strong>线程本地变量</strong>，他会在每个线程都创建一个副本，那么在线程之间访问内部副本变量就行了，做到了线程之间互相隔离。<br><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-15.png" alt="" loading="lazy"></li><li>ThreadLocal 有一个<strong>静态内部类 ThreadLocalMap</strong>，ThreadLocalMap 又包含了一个 Entry 数组，<strong>Entry 本身是一个弱引用</strong>，他的 key 是指向 ThreadLocal 的弱引用，<strong>弱引用的目的是为了防止内存泄露</strong>,如果是强引用那么除非线程结束,否则无法终止,可能会有内存泄漏的风险。</li><li>但是这样还是会存在内存泄露的问题，假如 key 和 ThreadLocal 对象被回收之后，entry 中就存在 key 为 null ，但是 value 有值的 entry 对象，但是永远没办法被访问到，同样除非线程结束运行。<strong>解决方法就是调用 remove 方法删除 entry 对象</strong>。</li></ul><h2 id="_34-一个对象的内存布局是怎么样的" tabindex="-1"><a class="header-anchor" href="#_34-一个对象的内存布局是怎么样的" aria-hidden="true">#</a> 34.一个对象的内存布局是怎么样的?</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/baguwen/basic-34-16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>1.对象头</strong>:<br> 对象头又分为 <strong>MarkWord</strong> 和 <strong>Class Pointer</strong> 两部分。 <ul><li><strong>MarkWord</strong>:包含一系列的标记位，比如轻量级锁的标记位，偏向锁标记位,gc记录信息等等。</li><li><strong>ClassPointer</strong>:用来指向对象对应的 Class 对象（其对应的元数据对象）的内存地址。在 32 位系统占 4 字节，在 64 位系统中占 8 字节。</li></ul></li><li><strong>2.Length</strong>:只在数组对象中存在，用来记录数组的长度，占用 4 字节</li><li><strong>3.Instance data</strong>:<br> 对象实际数据，对象实际数据包括了对象的所有成员变量，其大小由各个成员变量的大小决定。(这里不包括静态成员变量，因为其是在方法区维护的)</li><li><strong>4.Padding</strong>:Java 对象占用空间是 8 字节对齐的，即所有 Java 对象占用 bytes 数必须是 8 的倍数,是因为当我们从磁盘中取一个数据时，不会说我想取一个字节就是一个字节，都是按照一块儿一块儿来取的，这一块大小是 8 个字节，所以为了完整，padding 的作用就是补充字节，<strong>保证对象是 8 字节的整数倍</strong>。</li></ul><hr>`,61),h={href:"https://mp.weixin.qq.com/s/aTWtqPyMQ-6P_c8iuMVrkg",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),v={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},p={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[n("微信搜 "),e("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),n(" 即可免费领取。")],-1),x=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function f(_,y){const t=l("ExternalLinkIcon");return s(),o("div",null,[g,e("p",null,[e("a",c,[n("关于双检锁可以参考"),i(t)])]),u,e("blockquote",null,[e("p",null,[n("作者：moon聊技术，转载链接："),e("a",h,[n("https://mp.weixin.qq.com/s/aTWtqPyMQ-6P_c8iuMVrkg"),i(t)])])]),b,e("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),e("a",v,[n("二哥的 Java 进阶之路"),i(t)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",p,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),i(t)])]),m,x])}const w=a(d,[["render",f],["__file","java-34.html.vue"]]);export{w as default};
