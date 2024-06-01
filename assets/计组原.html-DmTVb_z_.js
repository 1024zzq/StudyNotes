import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as p,c as l,e,f as t,b as n,w as i,a as o}from"./app-Bqq4MDVB.js";const d={},h=e("h1",{id:"计组原",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计组原"},[e("span",null,"计组原")])],-1),u={id:"一、内存",tabindex:"-1"},_={class:"header-anchor",href:"#一、内存"},m={href:"https://zhuanlan.zhihu.com/p/41187907",target:"_blank",rel:"noopener noreferrer"},g=o('<h2 id="_1-理论" tabindex="-1"><a class="header-anchor" href="#_1-理论"><span>1. 理论</span></a></h2><h4 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h4><p><strong>内存是计算机系统的主存储器</strong> 介绍上面两个存储单位后就介绍下内存了。 <strong>内存作为1个存储数据的存在， 有1个很重要的特性， 就是内存里的数据能被cpu直接访问。</strong> cpu能不能直接访问硬盘的数据呢， 不能。 只能通过把硬盘的数据先放到内存里， 然后再从内存里访问硬盘的数据。我们平时玩游戏碰上读图loading 进度条的这个过程， 就是把数据从硬盘读到内存的过程啊。 读完条后地图的数据就在内存中了。 所以内存才是计算机系统的主存储器， 而硬盘是被分到跟光盘..u盘一类都是外部存储器</p><h4 id="_2-直接寻址技术" tabindex="-1"><a class="header-anchor" href="#_2-直接寻址技术"><span>2. 直接寻址技术</span></a></h4><p>当代计算机还实现了1个逆天的技术,就是直接寻址了. 什么意思呢, 还是用上面的例子说明, 假如你知道你要找的人住在那栋大楼的17楼 1702, 但是你还是需要从1楼走到17楼去找他, 这个过程还是需要时间成本的.</p><p>但是如果你具有了直接寻址技术, 就能直接跳到17楼 1702门前, 如果你找的下1个人在2楼, 又能从17楼直接跳到2楼, 逆天啊. 而直接寻址技术已经成为当代计算机软硬件的标准技术之一了, 也就是说只要cpu知道要访问数据的内存地址, 就能直接到内存的对应位置去访问数据!</p><h4 id="_3-内存地址的表示方式" tabindex="-1"><a class="header-anchor" href="#_3-内存地址的表示方式"><span>3. 内存地址的表示方式</span></a></h4><p>跟门牌号一样, 其实内存地址也是由1个2进制数字来表示的. 每1个地址对应内存里的1个byte字节, 如果地址的值加1, 那么这个地址就对应下1个字节了.</p><p>那么内存地址的长度是多少呢? 这个就是这篇文章标题所涉及的. 在32位操作系统中, <strong>内存的地址就是32位的2进制数</strong>, 那么假如32位系统的某个内存地址是: 0000 1111 1111 0000 1111 0000 1111 0000 那么它可以用十六进制表示成: 0 F F 0 F 0 F 0 也就是 <strong>Ox</strong>0ff0f0f0 前面Ox代表十六进制, 所以你见到这种字母数字混合一次的地址方式,就是这样得来的了, 它实际上是1个二进制的数字啊. 不过计算机里面所有的东西都是二进制了..</p><h4 id="_4-内存地址的数量决定cpu能访问的内存大小" tabindex="-1"><a class="header-anchor" href="#_4-内存地址的数量决定cpu能访问的内存大小"><span>4. <mark>内存地址的数量决定cpu能访问的内存大小</mark></span></a></h4><p>上面说了, 既然32位系统里内存地址长度是32位的. 所以32位的地址范围就是从 0000 0000 0000 0000 0000 0000 0000 0000 到 1111 1111 1111 1111 1111 1111 1111 1111 啦（Ox00000000 ~ OxFFFFFFFF)， 这里有几个地址呢？ 明显是有 2^32 个啦.</p><p>那么2^32到底是多少个？ 2^32 = 4 * 1024(G) * 1024(M) * 1024(K) = 4294967296 , 就是<strong>4G</strong> 啊, 而每1个地址对应1个1个字节， 容量就是1byte， 所以2^32个地址就总共能对应应<strong>4GB</strong> 的内存容量啊， 这里的B指的是byte 字节啊。</p><p><mark>假如你给32位的系统配上了8GB的内存， 操作系统最多也只能给其中4GB 分配地址， 其余 4GB 是没有地址， 因为地址不够用啊， 所以32位系统最多支持4GB内存就是这样来的。</mark></p><h4 id="补充评论-没有深入探究了、尽信书-不如无书" tabindex="-1"><a class="header-anchor" href="#补充评论-没有深入探究了、尽信书-不如无书"><span>补充评论（没有深入探究了、尽信书，不如无书）</span></a></h4><p>这个转载的文章误人子弟了。前面说的都对，后面就驴头不对马嘴了。32位操作系统，指的是寄存器是32位，一次内存数据流宽度是32位。但是不是说内存地址也必须32位。内存大小是由硬件和操作系统两个方面决定的。硬件是地址总线，地址总线如果是32个，那么就最多支持4G，但是地址总线一般大于等于数据总线，如果地址总线是36个，那么硬件支持内存就大于4G了。还有操作系统，那是虚拟地址了。就算地址总线有36个，操作系统支持的虚拟地址只有32位，那也仅仅支持4G内存。内存大小是由硬件和操作系统两方制约的（还有其他小的制约因素）。至于文中说的32位操作系统，指的是寄存器位数，和内存大小没多大关系。地址总线36位，如果寄存器位数32位，可以通过读取两次，完成内存地址定位。</p>',15),f={id:"_2-实际",tabindex:"-1"},b={class:"header-anchor",href:"#_2-实际"},k={href:"https://blog.csdn.net/Castlehe/article/details/117566303",target:"_blank",rel:"noopener noreferrer"},y=e("h4",{id:"_1-线程数和逻辑cpu个数-内核个数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-线程数和逻辑cpu个数-内核个数"},[e("span",null,"1. 线程数和逻辑CPU个数，内核个数")])],-1),C=e("p",null,[e("strong",null,"1 CPU 4 Core 8 Thread")],-1),x=e("p",null,[t("在任务管理器中，看到其实是4个内核，但是逻辑处理器是8个，有多少个逻辑处理器，就可以开多少个线程。 "),e("strong",null,"线程数=逻辑处理器个数"),e("img",{src:"https://img-blog.csdnimg.cn/20210604164533979.png",alt:"在这里插入图片描述",style:{zoom:"25%"}})],-1),P=e("li",null,[t("一个"),e("code",null,"物理内核"),t("可以作为1个或者2个"),e("code",null,"逻辑CPU")],-1),v=o(`<blockquote><p>操作系统可以使用逻辑CPU来模拟真实CPU。 在没有多核处理器的时候，一个物理CPU只能有一个物理内核， 有了多核技术，一个物理CPU可以有多个物理内核，可以把一个CPU当作多个CPU使用，即逻辑CPU。 没有开启超线程时，逻辑CPU的个数就是总的CPU物理内核数。 开启超线程后，逻辑CPU的个数就是总的CPU物理内核数的两倍。</p></blockquote><p>实际能看到的2个物理CPU:</p><img src="https://img-blog.csdnimg.cn/20210604165526341.png" style="zoom:50%;"><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> cpu_count
<span class="token keyword">print</span><span class="token punctuation">(</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在python中，使用上述代码可以获取当前系统的逻辑cpu个数，也就是<mark>支持并发的线程个数。</mark></p>`,5);function U(F,B){const a=s("ExternalLinkIcon"),r=s("font");return p(),l("div",null,[h,e("h1",u,[e("a",_,[e("span",null,[t("一、"),e("a",m,[t("内存"),n(a)])])])]),g,e("h2",f,[e("a",b,[e("span",null,[t("2. "),e("a",k,[t("实际"),n(a)])])])]),y,C,x,e("ul",null,[e("li",null,[n(r,{color:"red"},{default:i(()=>[t("一个`物理CPU`可以有1个或者多个`物理内核`")]),_:1})]),P]),v])}const G=c(d,[["render",U],["__file","计组原.html.vue"]]),T=JSON.parse('{"path":"/studynotes/408-PC/%E8%AE%A1%E7%BB%84%E5%8E%9F.html","title":"计组原","lang":"zh-CN","frontmatter":{"description":"计组原 一、内存 1. 理论 1. 前言 内存是计算机系统的主存储器 介绍上面两个存储单位后就介绍下内存了。 内存作为1个存储数据的存在， 有1个很重要的特性， 就是内存里的数据能被cpu直接访问。 cpu能不能直接访问硬盘的数据呢， 不能。 只能通过把硬盘的数据先放到内存里， 然后再从内存里访问硬盘的数据。我们平时玩游戏碰上读图loading 进度条...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/408-PC/%E8%AE%A1%E7%BB%84%E5%8E%9F.html"}],["meta",{"property":"og:site_name","content":"Zz"}],["meta",{"property":"og:title","content":"计组原"}],["meta",{"property":"og:description","content":"计组原 一、内存 1. 理论 1. 前言 内存是计算机系统的主存储器 介绍上面两个存储单位后就介绍下内存了。 内存作为1个存储数据的存在， 有1个很重要的特性， 就是内存里的数据能被cpu直接访问。 cpu能不能直接访问硬盘的数据呢， 不能。 只能通过把硬盘的数据先放到内存里， 然后再从内存里访问硬盘的数据。我们平时玩游戏碰上读图loading 进度条..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T02:42:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-01T02:42:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计组原\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T02:42:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 理论","slug":"_1-理论","link":"#_1-理论","children":[]},{"level":2,"title":"2. 实际","slug":"_2-实际","link":"#_2-实际","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1717209768000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":5.14,"words":1543},"filePathRelative":"studynotes/408-PC/计组原.md","localizedDate":"2024年4月13日","autoDesc":true}');export{G as comp,T as data};
