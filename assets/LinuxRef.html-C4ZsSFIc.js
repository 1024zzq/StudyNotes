import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o,c as p,b as e,f as l,d as a,a as n}from"./app-BmnJtS2T.js";const r={},c=n('<h1 id="linuxref" tabindex="-1"><a class="header-anchor" href="#linuxref"><span>LinuxRef</span></a></h1><blockquote><p>把macos 笔记整合进来，然后把环境指南感觉可以删了</p></blockquote><h2 id="shell-cli" tabindex="-1"><a class="header-anchor" href="#shell-cli"><span>Shell CLI</span></a></h2><blockquote><p>https://wangchujiang.com/linux-command/ 搜 Linux 命令解释好使！！！</p></blockquote><ul><li><p>创建并写入内容 <code>echo &quot;test&quot; &gt; file1.txt</code></p><ul><li>实测多次运行就是追加的形式，追加行！</li></ul></li><li><p>⭐️ grep &quot;password&quot; /var/log/mysqld.log (强大的文本搜索工具)</p><ul><li>grep -rF xxx .命令作用 （Linux 查日志命令需要好好学习，MsgBroker 搜 id）</li><li>cat access.log | grep &#39;payed&#39;</li></ul></li><li><p>⭐️ <code>echo &quot;547061946&quot; | sudo -S &lt;command&gt;</code></p><ul><li>在这个命令中，<code>&lt;command&gt;</code> 是你要以超级用户身份运行的实际命令。</li><li>将密码作为输入通过管道传递给 <code>sudo</code> 命令，并使用 <code>-S</code> 选项我猜是 Standard 读取密码。</li></ul></li><li><p>⭐️ export -p 显示所有环境变量</p></li><li><p>⭐️ $ 符号通常用于引用环境变量的值，echo $HOME 有一个HOME的环境变量</p></li><li><p>⭐️ 在macOS终端中，可以使用以下命令来查看当前使用的shell：bash</p></li><li><p>⭐️ linux 自带任务轮询 <code>crontab -e</code></p><ul><li>crond 是linux下用来周期性的执行某种任务或等待处理某些事件的一个守护进程，与windows下的计划任务类似</li></ul></li><li><p>⭐️ pkill = 进程名 //pkill nginx #杀死所有的nginx</p></li><li><p>⭐️ lsof -i:8080 //查看8080端口占用</p></li><li><p><code>nohup java -jar myblog-1.jar --server.port=80 &amp;</code></p></li><li><p><code>tail -f nohup.out</code></p><ul><li>就可以实时看到这个 jar 的输出运行日志！！！（&quot;f&quot;代表&quot;follow&quot;）</li></ul></li><li><p>df -h 可以查linux内存占用，一般看类似 /dev/vda1 ‘/’开头的路径的容量就行！！！</p><ul><li><p>内存不足会导致的场景-XD均已实践以下两点：</p><ol><li><strong>xftp软件上传文件不到云服务器</strong></li><li><strong>mysql 无法创建数据库</strong></li></ol></li></ul></li><li><p>free -h</p></li><li><p>which nginx</p><ul><li>如果您不确定 Nginx 的<strong>可执行文件</strong>在哪个目录下，可以通过在终端中输入 which nginx 命令来查找。该命令会返回 Nginx 可执行文件的完整路径。 Nginx 的可执行文件通常位于 /usr/sbin/nginx 目录下 注意不是/usr/bin/nginx</li></ul></li><li><p>whereis <mark>找文件</mark></p></li><li><p><code>find / -type d -name &quot;*redis*&quot;</code> <mark>找文件夹</mark></p></li><li><p>kill -9 进程ID（PID）</p></li><li><p>ps -e|grep java</p></li><li><p>netstat -nlp |grep :80 # 看指定端口 pid，方便后面 kill</p></li><li><p><code>export vs set</code> export 类似 win 的 <code>set MY_VARIABLE=value</code>，设置一个当前窗口会话的临时变量</p><ul><li>注意：export https_proxy=http://127.0.0.1:7890 。。。只在当前 cmd 中生效，一开始不知道！！！</li></ul></li><li><p>vim</p><ul><li>/ 关键字，回车即可。此为从文档当前位置向下查找关键字，按n键查找关键字下一个位置；</li><li>？关键字，回车即可。此为从文档挡圈位置向上查找关键字，按n键向上查找关键字；</li></ul></li></ul><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><ul><li><h4 id="一般写日志输出-sh-test-sh-log-txt-其实-就等同于-1" tabindex="-1"><a class="header-anchor" href="#一般写日志输出-sh-test-sh-log-txt-其实-就等同于-1"><span>一般写日志输出 sh test.sh &gt; log.txt 其实 &gt; 就等同于 1&gt;</span></a></h4></li></ul><p>首先了解下1和2在Linux中代表什么 在Linux系统中0 1 2是一个文件描述符</p><p>名称 代码 操作符 Java中表示 Linux 下文件描述符（Debian 为例)</p>',9),d=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"代码"),e("th",null,"操作符"),e("th",null,"Java中表示"),e("th",null,"Linux 下文件描述符（Debian 为例)")])],-1),u=e("td",null,"标准输入(stdin)",-1),m=e("td",null,"0",-1),h=e("td",null,"< 或 <<",-1),g={href:"http://system.in/",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"/dev/stdin -> /proc/self/fd/0 -> /dev/pts/0",-1),v=e("tr",null,[e("td",null,"标准输出(stdout)"),e("td",null,"1"),e("td",null,">, >>, 1> 或 1>>"),e("td",null,"System.out"),e("td",null,"/dev/stdout -> /proc/self/fd/1 -> /dev/pts/0")],-1),b=e("tr",null,[e("td",null,"标准错误输出(stderr)"),e("td",null,"2"),e("td",null,"2> 或 2>>"),e("td",null,"System.err"),e("td",null,"/dev/stderr -> /proc/self/fd/2 -> /dev/pts/0")],-1),f=n('<ul><li>运行文件，应当前面带上目录。。。不然就是从环境变量找了</li></ul><figure><img src="https://images.zzq8.cn/img/202305311109374.png" alt="image-20230531110912384" tabindex="0" loading="lazy"><figcaption>image-20230531110912384</figcaption></figure><h3 id="linux是多用户操作系统" tabindex="-1"><a class="header-anchor" href="#linux是多用户操作系统"><span>Linux是多用户操作系统</span></a></h3><p>操作系统按用户数量可以分为单用户系统和多用户系统。比如Windows就是典型的单用户系统，Linux就是典型的多用户系统。</p><p>有人可能会问，我的windows下有两个用户，怎么是单用户系统？Windows系统可以存在多个用户，但是多用户不可以同时在线操作（你见过一个pc两个屏幕，分别登录两个用户么？）。<mark>Linux的多用户是指可多用户同时在线</mark>，每打开一个终端就可以用一个新的用户登录。</p><hr><p>我明白你想了解哪些操作系统允许多个用户同时在线。</p><p>在常见的桌面操作系统中，以下操作系统通常允许多个用户同时在线：</p><ol><li>Windows Server 版本：Windows Server 版本（如 Windows Server 2019）通常支持多个远程用户同时登录和操作系统。这使得多个用户可以通过远程桌面服务 (Remote Desktop Services) 或其他远程连接方式访问服务器，并在同一时间内使用服务器的资源。</li><li>Linux：Linux 是一个多用户操作系统，支持多个用户同时登录和操作。用户可以通过 SSH (Secure Shell) 或其他远程登录方式访问 Linux 服务器，并在同一时间内使用服务器的资源。</li><li>macOS：macOS 也是一个多用户操作系统，允许多个用户同时登录和操作。每个用户可以通过登录到其自己的用户账户，并在同一时间内使用计算机的资源。</li></ol><p>需要注意的是，对于桌面操作系统（如 Windows 10、macOS），它们通常限制了同时登录的用户数。默认情况下，Windows 10 通常只允许一个用户登录，而 macOS 也有类似的限制。但是，可以通过特定的配置或第三方工具来扩展这些限制，以支持多个用户同时登录。</p><p>综上所述，Windows Server 版本和许多 Linux 发行版通常支持多个用户同时在线操作。对于桌面操作系统，虽然它们也支持多用户，但通常有登录限制，除非进行特定的配置或使用第三方工具。</p><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2>',12),k={href:"https://www.runoob.com/linux/linux-file-attr-permission.html",target:"_blank",rel:"noopener noreferrer"},_=n(`<figure><img src="https://images.zzq8.cn/img/202209082225377.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>文件的权限字符为： <strong>-rwxrwxrwx</strong> ， 这九个权限是三个三个一组的！</p><p>其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下：</p><ul><li>r:4</li><li>w:2</li><li>x:1</li></ul><p>每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为： <strong>-rwxrwx---</strong> 分数则是：</p><ul><li>owner = rwx = 4+2+1 = 7</li><li>group = rwx = 4+2+1 = 7</li><li>others= --- = 0+0+0 = 0</li></ul><p>所以等一下我们设定权限的变更时，该文件的权限数字就是 <strong>770</strong>。变更权限的指令 chmod 的语法是这样的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>chmod [-R] xyz 文件或目录
chmod -R 770 /mydata/elasticsearch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 批量改文件夹权限</span>
chmod <span class="token punctuation">-</span>R 777 /mydata/elasticsearch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scene" tabindex="-1"><a class="header-anchor" href="#scene"><span>Scene</span></a></h2><blockquote><p>备份数据库：#介绍了有问题的原因</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d%H%M<span class="token variable">\`</span></span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> mysql mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-pa59964360</span> --single-transaction <span class="token parameter variable">--databases</span> upupor <span class="token operator">&gt;</span> /home/minio/data/blog/SQLBackup/upupor<span class="token variable">\${d}</span>.sql
<span class="token comment">#此处再接命令会导致上面命令upupor\${d}.sql文件名多换行</span>
<span class="token builtin class-name">echo</span> hh
<span class="token function">gzip</span> <span class="token parameter variable">-c</span> /home/minio/data/blog/SQLBackup/upupor<span class="token variable">\${d}</span>.sql <span class="token operator">&gt;</span> /home/minio/data/blog/SQLBackup/upupor<span class="token variable">\${d}</span>.sql.gz
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&quot;/home/minio/data/blog/SQLBackup/upupor<span class="token variable">\${d}</span>.sql&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么单独运行java -cp ./<em>:../app/</em> com.bokesoft.yes.dev.DevSuite会报以下错误zsh: no matches found: ./<em>:../app/</em> 但是把这行单独放到一个.sh文件运行就又可以</p></blockquote><p>这个错误是由于在单独运行<code>java -cp ./*:../app/* com.bokesoft.yes.dev.DevSuite</code>命令时，所使用的shell（比如zsh）会对通配符（<code>*</code>）进行扩展，但是在当前目录下没有匹配的文件时，会报错。</p><p>在单独执行命令时，如果当前目录下没有符合<code>./*</code>和<code>../app/*</code>通配符模式的文件或目录，shell会报错并显示&quot;zsh: no matches found&quot;。</p><p>然而，当你将这行命令放入一个.sh文件中并执行该文件时，shell会将整个命令作为字符串传递给解释器，并且不会对通配符进行扩展。因此，在脚本文件中执行时，通配符不会引发错误。</p><p>如果你想在命令行中单独运行这个命令而不报错，你可以使用引号将通配符模式括起来，以阻止shell扩展通配符。例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java -cp &#39;./*:../app/*&#39; com.bokesoft.yes.dev.DevSuite //:号应该是分隔符，系统可能都不一样   这里后的app好像没用就用bat文件里的就行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，通配符将被视为字符串的一部分，而不会被shell进行扩展。</p>`,20);function L(q,y){const t=s("ExternalLinkIcon");return o(),p("div",null,[c,e("table",null,[d,e("tbody",null,[e("tr",null,[u,m,h,e("td",null,[e("a",g,[l("System.in"),a(t)])]),x]),v,b])]),f,e("p",null,[e("a",k,[l("Linux 文件基本属性"),a(t)]),l("：看完就知道文件属性了，重点看里面的两幅图！")]),_])}const z=i(r,[["render",L],["__file","LinuxRef.html.vue"]]),R=JSON.parse('{"path":"/studynotes/Linux/LinuxRef.html","title":"LinuxRef","lang":"zh-CN","frontmatter":{"description":"LinuxRef 把macos 笔记整合进来，然后把环境指南感觉可以删了 Shell CLI https://wangchujiang.com/linux-command/ 搜 Linux 命令解释好使！！！ 创建并写入内容 echo \\"test\\" > file1.txt 实测多次运行就是追加的形式，追加行！ ⭐️ grep \\"password\\" /v...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/Linux/LinuxRef.html"}],["meta",{"property":"og:site_name","content":"Zz"}],["meta",{"property":"og:title","content":"LinuxRef"}],["meta",{"property":"og:description","content":"LinuxRef 把macos 笔记整合进来，然后把环境指南感觉可以删了 Shell CLI https://wangchujiang.com/linux-command/ 搜 Linux 命令解释好使！！！ 创建并写入内容 echo \\"test\\" > file1.txt 实测多次运行就是追加的形式，追加行！ ⭐️ grep \\"password\\" /v..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://images.zzq8.cn/img/202305311109374.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T07:30:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T07:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LinuxRef\\",\\"image\\":[\\"https://images.zzq8.cn/img/202305311109374.png\\",\\"https://images.zzq8.cn/img/202209082225377.jpeg\\"],\\"dateModified\\":\\"2024-05-26T07:30:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Shell CLI","slug":"shell-cli","link":"#shell-cli","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[{"level":3,"title":"Linux是多用户操作系统","slug":"linux是多用户操作系统","link":"#linux是多用户操作系统","children":[]}]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":2,"title":"Scene","slug":"scene","link":"#scene","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1716708616000,"contributors":[{"name":"MiniPC","email":"1024zzq@gmail.com","commits":3},{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":6.6,"words":1981},"filePathRelative":"studynotes/Linux/LinuxRef.md","localizedDate":"2024年4月13日","autoDesc":true}');export{z as comp,R as data};
