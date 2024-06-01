import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as t}from"./app-BxE1B5z1.js";const h={},n=t(`<h1 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h1><h1 id="常用的-api" tabindex="-1"><a class="header-anchor" href="#常用的-api"><span>常用的 API</span></a></h1><h2 id="flatmap" tabindex="-1"><a class="header-anchor" href="#flatmap"><span>* flatMap()</span></a></h2><blockquote><p>在 Java 中，<code>flatMap()</code> 是 Stream API 中的一个方法，它用于将流中的每个元素映射为一个流，然后将这些流合并为单个流。它的作用是将多个流扁平化为一个流，常用于处理嵌套集合或映射的情况。</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> nestedList </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Arrays</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Arrays</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Arrays</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Arrays</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> flattenedList </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> nestedList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">flatMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(List</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">stream)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Collectors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(flattenedList);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach"><span>* forEach()</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>list.stream().forEach(System.out::println);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1><blockquote><p><a href="https://www.yuque.com/bravo1988/java/bacf3g#pArKK" target="_blank" rel="noopener noreferrer">取两个集合的某个字段的并集</a></p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">husbands</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">flatMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                husbands1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> wives</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(wives1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> husbands1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getFamilyId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wives1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getFamilyId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                        //不理解这里husbands1怎么就绑上了wives1，而不是按照husbands1 list 取</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(wives1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> husbands1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getUserName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wives1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getUserName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Collectors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">println);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),e=[n];function l(k,p){return a(),i("div",null,e)}const B=s(h,[["render",l],["__file","Steam.html.vue"]]),g=JSON.parse('{"path":"/studynotes/JavaSE/Steam.html","title":"Stream","lang":"zh-CN","frontmatter":{"description":"Stream 常用的 API * flatMap() 在 Java 中，flatMap() 是 Stream API 中的一个方法，它用于将流中的每个元素映射为一个流，然后将这些流合并为单个流。它的作用是将多个流扁平化为一个流，常用于处理嵌套集合或映射的情况。 * forEach() FAQ 取两个集合的某个字段的并集","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/JavaSE/Steam.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"Stream"}],["meta",{"property":"og:description","content":"Stream 常用的 API * flatMap() 在 Java 中，flatMap() 是 Stream API 中的一个方法，它用于将流中的每个元素映射为一个流，然后将这些流合并为单个流。它的作用是将多个流扁平化为一个流，常用于处理嵌套集合或映射的情况。 * forEach() FAQ 取两个集合的某个字段的并集"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T08:39:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T08:39:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stream\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T08:39:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"* flatMap()","slug":"flatmap","link":"#flatmap","children":[]},{"level":2,"title":"* forEach()","slug":"foreach","link":"#foreach","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1712997543000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"studynotes/JavaSE/Steam.md","localizedDate":"2024年4月13日","autoDesc":true}');export{B as comp,g as data};
