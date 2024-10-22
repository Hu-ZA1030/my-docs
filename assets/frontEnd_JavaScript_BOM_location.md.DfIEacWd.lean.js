import{_ as s,c as i,a8 as n,o as l}from"./chunks/framework.1l2paasi.js";const k=JSON.parse('{"title":"BOM location 对象","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/BOM/location.md","filePath":"frontEnd/JavaScript/BOM/location.md","lastUpdated":1729520793000}'),e={name:"frontEnd/JavaScript/BOM/location.md"};function t(o,a,p,r,c,h){return l(),i("div",null,a[0]||(a[0]=[n(`<h1 id="bom-location-对象" tabindex="-1">BOM location 对象 <a class="header-anchor" href="#bom-location-对象" aria-label="Permalink to &quot;BOM location 对象&quot;">​</a></h1><p>Location 对象提供了与当前窗口的 URL 相关的信息和操作。它包含了 URL 的各个部分，如协议、主机名、路径和查询参数等。</p><h2 id="常见属性和方法" tabindex="-1">常见属性和方法 <a class="header-anchor" href="#常见属性和方法" aria-label="Permalink to &quot;常见属性和方法&quot;">​</a></h2><ul><li><code>location.href</code>：当前窗口的完整 URL。</li><li><code>location.protocol</code>：URL 的协议部分。</li><li><code>location.hostname</code>：URL 的主机名部分。</li><li><code>location.pathname</code>：URL 的路径部分。</li><li><code>location.search</code>：URL 的查询字符串部分。</li><li><code>location.assign(url)</code>：加载一个新的 URL。</li><li><code>location.reload()</code>：重新加载当前页面。</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取当前窗口的URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location.href)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取URL的协议</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location.protocol)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将页面重定向到新的URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新加载当前页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6)]))}const E=s(e,[["render",t]]);export{k as __pageData,E as default};