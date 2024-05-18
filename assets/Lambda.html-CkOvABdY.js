import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-RV1sWrnF.js";const t={},p=e(`<h1 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda"><span>Lambda</span></a></h1><blockquote><p>自己买了一本小书很不错 《Java 8函数式编程》</p><p>Lambda vs Stream</p><p>Lambda表达式是一种简洁而强大的语法特性，它允许我们以更紧凑的方式编写匿名函数。Lambda表达式可以作为参数传递给方法或函数式接口，并且可以更方便地处理集合数据</p><p>stream流可以看作是for循环的一个语法糖； stream有并发流，在超过百万级数据量时，使用stream流效率更高；</p></blockquote><h2 id="zero、xd" tabindex="-1"><a class="header-anchor" href="#zero、xd"><span>Zero、XD</span></a></h2><h2 id="mp-框架api-get-it" tabindex="-1"><a class="header-anchor" href="#mp-框架api-get-it"><span>MP 框架API(Get It)</span></a></h2><p>MP中有Lambda的Wrapper（为了避免了字段硬编码和拼写错误的问题，即使用普通QueryWrapper的缺陷）</p><blockquote><p>对于 <code>QueryWrapper</code> 类的 <code>like</code> 方法，它不支持使用 Lambda 表达式作为参数。只有 <code>LambdaQueryWrapper</code> 类支持使用 Lambda 表达式。</p><p>在 <code>LambdaQueryWrapper</code> 中，我们可以使用 <code>Role::getRoleName</code> 来指定查询条件的字段。而在 <code>QueryWrapper</code> 中，我们需要使用字符串 <code>&quot;role_name&quot;</code> 来指定数据库表中的字段名。</p><p><mark>TODO 搞不懂这里的第一个参数的Lambda为什么拿的是@TableField(&quot;role_name&quot;)的值</mark></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//创建条件构造器对象</span>
<span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//TODO 搞不懂这里的第一个参数的Lambda为什么拿的是@TableField(&quot;role_name&quot;)的值   private String roleName;</span>
wrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">Role</span><span class="token operator">::</span><span class="token function">getRoleName</span><span class="token punctuation">,</span>roleName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>😡TODO：这两个类的<code>like</code> 方法是通过继承父类 <code>AbstractWrapper</code> 来获得，具体在这两个类中也没看到重写，不清楚怎么弄的？？？ ctrl+p方法签名里面有AnnotationFunction，但是实际点击源码看没看到（ctrl+左键看不到！）</p><p>既然这两个类都是通过继承父类AbstractWrapper获得的like方法，那么父类怎么区分这两个类分别给他们各自的like实现</p><p>这种差异是因为 <code>LambdaQueryWrapper</code> 类在设计时针对 Lambda 表达式进行了特殊处理，以提供更加便捷的语法。而 <code>QueryWrapper</code> 类则是基于传统的字符串字段名的方式。</p><figure><img src="http://images.zzq8.cn/img/image-20230902215155311.png" alt="image-20230902215155311" tabindex="0" loading="lazy"><figcaption>image-20230902215155311</figcaption></figure><h2 id="一、lambda表达式简介" tabindex="-1"><a class="header-anchor" href="#一、lambda表达式简介"><span>一、Lambda表达式简介</span></a></h2><h3 id="什么是lambda" tabindex="-1"><a class="header-anchor" href="#什么是lambda"><span>什么是Lambda？</span></a></h3><p>Lambda是JAVA 8添加的新特性，说白了，Lambda是一个匿名函数</p><h3 id="为什么使用lambda" tabindex="-1"><a class="header-anchor" href="#为什么使用lambda"><span>为什么使用Lambda</span></a></h3><p>使用Lambda表达式可以对一个接口的方法进行非常简洁的实现</p><h3 id="lambda对接口的要求" tabindex="-1"><a class="header-anchor" href="#lambda对接口的要求"><span>Lambda对接口的要求</span></a></h3><p>虽然可以使用Lambda表达式对某些接口进行简单的实现，但是并不是所有的接口都可以用Lambda表达式来实现，要求接口中定义的<strong>必须要实现的抽象方法只能是一个</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在JAVA8中 ，对接口加了一个新特性：default
可以使用default对接口方法进行修饰，被修饰的方法在接口中可以默认实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="functionalinterface" tabindex="-1"><a class="header-anchor" href="#functionalinterface"><span>@FunctionalInterface</span></a></h3><p>修饰函数式接口的，接口中的抽象方法只有一个</p><p><strong>问了ChatGPT：常用的</strong></p><ol><li><code>Supplier&lt;T&gt;</code>：该接口不接受任何参数，返回一个值。它可以用来创建和返回对象，类似于工厂方法。</li><li><code>Consumer&lt;T&gt;</code>：该接口接受一个参数，但不返回任何值。它可以用来对数据进行消费，例如打印或写入文件等操作。</li><li><code>Function&lt;T, R&gt;</code>：该接口接受一个参数，并返回一个结果。它可以用来对数据进行转换，例如将一个字符串转换成一个整数。</li><li><code>BiFunction&lt;T, U, R&gt;</code>：两个参数，一个结果</li><li><code>Predicate&lt;T&gt;</code>：该接口接受一个参数，返回一个布尔值。它可以用来进行条件判断，例如判断一个数是否大于某个阈值。</li></ol><h2 id="二、lambda的基础语法" tabindex="-1"><a class="header-anchor" href="#二、lambda的基础语法"><span>二、Lambda的基础语法</span></a></h2><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法"><span>1.语法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1.Lambda表达式的基础语法</span>
<span class="token comment">// Lambda是一个匿名函数 一般关注的是以下两个重点</span>
<span class="token comment">// 参数列表 方法体</span>

