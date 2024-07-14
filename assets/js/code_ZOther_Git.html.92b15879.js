"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4635],{9874:(i,e)=>{e.A=(i,e)=>{const s=i.__vccOpts||i;for(const[i,a]of e)s[i]=a;return s}},7205:(i,e,s)=>{s.r(e),s.d(e,{comp:()=>n,data:()=>h});var a=s(2360);const t=[(0,a.Fv)('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><h2 id="基础学习" tabindex="-1"><a class="header-anchor" href="#基础学习"><span>基础学习</span></a></h2><blockquote><p>✨<a href="https://oschina.gitee.io/learn-git-branching/" target="_blank" rel="noopener noreferrer">Git 学习游戏网站</a></p><p>https://m.runoob.com/git/git-basic-operations.html</p><p>有时间再梳理这篇文章, 只保留有用的 不要繁琐,繁琐了不会看</p></blockquote><img src="https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg" alt="img" style="zoom:150%;"><ul><li>workspace：工作区</li><li>staging area：暂存区/缓存区</li><li>local repository：版本库或本地仓库</li><li>remote repository：远程仓库</li></ul><h2 id="日常使用" tabindex="-1"><a class="header-anchor" href="#日常使用"><span>日常使用</span></a></h2><p>日常自己仓库就三步:</p><ul><li>git status -sb (--short, --branch) <mark>xd 不会了就 git status -help</mark></li><li>git commit -av</li><li>git push</li></ul><p>其他常用:</p><ul><li><p>git log --oneline (单行形式展示日志)</p></li><li><p>使用 git checkout 命令回退指定的文件到上一个版本，<strong>多个文件用空格隔开</strong></p><ul><li>git checkout HEAD~1 -- package-lock.json package.json</li></ul></li><li><p>git rm -r --cached xx (清除指定文件的 git 版本控制)</p></li><li><p>git checkout &lt;上一个版本的提交哈希值&gt; -- &lt;文件路径&gt; （git 回滚指定文件到上一个版本）</p><ul><li>【实测】如果你想要抛弃工作区的修改，可以使用git checkout命令。git checkout -- .</li></ul></li></ul><p>扩展知识：</p><ul><li><p>规定了<a href="https://zhuanlan.zhihu.com/p/182553920" target="_blank" rel="noopener noreferrer">commit message</a>的格式（TODO，我个人觉得还蛮重要，看网站提到的背景）</p></li><li><p><code>--</code>在命令行中的作用是提供一个明确的分隔符，以确保命令的选项、参数或文件路径被正确解析。</p><ul><li>例如，<code>git log -- -file.txt</code>中的<code>--</code>用于明确表示<code>-file.txt</code>是参数而不是选项</li><li>例如，<code>git checkout branch-name -- file.txt</code>中的<code>--</code>用于分隔<code>branch-name</code>和<code>file.txt</code>，以明确表示<code>file.txt</code>是文件路径而不是分支名称。</li></ul></li></ul><h4 id="idea-中-git-merge-select-into-current-和-pull-into-current-using-merge有什么区别" tabindex="-1"><a class="header-anchor" href="#idea-中-git-merge-select-into-current-和-pull-into-current-using-merge有什么区别"><span>IDEA 中 git Merge Select into Current 和 Pull into Current using merge有什么区别</span></a></h4><blockquote><ul><li>Merge Select into Current 适用于合并指定远程分支的更改到当前分支。</li><li>Pull into Current using merge 适用于拉取远程分支的最新更改并合并到当前分支。</li></ul></blockquote><ul><li><p>Merge Select into Current: <strong>实测没有fetch，直接以现有的log记录去merge</strong></p><ul><li>git merge refs/remotes/origin/gptsh_dlx_b1</li></ul></li><li><p>Pull into Current using merge: <strong>实测先fetch再merge</strong></p><ul><li>git fetch origin --recurse-submodules=no --progress --prune <ul><li>如有信息输出：remote: Total 10 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0) From gitlab.alipay-inc.com:cangxi.lj/gptsh 5e991b2..d7972bd gptsh_dlx_b1 -&gt; origin/gptsh_dlx_b1</li><li>如没信息就这一步完了就 return，提示 All filles are up to date</li></ul></li><li>git merge origin/gptsh_dlx_b1 --no-stat -v</li></ul></li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span>-</span></a></h1><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span>-</span></a></h1><hr><h1 id="繁琐的以前" tabindex="-1"><a class="header-anchor" href="#繁琐的以前"><span>繁琐的以前</span></a></h1><h2 id="_1-前置配置" tabindex="-1"><a class="header-anchor" href="#_1-前置配置"><span><a href="https://blog.csdn.net/weixin_42310154/article/details/118340458" target="_blank" rel="noopener noreferrer">1.前置配置</a></span></a></h2><blockquote><p>云服务器的 Git 我捣鼓了好久~ 由于云服务器网络、地区CN http协议去连 Github 有点抽风，固我第一次尝试了 ssh 协议！！！ 好使</p></blockquote><ol><li>生成ssh key <code>ssh-keygen -t rsa -C &quot;xxx@xxx.com&quot;</code></li><li>获取ssh key公钥内容（id_rsa.pub） <code>cat ~/.ssh/id_rsa.pub</code></li><li>把 cat 到的公钥内容放入 Github SSH配置里</li><li>验证是否设置成功 <code>ssh -T git@github.com</code></li></ol><h3 id="通俗解释" tabindex="-1"><a class="header-anchor" href="#通俗解释"><span>通俗解释！！</span></a></h3><p>重点来了：<strong>一定要知道ssh key的配置是针对每台主机的！</strong>，比如我在某台主机上操作git和我的远程仓库，想要push时不输入账号密码，走ssh协议，就需要配置ssh key，放上去的key是<strong>当前主机的ssh公钥</strong>。那么如果我换了一台其他主机，想要实现无密登录，也就需要重新配置。</p><p>下面解释开头提出的问题： （1）为什么要配？ 配了才能实现push代码的时候不需要反复输入自己的github账号密码，更方便 （2）每使用一台主机都要配？ 是的，每使用一台新主机进行git远程操作，想要实现无密，都需要配置。并不是说每个账号配一次就够了，而是每一台主机都需要配。 （3）配了为啥就不用密码了？ 因为配置的时候是把当前主机的公钥放到了你的github账号下，相当于当前主机和你的账号做了一个关联，你在这台主机上已经登录了你的账号，此时此刻github认为是该账号主人在操作这台主机，在配置ssh后就信任该主机了。所以下次在使用git的时候即使没有登录github，也能直接从本地push代码到远程了。当然这里不要混淆了，你不能随意push你的代码到任何仓库，你只能push到你自己的仓库或者其他你有权限的仓库！</p><h2 id="_1-备份-minio" tabindex="-1"><a class="header-anchor" href="#_1-备份-minio"><span>1.备份 MinIO</span></a></h2><blockquote><p>场景：备份 MinIO 的文件到 Git</p><ol><li>使用 <code>crontab -e</code></li><li>一分钟执行一次 <code>* * * * * /home/minio/data/blog/test.sh &gt;&gt; /home/minio/data/test.log 2&gt;&amp;1</code></li></ol><p>问题：我需要保证我的shell脚本的git命令 auth 这一步</p><p>​ 手动一行行命令的时候用 <code>http</code> 可以：<code>git remote set-url origin http://github.com/zzq8/MinIO-upupor.git</code></p><p>​ 但是shell中批量总是报错！！！auth问题，网上冲浪发现用ssh好使 1）需要云服务器加私钥 2）把公钥加到Git ​ <code>git remote set-url origin git@github.com:zzq8/MinIO-upupor.git</code></p></blockquote><p>token 可以当密码auth的时候</p><p>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</p><h1 id="github搜索技巧" tabindex="-1"><a class="header-anchor" href="#github搜索技巧"><span>GitHub搜索技巧</span></a></h1><blockquote><p>不要小看这个，真的可以挖掘Github这个宝藏库</p></blockquote><ul><li><p>in关键字限制搜索范围 &#39;,&#39; 是或的意思 <code>xxx in:name,readme,description</code></p></li><li><p>查找star大于1000，fork数在500到1000 <code>xxx stars:&gt;1000 forks:500..1000</code></p></li><li><p>awesome系列，一般用来收集学习、工具、书籍类相关的项目 <code>awesome xxx</code></p><ul><li>【陌生】搜出来第一条会有副红色眼镜 言下之意，你要学什么东西就用这个命令试试。 至少我搜了下SpringBoot还是蛮不错的</li></ul></li><li><p>高亮显示某行代码 一行：代码地址后面紧跟 <code>#L10</code> 多行：<code>#Lx - #Ln</code></p></li><li><p>项目内搜索 使用英文字母 <code>t</code> ,开启项目内搜索</p></li></ul><h1 id="一、常规流程" tabindex="-1"><a class="header-anchor" href="#一、常规流程"><span>一、常规流程</span></a></h1><blockquote><p>命令行还是可以会一下，后面其实都可以用 TortoiseGit 图形化操作了...</p></blockquote><h2 id="前置设置" tabindex="-1"><a class="header-anchor" href="#前置设置"><span>前置设置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">---</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 非必要，可随便填方便在</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 上看是谁提交过来的</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> ---</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 配置用户名</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;username&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> //（名字）</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 配置邮箱</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;username@email.com&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">注册账号时用的邮箱</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">---</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 配置</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 免密登录</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> ---</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">   # https://gitee.com/help/articles/4181#article-header0</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 进入 git bash；使用：ssh-keygen -t rsa -C </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;xxxxx@xxxxx.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">命令。 连续三次回车。一般用户目录下会有两个文件</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 或者 cat </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 登录进入 gitee，在设置里面找到 SSH KEY 将.pub 文件的内容粘贴进去使用 ssh -T git@gitee.com 测试是否成功即可</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推送流程" tabindex="-1"><a class="header-anchor" href="#推送流程"><span>推送流程</span></a></h2><ol><li><p>git init</p></li><li><p>git remote add origin https://gitee.com/codezzq/myblog 建立一个远程仓库（连接起来）</p><p>git remote add[别名] [远程地址]</p></li><li><p>git add .</p></li><li><p>git commit -m &quot;test&quot;</p></li><li><p>git push -u origin master</p><p>git push[别名] [分支名]</p></li></ol><p>ps: 第2步在第五步之前实现都是可以的</p><p>idea 如果想导入 SVN 项目的话，例如 Git 可以这样：git clone [远程地址]</p><p>push的时候可以把 .gitignore放到项目里 和src平级，被ignore的文件在idea里显示的是金黄色的</p><h1 id="二、强制提交" tabindex="-1"><a class="header-anchor" href="#二、强制提交"><span>二、强制提交</span></a></h1><p>有时候你想push一个文件，</p><p>报错：error: failed to push some refs to &#39;https://gitee.com/codezzq/myblog&#39;</p><p>原因：当前push的东西和仓库的东西不匹配，也就是说你仓库里可能是整个项目，而你push的却只是一个文件</p><p>解决方案一：就直接强制push了。相当于清空仓库把本地的再给push上</p><p>执行完代码代入上面的场景就是：仓库里的项目没有了，值剩下你push 的一个文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ git push -u origin master -f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>合作项目的时候，还是建议不要用这种方法的好。 顺便搜索了下别的解决方案：</p><ol><li>push前先将远程repository修改pull下来：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ git pull origin master</span></span>\n<span class="line"><span>$ git push -u origin master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>若不想merge远程和本地修改，可以先创建新的分支：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ git branch [name]</span></span>\n<span class="line"><span>$ git push -u origin [name]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、git-branch使用" tabindex="-1"><a class="header-anchor" href="#三、git-branch使用"><span>三、Git branch使用</span></a></h1><p>https://www.jianshu.com/p/305723736c7c</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//查看所有分支列表，包括本地和远程</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//切换分支</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> checkout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">分支名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git新建分支出现fatal: Not a valid object name: ‘master‘错误 :</p><p><strong>原因是没有提交一个对象，要先commit之后才会真正建立master分支，此时才可以建立其它分支。</strong></p><h2 id="无法获取远程分支" tabindex="-1"><a class="header-anchor" href="#无法获取远程分支"><span>无法获取远程分支</span></a></h2><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//无法获取远程分支</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//原因 git branch -a 这条命令并没有每一次都从远程更新仓库信息，我们可以手动更新一下</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支"><span>创建分支</span></a></h2><p>语法：git branch 分支名</p><h2 id="创建并且切换到分支里" tabindex="-1"><a class="header-anchor" href="#创建并且切换到分支里"><span>创建并且切换到分支里</span></a></h2><p>git checkout -b 分支名</p><h1 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结"><span>四、总结：</span></a></h1><ol><li><p>状态查看操作（查看工作区、暂存区状态）</p><p>git status</p></li><li><p>添加操作（将工作区的“新建/修改”添加到暂存区（缓存区））</p><p>git add[file name]</p></li><li><p>提交操作（将暂存区的内容提交到本地库）</p><p>git commit -m &quot;commit message&quot; [file name]</p></li></ol><blockquote><p>超好用！！！</p><p><code>git commit -av</code> 是一个用于提交 Git 修改的命令。它结合了 <code>-a</code> 和 <code>-v</code> 两个选项，具有以下含义：</p><ul><li><code>-a</code>（或 <code>--all</code>）选项表示自动将所有已修改的文件添加到暂存区（Git Index），包括已经被 Git 跟踪的文件的修改。这样，你无需手动使用 <code>git add</code> 命令来将修改的文件添加到暂存区，Git 会自动处理。</li><li><code>-v</code>（或 <code>--verbose</code>）选项表示在提交时显示更详细的信息，包括每个修改的文件的 diff 内容。这对于查看每个文件的具体修改内容和变化非常有用。</li></ul><p>因此，当你运行 <code>git commit -av</code> 命令时，Git 将自动添加所有已修改的文件到暂存区，并在提交时显示每个文件的 diff 内容。</p><p>注意：进入这个命令后跟编辑 vim 流程一样，输入 message 后需要 <code>:wq</code> 即可提交</p></blockquote><figure><img src="https://images.zzq8.cn/img/202206011611310.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="tortoisesvn" tabindex="-1"><a class="header-anchor" href="#tortoisesvn"><span>TortoiseSVN</span></a></h1><figure><img src="https://images.zzq8.cn/img/202210201018847.png" alt="image-20221020101841706" tabindex="0" loading="lazy"><figcaption>image-20221020101841706</figcaption></figure><p>这还只是一部分！！有很多图标被版本控制的操作没显示出来 例如 stash</p><h1 id="stash-命令" tabindex="-1"><a class="header-anchor" href="#stash-命令"><span>stash 命令</span></a></h1><p>我们有时会遇到这样的情况，正在dev分支开发新功能，做到一半时有人过来反馈一个bug，让马上解决，但是新功能做到了一半你又不想提交，这时就可以使用git stash命令先把当前进度保存起来，然后切换到另一个分支去修改bug，修改完提交后，再切回dev分支，使用git stash pop来恢复之前的进度继续开发新功能。</p><h1 id="fetch-命令" tabindex="-1"><a class="header-anchor" href="#fetch-命令"><span>fetch 命令</span></a></h1><p>场景：自己web页面新建了个分支，explorer fetch下就可以拿到分支checkout过去</p><p><strong>git fetch</strong>：这将更新git remote 中所有的远程仓库所包含分支的最新commit-id, 将其记录到.git/FETCH_HEAD文件中</p><p>git pull : 首先，基于本地的FETCH_HEAD记录，比对本地的FETCH_HEAD记录与远程仓库的版本号，然后git fetch 获得<strong>当前指向的远程分支</strong>的后续版本的数据，然后再利用git merge将其与本地的当前分支合并。所以可以认为git pull是git fetch和git merge两个步骤的结合。（注意此时是分支，还需手动fetch主干的信息，才能拿到最新的分支checkout）</p><p>因此，git fetch是<strong>从远程获取最新版本到本地，但不会自动merge</strong>。 而git pull则是<strong>会获取所有远程索引并合并到本地分支中</strong>来。效果相同时git pull将更为快捷。</p><p>区分：pull 拉取/获取</p><h1 id="_1-conflict" tabindex="-1"><a class="header-anchor" href="#_1-conflict"><span>1.<a href="https://blog.csdn.net/daigualu/article/details/68936061" target="_blank" rel="noopener noreferrer">Conflict</a></span></a></h1><h3 id="_1-三个板块" tabindex="-1"><a class="header-anchor" href="#_1-三个板块"><span>1）三个板块</span></a></h3><p>左上（SVN版本库中）、右上（本地工作副本）、下面（合并这俩的文件后的显示窗口）</p><h3 id="_2-以行为单位-解决冲突" tabindex="-1"><a class="header-anchor" href="#_2-以行为单位-解决冲突"><span>2）以行为单位 解决冲突</span></a></h3><h3 id="_3-三种颜色标识" tabindex="-1"><a class="header-anchor" href="#_3-三种颜色标识"><span>3）<mark>三种颜色标识</mark></span></a></h3><p>亮黄（增加+）、橙黄（删除-）、红色（冲突行?，并把两个版本的以橙黄显示在上面对比）</p><p>&quot;=&quot; 其实是两个 - ，意味着两边都删了这一行</p><p>加深理解：注意最左侧有个 “-”提示，代表此行不会纳入合并文件中</p><h1 id="_2-global-ignore" tabindex="-1"><a class="header-anchor" href="#_2-global-ignore"><span>2.global ignore</span></a></h1><blockquote><p>231008 Boke 再理解</p></blockquote><ul><li>整库- TortoiseSVN右键有个ignore，给文件夹添加属性，然后commit可以把文件夹的属性提交【这个应该是适用于整个库的】</li><li>如下写的可以从配置文件里设置 / setting -&gt; Global ignore pattern: 设置也是一样的效果！！！【<strong>记得需要重新右键commit打开一个新的框才能看到效果</strong> 不然我老是觉得没有生效】</li></ul><blockquote><p>commit 界面有个 no changelist 列表，这里面都是未被版本控制的文件</p><p>突然想明白一个事，这里全局忽略文件写路径的时候， 脑袋里要有 Versioned / Non-Versioned 两种文件的概念 然后写Non-Versioned的文件的相对路径，不要写带Versioned的有关的路径了！</p></blockquote><p>可以通过svn的全局配置文件给忽略掉不显示</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>### XD</span></span>\n<span class="line"><span>[miscellany]</span></span>\n<span class="line"><span>global-ignores = *.iml .idea *.class *.md5 *.log classes *.log.* localhost_access_log.*.txt *.so *.tmp generated-sources generated-test-sources maven-archiver MyTest.java</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',93)],l={},n=(0,s(9874).A)(l,[["render",function(i,e){return(0,a.uX)(),(0,a.CE)("div",null,t)}]]),h=JSON.parse('{"path":"/code/ZOther/Git.html","title":"Git","lang":"zh-CN","frontmatter":{"article":true,"category":"Code","description":"Git 基础学习 ✨Git 学习游戏网站 https://m.runoob.com/git/git-basic-operations.html 有时间再梳理这篇文章, 只保留有用的 不要繁琐,繁琐了不会看 img workspace：工作区 staging area：暂存区/缓存区 local repository：版本库或本地仓库 remote re...","head":[["meta",{"property":"og:url","content":"https://zzq8.cn/code/ZOther/Git.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"Git 基础学习 ✨Git 学习游戏网站 https://m.runoob.com/git/git-basic-operations.html 有时间再梳理这篇文章, 只保留有用的 不要繁琐,繁琐了不会看 img workspace：工作区 staging area：暂存区/缓存区 local repository：版本库或本地仓库 remote re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://images.zzq8.cn/img/202206011611310.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-14T10:28:47.000Z"}],["meta",{"property":"article:author","content":"Piglet"}],["meta",{"property":"article:modified_time","content":"2024-07-14T10:28:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"https://images.zzq8.cn/img/202206011611310.png\\",\\"https://images.zzq8.cn/img/202210201018847.png\\"],\\"dateModified\\":\\"2024-07-14T10:28:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Piglet\\",\\"url\\":\\"https://zzq8.cn\\"}]}"]]},"headers":[{"level":2,"title":"基础学习","slug":"基础学习","link":"#基础学习","children":[]},{"level":2,"title":"日常使用","slug":"日常使用","link":"#日常使用","children":[]},{"level":2,"title":"1.前置配置","slug":"_1-前置配置","link":"#_1-前置配置","children":[{"level":3,"title":"通俗解释！！","slug":"通俗解释","link":"#通俗解释","children":[]}]},{"level":2,"title":"1.备份 MinIO","slug":"_1-备份-minio","link":"#_1-备份-minio","children":[]},{"level":2,"title":"前置设置","slug":"前置设置","link":"#前置设置","children":[]},{"level":2,"title":"推送流程","slug":"推送流程","link":"#推送流程","children":[]},{"level":2,"title":"无法获取远程分支","slug":"无法获取远程分支","link":"#无法获取远程分支","children":[]},{"level":2,"title":"创建分支","slug":"创建分支","link":"#创建分支","children":[]},{"level":2,"title":"创建并且切换到分支里","slug":"创建并且切换到分支里","link":"#创建并且切换到分支里","children":[{"level":3,"title":"1）三个板块","slug":"_1-三个板块","link":"#_1-三个板块","children":[]},{"level":3,"title":"2）以行为单位 解决冲突","slug":"_2-以行为单位-解决冲突","link":"#_2-以行为单位-解决冲突","children":[]},{"level":3,"title":"3）三种颜色标识","slug":"_3-三种颜色标识","link":"#_3-三种颜色标识","children":[]}]}],"git":{"createdTime":1712997543000,"updatedTime":1720952927000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":2},{"name":"MiniPC","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":10.46,"words":3139},"filePathRelative":"code/ZOther/Git.md","localizedDate":"2024年4月13日","excerpt":"\\n<h2>基础学习</h2>\\n<blockquote>\\n<p>✨<a href=\\"https://oschina.gitee.io/learn-git-branching/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Git 学习游戏网站</a></p>\\n<p>https://m.runoob.com/git/git-basic-operations.html</p>\\n<p>有时间再梳理这篇文章, 只保留有用的   不要繁琐,繁琐了不会看</p>\\n</blockquote>\\n<img src=\\"https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg\\" alt=\\"img\\" style=\\"zoom:150%;\\">","autoDesc":true}')}}]);