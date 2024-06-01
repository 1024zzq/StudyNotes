import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as i}from"./app-BxE1B5z1.js";const e={},l=i(`<h1 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOS</span></a></h1><blockquote><p>由于第一次接触MacOS，花了三周的星期六（三天）来搭这台MacOS</p></blockquote><h2 id="software" tabindex="-1"><a class="header-anchor" href="#software"><span>Software</span></a></h2><blockquote><p>Apr. 12th 2024</p></blockquote><ul><li>Karabiner (win autohotkey)</li><li>Alfred (Lib &amp; Everything) <ul><li>in 关键词（可以搜文件里面的内容！）</li></ul></li><li>Stats</li><li>Clash</li><li>Easydict</li><li>IINA</li><li>Omi</li><li>Lunar（两台电脑连一台显示器软件方式切信号源通过 CLI）</li><li>iShot</li><li>腾讯会议</li><li>Dash</li><li>Espanso</li><li>Chrome</li><li>iTerm</li><li>Karabiner</li><li>Office</li><li>Parallels</li><li>QuickShade</li><li>Paste</li><li>SoundSource</li><li>Sublime</li><li>Lemon</li><li>Thor</li><li>Tiles + WGestures</li><li>Postman Navicat IDEA PS Sourcetree TinyRDM</li></ul><p>补充：</p><ul><li><p>Typora</p><ul><li>注意：在官网这里<a href="https://support.typora.io/Shortcut-Keys/#change-shortcut-keys" target="_blank" rel="noopener noreferrer">键位映射表</a> 搜名字，要对应起来，Mac 设置到 App 快捷键</li></ul><img src="http://images.zzq8.cn/img/image-20231215180744304.png" alt="image-20231215180744304" style="zoom:25%;"></li><li><p>SourceTree</p><ul><li><p>Q：M 系列芯片好多软件还不支持，TortoiseSVN、SQLServer这种。。头疼了很久 后补充：</p><ul><li>其实用 Shell 挺好用的</li><li>而且其实 idea 自带的就很好</li><li>后又发现 SourceTree 很好用，管理自己的 Git 蛮好</li></ul><p>XD: 240330, 发现一个不错的软件 看的从 0 到 Thor 图发现的， SourceTree <strong>注意 - sourceTree push 的时候如无法 auth 明明密码账号正确！解决 - 设置换 git 内核用 mac 本地的！！！</strong></p></li></ul></li></ul><h2 id="shortkey" tabindex="-1"><a class="header-anchor" href="#shortkey"><span>ShortKey</span></a></h2><ul><li>cmd+opt+drag = ln - i 创建文件的快捷方式</li><li>cmd+shift+h 用户目录</li><li>command＋shift＋G 访达跳转路径，同 win 上面那个里</li><li>cmd+shift+. 显示隐藏文件</li><li>cmd+ctrl+f 全屏</li><li>cmd+opt+v 剪切</li><li>⭐️ Command-I 显示简介 <ul><li>我推测 &quot;I&quot; 可能代表 &quot;Info&quot;，因为 &quot;Info&quot; 是「信息」的简写。因此，Command-I 可以被理解为「显示简介」或「显示信息」</li></ul></li><li>Shift+【 可以输出 「</li></ul><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><ul><li><p>⭐️ <strong>增加系统快捷键</strong> - 键盘设置里 - App快捷键 - 表情与符号（xd 这个菜单名一定要填对，其实看一下每个应用的task bar应该都能设置！！！）</p></li><li><p>MAC click dock APP icon 会切桌面同应用不同 window</p></li><li><p>😭 TODO 软链？ ln -s 表示软链， XD：删掉本来目录的 base.yml ，把自己目录做好的 base.yml 软链到本来目录！</p></li><li><p>对某段文字 Click Double 会自动选取系统认为的词组 Click Three Times 就会 check 这一整行</p></li><li><p>不显示隐藏文件 <code>command+shift+.</code> 可以临时切换显示隐藏文件。</p><p>使用以下方法永久设置（似乎对浏览器出发的文件选择器未生效）</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> write</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> com.apple.finder</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> AppleShowAllFiles</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 显示隐藏文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> write</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> com.apple.finder</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> AppleShowAllFiles</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 不显示隐藏文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">killall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Finder</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 重启 Finder</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>shell windows scroll 我的替代方案：用CMD+上下滚动，不用鼠标滚轮</p></li><li><p>开了2个chrome窗口 macos如何快捷键切换 (cmd+\`) 【现在用的很频繁】</p></li></ul><blockquote><p>macmini连接一台4k分辨率显示器，在设置中设置显示器的缩放分辨率只会影响UI字体并不会影响真实的4k分辨率是吗</p></blockquote><p>是的，当您连接一台4K分辨率的显示器到Mac mini上时，您可以在系统设置中调整显示器的缩放分辨率。这将影响显示器上的UI元素（如菜单栏、窗口和图标）的大小和清晰度，但不会实际改变显示器的物理分辨率。</p><p>Mac mini会输出其默认的分辨率（通常是显示器的原生分辨率），而您在系统设置中进行的缩放只会调整UI元素的大小，以适应更高或更低的分辨率。这意味着物理像素的数量不会改变，只是它们在屏幕上的显示大小会发生变化。</p><p>如果您想要实际更改显示器的分辨率，您可以在系统设置中选择显示器的原生分辨率或其他支持的分辨率选项。这将直接影响物理像素的数量，以获得更高的清晰度和细节。注意，更高的分辨率可能需要更强大的图形处理能力，并可能导致图形性能下降。</p><p>昨天去了王府井apm苹果店，和工作人员交流了一下，这个不是降分辨率，就是和win10一样只是调大了系统的字体（但是也不是完全一样，win10只是调节了字体，而macos是调节了字体，icon和窗口的大小）。在调节后的屏幕上会显示一个更低的分辨率，那个的意思是说现在的字体大小和更低分辨率的缺省字体一样的，正是这个不好的ui或者说系统提醒的这句话让大家有了误解。建议苹果可以在新版本中修改这句让人误解的话。</p><p>作者：Peterwen 链接：https://www.zhihu.com/question/443961913/answer/1726069699 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p><blockquote><p>Q：MySQL 服务自启动</p></blockquote><p><code>sudo vim /Library/LaunchDaemons/com.mysql.startup.plist</code> 【没成功，不知道是否该转战brew】</p><ul><li>启动时间：LaunchAgents 目录中的 Launch Agents 是在用户登录时自动启动的，而 LaunchDaemons 目录中的 Launch Daemons 是在系统启动时自动启动的，不依赖于用户登录。</li><li>运行权限：LaunchAgents 目录中的 Launch Agents 是以当前登录用户的身份运行的，仅对该用户有效。而 LaunchDaemons 目录中的 Launch Daemons 是以系统的管理员权限（root 用户）运行的，并对所有用户有效。【所以在 LaunchDaemons 权限必须是 Root 否则无法启动！！！<code>chown root:wheel jetbrains.vmoptions.plist</code>】</li><li><mark>这个文件目录类似 Windows 的startup</mark></li><li>目的：从官方网站下载的 MySQL 版本，并希望将其设置为 macOS 的自启动服务</li><li>像MySQL这种服务得放LaunchDaemons里，像激活idea这种得放 LaunchAgents 里。。。注意权限是否够（然后我说得 lemon 软件看是否启动！！！设置里看不到）</li></ul><blockquote><p>为什么Vue项目总是在1024端口启动？</p></blockquote><p>我猜你是Mac 用户～</p><p>在mac os中，非root用户是无法使用小于1024的常用端口的。 如果小于1024端口，会从1024开始。</p><ul><li></li></ul><h2 id="mac-knowledge" tabindex="-1"><a class="header-anchor" href="#mac-knowledge"><span>Mac Knowledge</span></a></h2><ul><li><p>续航：公司 MacAir M2 五一假期拔掉充电线 盒盖待机放假回来看还有 50%+ 的电量</p></li><li><p>关闭 SIP</p><ul><li>针对 M 系列芯片，长按开机键进入到恢复模式，Terminal <code>csrutil disable</code></li></ul></li><li><p>好像网上下的 app 打不开的话可以执行一个命令就可以打开了</p><p>您提供的命令 <code>sudo xattr -d com.apple.quarantine /Applications/Tiny\\ RDM.app</code> 用于删除 <code>/Applications/Tiny RDM.app</code> 应用程序的扩展属性中的 com.apple.quarantine 标记。这个标记通常由 macOS 用于标识从互联网或其他不可信来源下载的应用程序，以便在首次运行时显示安全警告。</p><p>通过运行该命令，您可以移除 Tiny RDM 应用程序的下载标记，以便在下次运行时不再显示安全警告。请确保您已经正确指定应用程序的路径，并在终端中以管理员权限（sudo）运行该命令。</p><p>请注意，在执行此命令之前，您应该确认已经从可信的来源下载了 Tiny RDM 应用程序，并且信任该应用程序。如果您不确定应用程序的来源或是否应该删除下载标记，请谨慎操作或咨询相关的安全建议。</p></li></ul><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other"><span>Other</span></a></h2><h4 id="sqlserver" tabindex="-1"><a class="header-anchor" href="#sqlserver"><span>SQLServer</span></a></h4><blockquote><p>使用Docker 运行 mcr.microsoft.com/azure-sql-edge 来使用</p></blockquote><p>Docker: 必须复杂密码</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;ACCEPT_EULA=1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;MSSQL_SA_PASSWORD=Aa59964360&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;MSSQL_PID=Developer&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;MSSQL_USER=SA&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 1433:1433</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/Users/xd/Documents/SoftwareConfiguration/Docker/SQL:/SQL</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> SQLServer</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mcr.microsoft.com/azure-sql-edge</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>SQLServer: 可以先运行第一行确定好路径 /var/opt/mssql/data/ 及其 scm7 名字</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">RESTORE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [ZS_SCM]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DISK</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/home/ZC_SCM0426002.BAK&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> WITH</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> MOVE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;scm7&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;/var/opt/mssql/data/ZS_SCM.mdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">MOVE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;scm7_log&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;/var/opt/mssql/data/ZS_SCM_log.ldf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span>---------</span></a></h1><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span></span></a></h1><h1 id="如何从-0-开始配置-macbook-pro" tabindex="-1"><a class="header-anchor" href="#如何从-0-开始配置-macbook-pro"><span>如何从 0 开始配置 MacBook Pro</span></a></h1><blockquote><p><a href="https://www.sorrycc.com/" target="_blank" rel="noopener noreferrer">ChenCheng&#39;s Personal Site</a></p></blockquote><blockquote><p>昨天新的 MBP 终于到了，要从 0 开始配置成趁手的还是需要一些时间的，我总共花了 4 小时左右。在此记录下，希望对大家有所帮助，这可以算是「装了啥」的详细版。如果我基于这篇文章再来一遍，应该可以减少到 2 小时以下。但是，应该不会再来一次了，自己的电脑走 TimeMachine 就好了。</p></blockquote><h2 id="安装-clashx-你懂的" tabindex="-1"><a class="header-anchor" href="#安装-clashx-你懂的"><span>安装 ClashX，你懂的</span></a></h2><p>略。</p><h2 id="安装-app-和-cli-工具" tabindex="-1"><a class="header-anchor" href="#安装-app-和-cli-工具"><span>安装 App 和 Cli 工具</span></a></h2><p>1、安装 HomeBrew 并用他安装 App 和 Cli 工具。App 可以在 <a href="https://formulae.brew.sh/cask/" target="_blank" rel="noopener noreferrer">homebrew-cask — Homebrew Formulae</a> 里找有没有，Cli 工具可以在 <a href="https://formulae.brew.sh/formula/" target="_blank" rel="noopener noreferrer">homebrew-core — Homebrew Formulae</a> 找有没有。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 先开代理，不然会很慢（依赖第一步）</span></span>
<span class="line"><span>export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 HomeBrew</span></span>
<span class="line"><span>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用 HomeBrew 安装 App，以下是我可以用 HomeBrew 安装的 App 列表（以字母排序，方便你查找）</span></span>
<span class="line"><span>brew install --cask \\</span></span>
<span class="line"><span>  115browser \\</span></span>
<span class="line"><span>  1password \\</span></span>
<span class="line"><span>  alfred \\</span></span>
<span class="line"><span>  battery-buddy \\</span></span>
<span class="line"><span>  coteditor \\</span></span>
<span class="line"><span>  docker \\  </span></span>
<span class="line"><span>  eagle \\  </span></span>
<span class="line"><span>  espanso \\  </span></span>
<span class="line"><span>  figma \\  </span></span>
<span class="line"><span>  google-chrome  \\  </span></span>
<span class="line"><span>  gas-mask \\  </span></span>
<span class="line"><span>  handbrake \\  </span></span>
<span class="line"><span>  iina \\  </span></span>
<span class="line"><span>  iterm2 \\  </span></span>
<span class="line"><span>  karabiner-elements \\  </span></span>
<span class="line"><span>  keepingyouawake \\  </span></span>
<span class="line"><span>  keycastr \\  </span></span>
<span class="line"><span>  licecap \\  </span></span>
<span class="line"><span>  microsoft-remote-desktop \\  </span></span>
<span class="line"><span>  obs \\  </span></span>
<span class="line"><span>  obsidian \\  </span></span>
<span class="line"><span>  qq \\</span></span>
<span class="line"><span>  setapp \\  </span></span>
<span class="line"><span>  shottr \\  </span></span>
<span class="line"><span>  sogouinput \\  </span></span>
<span class="line"><span>  sourcetree \\  </span></span>
<span class="line"><span>  telegram \\  </span></span>
<span class="line"><span>  thor \\  </span></span>
<span class="line"><span>  usr-sse2-rdm \\  </span></span>
<span class="line"><span>  videofusion \\  </span></span>
<span class="line"><span>  visual-studio-code \\  </span></span>
<span class="line"><span>  wechat \\</span></span>
<span class="line"><span>  webstorm \\  </span></span>
<span class="line"><span>  zerotier-one</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 Cli 工具，以下是我的（以字母排序，方便你查找）</span></span>
<span class="line"><span>brew install \\  </span></span>
<span class="line"><span>  autojump \\  </span></span>
<span class="line"><span>  bat \\  </span></span>
<span class="line"><span>  cmatrix \\  </span></span>
<span class="line"><span>  commitzen \\  </span></span>
<span class="line"><span>  deno \\  </span></span>
<span class="line"><span>  diff-so-fancy \\  </span></span>
<span class="line"><span>  fd \\  </span></span>
<span class="line"><span>  ffmpeg \\  </span></span>
<span class="line"><span>  fzf \\  </span></span>
<span class="line"><span>  gh \\  </span></span>
<span class="line"><span>  git \\  </span></span>
<span class="line"><span>  httpie \\  </span></span>
<span class="line"><span>  hub \\  </span></span>
<span class="line"><span>  hyperfine \\  </span></span>
<span class="line"><span>  imagemagick \\  </span></span>
<span class="line"><span>  jq \\  </span></span>
<span class="line"><span>  lazygit \\  </span></span>
<span class="line"><span>  mkcert \\  </span></span>
<span class="line"><span>  nvm \\  </span></span>
<span class="line"><span>  pnpm \\  </span></span>
<span class="line"><span>  the_silver_searcher \\  </span></span>
<span class="line"><span>  tig \\  </span></span>
<span class="line"><span>  tldr \\  </span></span>
<span class="line"><span>  tree \\  </span></span>
<span class="line"><span>  ugit \\  </span></span>
<span class="line"><span>  wget</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、用 SetApp 安装额外 App。</p><ul><li>Bartender</li><li>CleanMyMac X</li><li>CleanShot X</li><li>DevUtils</li><li>Downie</li><li>Focus</li><li>Sip</li><li>RapidAPI</li><li>Paste</li><li>Yoink</li></ul><p>3、用 Mac App Store 安装额外 App。</p><ul><li>Bob</li><li>Tot</li><li>RunCat</li><li>Infuse</li></ul><p>4、通过其他渠道安装额外 App。</p><ul><li><a href="https://github.com/tw93/Pake" target="_blank" rel="noopener noreferrer">Flomo x Pake</a></li><li><a href="https://justgetflux.com/" target="_blank" rel="noopener noreferrer">Flux</a></li><li>Reeder（国区没有）</li><li>PDF Expert</li><li><a href="https://github.com/gee1k/uPic" target="_blank" rel="noopener noreferrer">uPic</a></li><li><a href="https://github.com/lencx/ChatGPT" target="_blank" rel="noopener noreferrer">ChatGPT x Tauri</a></li><li>阿里钉</li></ul><h2 id="准备本地目录" tabindex="-1"><a class="header-anchor" href="#准备本地目录"><span>准备本地目录</span></a></h2><p>我在 ~/Documents 下建了两个目录（新电脑还没施工完成，这里还会补充更多目录），Code 和 SoftwareConfiguration，<a href="https://img.alicdn.com/imgextra/i2/O1CN01s0ARb525kp39GuaWu_!!6000000007565-2-tps-480-562.png" target="_blank" rel="noopener noreferrer">长这样</a>。Code 用于存代码；SoftwareConfiguration 用于保存各种软件配置，我把 Alfred、Eagle 和 Espanso 的配置放在这里。</p><h2 id="配置-app" tabindex="-1"><a class="header-anchor" href="#配置-app"><span>配置 App</span></a></h2><blockquote><p>按这个顺序会比较好。</p></blockquote><p>1、Karabiner-Elements</p><p>参考 <a href="https://hackmd.io/@UXqYDTxCTie91Shvsppqyw/rk4u9i-pG?type=view" target="_blank" rel="noopener noreferrer">Karabiner-Element 配置 F19 键 - HackMD</a> 。在 <a href="https://pqrs.org/osx/karabiner/complex_modifications/" target="_blank" rel="noopener noreferrer">Karabiner-Elements complex_modifications rules</a> 搜「Change caps_lock key」，import 后只保留一条和 F19 相关的，然后在命令行里编辑「~/.config/karabiner/karabiner.json」，把刚才那条规则的「caps_lock」换成「right_command」（两处）。这样你就把基本不会用到的「右⌘」废物利用变成了「F19」键，然后你的快捷键组合会多很多。</p><p>如果你仔细看配置，会发现「F19」是由四个键「⌘⇧⌃⌥」组成的，在一些 App 的快捷键配置里你会看到四个键，不要奇怪，这也是他。</p><p>2、Alfred</p><p>做几个配置。1）开启 Powerpack，2）修改快捷键为刚才配的「F19」，3）把老电脑的 Alfred 配置复制到 ~/Documents/SoftwareConfiguration/Alfred 下，然后在「Advanced」里修改配置目录指向他，你的 Workflow 就全回来了，4）「Features &gt; Web Bookmarks」里记得把「Google Chrome Bookmarks」选上，这样就可以用 Alfred 模糊搜 Chrome 书签，用于快速打开网站。</p><p>3、iTerm2 和 zsh</p><p>先配置 iTerm2，这是<a href="https://img.alicdn.com/imgextra/i1/O1CN01PPttEm1mCx3bddVjX_!!6000000004919-2-tps-2374-1532.png" target="_blank" rel="noopener noreferrer">效果图</a>。1）Appearance 里，General 的 Theme 选「Minimal」，Pane 里不要「Show per-pane title bar with split panes」，Dimming 里选上第一和第三个，2）Profiles 里，Working Directory 里选「Reuse previous session&#39;s directory」。</p><p>安装 zsh 和 <a href="https://starship.rs/" target="_blank" rel="noopener noreferrer">starship</a>，starship 是 rust 写的 prompt 工具，极快。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span>omz update</span></span>
<span class="line"><span>source ~/.zshrc</span></span>
<span class="line"><span># starship 是 rust 写的 prompt 工具，极快</span></span>
<span class="line"><span>brew install starship</span></span>
<span class="line"><span>echo &#39;eval &quot;$(starship init zsh)&quot;&#39; &gt;&gt; ~/.zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 zsh 的插件，我个人用到了 zsh-autosuggestions、zsh-completions 和 fast-syntax-highlighting。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</span></span>
<span class="line"><span>git clone https://github.com/zsh-users/zsh-completions \${ZSH_CUSTOM:-\${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions</span></span>
<span class="line"><span>git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 ~/.zshrc，我的配置如下（略做删减）。这里有些 alias 是以 <code>,</code> 开头的，因为这样你敲 <code>,</code> 然后按「Tab」就可以<a href="https://img.alicdn.com/imgextra/i3/O1CN01XUDvg01ZHRwduLZSo_!!6000000003169-0-tps-1422-194.jpg" target="_blank" rel="noopener noreferrer">看到所有自己定义的命令</a>了。为啥有些没有加 <code>,</code> ？历史原因… 因为其他都用习惯了就不改了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># Disable brew auto update</span></span>
<span class="line"><span>export HOMEBREW_NO_AUTO_UPDATE=1</span></span>
<span class="line"><span>export ZSH=&quot;$HOME/.oh-my-zsh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugins=(</span></span>
<span class="line"><span>  # 不会 git 插件，因为和我的 alias 设置冲突</span></span>
<span class="line"><span>  # git</span></span>
<span class="line"><span>  zsh-completions</span></span>
<span class="line"><span>  zsh-autosuggestions</span></span>
<span class="line"><span>  fast-syntax-highlighting</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Alias</span></span>
<span class="line"><span>alias ,ms=&quot;%PATH/TO/MY/SCRIPT%&quot;</span></span>
<span class="line"><span>alias ,ip=&quot;ipconfig getifaddr en0&quot;</span></span>
<span class="line"><span>alias ,sshconfig=&quot;vim ~/.ssh/config&quot;</span></span>
<span class="line"><span>alias ,gitconfig=&quot;vim ~/.gitconfig&quot;</span></span>
<span class="line"><span>alias b=&quot;,ms branch&quot;</span></span>
<span class="line"><span>alias umi=&quot;/Users/%MY_USERNAME%/Documents/Code/github.com/umijs/umi/packages/umi/bin/umi.js&quot;</span></span>
<span class="line"><span># chore</span></span>
<span class="line"><span>alias br=&quot;bun run&quot;</span></span>
<span class="line"><span>alias c=&#39;code .&#39;</span></span>
<span class="line"><span>alias i=&#39;webstorm .&#39;</span></span>
<span class="line"><span>alias cdtmp=&#39;cd \`mktemp -d /tmp/sorrycc-XXXXXX\`&#39;</span></span>
<span class="line"><span>alias pi=&quot;echo &#39;Pinging Baidu&#39; &amp;&amp; ping www.baidu.com&quot;</span></span>
<span class="line"><span>alias ip=&quot;ipconfig getifaddr en0 &amp;&amp; ipconfig getifaddr en1&quot;</span></span>
<span class="line"><span>alias cip=&quot;curl cip.cc&quot;</span></span>
<span class="line"><span>alias qr=&#39;qrcode-terminal&#39;</span></span>
<span class="line"><span>alias ee=&quot;stree&quot;</span></span>
<span class="line"><span>alias hosts=&quot;vi /etc/hosts&quot;</span></span>
<span class="line"><span>## system</span></span>
<span class="line"><span>alias showFiles=&quot;defaults write com.apple.finder AppleShowAllFiles YES &amp;&amp; killall Finder&quot;</span></span>
<span class="line"><span>alias hideFiles=&quot;defaults write com.apple.finder AppleShowAllFiles NO &amp;&amp; killall Finder&quot;</span></span>
<span class="line"><span># cd</span></span>
<span class="line"><span>alias ..=&#39;cd ../&#39;</span></span>
<span class="line"><span>alias ...=&#39;cd ../../&#39;</span></span>
<span class="line"><span>alias ..l.=&#39;cd ../../ &amp;&amp; ll&#39;</span></span>
<span class="line"><span>alias ....=&#39;cd ../../../&#39;</span></span>
<span class="line"><span>alias ~=&quot;cd ~&quot;</span></span>
<span class="line"><span>alias -- -=&quot;cd -&quot;</span></span>
<span class="line"><span>alias ll=&#39;ls -alhG&#39;</span></span>
<span class="line"><span>alias ls=&#39;ls -G&#39;</span></span>
<span class="line"><span># git</span></span>
<span class="line"><span>alias git=hub</span></span>
<span class="line"><span>alias gp=&quot;git push&quot;</span></span>
<span class="line"><span>alias gt=&quot;git status -sb&quot;</span></span>
<span class="line"><span>alias ga=&quot;git add .&quot;</span></span>
<span class="line"><span>alias gc=&quot;git commit -av&quot;</span></span>
<span class="line"><span>alias gcr=&quot;git checkout master &amp;&amp; git fetch &amp;&amp; git rebase&quot;</span></span>
<span class="line"><span>alias gclean=&quot;git reset --hard &amp;&amp; git clean -df&quot;</span></span>
<span class="line"><span>alias grebase=&quot;git fetch &amp;&amp; git rebase -i&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## timelapse</span></span>
<span class="line"><span>## ref: https://www.reddit.com/r/mac/comments/wshn4/another_way_to_timelapse_record_your_mac_screen/</span></span>
<span class="line"><span>function record() {</span></span>
<span class="line"><span>  cd ~/screencapture/jpg;</span></span>
<span class="line"><span>  RES_WIDTH=$(/usr/sbin/system_profiler SPDisplaysDataType | grep Resolution);</span></span>
<span class="line"><span>  RES_WIDTH=(\${RES_WIDTH:22:4});</span></span>
<span class="line"><span>  RES_WIDTH=$((RES_WIDTH/2));</span></span>
<span class="line"><span>  while :</span></span>
<span class="line"><span>  NOW=$(date +&quot;%y%m%d%H%M%S&quot;);</span></span>
<span class="line"><span>  do screencapture -C -t jpg -x ~/screencapture/jpg/$NOW.jpg;</span></span>
<span class="line"><span>    sleep 7 &amp; pid=$!</span></span>
<span class="line"><span>    NOW=$(date +&quot;%y%m%d%H%M%S&quot;);</span></span>
<span class="line"><span>    wait $pid</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function movie() {</span></span>
<span class="line"><span>  NOW=$(date +&quot;%y%m%d%H%M%S&quot;);</span></span>
<span class="line"><span>  cd ~/screencapture/jpg;</span></span>
<span class="line"><span>  cnt=0</span></span>
<span class="line"><span>  rm -rf .DS_Store;</span></span>
<span class="line"><span>  for file in *</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>      if [ -f &quot;$file&quot; ] ; then</span></span>
<span class="line"><span>      ext=\${file##*.}</span></span>
<span class="line"><span>      printf -v pad &quot;%05d&quot; &quot;$cnt&quot;</span></span>
<span class="line"><span>      mv &quot;$file&quot; &quot;\${pad}.\${ext}&quot;</span></span>
<span class="line"><span>      cnt=$(( $cnt + 1 ))</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>  done;</span></span>
<span class="line"><span>  rm -rf 00000.jpg;</span></span>
<span class="line"><span>  for pic in *.jpg;</span></span>
<span class="line"><span>    do convert $pic -resize 50% $pic;</span></span>
<span class="line"><span>  done;</span></span>
<span class="line"><span>  ffmpeg -r 24 -i %05d.jpg -b 20000k ~/screencapture/mov/$USER-$NOW.mov;</span></span>
<span class="line"><span>  rm -rf ./*.jpg;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function pfd() {</span></span>
<span class="line"><span>  osascript 2&gt; /dev/null &lt;&lt;EOF</span></span>
<span class="line"><span>  tell application &quot;Finder&quot;</span></span>
<span class="line"><span>    return POSIX path of (target of window 1 as alias)</span></span>
<span class="line"><span>  end tell</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function mcd {</span></span>
<span class="line"><span>  mkdir $1 &amp;&amp; cd $1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function cdf() {</span></span>
<span class="line"><span>  cd &quot;$(pfd)&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function ,touch {</span></span>
<span class="line"><span>  mkdir -p &quot;$(dirname &quot;$1&quot;)&quot; &amp;&amp; touch &quot;$1&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function ,take() {</span></span>
<span class="line"><span>  mkdir -p &quot;$(dirname &quot;$1&quot;)&quot; &amp;&amp; touch &quot;$1&quot; &amp;&amp; take &quot;$(dirname &quot;$1&quot;)&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># load zsh-completions</span></span>
<span class="line"><span>autoload -U compinit &amp;&amp; compinit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># use nvm</span></span>
<span class="line"><span>source /opt/homebrew/opt/nvm/nvm.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># autojump</span></span>
<span class="line"><span>source /opt/homebrew/etc/profile.d/autojump.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># use starship theme (needs to be at the end)</span></span>
<span class="line"><span>eval &quot;$(starship init zsh)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 必须在 plugins 之后</span></span>
<span class="line"><span>source $ZSH/oh-my-zsh.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bun completions</span></span>
<span class="line"><span>[ -s &quot;/Users/chencheng/.bun/_bun&quot; ] &amp;&amp; source &quot;/Users/chencheng/.bun/_bun&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bun</span></span>
<span class="line"><span>export BUN_INSTALL=&quot;$HOME/.bun&quot;</span></span>
<span class="line"><span>export PATH=&quot;$BUN_INSTALL/bin:$PATH&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># pnpm</span></span>
<span class="line"><span>export PNPM_HOME=&quot;/Users/chencheng/Library/pnpm&quot;</span></span>
<span class="line"><span>export PATH=&quot;$PNPM_HOME:$PATH&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、SSH</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mkdir ~/.ssh</span></span>
<span class="line"><span># file name 用 github，passphrase 随意</span></span>
<span class="line"><span>ssh-keygen -t ed25519 -C &quot;github&quot;</span></span>
<span class="line"><span># 编辑配置，内容如下</span></span>
<span class="line"><span>touch ~/.ssh/config</span></span>
<span class="line"><span>Host *</span></span>
<span class="line"><span>  AddKeysToAgent yes</span></span>
<span class="line"><span>  UseKeychain yes</span></span>
<span class="line"><span>  IdentityFile ~/.ssh/github</span></span>
<span class="line"><span># 添加到系统 keychain</span></span>
<span class="line"><span>ssh-add --apple-use-keychain ~/.ssh/github</span></span>
<span class="line"><span># 添加 public key 到 github</span></span>
<span class="line"><span>gh auth login</span></span>
<span class="line"><span>gh ssh-key add ~/.ssh/github.pub -t github</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、额外的命令行工具：Bun 和 Projj</p><p>安装 Bun。我主要是用他的 run 命令，极快，上面也有别名 <code>br</code>，比如执行比如 <code>br dev</code> 即 <code>npm run dev</code>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -fsSL https://bun.sh/install | bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装 PROJJ，我用他来管理 Code 下的仓库，按「domain/group/repo」这样组织，找起来会比较容易。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i projj projj-hooks -g</span></span>
<span class="line"><span>projj init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编辑 ~/.projj/config.json，我的配置如下（记得把 name 和邮箱改成自己的）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;base&quot;: [</span></span>
<span class="line"><span>    &quot;/Users/%YOUR_USERNAME%/Documents/Code&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>    &quot;postadd&quot;: &quot;projj_git_config_user&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;postadd&quot;: {</span></span>
<span class="line"><span>    &quot;github.com&quot;: {</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;sorrycc&quot;,</span></span>
<span class="line"><span>      &quot;email&quot;: &quot;sorrycc@gmail.com&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;alias&quot;: {</span></span>
<span class="line"><span>    &quot;github://&quot;: &quot;https://github.com/&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以愉快地用 PROJJ 添加项目了，比如。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>projj add git@github.com:umijs/umi.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、Espanso</p><p>我在 ~/Documents/SoftwareConfiguration/Espanso 下建了个 base.yml，内容如下（已删除个人敏感信息），并软链到 Espanso 原来的配置文件夹里。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>matches:</span></span>
<span class="line"><span>  # misc</span></span>
<span class="line"><span>  - trigger: &quot;;&gt;&gt;&quot;</span></span>
<span class="line"><span>    replace: ➡</span></span>
<span class="line"><span>  - trigger: &quot;;vv&quot;</span></span>
<span class="line"><span>    replace: ⬇</span></span>
<span class="line"><span>  - trigger: &quot;;^^&quot;</span></span>
<span class="line"><span>    replace: ⬆</span></span>
<span class="line"><span>  - trigger: &quot;;&lt;&lt;&quot;</span></span>
<span class="line"><span>    replace: ⬅</span></span>
<span class="line"><span>  # life</span></span>
<span class="line"><span>  - trigger: &quot;;mobi&quot;</span></span>
<span class="line"><span>    replace: 我的手机号</span></span>
<span class="line"><span>  - trigger: &quot;;mail&quot;</span></span>
<span class="line"><span>    replace: 我的邮箱</span></span>
<span class="line"><span>  - trigger: &quot;;addr&quot;</span></span>
<span class="line"><span>    replace: 我的家庭住址</span></span>
<span class="line"><span>  - trigger: &quot;;officeAddr&quot;</span></span>
<span class="line"><span>    replace: 公司地址</span></span>
<span class="line"><span>  # faq</span></span>
<span class="line"><span>  - trigger: &quot;;chongt&quot;</span></span>
<span class="line"><span>    replace: 冲突了，merge 下 master。</span></span>
<span class="line"><span>  # code</span></span>
<span class="line"><span>  - trigger: &quot;;log&quot;</span></span>
<span class="line"><span>    replace: console.log($|$)</span></span>
<span class="line"><span>  - trigger: &quot;;delay&quot;</span></span>
<span class="line"><span>    replace: const delay = (ms) =&gt; new Promise((res) =&gt; setTimeout(res, ms));</span></span>
<span class="line"><span>  # mac symbols</span></span>
<span class="line"><span>  - trigger: &quot;:cmd&quot;</span></span>
<span class="line"><span>    replace: &quot;⌘&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:shift&quot;</span></span>
<span class="line"><span>    replace: &quot;⇧&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:ctrl&quot;</span></span>
<span class="line"><span>    replace: &quot;⌃&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:alt&quot;</span></span>
<span class="line"><span>    replace: &quot;⌥&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:opt&quot;</span></span>
<span class="line"><span>    replace: &quot;⌥&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:left&quot;</span></span>
<span class="line"><span>    replace: &quot;←&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:right&quot;</span></span>
<span class="line"><span>    replace: &quot;→&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:up&quot;</span></span>
<span class="line"><span>    replace: &quot;↑&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:down&quot;</span></span>
<span class="line"><span>    replace: &quot;↓&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:caps_lock&quot;</span></span>
<span class="line"><span>    replace: &quot;⇪&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:esc&quot;</span></span>
<span class="line"><span>    replace: &quot;⎋&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:eject&quot;</span></span>
<span class="line"><span>    replace: &quot;⏏&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:return&quot;</span></span>
<span class="line"><span>    replace: &quot;↵&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:enter&quot;</span></span>
<span class="line"><span>    replace: &quot;⌅&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:tab&quot;</span></span>
<span class="line"><span>    replace: &quot;⇥&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:backtab&quot;</span></span>
<span class="line"><span>    replace: &quot;⇤&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:pgup&quot;</span></span>
<span class="line"><span>    replace: &quot;⇞&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:pgdown&quot;</span></span>
<span class="line"><span>    replace: &quot;⇟&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:home&quot;</span></span>
<span class="line"><span>    replace: &quot;↖&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:end&quot;</span></span>
<span class="line"><span>    replace: &quot;↘&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:space&quot;</span></span>
<span class="line"><span>    replace: &quot;␣&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:del&quot;</span></span>
<span class="line"><span>    replace: &quot;⌫&quot;</span></span>
<span class="line"><span>  - trigger: &quot;:fdel&quot;</span></span>
<span class="line"><span>    replace: &quot;⌦&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、Thor</p><p>让你可以一键启动、显示或隐藏某个 App，对我来说是效率神器。但有时太快也不好，会让你无意间地快速切过去，比如钉钉、Reeder 和 Telegram 我后来就把他们去掉了。</p><p>我的配置见<a href="https://img.alicdn.com/imgextra/i3/O1CN01PWmDZN24797TUfPbL_!!6000000007343-0-tps-594-1918.jpg" target="_blank" rel="noopener noreferrer">图</a>，快捷键供参考。</p><p>8、安装字体</p><p>编程字体我用 <a href="https://www.monolisa.dev/" target="_blank" rel="noopener noreferrer">Monolisa</a>，之前还用过 <a href="https://github.com/adobe-fonts/source-code-pro" target="_blank" rel="noopener noreferrer">Source Code Pro</a>、<a href="https://dank.sh/" target="_blank" rel="noopener noreferrer">Dank Mono</a> 和 <a href="https://www.typography.com/fonts/operator/overview" target="_blank" rel="noopener noreferrer">Operator Mono</a>。此外我还安装了<a href="https://github.com/lxgw/LxgwWenKai" target="_blank" rel="noopener noreferrer">霞鹜文楷</a>和阿里普惠体，霞鹜文楷我用在了语雀等文档站和 Obsidian 里。</p><p>9、WebStorm</p><p>简单几步配置即可。1）安装 Github Copilot 和 Inspection Lens 插件，2）配置 Color Schema 为「Intellij Light」，3）配置 Font 为 MonoLisa，同时 Size 为 20，大点对眼睛好，哈哈。</p><p>10、VSCode</p><p>辅助编辑器，施工中。</p><p>目前包含的插件如下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>dbaeumer.vscode-eslint</span></span>
<span class="line"><span>esbenp.prettier-vscode</span></span>
<span class="line"><span>GitHub.copilot</span></span>
<span class="line"><span>isudox.vscode-jetbrains-keybindings</span></span>
<span class="line"><span>kettanaito.nako</span></span>
<span class="line"><span>styled-components.vscode-styled-components</span></span>
<span class="line"><span>unifiedjs.vscode-mdx</span></span>
<span class="line"><span>usernamehw.errorlens</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主题是 <a href="https://marketplace.visualstudio.com/items?itemName=kettanaito.nako" target="_blank" rel="noopener noreferrer">Nako - Visual Studio Marketplace</a>。</p><p>配置如下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>11、Git</p><p>先配 name 和 email。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;you@your-domain.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行这两条命令。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>git config --global --add push.default current</span></span>
<span class="line"><span>git config --global --add push.autoSetupRemote true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>你会收获两个好处。1）不需要「git push origin xxx」，只要「git push」，2）再也不会遇到「no upstream branch」的报错，也不需要「git push --set-upstream origin test &amp;&amp; git push」。因为我们执行 git push 的大部分场景都是 push 到同名的 remote branch。来源是 <a href="https://pawelgrzybek.com/auto-setup-remote-branch-and-never-again-see-an-error-about-the-missing-upstream/" target="_blank" rel="noopener noreferrer">Auto setup remote branch and never again see an error about the missing upstream | pawelgrzybek.com</a>。</p><p>再修改 ~/.gitignore_global，加入和你 IDE 相关的 ignore 配置。我会把 .idea 加进去，这是和你相关的专有配置，如果给其他用 VSCode 的作者的项目提交时，都加上 .idea 的 .gitignore 配置，其实并不太礼貌。反之，VSCode 或其他编辑器工具的用户也要加上自己的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>*~</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>.idea</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12、NVM 和 Node</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>nvm install 18</span></span>
<span class="line"><span>node -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>13、Eagle</p><p>Eagle 的库我保存在 ~/Documents/SoftwareConfiguration/Eagle 下。</p><p>14、Focus</p><p>要稍微做下配置。1）添加 Block App，我加了钉钉、Reeder，2）Block Website 里我把内置的全删了，留了<a href="https://img.alicdn.com/imgextra/i3/O1CN017Pt2Y827DxrmBSPh4_!!6000000007764-2-tps-1448-1408.png" target="_blank" rel="noopener noreferrer">这些</a>，3）Block App 的配置要选「强制退出」，「隐藏」的模式在 Mac 13.2 下有问题，不会生效或者表现奇怪。</p><p>15、Bob。</p><p>我的快捷键是「F19+A」划词翻译，「F19+S」截图翻译。插件装了 <a href="https://github.com/clubxdev/bob-plugin-deeplx" target="_blank" rel="noopener noreferrer">bob-plugin-deeplx</a> 和 <a href="https://github.com/roojay520/bobplugin-google-translate" target="_blank" rel="noopener noreferrer">bobplugin-google-translate</a>。文本翻译我加了 Deepl X、有道、阿里、金山词霸，文本识别我用腾讯 OCR。</p><p>16、Rectangle。</p><p>删了所有快捷键，只保留两个。「F19+C」居中，「F19+M」放最大。</p><p>17、uPic</p><p>用了自定义图床，略。</p><p>18、Paste</p><p>我的快捷键是「⌘⌥C」。配置里选上「Always paste as Plain Text」，去掉「Enable sound effects」。</p><p>19、Reeder</p><p>两个改动。在 Shortcuts 配置里，把「Mark All as Read…」的快捷键改成「⇧A」，然后去掉「Ask before marking all as read」。</p><p>20、Google Chrome</p><p>登录 Google 账号后所有东西就都同步过来了，除了 Tampermonkey 的自定义脚本。但简单 Google 后也找到了办法，我参考 <a href="https://gist.github.com/derjanb/9f6c10168e63c3dc3cf0" target="_blank" rel="noopener noreferrer">extract_tampermonkey_script.py · GitHub</a> 把 <code>/Users/%YOUR_USERNAME%/Library/Application\\ Support/Google/Chrome/Default/Local\\ Extension\\ Settings/dhdgffkkebhmkfjojejmpbldmpobfkfo</code> 这个文件夹下的内容复制到新电脑后就能用了。</p><p>21、Telegram</p><p>登录时死活登不上，开了代理才行。</p><p>22、Obsidian</p><p>我先试了用 Obsidian Sync 直接同步出本地文档库，但发现只包含文档，不包含插件。于是改成先用 git clone 完整仓库，再关联到 Obsidian Sync 的远程文档库。用 Git 做同步时有个要注意的是，.obsidian 目录下的 workspace 相关的 3 个文件不要提交，否则会很容易冲突。</p><p>23、SourceTree</p><p>配置中「Git」Tab 下选「Use System Git」，否则会报找不到 git 的错误。</p><p>24、iA Writer</p><p>把所有 Markdown 文件<a href="https://img.alicdn.com/imgextra/i1/O1CN01YZ2Osn1qtmYrCS9tw_!!6000000005554-2-tps-502-752.png" target="_blank" rel="noopener noreferrer">改成用 iA Writer 打开</a>，因为 iA Writer 又轻又好看。然后我在「系统设置 &gt; Keyboard &gt; Keyboard Shortcuts &gt; App Shortcuts」中增加了一些针对 IA Writer 的快捷键配置。</p><ul><li>Show Preview「⌘P」</li><li>Hide Preview「⌘P」</li><li>Move Line Up「⌘⇧↑」</li><li>Move Line Down「⌘⇧↓」</li><li>Strikethrough「⌘⇧R」</li></ul><p>25、Shottr</p><p>快捷键里把所有都删了，只保留两个。Area screenshot 用「F19 + 7」，Scrolling screenshot 用「F19 + 8」。</p><p>26、Sip</p><p>Show Picker 的快捷键是「F19 + 2」。</p><p>27、CleanShotX</p><p>Capture Area 的快捷键是「F19 + 6」。</p><h2 id="系统设置" tabindex="-1"><a class="header-anchor" href="#系统设置"><span>系统设置</span></a></h2><p>1、General。1）Default Web Browser 用「Google Chrome」，2）Language &amp; Region 里，把 First day of week 改成「Monday」，这样你的日历就会<a href="https://img.alicdn.com/imgextra/i2/O1CN014aouuQ1HfZisiosbo_!!6000000000785-0-tps-2456-1572.jpg" target="_blank" rel="noopener noreferrer">从周一开始</a>了。</p><p>2、Siri。直接禁掉。</p><p>3、Trackpad。Scroll direction：Natural 去掉。</p><p>4、Keyboard。1）Keyboard 里把 Key Repeat 调到「Fast」，把 Delay Util Repeat 调到「Short」，需要一点时间适应，适应后会感受到光标快速移动带来的效率提升，2）Text 里 use <code>&quot;</code> for double quotes，use <code>&#39;</code> for single quotes，然后把其他都禁掉，不需要系统帮忙改，基本都是帮倒忙的，3）Shortcuts 里，Mission Control 用「⌥A」,Application windows 用「⌥S」，Show Desktop 用「⌥D」，Input Sources 的 Select Previous 用 「⌘Space」，Screenshots 里 Save picture of selected area as a file 用「F19 + 3」，Copy picture of selected area to the clipboard 用「F19 + 4」，4）输入法删除默认的拼音改用搜狗拼音，登录后可以在不同电脑之间同步词库，搜狗输入法的皮肤我用的<a href="https://github.com/xiaochunjimmy/Sogou-Input-Skin" target="_blank" rel="noopener noreferrer">Matrix 矩阵</a>。</p><p>5、Spotlight。只开 Applications、Bookmarks &amp; History、Documents、Folders、System Preferences。</p><p>6、Mission Control。把 Hot Corners 里的全部关掉，不需要，因为有 Thor 了，可以更快切除应用。</p><p>7、Sharing。只留「AirPlay Receiver」即可，同时可以改下 computer name。</p><p>8、Security &amp; Privacy。把「Use Apple Watch to unlock」打开。</p><p>9、Notification。不必要的全关掉，我只开了 Calendar、Find By、Reminders 和 Wallet。</p><p>10、Touch ID and Password。开启用 Apple Watch 解锁。</p><p>11、执行 <code>defaults write -g NSWindowShouldDragOnGesture -bool true</code>，然后就可以按住「⌘+⌃」然后鼠标点击任意地方拖动窗口了。来源 <a href="https://mmazzarolo.com/blog/2022-04-16-drag-window-by-clicking-anywhere-on-macos/" target="_blank" rel="noopener noreferrer">Moving a macOS window by clicking anywhere on it (like on Linux) · mmazzarolo.com</a>，但是在 MacOS 13 下似乎失效了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://www.robinwieruch.de/mac-setup-web-development/" target="_blank" rel="noopener noreferrer">Mac Setup for Web Development 2023</a></li><li><a href="https://www.swyx.io/new-mac-setup-2021" target="_blank" rel="noopener noreferrer">My 2021 New Mac Setup</a></li></ul><p>ChenCheng</p>`,152),p=[l];function r(t,c){return a(),n("div",null,p)}const u=s(e,[["render",r],["__file","MacOS.html.vue"]]),h=JSON.parse('{"path":"/studynotes/408-PC/MacOS.html","title":"MacOS","lang":"zh-CN","frontmatter":{"description":"MacOS 由于第一次接触MacOS，花了三周的星期六（三天）来搭这台MacOS Software Apr. 12th 2024 Karabiner (win autohotkey) Alfred (Lib & Everything) in 关键词（可以搜文件里面的内容！） Stats Clash Easydict IINA Omi Lunar（两台电...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/studynotes/408-PC/MacOS.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"MacOS"}],["meta",{"property":"og:description","content":"MacOS 由于第一次接触MacOS，花了三周的星期六（三天）来搭这台MacOS Software Apr. 12th 2024 Karabiner (win autohotkey) Alfred (Lib & Everything) in 关键词（可以搜文件里面的内容！） Stats Clash Easydict IINA Omi Lunar（两台电..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T02:42:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-01T02:42:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MacOS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T02:42:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Software","slug":"software","link":"#software","children":[]},{"level":2,"title":"ShortKey","slug":"shortkey","link":"#shortkey","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[]},{"level":2,"title":"Mac Knowledge","slug":"mac-knowledge","link":"#mac-knowledge","children":[]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]},{"level":2,"title":"安装 ClashX，你懂的","slug":"安装-clashx-你懂的","link":"#安装-clashx-你懂的","children":[]},{"level":2,"title":"安装 App 和 Cli 工具","slug":"安装-app-和-cli-工具","link":"#安装-app-和-cli-工具","children":[]},{"level":2,"title":"准备本地目录","slug":"准备本地目录","link":"#准备本地目录","children":[]},{"level":2,"title":"配置 App","slug":"配置-app","link":"#配置-app","children":[]},{"level":2,"title":"系统设置","slug":"系统设置","link":"#系统设置","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1712997543000,"updatedTime":1717209768000,"contributors":[{"name":"Fighting","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":17.24,"words":5173},"filePathRelative":"studynotes/408-PC/MacOS.md","localizedDate":"2024年4月13日","autoDesc":true}');export{u as comp,h as data};