<span class="token doc-comment comment">/**
* （）：用来描述参数列表
*  <span class="token punctuation">{</span><span class="token punctuation">}</span>：用来描述方法体 有时可以省略
*  -&gt;: Lambda运算符 读作goes to
*  例 Test t=()-&gt;<span class="token punctuation">{</span>System.out.println(&quot;hello word&quot;)<span class="token punctuation">}</span>; 大括号可省略
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建多个接口" tabindex="-1"><a class="header-anchor" href="#_2-创建多个接口"><span>2.创建多个接口</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 无参数无返回值接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:24
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaNoneReturnNoneParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 无返回值有单个参数
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:26
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaNoneReturnSingleParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 无返回值 多个参数的接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:27
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaNoneReturnMutipleParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 有返回值 无参数接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:28
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaSingleReturnNoneParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 有返回值 有单个参数的接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:29
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaSingleReturnSingleParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 有返回值 有多个参数的接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:30
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LambdaSingleReturnMutipleParmeter</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建测试类" tabindex="-1"><a class="header-anchor" href="#_3-创建测试类"><span>3.创建测试类</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>syntax</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 10:33
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Syntax1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.Lambda表达式的基础语法</span>
        <span class="token comment">// Lambda是一个匿名函数 一般关注的是以下两个重点</span>
        <span class="token comment">// 参数列表 方法体</span>

        <span class="token doc-comment comment">/**
         * （）：用来描述参数列表
         *  <span class="token punctuation">{</span><span class="token punctuation">}</span>：用来描述方法体
         *  -&gt;: Lambda运算符 读作goes to
         */</span>

        <span class="token comment">// 无参无返回  </span>
        <span class="token class-name">LambdaNoneReturnNoneParmeter</span> lambda1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello word&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        lambda1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 无返回值 单个参数 </span>
        <span class="token class-name">LambdaNoneReturnSingleParmeter</span> lambda2<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;参数是：&quot;</span><span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        lambda2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 无返回值 多个参数</span>
        <span class="token class-name">LambdaNoneReturnMutipleParmeter</span> lambda3<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;参数和是：&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        lambda3<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有返回值 无参数</span>
        <span class="token class-name">LambdaSingleReturnNoneParmeter</span> lambda4<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;lambda4：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ret<span class="token operator">=</span>lambda4<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;返回值是：&quot;</span><span class="token operator">+</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有返回值 单个参数</span>
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda5<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ret2<span class="token operator">=</span> lambda5<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;单个参数，lambda5返回值是:&quot;</span><span class="token operator">+</span>ret2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//有返回值 多个参数</span>
        <span class="token class-name">LambdaSingleReturnMutipleParmeter</span> lambda6<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ret3<span class="token operator">=</span>lambda6<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;多个参数，lambda6返回值是：&quot;</span><span class="token operator">+</span>ret3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

