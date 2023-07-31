import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,a as e,b as i,e as n,d as a}from"./app-4d4d6126.js";const p={},m=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),i(" 简介")],-1),v={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"开发背景",-1),g=a('<p><strong>开发思路：</strong> Termux 安装nodejs 和 python. python 中执行预约程序， 然后接入termux手机短信模块， 然后直接发送请求即可。<br><strong>优点：</strong> 只需要配置一次，然后直接撒手不用管了就行了（如果你会crontab计划任务）。操作流程超级简单。纯小白配置时间大约需要个15min，用过linux的同学配置时间为2分钟即可。<br><strong>缺点：</strong> 接触过linux的没有缺点；无界面，纯代码，对小白不友好。</p><img src="https://image.3001.net/images/20180501/15251875958364.png" alt="图片alt" title="图片"><h2 id="termux版使用说明" tabindex="-1"><a class="header-anchor" href="#termux版使用说明" aria-hidden="true">#</a> Termux版使用说明</h2><h3 id="快速配置视频教程-小白向" tabindex="-1"><a class="header-anchor" href="#快速配置视频教程-小白向" aria-hidden="true">#</a> 快速配置视频教程（小白向）</h3>',4),x={href:"https://cloud.06dn.com/s/WROKsZ/video?name=QuickYMQ%20for%20Termux%20%E5%AE%89%E5%8D%93%20%E6%95%99%E7%A8%8B.mp4",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"快速配置-小白推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速配置-小白推荐","aria-hidden":"true"},"#"),i(" 快速配置（小白推荐）")],-1),_=e("p",null,"下载Termux, termux-API:",-1),k={href:"https://f-droid.org/repo/com.termux_118.apk",target:"_blank",rel:"noopener noreferrer"},f={href:"https://f-droid.org/repo/com.termux.api_51.apk",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,[e("p",null,"设置Termux ,Termux-API的权限。")],-1),q=a(`<div class="hint-container warning"><p class="hint-container-title">这一步非常重要</p><ul><li>Termux : 打开存储权限和关闭省电策略</li><li>Termux-API: 给短信相关的权限。 系统设置-应用管理-权限设置。备注：Termux-API无程序图标，仅仅是插件而已。</li></ul></div><ol start="3"><li><p>把下面的代码粘贴到新安装的Termux中【小白懒蛋闭眼操作向】，让输入东西的时候一路点回车就行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;s@^\\(deb.*stable main\\)$@#\\1\\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@&#39; $PREFIX/etc/apt/sources.list;apt update &amp;&amp; apt upgrade;pkg install vim;pkg install nodejs;pkg install git;git clone https://gitlab.com/quickymq/quickymq.git;pkg install python;pip install pip -U;pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple;pip install wheel;pip install setuptools --upgrade;cd quickymq;pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置QuickYMQ 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim run*
# 键盘输入 i ,进入编辑模式，填入学号、密码、场地信息等。编辑完成后，点击esc,退出编辑模式。键盘输入 :wq ,保存退出。
python run* 即可测试本程序是否正常执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="快速配置代码详解-纯小白跳过" tabindex="-1"><a class="header-anchor" href="#快速配置代码详解-纯小白跳过" aria-hidden="true">#</a> 快速配置代码详解（纯小白跳过）</h3>`,3),T=e("p",null,"下载Termux, termux-API:",-1),I={href:"https://f-droid.org/repo/com.termux_118.apk",target:"_blank",rel:"noopener noreferrer"},P={href:"https://f-droid.org/repo/com.termux.api_51.apk",target:"_blank",rel:"noopener noreferrer"},A=a(`<li><p>设置Termux ,Termux-API的权限。</p><ul><li>Termux : 存储和关闭省电策略</li><li>Termux-API: 给短信相关的权限。 系统设置-应用管理-权限设置。备注：Termux-API无程序图标，仅仅是插件而已。</li></ul></li><li><p>入门配置Termux</p><ul><li><p>更换Termux文件下载源：</p><ul><li><p>【推荐】在较新版的 Termux 中，官方提供了图形界面（TUI）来半自动替换镜像，推荐使用该种方式以规避其他风险。 在 Termux 中执行如下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>termux-change-repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>​ 在图形界面引导下，使用自带方向键可上下移动。<br> ​ 第一步使用空格选择需要更换的仓库，之后在第二步选择 TUNA/BFSU 镜像源。确认无 误后回车，镜像源会自动完成更换。</p><ul><li><p>或者命令手动修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;s@^\\(deb.*stable main\\)$@#\\1\\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@&#39; $PREFIX/etc/apt/sources.list
apt update &amp;&amp; apt upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>更新安装工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装vim nodejs python git及配套插件</p><p>vim:</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>pkg install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nodejs</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg install nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg install git
git clone https://gitlab.com/quickymq/quickymq.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg install python
# 配置pypi源
pip install pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 依赖python项
pip install wheel
pip install setuptools --upgrade
# 安装QuickYMQ依赖项
cd quickymq
pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>配置QuickYMQ 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd
cd quickymq
vim run*
# 键盘输入 i ,进入编辑模式，填入学号、密码、场地信息等。编辑完成后，点击esc,退出编辑模式。键盘输入 :wq ,保存退出。
python run* 即可测试本程序是否正常执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),B=a(`<h3 id="quickymq-termux代码使用说明" tabindex="-1"><a class="header-anchor" href="#quickymq-termux代码使用说明" aria-hidden="true">#</a> QuickYMQ-Termux代码使用说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mybook = 啦啦啦_Badminton_intranet_apply(&#39;202******&#39;,&#39;mima&#39;,[&#39;5925&#39;,&#39;5927&#39;],date,&#39;07:30:00&#39;,&#39;&#39;,0,0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&#39;202******&#39;</code> 是学号，</p><p><code>&#39;mima&#39;</code> 是密码</p><p><code>[&#39;5925&#39;,&#39;5927&#39;]</code>场地编号</p><p>以上修改的内容只修改数字或者英文字母，其他符号不能动。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例如
mybook = 请替换这里的字_Badminton_intranet_apply(&#39;2029655286148&#39;,&#39;aiyoubucuoyou&#39;,[&#39;5925&#39;,&#39;5927&#39;],date,&#39;07:30:00&#39;,&#39;&#39;,0,0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高阶定时操作使用说明" tabindex="-1"><a class="header-anchor" href="#高阶定时操作使用说明" aria-hidden="true">#</a> 高阶定时操作使用说明</h3><p>目的： 实现每周周x预约球馆</p>`,9),E=e("li",null,[e("p",null,"安装定时软件"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`pkg install cronie
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1),Q=e("p",null,"配置日程管理事项",-1),w=e("code",null,"crond",-1),j={href:"https://linuxhandbook.com/start-stop-restart-cron/",target:"_blank",rel:"noopener noreferrer"},V=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 详细步骤如下：
# 计划程序建立方法
# 启动crontab计划任务
service crond start
# 建立计划任务
crontab -e
# 编辑计划任务（根据下面的自行修改）
29 7 * * 2,3 cd ~/quickymq;python run*.py&gt;&gt;~/quickymq/book.log 2&gt;&amp;1
# 分钟 小时 每周的周二周三 （执行index.py程序）运行日志在quickymq/book.log中
# 查看当前计划任务列表
crontab -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),M=e("p",null,"设置cron开机启动",-1),N=e("p",null,"参看下面文章",-1),U={href:"https://blog.csdn.net/nongcunqq/article/details/119105394",target:"_blank",rel:"noopener noreferrer"},Y=e("h2",{id:"代码运行结果示例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码运行结果示例","aria-hidden":"true"},"#"),i(" 代码运行结果示例")],-1),$=["src"];function F(s,R){const r=l("Badge"),t=l("ExternalLinkIcon"),d=l("VideoPlayer");return o(),c("div",null,[m,e("div",v,[h,e("p",null,[i("由于需要手机短信处理功能，因此一步到位，直接以手机为平台处理所有操作。因此在安卓系统上的Termux完全符合我的要求。"),n(r,{text:"强烈推荐",type:"tip",vertical:"middle"})])]),g,e("p",null,[e("a",x,[i("播放地址"),n(t)])]),n(d,{src:"/assets/video/jiaocheng.mp4",style:{width:"100%",height:"auto"}}),b,e("ol",null,[e("li",null,[_,e("p",null,[e("a",k,[i("Termux下载地址"),n(t)]),i("，"),e("a",f,[i("Termux-API"),n(t)])])]),y]),q,e("ol",null,[e("li",null,[T,e("p",null,[e("a",I,[i("Termux下载地址"),n(t)]),i("，"),e("a",P,[i("Termux-API"),n(t)])])]),A]),B,e("ol",null,[E,e("li",null,[Q,e("p",null,[i("定时任务启动 "),w,i(" 并部署任务。"),e("a",j,[i("crond帮助文件"),n(t)]),i(" 以下仅供参考")]),V]),e("li",null,[M,N,e("p",null,[e("a",U,[i("termux开机自启sshd crond vnc编辑启动项_termux自启动"),n(t)])])])]),Y,e("img",{src:s.$withBase("/showresult.png"),alt:"showresult"},null,8,$)])}const X=u(p,[["render",F],["__file","termux.html.vue"]]);export{X as default};
