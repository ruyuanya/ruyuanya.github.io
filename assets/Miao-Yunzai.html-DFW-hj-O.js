import{_ as n,c as t,d as s,a as l,e as a,f as h,g as p,r,o as d}from"./app-DOPFkaIZ.js";const k="/Miao-Yunzai/%E5%AE%89%E8%A3%85node.png",o="/Miao-Yunzai/%E5%AE%89%E8%A3%85node%E8%BF%87%E7%A8%8B.png",g="/Miao-Yunzai/%E5%AE%B9%E5%99%A8redis.png",c="/Miao-Yunzai/%E9%85%8D%E7%BD%AE%E5%AE%B9%E5%99%A8.png",u="/Miao-Yunzai/%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93.png",y="/Miao-Yunzai/%E5%AE%89%E8%A3%85pnpm.png",A="/Miao-Yunzai/%E5%AE%89%E8%A3%85yunzai.png",b="/Miao-Yunzai/%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96.png",m="/Miao-Yunzai/%E5%90%AF%E5%8A%A8.png",F="/Miao-Yunzai/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81.png",v="/Miao-Yunzai/%E4%BF%AE%E6%94%B9%E5%8D%8F%E8%AE%AE.png",f="/Miao-Yunzai/npm%E6%8C%87%E4%BB%A4.png",_="/Miao-Yunzai/%E9%94%85%E5%B7%B4%E9%97%AE%E9%A2%98.png",E={};function C(x,i){const e=r("RouteLink");return d(),t("div",null,[i[2]||(i[2]=s(`<h1 id="miao-yunzai部署教程" tabindex="-1"><a class="header-anchor" href="#miao-yunzai部署教程"><span>Miao-Yunzai部署教程</span></a></h1><h2 id="回忆" tabindex="-1"><a class="header-anchor" href="#回忆"><span><strong>回忆.</strong></span></a></h2><p>真痛恨自己会在某个op群看到了op机器人，然后闲着没事去b站搜了下还找到了教程，这辈子已经被云崽毁了.</p><p>这是一款基于<code>原神QQ机器人</code>的部署教程，以下教程说的环境均为<code>linux</code>环境</p><p>想看<code>windows教程</code>了话<a href="https://mexy.love/archives/Yunzai" target="_blank" rel="noopener noreferrer">点击这里吧</a></p><p><span class="red-text"><strong>禁止将本站内容发布至国内流量平台例如 <code>哔哩哔哩</code> 评论留言也不行!</strong></span></p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span><strong>准备工作</strong></span></a></h2><p>准备一台<code>Ubuntu2204</code>或者<code>Debian12</code>的<code>服务器/家里云</code><span class="red-text"><strong>（不要使用centos！！别问为什么）</strong></span></p><p>确保自己的机子有<span class="red-text"><strong>root</strong></span>用户去执行防止出现<code>权限</code>不够等问题</p><p>那么就开始咯！（注意本教程说的根目录均为<span class="red-text"><strong>Miao-Yunzai</strong></span>目录下！！）</p><h2 id="_1-更新系统软件包及所需依赖" tabindex="-1"><a class="header-anchor" href="#_1-更新系统软件包及所需依赖"><span><strong>1.更新系统软件包及所需依赖</strong></span></a></h2><p>由于<code>Ubuntu/Debian</code>自带<span class="red-text"><strong>Git</strong></span>，只需要<span class="red-text"><strong>更新软件包</strong></span>即可</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 一般的服务器(像腾讯云/阿里云那种)基础软件完整，只需要以下指令即可</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgradable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果你是本地vmware虚拟机非gui界面，需要使用以下指令安装基础软件包再更新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgradable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ffmpeg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> screen</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> g+</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libsqlite3-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python-is-python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装linux的node-js" tabindex="-1"><a class="header-anchor" href="#_2-安装linux的node-js"><span><strong>2.安装linux的node.js</strong></span></a></h2><p>不会装？简单，<code>两行</code>解决</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://deb.nodesource.com/setup_20.x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行完后安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodejs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="安装node" tabindex="0" loading="lazy"><figcaption>安装node</figcaption></figure><p>出现<span class="red-text"><strong>successfully</strong></span>则为获取安装包成功，可执行下一步~</p><figure><img src="'+o+`" alt="安装node过程" tabindex="0" loading="lazy"><figcaption>安装node过程</figcaption></figure><p>检查是否安装成功（可选）</p><p>版本不符合图片是没有关系的，只要你有<code>大于20</code>的<code>node</code>环境即可</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装所需软件包" tabindex="-1"><a class="header-anchor" href="#_3-安装所需软件包"><span><strong>3.安装所需软件包</strong></span></a></h2><h3 id="_1-安装ffmpeg转码工具-解决部分插件的转码失败问题" tabindex="-1"><a class="header-anchor" href="#_1-安装ffmpeg转码工具-解决部分插件的转码失败问题"><span>1.安装ffmpeg转码工具（解决部分插件的转码失败问题）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-为系统安装chromium浏览器" tabindex="-1"><a class="header-anchor" href="#_2-为系统安装chromium浏览器"><span>2.为系统安装chromium浏览器</span></a></h3><p>这样装是为了跳过pnpm自动安装浏览器</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chromium</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-安装redis-server-机器人所需要的数据库" tabindex="-1"><a class="header-anchor" href="#_3-安装redis-server-机器人所需要的数据库"><span>3.安装redis-server（机器人所需要的数据库）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当然也可以选择<a href="https://1panel.cn/" target="_blank" rel="noopener noreferrer">1panel</a>安装容器化数据库，备份啥的也方便（记得开启<span class="red-text"><strong>容器外部访问</strong></span>）</p><figure><img src="`+g+'" alt="容器redis" tabindex="0" loading="lazy"><figcaption>容器redis</figcaption></figure><p>由于默认国外源的原因安装失败记得去配置镜像源</p><p><a href="https://docker.1panel.live" target="_blank" rel="noopener noreferrer">https://docker.1panel.live</a></p><figure><img src="'+c+`" alt="配置容器" tabindex="0" loading="lazy"><figcaption>配置容器</figcaption></figure><h3 id="_4-安装文泉驿正黑体" tabindex="-1"><a class="header-anchor" href="#_4-安装文泉驿正黑体"><span>4.安装文泉驿正黑体</span></a></h3><p>解决<a href="https://gitee.com/SmallK111407/earth-k-plugin" target="_blank" rel="noopener noreferrer">土块插件(earth-k-plugin)</a>及<a href="https://gitee.com/yhArcadia/ap-plugin" target="_blank" rel="noopener noreferrer">绘图插件(ap-plugin)</a>乱码问题</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ttf-wqy-zenhei</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当然也可以装文泉驿正微米黑体，二选一即可</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fonts-wqy-microhei</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 刷新字体缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fc-cache</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果你有其他好看的字体也可以不用参考这个教程的字体~</p><figure><img src="`+u+`" alt="安装字体" tabindex="0" loading="lazy"><figcaption>安装字体</figcaption></figure><p>出现<span class="red-text"><strong>succeeded</strong></span>即安装成功</p><h3 id="_5-安装pnpm包管理工具" tabindex="-1"><a class="header-anchor" href="#_5-安装pnpm包管理工具"><span>5.安装pnpm包管理工具</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 若安装pnpm缓慢推荐指定国内阿里云镜像源安装，海外服务器则不需要换源安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --registry=https://registry.npmmirror.com</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="安装pnpm" tabindex="0" loading="lazy"><figcaption>安装pnpm</figcaption></figure><h2 id="_3-安装喵崽" tabindex="-1"><a class="header-anchor" href="#_3-安装喵崽"><span>3.安装喵崽</span></a></h2><p>根据服务器所在地</p><p>选择<a href="https://gitee.com" target="_blank" rel="noopener noreferrer">Gitee</a>源（国内）和<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>源（国外）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 Github </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --depth=1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/yoimiya-kokomi/Miao-Yunzai.git</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入喵崽目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Miao-Yunzai</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --depth=1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/yoimiya-kokomi/miao-plugin.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./plugins/miao-plugin/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用Gitee</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --depth=1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入喵目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Miao-Yunzai</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --depth=1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://gitee.com/yoimiya-kokomi/miao-plugin.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./plugins/miao-plugin/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+`" alt="安装yunzai" tabindex="0" loading="lazy"><figcaption>安装yunzai</figcaption></figure><h3 id="随后安装依赖" tabindex="-1"><a class="header-anchor" href="#随后安装依赖"><span>随后安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># pnpm config的意思是，将获取依赖源转为淘宝源，加快依赖安装速度</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://registry.npmmirror.com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="安装依赖" tabindex="0" loading="lazy"><figcaption>安装依赖</figcaption></figure><p>全程无报错算安装成功</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意出现<code>&quot;run script&quot;</code>的时候，等待时间久为正常现象，请慢慢等~</p></div><h2 id="_4-启动" tabindex="-1"><a class="header-anchor" href="#_4-启动"><span>4.启动！</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 然后根据它的提示进行设置账号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>后续可通过<code>CTRL+C</code>直接退出终端进程</p><figure><img src="`+m+'" alt="启动" tabindex="0" loading="lazy"><figcaption>启动</figcaption></figure><p>如果你是使用的<code>1panel</code>安装的<code>redis-server</code>记得去根目录<code>/config/config/redis.yaml</code>填写你的密码</p><p>为什么要这么晚说呢，因为<code>redis.yaml</code>是在你第一次启动后才创建后的文件，你也可以去根目录<code>/config/default_config</code>下的<code>redis.yaml</code>复制一份到根目录<code>/config/config</code>下并进行填写</p><figure><img src="'+F+`" alt="数据库密码" tabindex="0" loading="lazy"><figcaption>数据库密码</figcaption></figure><h2 id="常见问题-建议看看" tabindex="-1"><a class="header-anchor" href="#常见问题-建议看看"><span>常见问题？(建议看看~)</span></a></h2><h3 id="_1-签名怎么填-报错45无法登录" tabindex="-1"><a class="header-anchor" href="#_1-签名怎么填-报错45无法登录"><span>1.签名怎么填？报错45无法登录？</span></a></h3><p>可以选择蹭别人的签名或者自建</p><p>自建项目地址（不推荐自建！！）：<s><a href="https://github.com/ProtocolScience/Astral-QSignigngnn" target="_blank" rel="noopener noreferrer">油腻的霸哥与企鹅的爱情故事</a></s></p><p>为了保证作者的<code>人身氨醛</code>由于故意留了些<code>检测</code>，使用该签名将会被腾讯精准检测，具体表现是：首次使用<code>4小时内出现冻结，每15天扫脸解封一次</code></p><p>ICQQ0.6.10目前仅支持最高<code>9.0.17</code>的QQ版本，需要通过脚本添加协议版本（来源于<a href="https://qsign.icu/" target="_blank" rel="noopener noreferrer">qsign.icu</a>）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 请在根目录执行！！</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Gitee.com/haanxuan/QSign/raw/main/X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>出现下面这张图后方可启动！</p><figure><img src="`+v+`" alt="添加协议" tabindex="0" loading="lazy"><figcaption>添加协议</figcaption></figure><p>由于是动态获取协议版本（默认<code>9.0.56</code>版本），可以在后面添加指定协议版本，比如：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">https://api.qsign.icu/?key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=Free</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ver</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">9.0.70</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><span class="red-text"><strong>以上提供的签名禁止任何以任何视频平台（如bilibili）以及评论等形式外传！！！</strong></span></p><h3 id="_2-关终端了无法让他在后台运行-怎么让它运行保持在后台" tabindex="-1"><a class="header-anchor" href="#_2-关终端了无法让他在后台运行-怎么让它运行保持在后台"><span>2.关终端了无法让他在后台运行，怎么让它运行保持在后台？</span></a></h3><p>对机器人发个<span class="red-text"><strong>#重启</strong></span>即可</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入根目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Miao-Yunzai</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 后台查看日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 后台启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 后台停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="npm指令" tabindex="0" loading="lazy"><figcaption>npm指令</figcaption></figure><h3 id="_3-如何去安装插件" tabindex="-1"><a class="header-anchor" href="#_3-如何去安装插件"><span>3.如何去安装插件？</span></a></h3><p>去<a href="https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index" target="_blank" rel="noopener noreferrer">索引库</a>寻找插件自行安装或是<s>自己写</s></p><p>一般来说，大插件作者会给安装指令和依赖指令，<code>根目录</code>安装后启动即可</p><p>小插件js需要你手动下载源码到<code>根目录/plugins/example</code>下，记得<code>重启</code>.</p>',81)),l("p",null,[i[1]||(i[1]=a("我也提供了一些插件也可以来")),h(e,{to:"/docs/js.html"},{default:p(()=>i[0]||(i[0]=[a("瞅瞅")])),_:1})]),i[3]||(i[3]=s('<p>国内仓库</p><p><a href="https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index" target="_blank" rel="noopener noreferrer">Yunzai-Bot-plugins-index: Yunzai-Bot相关内容收集库 (gitee.com)</a></p><p>国外仓库</p><p><a href="https://github.com/yhArcadia/Yunzai-Bot-plugins-index" target="_blank" rel="noopener noreferrer">https://github.com/yhArcadia/Yunzai-Bot-plugins-index</a></p><h3 id="_4-服务器要转移了-如何备份文件" tabindex="-1"><a class="header-anchor" href="#_4-服务器要转移了-如何备份文件"><span>4.服务器要转移了，如何备份文件？</span></a></h3><p>linux使用apt安装redis-server后，会在<code>/var/lib/redis/</code>这个目录下生成一个<code>dump.rdb</code>文件，下载下来即可(1panel用户看前面)，还有就是喵崽的<code>根目录config</code>文件夹，<code>data文件夹</code>，<code>resource文件夹</code>，装了<a href="https://gitee.com/Ctrlcvs/xiaoyao-cvs-plugin" target="_blank" rel="noopener noreferrer">逍遥(xiaoyao-cvs-plugin)</a>的<code>data文件夹</code>，<code>根目录/plugin/example</code>文件夹或者按需备份你的各种<code>大插件的config文件夹</code>.</p><p>Q：那个<code>dump.rdb</code>文件有什么用呢？</p><p>A：喵喵的排行，包括群员列表那些</p><h3 id="_5-安装了锅巴-guoba-plugin-无法访问" tabindex="-1"><a class="header-anchor" href="#_5-安装了锅巴-guoba-plugin-无法访问"><span>5.安装了锅巴（Guoba-Plugin）无法访问？</span></a></h3><p>检查服务器防火墙<code>放开端口50831（即锅巴默认启动端口</code>），你是哪家云就上哪家云的<code>管理后台</code>。部分云可能存在50831端口放开也无法访问的情况（比如华为云）</p><p>改锅巴配置文件下的<code>config/application.yaml</code>为<code>80</code>端口</p><p>箭头下一行有一个<code>“是否需要拼接端口号”</code>记得要改<code>false</code>为<code>true</code></p><figure><img src="'+_+'" alt="锅巴问题" tabindex="0" loading="lazy"><figcaption>锅巴问题</figcaption></figure><h3 id="_6-图床链接无法访问问题" tabindex="-1"><a class="header-anchor" href="#_6-图床链接无法访问问题"><span>6.图床链接无法访问问题</span></a></h3><p>由于新NT图床链接问题，加上ICQQ<code>已不再更新</code>，需要去改新图链，<code>记得重启！！！</code></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://img.kookapp.cn/attachments/2024-09/11/66e0f2f7c93f4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_modules/icqq/lib/message/parser.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>还是有问题？真拿你没办法呢，博客主页有qq，记得备注来意加我（不然我会当陌生人拒绝掉）</p>',17))])}const B=n(E,[["render",C],["__file","Miao-Yunzai.html.vue"]]),Y=JSON.parse('{"path":"/posts/Miao-Yunzai.html","title":"Miao-Yunzai部署教程","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-11-07T00:00:00.000Z","category":["机器人"],"tag":["AI","开源"],"description":"Miao-Yunzai部署教程 回忆. 真痛恨自己会在某个op群看到了op机器人，然后闲着没事去b站搜了下还找到了教程，这辈子已经被云崽毁了. 这是一款基于原神QQ机器人的部署教程，以下教程说的环境均为linux环境 想看windows教程了话点击这里吧 禁止将本站内容发布至国内流量平台例如 哔哩哔哩 评论留言也不行! 准备工作 准备一台Ubuntu2...","head":[["meta",{"property":"og:url","content":"https://ruyuanya.github.io/posts/Miao-Yunzai.html"}],["meta",{"property":"og:site_name","content":"如愿的博客"}],["meta",{"property":"og:title","content":"Miao-Yunzai部署教程"}],["meta",{"property":"og:description","content":"Miao-Yunzai部署教程 回忆. 真痛恨自己会在某个op群看到了op机器人，然后闲着没事去b站搜了下还找到了教程，这辈子已经被云崽毁了. 这是一款基于原神QQ机器人的部署教程，以下教程说的环境均为linux环境 想看windows教程了话点击这里吧 禁止将本站内容发布至国内流量平台例如 哔哩哔哩 评论留言也不行! 准备工作 准备一台Ubuntu2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ruyuanya.github.io/Miao-Yunzai/安装node.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"开源"}],["meta",{"property":"article:published_time","content":"2024-11-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Miao-Yunzai部署教程\\",\\"image\\":[\\"https://ruyuanya.github.io/Miao-Yunzai/安装node.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/安装node过程.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/容器redis.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/配置容器.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/安装字体.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/安装pnpm.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/安装yunzai.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/安装依赖.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/启动.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/数据库密码.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/修改协议.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/npm指令.png\\",\\"https://ruyuanya.github.io/Miao-Yunzai/锅巴问题.png\\"],\\"datePublished\\":\\"2024-11-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"如愿\\",\\"url\\":\\"https://ruyuanya.github.io\\"}]}"]]},"headers":[{"level":2,"title":"回忆.","slug":"回忆","link":"#回忆","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"1.更新系统软件包及所需依赖","slug":"_1-更新系统软件包及所需依赖","link":"#_1-更新系统软件包及所需依赖","children":[]},{"level":2,"title":"2.安装linux的node.js","slug":"_2-安装linux的node-js","link":"#_2-安装linux的node-js","children":[]},{"level":2,"title":"3.安装所需软件包","slug":"_3-安装所需软件包","link":"#_3-安装所需软件包","children":[{"level":3,"title":"1.安装ffmpeg转码工具（解决部分插件的转码失败问题）","slug":"_1-安装ffmpeg转码工具-解决部分插件的转码失败问题","link":"#_1-安装ffmpeg转码工具-解决部分插件的转码失败问题","children":[]},{"level":3,"title":"2.为系统安装chromium浏览器","slug":"_2-为系统安装chromium浏览器","link":"#_2-为系统安装chromium浏览器","children":[]},{"level":3,"title":"3.安装redis-server（机器人所需要的数据库）","slug":"_3-安装redis-server-机器人所需要的数据库","link":"#_3-安装redis-server-机器人所需要的数据库","children":[]},{"level":3,"title":"4.安装文泉驿正黑体","slug":"_4-安装文泉驿正黑体","link":"#_4-安装文泉驿正黑体","children":[]},{"level":3,"title":"5.安装pnpm包管理工具","slug":"_5-安装pnpm包管理工具","link":"#_5-安装pnpm包管理工具","children":[]}]},{"level":2,"title":"3.安装喵崽","slug":"_3-安装喵崽","link":"#_3-安装喵崽","children":[{"level":3,"title":"随后安装依赖","slug":"随后安装依赖","link":"#随后安装依赖","children":[]}]},{"level":2,"title":"4.启动！","slug":"_4-启动","link":"#_4-启动","children":[]},{"level":2,"title":"常见问题？(建议看看~)","slug":"常见问题-建议看看","link":"#常见问题-建议看看","children":[{"level":3,"title":"1.签名怎么填？报错45无法登录？","slug":"_1-签名怎么填-报错45无法登录","link":"#_1-签名怎么填-报错45无法登录","children":[]},{"level":3,"title":"2.关终端了无法让他在后台运行，怎么让它运行保持在后台？","slug":"_2-关终端了无法让他在后台运行-怎么让它运行保持在后台","link":"#_2-关终端了无法让他在后台运行-怎么让它运行保持在后台","children":[]},{"level":3,"title":"3.如何去安装插件？","slug":"_3-如何去安装插件","link":"#_3-如何去安装插件","children":[]},{"level":3,"title":"4.服务器要转移了，如何备份文件？","slug":"_4-服务器要转移了-如何备份文件","link":"#_4-服务器要转移了-如何备份文件","children":[]},{"level":3,"title":"5.安装了锅巴（Guoba-Plugin）无法访问？","slug":"_5-安装了锅巴-guoba-plugin-无法访问","link":"#_5-安装了锅巴-guoba-plugin-无法访问","children":[]},{"level":3,"title":"6.图床链接无法访问问题","slug":"_6-图床链接无法访问问题","link":"#_6-图床链接无法访问问题","children":[]}]}],"git":{},"readingTime":{"minutes":6.72,"words":2016},"filePathRelative":"posts/Miao-Yunzai.md","localizedDate":"2024年11月7日","excerpt":"\\n<h2><strong>回忆.</strong></h2>\\n<p>真痛恨自己会在某个op群看到了op机器人，然后闲着没事去b站搜了下还找到了教程，这辈子已经被云崽毁了.</p>\\n<p>这是一款基于<code>原神QQ机器人</code>的部署教程，以下教程说的环境均为<code>linux</code>环境</p>\\n<p>想看<code>windows教程</code>了话<a href=\\"https://mexy.love/archives/Yunzai\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">点击这里吧</a></p>\\n<p><span class=\\"red-text\\"><strong>禁止将本站内容发布至国内流量平台例如 <code>哔哩哔哩</code> 评论留言也不行!</strong></span></p>","autoDesc":true}');export{B as comp,Y as data};