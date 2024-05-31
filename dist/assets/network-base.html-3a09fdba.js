import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as o,a as e,d as i,b as t,e as d}from"./app-72970f25.js";const c={},s=d(`<h1 id="_11-1-了解网络编程的基础知识" tabindex="-1"><a class="header-anchor" href="#_11-1-了解网络编程的基础知识" aria-hidden="true">#</a> 11.1 了解网络编程的基础知识</h1><p>在学习 Java 网络编程之前，我们先来了解什么是计算机网络。</p><p>计算机网络是指两台或更多的计算机组成的网络，在同一个网络中，任意两台计算机都可以直接通信，因为所有计算机都需要遵循同一种网络协议。</p><p>下面是一张简化的网络拓扑图。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/network-base-20230330181204.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>用户设备：Laptop，用于访问网络资源。</li><li>网络交换机：Switch，用于连接局域网内的设备，例如 Laptop 和 Router。</li><li>路由器：Router，用于连接不同网络，将局域网与互联网相连。</li><li>防火墙：Firewall，用于保护网络内部资源，阻止未经授权的访问。</li><li>互联网：Internet，提供连接到其他网络和全球信息资源。</li><li>服务器：Server，用于托管网络应用程序和数据。</li></ul><p>那什么是互联网呢？互联网是网络的网络（Internet），即把很多计算机网络连接起来，形成一个全球统一的互联网。</p><p>对某个特定的计算机网络来说，它可能使用网络协议 ABC，而另一个计算机网络可能使用网络协议 XYZ。如果计算机网络各自的通讯协议不统一，就没法把不同的网络连接起来形成互联网。因此，为了把计算机网络接入互联网，就必须使用 TCP/IP 协议。</p><p>TCP/IP 协议泛指互联网协议，其中最重要的两个协议是 TCP 协议和 IP 协议。只有使用 TCP/IP 协议的计算机才能够联入互联网，使用其他网络协议（例如 NetBIOS、AppleTalk 协议等）是无法联入互联网的。</p><h3 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> IP 地址</h3><p>在互联网中，一个 IP 地址用于唯一标识一个网络接口（Network Interface）。一台联入互联网的计算机肯定有一个 IP 地址，但也可能有多个 IP 地址。</p><p>IP 地址分为 IPv4 和 IPv6 两种。IPv4 采用 32 位地址，类似<code>101.202.99.12</code>，而 IPv6 采用 128 位地址，类似<code>2001:0DA8:100A:0000:0000:1020:F2F3:1428</code>。IPv4 地址总共有 232 个（大约 42 亿），而 IPv6 地址则总共有 2128 个（大约 340 万亿亿亿亿），IPv4 的地址目前已耗尽，而 IPv6 的地址是根本用不完的。</p><p>IP 地址又分为公网 IP 地址和内网 IP 地址。公网 IP 地址可以直接被访问，内网 IP 地址只能在内网访问。内网 IP 地址类似于：</p><ul><li>192.168.x.x</li><li>10.x.x.x</li></ul><p>有一个特殊的 IP 地址，称之为本机地址，它总是<code>127.0.0.1</code>。</p><p>IPv4 地址实际上是一个 32 位整数。例如：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>1707762444 = 0x65ca630c
           = 65  ca  63 0c
           = 101.202.99.12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一台计算机只有一个网卡，并且接入了网络，那么，它有一个本机地址<code>127.0.0.1</code>，还有一个 IP 地址，例如<code>101.202.99.12</code>，可以通过这个 IP 地址接入网络。</p><p>如果一台计算机有两块网卡，那么除了本机地址，它可以有两个 IP 地址，可以分别接入两个网络。通常连接两个网络的设备是路由器或者交换机，它至少有两个 IP 地址，分别接入不同的网络，让网络之间连接起来。</p><p>如果两台计算机位于同一个网络，那么他们之间可以直接通信，因为他们的 IP 地址前段是相同的，也就是网络号是相同的。网络号是 IP 地址通过子网掩码过滤后得到的。例如：</p><p>某台计算机的 IP 是<code>101.202.99.2</code>，子网掩码是<code>255.255.255.0</code>，那么计算该计算机的网络号是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IP = 101.202.99.2
Mask = 255.255.255.0
Network = IP &amp; Mask = 101.202.99.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每台计算机都需要正确配置 IP 地址和子网掩码，根据这两个就可以计算网络号，如果两台计算机计算出的网络号相同，说明两台计算机在同一个网络，可以直接通信。如果两台计算机计算出的网络号不同，那么两台计算机不在同一个网络，不能直接通信，它们之间必须通过路由器或者交换机这样的网络设备间接通信，我们把这种设备称为网关。</p><p>网关的作用就是连接多个网络，负责把来自一个网络的数据包发到另一个网络，这个过程叫路由。</p><p>所以，一台计算机的一个网卡会有 3 个关键配置：</p><ul><li>IP 地址，例如：<code>10.0.2.15</code></li><li>子网掩码，例如：<code>255.255.255.0</code></li><li>网关的 IP 地址，例如：<code>10.0.2.2</code></li></ul><h3 id="域名" tabindex="-1"><a class="header-anchor" href="#域名" aria-hidden="true">#</a> 域名</h3><p>因为直接记忆 IP 地址非常困难，所以我们通常使用域名访问某个特定的服务。域名解析服务器 DNS 负责把域名翻译成对应的 IP，客户端再根据 IP 地址访问服务器。</p><p>用<code>nslookup</code>可以查看域名对应的 IP 地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ nslookup www.tobebetterjavaer.com
Server:  xxx.xxx.xxx.xxx
Address: xxx.xxx.xxx.xxx#53

Non-authoritative answer:
Name:    www.tobebetterjavaer.com
Address: 47.98.33.223
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一个特殊的本机域名<code>localhost</code>，它对应的 IP 地址总是本机地址<code>127.0.0.1</code>。</p><h3 id="网络模型" tabindex="-1"><a class="header-anchor" href="#网络模型" aria-hidden="true">#</a> 网络模型</h3><p>由于计算机网络从底层的传输到高层的软件设计十分复杂，要合理地设计计算机网络模型，必须采用分层模型，每一层负责处理自己的操作。OSI（Open System Interconnect）网络模型是 ISO 组织定义的一个计算机互联的标准模型，注意它只是一个定义，目的是为了简化网络各层的操作，提供标准接口便于实现和维护。这个模型从上到下依次是：</p><ul><li>应用层，提供应用程序之间的通信；</li><li>表示层：处理数据格式，加解密等等；</li><li>会话层：负责建立和维护会话；</li><li>传输层：负责提供端到端的可靠传输；</li><li>网络层：负责根据目标地址选择路由来传输数据；</li><li>链路层和物理层负责把数据进行分片并且真正通过物理网络传输，例如，无线网、光纤等。</li></ul><p>互联网实际使用的 TCP/IP 模型并不是对应到 OSI 的 7 层模型，而是大致对应 OSI 的 5 层模型：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/network-base-20230330184256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="常用协议" tabindex="-1"><a class="header-anchor" href="#常用协议" aria-hidden="true">#</a> 常用协议</h3><p>IP 协议是一个分组交换，它不保证可靠传输。而 TCP 协议是传输控制协议，它是面向连接的协议，支持可靠传输和双向通信。TCP 协议是建立在 IP 协议之上的，简单地说，IP 协议只负责发数据包，不保证顺序和正确性，而 TCP 协议负责控制数据包传输，它在传输数据之前需要先建立连接，建立连接后才能传输数据，传输完后还需要断开连接。TCP 协议之所以能保证数据的可靠传输，是通过接收确认、超时重传这些机制实现的。并且，TCP 协议允许双向通信，即通信双方可以同时发送和接收数据。</p><p>TCP 协议也是应用最广泛的协议，许多高级协议都是建立在 TCP 协议之上的，例如 HTTP、SMTP 等。</p><p>TCP（传输控制协议）和 IP（互联网协议）通常一起使用，被称为 TCP/IP 协议。</p><p>TCP/IP 协议栈分为四层：应用层、传输层、网络层和链路层。IP 协议位于网络层，负责将数据包从源主机路由到目标主机；TCP 协议位于传输层，负责在源主机和目标主机之间建立可靠的连接并确保数据的有序传输。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/network-base-20230330185529.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>UDP 协议（User Datagram Protocol）是一种数据报文协议，它是无连接协议，不保证可靠传输。因为 UDP 协议在通信前不需要建立连接，因此它的传输效率比 TCP 高，而且 UDP 协议比 TCP 协议要简单得多。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/network-base-20230330190328.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择 UDP 协议时，传输的数据通常是能容忍丢失的，例如，一些语音视频通信的应用会选择 UDP 协议。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>计算机网络的基本概念主要有：</p><ul><li>计算机网络：由两台或更多计算机组成的网络；</li><li>互联网：连接网络的网络；</li><li>IP 地址：计算机的网络接口（通常是网卡）在网络中的唯一标识；</li><li>网关：负责连接多个网络，并在多个网络之间转发数据的计算机，通常是路由器或交换机；</li><li>网络协议：互联网使用 TCP/IP 协议，它泛指互联网协议簇；</li><li>IP 协议：一种分组交换传输协议；</li><li>TCP 协议：一种面向连接，可靠传输的协议；</li><li>UDP 协议：一种无连接，不可靠传输的协议。</li></ul>`,48),p={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1305163149082658",target:"_blank",rel:"noopener noreferrer"},P=e("hr",null,null,-1),u={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[i("微信搜 "),e("strong",null,"沉默王二"),i(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),i(" 即可免费领取。")],-1),I=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function b(g,x){const a=l("ExternalLinkIcon");return r(),o("div",null,[s,e("blockquote",null,[e("p",null,[i("参考链接："),e("a",p,[i("https://www.liaoxuefeng.com/wiki/1252599548343744/1305163149082658"),t(a)]),i("，作者：廖雪峰，整理：沉默王二")])]),P,e("p",null,[i("GitHub 上标星 10000+ 的开源知识库《"),e("a",u,[i("二哥的 Java 进阶之路"),t(a)]),i("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",v,[i("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),h,I])}const _=n(c,[["render",b],["__file","network-base.html.vue"]]);export{_ as default};
