import{_ as s,c as i,a8 as a,o as n}from"./chunks/framework.Bvf0s3xm.js";const k=JSON.parse('{"title":"DOM 创建和操作元素","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/DOM/创建和操作元素.md","filePath":"frontEnd/JavaScript/DOM/创建和操作元素.md","lastUpdated":1729520793000}'),t={name:"frontEnd/JavaScript/DOM/创建和操作元素.md"};function l(p,e,d,h,r,c){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="dom-创建和操作元素" tabindex="-1">DOM 创建和操作元素 <a class="header-anchor" href="#dom-创建和操作元素" aria-label="Permalink to &quot;DOM 创建和操作元素&quot;">​</a></h1><ul><li><code>createElement()</code>: 创建新的元素节点。</li><li><code>appendChild()</code>: 将一个节点添加为另一个节点的子节点。</li><li><code>removeChild()</code>: 删除指定的子节点。</li><li><code>setAttribute()</code>: 设置元素的属性值。</li><li><code>getAttribute()</code>: 获取元素的属性值。</li></ul><h2 id="创建元素" tabindex="-1">创建元素 <a class="header-anchor" href="#创建元素" aria-label="Permalink to &quot;创建元素&quot;">​</a></h2><p>使用 createElement 方法创建新元素：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tagName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中 <code>tagName</code> 是你想要创建的元素的标签名，例如 <code>div</code>、<code>p</code>、<code>span</code> 等。</p><h2 id="设置元素属性和内容" tabindex="-1">设置元素属性和内容 <a class="header-anchor" href="#设置元素属性和内容" aria-label="Permalink to &quot;设置元素属性和内容&quot;">​</a></h2><p>设置元素的属性：使用 setAttribute 方法：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;attributeName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;attributeValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>设置元素的文本内容：使用 <code>textContent</code> 属性或 <code>innerText</code> 属性：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.textContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Text content&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.innerText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Text content&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>设置元素的 HTML 内容：使用 <code>innerHTML</code> 属性：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;p&gt;HTML content&lt;/p&gt;&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="操作元素的父子关系" tabindex="-1">操作元素的父子关系 <a class="header-anchor" href="#操作元素的父子关系" aria-label="Permalink to &quot;操作元素的父子关系&quot;">​</a></h2><p>将新元素添加到父元素中：使用 <code>appendChild</code> 方法：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newElement)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将把 <code>newElement</code> 添加为 <code>parentElement</code> 的子元素。</p><p>将元素插入到已有元素之前：使用 insertBefore 方法：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newElement, existingElement)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将把 <code>newElement</code> 插入到 <code>existingElement</code> 之前，作为它的兄弟元素。</p><p>从父元素中移除子元素：使用 <code>removeChild</code> 方法：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(childElement)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将从 <code>parentElement</code> 中移除 <code>childElement。</code></p>`,23)]))}const E=s(t,[["render",l]]);export{k as __pageData,E as default};
