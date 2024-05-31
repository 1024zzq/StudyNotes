import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as a,e,f as i,b as p,a as c}from"./app-DBUm1I4U.js";const s={},l={id:"玩转-spring-全家桶",tabindex:"-1"},g={class:"header-anchor",href:"#玩转-spring-全家桶"},d={href:"https://time.geekbang.org/course/intro/100023501",target:"_blank",rel:"noopener noreferrer"},m=c('<blockquote><p>进 title link 看课程目录、课程介绍</p></blockquote><p>平板问题：</p><p>springboot datasource自动装配mysql数据源。。h2为什么不用配数据源</p><blockquote><p>项目需要有自己的parel如何处置springboot的parent</p></blockquote><p>spring-boot-dependencies 放到 &lt;denpendencyManagement&gt;</p><img src="https://images.zzq8.cn/img/202302231452941.png" alt="image-20230223145242628" style="zoom:25%;"><blockquote><p>CommandLineRunner 接口的作用</p></blockquote><p>CommandLineRunner 接口是 Spring Boot 中的一个接口，用于在应用启动后执行一些特定的任务。该接口只有一个方法 run()，当 Spring Boot 应用启动完成后，会自动执行 run() 方法。CommandLineRunner 接口常用于执行一些初始化任务，例如读取配置文件、初始化数据等。<strong>与之类似的还有另一个接口 ApplicationRunner</strong>，不同之处在于它的 run() 方法接收的参数是一个 ApplicationArguments 对象，该对象封装了命令行参数的信息。通常情况下，我们可以通过实现 CommandLineRunner 或 ApplicationRunner 接口，在 Spring Boot 应用启动后自动执行一些初始化任务。</p><blockquote><p>h2数据库为什么不需要配置</p></blockquote><p>嵌入式数据库：H2数据库是一款嵌入式数据库，也就是说它可以被嵌入到Java应用程序中，作为Java程序的一个库。因此，H2数据库不需要独立的服务器进程，不需要额外的配置和管理，只需要在Java应用程序中进行简单的配置即可使用。</p><h1 id="配置多个数据源" tabindex="-1"><a class="header-anchor" href="#配置多个数据源"><span>配置多个数据源</span></a></h1><blockquote><p>图片很清楚了</p></blockquote><p>我理解：重写三个bean</p><ol><li>DataSourceProperties 这样即可在configuration配置我的数据源，区分开其他的加前缀</li><li>DataSource 通过上者的 API Create 数据源，大致就是initializeDataSourceBuilder方法通过 ClassLoader 拿 driverClassName 创建</li><li>PlatformTransactionManager 每个数据库都要设好自己对应的事务管理器</li></ol><img src="https://images.zzq8.cn/img/202302231721768.png" alt="image-20230223172146262" style="zoom:25%;">',15);function u(h,b){const t=o("ExternalLinkIcon");return r(),a("div",null,[e("h1",l,[e("a",g,[e("span",null,[e("a",d,[i("玩转 Spring 全家桶"),p(t)])])])]),m])}const y=n(s,[["render",u],["__file","Spring.html.vue"]]),S=JSON.parse('{"path":"/studynotes/ZOther/Abandon_Project/SpringGeekbang/Spring.html","title":"玩转 Spring 全家桶","lang":"zh-CN","frontmatter":{"description":"玩转 Spring 全家桶 进 title link 看课程目录、课程介绍 平板问题： springboot datasource自动装配mysql数据源。。h2为什么不用配数据源 项目需要有自己的parel如何处置springboot的parent spring-boot-dependencies 放到 <denpendencyManagement>...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/ZOther/Abandon_Project/SpringGeekbang/Spring.html"}],["meta",{"property":"og:site_name","content":"Zz"}],["meta",{"property":"og:title","content":"玩转 Spring 全家桶"}],["meta",{"property":"og:description","content":"玩转 Spring 全家桶 进 title link 看课程目录、课程介绍 平板问题： springboot datasource自动装配mysql数据源。。h2为什么不用配数据源 项目需要有自己的parel如何处置springboot的parent spring-boot-dependencies 放到 <denpendencyManagement>..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T09:00:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T09:00:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"玩转 Spring 全家桶\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T09:00:33.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712997543000,"updatedTime":1712998833000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":2}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"studynotes/ZOther/Abandon_Project/SpringGeekbang/Spring.md","localizedDate":"2024年4月13日","autoDesc":true}');export{y as comp,S as data};
