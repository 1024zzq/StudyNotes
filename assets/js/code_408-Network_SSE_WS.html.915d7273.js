"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8468],{9874:(e,t)=>{t.A=(e,t)=>{const s=e.__vccOpts||e;for(const[e,i]of t)s[e]=i;return s}},5618:(e,t,s)=>{s.r(t),s.d(t,{comp:()=>r,data:()=>p});var i=s(2360);const a=[(0,i.Fv)('<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h1><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h3><p><strong>双向实时通信</strong>，特有的ws协议，可跨域 填补HTTP在实时通讯的不足</p><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h3><p>适用低延迟实时通讯</p><p>即时消息传递、音视频通话、在线会议和实时数据传输等，可以实现即时的数据传输和交流，不需要用户主动请求或刷新来获取更新数据 协同编辑，想象语雀文档/腾讯文档</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>如果这时候是<strong>想建立 websocket 连接</strong>，就会在 HTTP 请求里带上一些<strong>特殊的 header 头</strong> 告诉服务器，我想从HTTP升级成WS</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Connection: Upgrade</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Upgrade: websocket</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Sec-WebSocket-Key: T</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">wZlAwhgQNqruZ</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">YUyg==\\r\\n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>header 头的意思是，浏览器想<strong>升级协议（Connection: Upgrade）</strong>，并且<strong>想升级成 websocket 协议（Upgrade: websocket）</strong>。</p></li><li><p>同时带上一段<strong>随机生成的 base64 码（Sec-WebSocket-Key）</strong>，发给服务器。 如果服务器正好支持升级成 websocket 协议。就会走 websocket 握手流程，同时根据客户端生成的 base64 码，用某个<strong>公开的</strong>算法变成另一段字符串，放在 HTTP 响应的 <code>Sec-WebSocket-Accept</code> 头里，同时带上<code>101状态码</code>，发回给浏览器。</p><blockquote><p>http 状态码=200（正常响应）的情况，大家见得多了。101 确实不常见，它其实是指<strong>协议切换</strong>。</p></blockquote></li><li></li></ul><p>![image-20240706104311784](/Users/xd/Library/Application Support/typora-user-images/image-20240706104311784.png)</p><h3 id="心跳机制" tabindex="-1"><a class="header-anchor" href="#心跳机制"><span>心跳机制</span></a></h3><p>为了保持 WebSocket 稳定的长连接，在连接建立之后，服务器和客户端之间通过心跳包来保持连接状态，以防止连接因为长时间没有数据传输而被切断。</p><p>一种特殊的数据包不包含任何实际数据，仅用来维持连接状态一个空数据帧</p><p>定期发送，确保链接仍然有效，避免长时间没有数据传输而被中断</p><p>如果一段时间内没有收到对方的心跳包，就可以认为连接已经断开</p><p>扫码原理：HTTP定时轮询（弊端多！） -》 百度网盘：长轮询</p><p>https://www.bilibili.com/video/BV1Rh4y167Uh?t=122.6 【视频挺好】 https://www.bilibili.com/video/BV19N411474y?t=97.0</p><p>到网站笔记整理</p><p>https://golangguide.top/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%E7%82%B9/%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89HTTP%E5%8D%8F%E8%AE%AE%EF%BC%8C%E8%BF%98%E8%A6%81%E6%9C%89websocket%E5%8D%8F%E8%AE%AE.html</p><h3 id="醍醐灌顶" tabindex="-1"><a class="header-anchor" href="#醍醐灌顶"><span>醍醐灌顶</span></a></h3><p><strong>HTTP/1.1 是一种半双工协议，而不是全双工协议。</strong>(设计之初只考虑看看网页，没考虑网页游戏 )</p><p><strong>相比之下，HTTP/2 是全双工协议。HTTP/2 允许同时在同一连接上双向传输多个消息（即多路复用），从而显著提高了传输效率和速度。这使得 HTTP/2 可以更有效地利用网络资源，减少延迟</strong></p><h1 id="sse" tabindex="-1"><a class="header-anchor" href="#sse"><span>SSE</span></a></h1><blockquote><p>ALMP 大语言模型平台用到 - 用户给Bot发消息</p></blockquote><p>Web服务端推送技术</p><p>单向通信，http GET实际还是它，不可跨域</p>',27)],n={},r=(0,s(9874).A)(n,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,a)}]]),p=JSON.parse('{"path":"/code/408-Network/SSE_WS.html","title":"WebSocket","lang":"zh-CN","frontmatter":{"description":"WebSocket 优势 双向实时通信，特有的ws协议，可跨域 填补HTTP在实时通讯的不足 场景 适用低延迟实时通讯 即时消息传递、音视频通话、在线会议和实时数据传输等，可以实现即时的数据传输和交流，不需要用户主动请求或刷新来获取更新数据 协同编辑，想象语雀文档/腾讯文档 使用 如果这时候是想建立 websocket 连接，就会在 HTTP 请求里带...","head":[["meta",{"property":"og:url","content":"https://zzq8.cn/code/408-Network/SSE_WS.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"WebSocket"}],["meta",{"property":"og:description","content":"WebSocket 优势 双向实时通信，特有的ws协议，可跨域 填补HTTP在实时通讯的不足 场景 适用低延迟实时通讯 即时消息传递、音视频通话、在线会议和实时数据传输等，可以实现即时的数据传输和交流，不需要用户主动请求或刷新来获取更新数据 协同编辑，想象语雀文档/腾讯文档 使用 如果这时候是想建立 websocket 连接，就会在 HTTP 请求里带..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zzq8.cn/Users/xd/Library/Application Support/typora-user-images/image-20240706104311784.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Piglet"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebSocket\\",\\"image\\":[\\"https://zzq8.cn/Users/xd/Library/Application Support/typora-user-images/image-20240706104311784.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Piglet\\",\\"url\\":\\"https://zzq8.cn\\"}]}"]]},"headers":[{"level":3,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":3,"title":"场景","slug":"场景","link":"#场景","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"心跳机制","slug":"心跳机制","link":"#心跳机制","children":[]},{"level":3,"title":"醍醐灌顶","slug":"醍醐灌顶","link":"#醍醐灌顶","children":[]}],"git":{"createdTime":1720364060000,"contributors":[{"name":"MiniPC","email":"1024zzq@gmail.com","commits":2}]},"readingTime":{"minutes":2.49,"words":746},"filePathRelative":"code/408-Network/SSE&WS.md","localizedDate":"2024年7月7日","excerpt":"\\n<h3>优势</h3>\\n<p><strong>双向实时通信</strong>，特有的ws协议，可跨域\\n填补HTTP在实时通讯的不足</p>","autoDesc":true}')}}]);