输出结果：
    hello word
	参数是：<span class="token number">10</span>
	参数和是：<span class="token number">22</span>
	lambda4：
	返回值是：<span class="token number">100</span>
	单个参数，lambda5返回值是<span class="token operator">:</span><span class="token number">6</span>
    多个参数，lambda6返回值是：<span class="token number">26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、语法精简" tabindex="-1"><a class="header-anchor" href="#三、语法精简"><span>三、语法精简</span></a></h2><p>针对上述基础语法的精简</p><h3 id="_1-参数类型精简" tabindex="-1"><a class="header-anchor" href="#_1-参数类型精简"><span>1.参数类型精简</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 语法精简
* 1.参数类型
* 由于在接口的抽象方法中，已经定义了参数的数量类型 所以在Lambda表达式中参数的类型可以省略
* 备注：如果需要省略类型，则每一个参数的类型都要省略，千万不要一个省略一个不省略
*/</span>
<span class="token class-name">LambdaNoneReturnMutipleParmeter</span> lambda1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>    
可以精简为<span class="token operator">:</span>
<span class="token class-name">LambdaNoneReturnMutipleParmeter</span> lambda1<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-参数小括号精简" tabindex="-1"><a class="header-anchor" href="#_2-参数小括号精简"><span>2.参数小括号精简</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 2.参数小括号
* 如果参数列表中，参数的数量只有一个 此时小括号可以省略
*/</span>
<span class="token class-name">LambdaNoneReturnSingleParmeter</span> lambda2<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
可以精简为<span class="token operator">:</span>
<span class="token class-name">LambdaNoneReturnSingleParmeter</span> lambda2<span class="token operator">=</span> a<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-方法大括号精简" tabindex="-1"><a class="header-anchor" href="#_3-方法大括号精简"><span>3.方法大括号精简</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 3.方法大括号
* 如果方法体中只有一条语句，此时大括号可以省略
*/</span>
<span class="token class-name">LambdaNoneReturnSingleParmeter</span> lambda3<span class="token operator">=</span>a<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
可以精简为<span class="token operator">:</span>
<span class="token class-name">LambdaNoneReturnSingleParmeter</span> lambda3<span class="token operator">=</span>a<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-大括号精简补充" tabindex="-1"><a class="header-anchor" href="#_4-大括号精简补充"><span>4.<mark>大括号精简补充</mark></span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 4.如果方法体中唯一的一条语句是一个返回语句
* 贼省略大括号的同时 也必须省略return
*/</span>
<span class="token class-name">LambdaSingleReturnNoneParmeter</span> lambda4<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
可以精简为<span class="token operator">:</span>
<span class="token class-name">LambdaSingleReturnNoneParmeter</span> lambda4<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-多参数-有返回值-精简" tabindex="-1"><a class="header-anchor" href="#_5-多参数-有返回值-精简"><span>5.多参数，有返回值 精简</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">LambdaSingleReturnNoneParmeter</span> lambda4<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
可以精简为<span class="token operator">:</span>
<span class="token class-name">LambdaSingleReturnMutipleParmeter</span> lambda5<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、lambda语法进阶" tabindex="-1"><a class="header-anchor" href="#四、lambda语法进阶"><span>四、Lambda语法进阶</span></a></h2><h3 id="_1-方法引用-普通方法与静态方法" tabindex="-1"><a class="header-anchor" href="#_1-方法引用-普通方法与静态方法"><span>1.方法引用(普通方法与静态方法)</span></a></h3><p>在实际应用过程中，一个接口在很多地方都会调用同一个实现，例如：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">LambdaSingleReturnMutipleParmeter</span> lambda1<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token class-name">LambdaSingleReturnMutipleParmeter</span> lambda2<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来每次都要写上具体的实现方法 a+b，如果需求变更，则每一处实现都需要更改，基于这种情况，可以将后续的是实现更改为已定义的 方法，需要时直接调用就行</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法：</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
*方法引用：
* 可以快速的将一个Lambda表达式的实现指向一个已经实现的方法
* 方法的隶属者 如果是静态方法 隶属的就是一个类  其他的话就是隶属对象
* 语法：方法的隶属者::方法名 (Classname::methodName)
* 注意：
*  1.引用的方法中，参数数量和类型一定要和接口中定义的方法一致
*  2.返回值的类型也一定要和接口中的方法一致
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/codezzq/blogImage/raw/master/img/1.bmp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>第一个参数是作为下面的方法调用者出现</p><figure><img src="https://gitee.com/codezzq/blogImage/raw/master/img/1231231245.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例：</span></a></h4><ul><li><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>syntax</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token class-name">LambdaSingleReturnSingleParmeter</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 11:48
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Syntax3</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda1<span class="token operator">=</span>a<span class="token operator">-&gt;</span>a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda2<span class="token operator">=</span>a<span class="token operator">-&gt;</span>a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda3<span class="token operator">=</span>a<span class="token operator">-&gt;</span>a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>

        <span class="token comment">//简化</span>
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda4<span class="token operator">=</span>a<span class="token operator">-&gt;</span><span class="token function">change</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//方法引用</span>
        <span class="token class-name">LambdaSingleReturnSingleParmeter</span> lambda5<span class="token operator">=</span><span class="token class-name">Syntax3</span><span class="token operator">::</span><span class="token function">change</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
    * 自定义的实现方法
    */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-方法引用-构造方法" tabindex="-1"><a class="header-anchor" href="#_2-方法引用-构造方法"><span>2.方法引用(构造方法)</span></a></h3><p>目前有一个实体类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Person的无参构造方法执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Person的有参构造方法执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求</p><p>两个接口，各有一个方法，一个接口的方法需要引用Person的无参构造，一个接口的方法需要引用Person的有参构造 用于返回两个Person对象，例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">PersonCreater</span><span class="token punctuation">{</span>
    <span class="token comment">//通过Person的无参构造实现</span>
    <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PersonCreater2</span><span class="token punctuation">{</span>
    <span class="token comment">//通过Person的有参构造实现</span>
    <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么可以写作：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Syntax4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">PersonCreater</span> creater<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//引用的是Person的无参构造</span>
         <span class="token comment">//PersonCreater接口的方法指向的是Person的方法</span>
        <span class="token class-name">PersonCreater</span> creater1<span class="token operator">=</span><span class="token class-name">Person</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span> <span class="token comment">//等价于上面的()-&gt;new Person()</span>
        <span class="token comment">//实际调用的是Person的无参构造 相当于把接口里的getPerson()重写成new Person()。</span>
        <span class="token class-name">Person</span> a<span class="token operator">=</span>creater1<span class="token punctuation">.</span><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

        <span class="token comment">//引用的是Person的有参构造</span>
        <span class="token class-name">PersonCreater2</span> creater2<span class="token operator">=</span><span class="token class-name">Person</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
        <span class="token class-name">Person</span> b<span class="token operator">=</span>creater2<span class="token punctuation">.</span><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：是引用无参构造还是引用有参构造 在于接口定义的方法参数</strong></p><h2 id="五、综合练习" tabindex="-1"><a class="header-anchor" href="#五、综合练习"><span>五、综合练习</span></a></h2><h3 id="_1-集合排序案例" tabindex="-1"><a class="header-anchor" href="#_1-集合排序案例"><span>1.集合排序案例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>exercise</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>data<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 集合排序案例
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 15:08
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Exercise1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//需求：已知在一个ArrayList中有若干各Person对象，将这些Person对象按照年龄进行降序排列</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李雷&quot;</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;韩梅梅&quot;</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序前：&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将排列的依据传入 具体的方法指向的是 内部元素的age相减 sort会依据结果的正负进行降序排列</span>
        <span class="token comment">//sort 使用提供的 Comparator对此列表进行排序以比较元素。</span>
        list<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> o2<span class="token punctuation">.</span>age<span class="token operator">-</span>o1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序后：&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-treeset排序案例" tabindex="-1"><a class="header-anchor" href="#_2-treeset排序案例"><span>2.Treeset排序案例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>exercise</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>data<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeSet</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 15:37
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Exercise2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**Treeset 自带排序
         * 但是现在不知道Person谁大谁小无法排序
         * 解决方法：
         * 使用Lambda表达式实现Comparator接口，并实例化一个TreeSet对象
         * 注意：在TreeSet中如果Comparator返回值是 0 会判断这是两个元素是相同的 会进行去重
         * TreeSet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Person</span><span class="token punctuation">&gt;</span></span> set=new TreeSet&lt;&gt;((o1, o2) -&gt; o2.age-o1.age); 
         * 这个获取的对象打印会少一个Person
         * 此时我们将方法修改
        */</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> set<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>o1<span class="token punctuation">.</span>age<span class="token operator">&gt;=</span>o2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李雷&quot;</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;韩梅梅&quot;</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-集合的遍历" tabindex="-1"><a class="header-anchor" href="#_3-集合的遍历"><span>3.集合的遍历</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>exercise</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 集合的遍历
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 15:52
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Exercise3</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * list.forEach(Consumer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>?</span> <span class="token attr-name">super</span> <span class="token attr-name">E</span><span class="token punctuation">&gt;</span></span> action) 
         * api文档解释： 对 集合中的每个元素执行给定的操作，直到所有元素都被处理或动作引发异常。
         * 将集合中的每一个元素都带入到接口Consumer的方法accept中  然后方法accept指向我们的引用
         * 输出集合中的所有元素
         * list.forEach(System.out::println);
        */</span>

        <span class="token comment">//输出集合中所有的偶数</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ele<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-删除集合中满足条件的元素" tabindex="-1"><a class="header-anchor" href="#_4-删除集合中满足条件的元素"><span>4.删除集合中满足条件的元素</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>exercise</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>data<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 删除集合中满足条件的元素
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 16:05
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Exercise4</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;李雷&quot;</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;韩梅梅&quot;</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//删除集合中年龄大于12的元素</span>
        <span class="token doc-comment comment">/**
         * 之前迭代器的做法
         * ListIterator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Person</span><span class="token punctuation">&gt;</span></span> it = list.listIterator();
         * while (it.hasNext())<span class="token punctuation">{</span>
         *   Person ele=it.next();
         *   if(ele.age&gt;12)<span class="token punctuation">{</span>
         *         it.remove();
         *   <span class="token punctuation">}</span>
         * <span class="token punctuation">}</span>
         */</span>

        <span class="token doc-comment comment">/**
         * lambda实现
         * 逻辑
         * 将集合中的每一个元素都带入到接口Predicate的test方法中，
         * 如果返回值是true，则删除这个元素
        */</span>
        list<span class="token punctuation">.</span><span class="token function">removeIf</span><span class="token punctuation">(</span>ele<span class="token operator">-&gt;</span>ele<span class="token punctuation">.</span>age<span class="token operator">&gt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-开辟一条线程-做一个数字的输出" tabindex="-1"><a class="header-anchor" href="#_5-开辟一条线程-做一个数字的输出"><span>5.开辟一条线程 做一个数字的输出</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>exercise</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 需求：
 * 开辟一条线程 做一个数字的输出
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 16:17
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Exercise5</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * 通过Runnable 来实例化线程
         */</span>
        <span class="token class-name">Thread</span> t<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、系统内置的函数式接口" tabindex="-1"><a class="header-anchor" href="#六、系统内置的函数式接口"><span>六、系统内置的函数式接口</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>functional</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 系统内置的一些函数式接口
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 16:23
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FunctionalInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// Predicate&lt;T&gt;              ：     参数是T 返回值boolean  </span>
        <span class="token comment">// 在后续如果一个接口需要指定类型的参数，返回boolean时可以指向 Predicate</span>
        <span class="token comment">//          IntPredicate            int -&gt; boolean</span>
        <span class="token comment">//          LongPredicate           long -&gt; boolean</span>
        <span class="token comment">//          DoublePredicate         double -&gt; boolean</span>

        <span class="token comment">// Consumer&lt;T&gt;               :      参数是T 无返回值(void)</span>
        <span class="token comment">//          IntConsumer             int -&gt;void</span>
        <span class="token comment">//          LongConsumer            long -&gt;void</span>
        <span class="token comment">//          DoubleConsumer          double -&gt;void</span>

        <span class="token comment">// Function&lt;T,R&gt;             :      参数类型T  返回值R</span>
        <span class="token comment">//          IntFunction&lt;R&gt;          int -&gt; R</span>
        <span class="token comment">//          LongFunction&lt;R&gt;         long -&gt; R</span>
        <span class="token comment">//          DoubleFunction&lt;R&gt;       double -&gt; R</span>
        <span class="token comment">//          IntToLongFunction       int -&gt; long</span>
        <span class="token comment">//          IntToDoubleFunction     int -&gt; double</span>
        <span class="token comment">//          LongToIntFunction       long -&gt; int</span>
        <span class="token comment">//          LongToDoubleFunction    long -&gt; double</span>
        <span class="token comment">//          DoubleToLongFunction    double -&gt; long</span>
        <span class="token comment">//          DoubleToIntFunction     double -&gt; int</span>

        <span class="token comment">// Supplier&lt;T&gt; : 参数 无 返回值T</span>
        <span class="token comment">// UnaryOperator&lt;T&gt; :参数T 返回值 T</span>
        <span class="token comment">// BiFunction&lt;T,U,R&gt; : 参数 T、U 返回值 R</span>
        <span class="token comment">// BinaryOperator&lt;T&gt; ：参数 T、T 返回值 T</span>
        <span class="token comment">// BiPredicate&lt;T,U&gt; :  参数T、U  返回值 boolean</span>
        <span class="token comment">// BiConsumer&lt;T,U&gt; :    参数T、U 无返回值</span>

        <span class="token doc-comment comment">/**
         * 常用的 函数式接口
         * Predicate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span>、Consumer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span>、Function<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T,R</span><span class="token punctuation">&gt;</span></span>、Supplier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span>
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、lambda闭包" tabindex="-1"><a class="header-anchor" href="#七、lambda闭包"><span>七、Lambda闭包</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>closure</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Supplier</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 16:59
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClosureDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * lambda的闭包会提升包围变量的生命周期
         * 所以局部变量 num在getNumber()方法内被 get()引用 不会在getNumber()方法执行后销毁
         * 这种方法可以在外部获取到某一个方法的局部变量
         */</span>
        <span class="token keyword">int</span> n<span class="token operator">=</span><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * Supplier supplier=()-&gt;num;
         * return supplier;
         */</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
    
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alan<span class="token punctuation">.</span>closure</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Alan
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2020-05-27 17:20
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClosureDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> c<span class="token operator">=</span>ele<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//System.out.println(ele);</span>
            <span class="token comment">//System.out.println(a++); 会报错</span>
            <span class="token comment">//在lambda中引用局部变量 这个变量必须是一个常量</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//a++; 这样也会导致内部报错</span>
        <span class="token comment">//如果在内部已经引用局部变量 参数传递后 打印的还是 10</span>
        c<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="stream流" tabindex="-1"><a class="header-anchor" href="#stream流"><span>Stream流</span></a></h1><h2 id="stream流可以收集多次吗" tabindex="-1"><a class="header-anchor" href="#stream流可以收集多次吗"><span>stream流可以收集多次吗？</span></a></h2><p>stream属于管道流，只能消费一次，当第一个stream流调用完毕方法,数据就会流转到下一个Stream上</p><p>而这时第一个stream流已经使用完毕，就会关闭了，所以第一个Stream流就不能再调用方法</p><h2 id="stream-map-时-stream是否已经被操作了" tabindex="-1"><a class="header-anchor" href="#stream-map-时-stream是否已经被操作了"><span>stream().map()时，stream是否已经被操作了？</span></a></h2><p>不是，stream流属于惰式执行。stream上的操作并不会立即执行，只有等到用户真正需要结果的时候才会执行。</p><p>作者：raxcl 链接：https://www.nowcoder.com/discuss/465219671411773440?sourceSSR=users 来源：牛客网</p>`,85),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","Lambda.html.vue"]]),k=JSON.parse('{"path":"/studynotes/JavaSE/Lambda.html","title":"Lambda","lang":"zh-CN","frontmatter":{"description":"Lambda 自己买了一本小书很不错 《Java 8函数式编程》 Lambda vs Stream Lambda表达式是一种简洁而强大的语法特性，它允许我们以更紧凑的方式编写匿名函数。Lambda表达式可以作为参数传递给方法或函数式接口，并且可以更方便地处理集合数据 stream流可以看作是for循环的一个语法糖； stream有并发流，在超过百万级数...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/JavaSE/Lambda.html"}],["meta",{"property":"og:site_name","content":"Zz"}],["meta",{"property":"og:title","content":"Lambda"}],["meta",{"property":"og:description","content":"Lambda 自己买了一本小书很不错 《Java 8函数式编程》 Lambda vs Stream Lambda表达式是一种简洁而强大的语法特性，它允许我们以更紧凑的方式编写匿名函数。Lambda表达式可以作为参数传递给方法或函数式接口，并且可以更方便地处理集合数据 stream流可以看作是for循环的一个语法糖； stream有并发流，在超过百万级数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://images.zzq8.cn/img/image-20230902215155311.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T08:39:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T08:39:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lambda\\",\\"image\\":[\\"http://images.zzq8.cn/img/image-20230902215155311.png\\",\\"https://gitee.com/codezzq/blogImage/raw/master/img/1.bmp\\",\\"https://gitee.com/codezzq/blogImage/raw/master/img/1231231245.PNG\\"],\\"dateModified\\":\\"2024-04-13T08:39:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Zero、XD","slug":"zero、xd","link":"#zero、xd","children":[]},{"level":2,"title":"MP 框架API(Get It)","slug":"mp-框架api-get-it","link":"#mp-框架api-get-it","children":[]},{"level":2,"title":"一、Lambda表达式简介","slug":"一、lambda表达式简介","link":"#一、lambda表达式简介","children":[{"level":3,"title":"什么是Lambda？","slug":"什么是lambda","link":"#什么是lambda","children":[]},{"level":3,"title":"为什么使用Lambda","slug":"为什么使用lambda","link":"#为什么使用lambda","children":[]},{"level":3,"title":"Lambda对接口的要求","slug":"lambda对接口的要求","link":"#lambda对接口的要求","children":[]},{"level":3,"title":"@FunctionalInterface","slug":"functionalinterface","link":"#functionalinterface","children":[]}]},{"level":2,"title":"二、Lambda的基础语法","slug":"二、lambda的基础语法","link":"#二、lambda的基础语法","children":[{"level":3,"title":"1.语法","slug":"_1-语法","link":"#_1-语法","children":[]},{"level":3,"title":"2.创建多个接口","slug":"_2-创建多个接口","link":"#_2-创建多个接口","children":[]},{"level":3,"title":"3.创建测试类","slug":"_3-创建测试类","link":"#_3-创建测试类","children":[]}]},{"level":2,"title":"三、语法精简","slug":"三、语法精简","link":"#三、语法精简","children":[{"level":3,"title":"1.参数类型精简","slug":"_1-参数类型精简","link":"#_1-参数类型精简","children":[]},{"level":3,"title":"2.参数小括号精简","slug":"_2-参数小括号精简","link":"#_2-参数小括号精简","children":[]},{"level":3,"title":"3.方法大括号精简","slug":"_3-方法大括号精简","link":"#_3-方法大括号精简","children":[]},{"level":3,"title":"4.大括号精简补充","slug":"_4-大括号精简补充","link":"#_4-大括号精简补充","children":[]},{"level":3,"title":"5.多参数，有返回值 精简","slug":"_5-多参数-有返回值-精简","link":"#_5-多参数-有返回值-精简","children":[]}]},{"level":2,"title":"四、Lambda语法进阶","slug":"四、lambda语法进阶","link":"#四、lambda语法进阶","children":[{"level":3,"title":"1.方法引用(普通方法与静态方法)","slug":"_1-方法引用-普通方法与静态方法","link":"#_1-方法引用-普通方法与静态方法","children":[]},{"level":3,"title":"2.方法引用(构造方法)","slug":"_2-方法引用-构造方法","link":"#_2-方法引用-构造方法","children":[]}]},{"level":2,"title":"五、综合练习","slug":"五、综合练习","link":"#五、综合练习","children":[{"level":3,"title":"1.集合排序案例","slug":"_1-集合排序案例","link":"#_1-集合排序案例","children":[]},{"level":3,"title":"2.Treeset排序案例","slug":"_2-treeset排序案例","link":"#_2-treeset排序案例","children":[]},{"level":3,"title":"3.集合的遍历","slug":"_3-集合的遍历","link":"#_3-集合的遍历","children":[]},{"level":3,"title":"4.删除集合中满足条件的元素","slug":"_4-删除集合中满足条件的元素","link":"#_4-删除集合中满足条件的元素","children":[]},{"level":3,"title":"5.开辟一条线程 做一个数字的输出","slug":"_5-开辟一条线程-做一个数字的输出","link":"#_5-开辟一条线程-做一个数字的输出","children":[]}]},{"level":2,"title":"六、系统内置的函数式接口","slug":"六、系统内置的函数式接口","link":"#六、系统内置的函数式接口","children":[]},{"level":2,"title":"七、Lambda闭包","slug":"七、lambda闭包","link":"#七、lambda闭包","children":[]},{"level":2,"title":"stream流可以收集多次吗？","slug":"stream流可以收集多次吗","link":"#stream流可以收集多次吗","children":[]},{"level":2,"title":"stream().map()时，stream是否已经被操作了？","slug":"stream-map-时-stream是否已经被操作了","link":"#stream-map-时-stream是否已经被操作了","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1712997543000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":13.02,"words":3906},"filePathRelative":"studynotes/JavaSE/Lambda.md","localizedDate":"2024年4月13日","autoDesc":true}');export{d as comp,k as data};
