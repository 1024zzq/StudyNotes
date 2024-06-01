import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as s}from"./app-BxE1B5z1.js";const i={},r=s(`<blockquote><p>2022/2/21</p><p>起因是看到别人博客搞了个文件系统很多文件且文件很大，兴趣就来了。经过了解发现是挂载了阿里云盘，用的ShareList技术。</p><p>于是乎我也想整一个。昨天折腾了一下午换来了一个501，今天终于弄好了。</p></blockquote><h1 id="sharelist挂载阿里云盘" tabindex="-1"><a class="header-anchor" href="#sharelist挂载阿里云盘"><span>ShareList挂载阿里云盘</span></a></h1><h2 id="一、操作" tabindex="-1"><a class="header-anchor" href="#一、操作"><span>一、操作</span></a></h2><p>找了很多篇文章，踩了很多坑。用了docker，用了宝塔，也自己试着二进制装跑bash。结果都没能达成目的。折腾了半天结果发现有大佬开发的一键脚本。</p><p>真正让我成功的是这篇文章：</p><p>https://media.cooluc.com/source/sharelist</p><p>想看更详细点的就这篇：</p><p>https://zhuanlan.zhihu.com/p/398231563?ivk_sa=1024320u</p><p>其他的就不用看了，已经全部帮忙踩过一遍坑了。</p><h2 id="二、注意点" tabindex="-1"><a class="header-anchor" href="#二、注意点"><span>二、注意点</span></a></h2><p>唯一需要注意的是：</p><p><strong>目录加密</strong></p><p>在需加密目录内新建 <code>.passwd</code> 文件，<code>type</code>为验证方式，<code>data</code>为验证内容。 目前只支持用户名密码对加密（由<a href="https://github.com/reruin/sharelist/blob/master/app/plugins/auth.basic.js" target="_blank" rel="noopener noreferrer">auth.basic</a>插件实现）。 例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>type: basic </span></span>
<span class="line"><span>data:   </span></span>
<span class="line"><span>	- user1:111111   </span></span>
<span class="line"><span>	- user2:aaaaaa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>user1</code>用户可使用密码<code>111111</code>验证，<code>user2</code>用户可使用密码<code>aaaaaa</code>验证。和官方文档不一样。</p><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结"><span>三、总结</span></a></h2><p>最后放一下ShareList官方地址（里面有文档）：https://github.com/reruin/sharelist</p>`,17),n=[r];function o(p,c){return a(),t("div",null,n)}const d=e(i,[["render",o],["__file","ShareList挂载阿里云盘.html.vue"]]),m=JSON.parse('{"path":"/studynotes/ZOther/%E7%BD%91%E4%B8%8A%E5%86%B2%E6%B5%AA/ShareList%E6%8C%82%E8%BD%BD%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98.html","title":"ShareList挂载阿里云盘","lang":"zh-CN","frontmatter":{"description":"2022/2/21 起因是看到别人博客搞了个文件系统很多文件且文件很大，兴趣就来了。经过了解发现是挂载了阿里云盘，用的ShareList技术。 于是乎我也想整一个。昨天折腾了一下午换来了一个501，今天终于弄好了。 ShareList挂载阿里云盘 一、操作 找了很多篇文章，踩了很多坑。用了docker，用了宝塔，也自己试着二进制装跑bash。结果都没能...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/ZOther/%E7%BD%91%E4%B8%8A%E5%86%B2%E6%B5%AA/ShareList%E6%8C%82%E8%BD%BD%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"ShareList挂载阿里云盘"}],["meta",{"property":"og:description","content":"2022/2/21 起因是看到别人博客搞了个文件系统很多文件且文件很大，兴趣就来了。经过了解发现是挂载了阿里云盘，用的ShareList技术。 于是乎我也想整一个。昨天折腾了一下午换来了一个501，今天终于弄好了。 ShareList挂载阿里云盘 一、操作 找了很多篇文章，踩了很多坑。用了docker，用了宝塔，也自己试着二进制装跑bash。结果都没能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T08:39:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T08:39:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShareList挂载阿里云盘\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T08:39:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、操作","slug":"一、操作","link":"#一、操作","children":[]},{"level":2,"title":"二、注意点","slug":"二、注意点","link":"#二、注意点","children":[]},{"level":2,"title":"三、总结","slug":"三、总结","link":"#三、总结","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1712997543000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":1.05,"words":316},"filePathRelative":"studynotes/ZOther/网上冲浪/ShareList挂载阿里云盘.md","localizedDate":"2024年4月13日","autoDesc":true}');export{d as comp,m as data};
