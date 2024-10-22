import{_ as t,c as o,a8 as a,o as i}from"./chunks/framework.Bvf0s3xm.js";const h=JSON.parse('{"title":"Event Loop 事件循环机制","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/core/eventLoop.md","filePath":"frontEnd/JavaScript/core/eventLoop.md","lastUpdated":1729520793000}'),l={name:"frontEnd/JavaScript/core/eventLoop.md"};function r(p,e,n,s,c,u){return i(),o("div",null,e[0]||(e[0]=[a('<h1 id="event-loop-事件循环机制" tabindex="-1">Event Loop 事件循环机制 <a class="header-anchor" href="#event-loop-事件循环机制" aria-label="Permalink to &quot;Event Loop 事件循环机制&quot;">​</a></h1><h2 id="js-事件执行机制的过程" tabindex="-1">js 事件执行机制的过程 <a class="header-anchor" href="#js-事件执行机制的过程" aria-label="Permalink to &quot;js 事件执行机制的过程&quot;">​</a></h2><p>javaScript 是一门单线程语言，js 在执行代码时会按照代码语句的顺序执行形成一个执行栈，默认会从上到下依次执行，执行过程中会将任务分成两类。</p><ul><li>同步任务：需要执行的任务在主线程上排队，一次执行</li><li>异步任务：没有立马执行但是需要被执行的任务，放在任务队列里面 在主线程执行过程中同步任务会立即执行，遇到异步任务时不会立马执行，会将异步任务放入一个&quot;任务队列&quot;（task queue）中，当&quot;执行栈&quot;中的所有任务执行完毕，就会去任务队列中将对应的任务事件放入执行栈中执行，主线程就是这样重复执行上面的步骤形成一个循环叫（Event Loop） <strong>事件循环</strong></li></ul><h2 id="异步任务分为-宏任务和微任务" tabindex="-1">异步任务分为：宏任务和微任务 <a class="header-anchor" href="#异步任务分为-宏任务和微任务" aria-label="Permalink to &quot;异步任务分为：宏任务和微任务&quot;">​</a></h2><p>同步和异步分别进入到不同的执行场所，同步进入到主线程，异步的进入到任务队列（event table） 并注册函数，异步任务又可以分为宏任务和微任务。</p><ul><li>微任务： process.nextTick（node）、Promise, Object.observe, MutationObserver</li><li>宏任务： 整个 script 代码、setTimeout、 setInterval、requestAnimationFrame（请求动画）, I/O，UI 渲染</li><li>先同步 ，再取出第一个宏任务执行 所有的相关微任务总会在下一个宏任务之前全部执行完毕 如果遇见 就 先微后宏</li></ul><blockquote><p>一个宏任务执行完后会立即执行该宏任务中的微任务队列，直至微任务队列清空继续执行任务队列中的下一个宏任务。</p><p>宏任务执行完会去清空微任务队列，清空微任务后如果有 UI 渲染逻辑会线执行 UI 渲染，然后执行下一下宏任务</p></blockquote><h2 id="事件循环顺序" tabindex="-1">事件循环顺序 <a class="header-anchor" href="#事件循环顺序" aria-label="Permalink to &quot;事件循环顺序&quot;">​</a></h2><ol><li><p>js 在执行上下文栈的同步任务执行完后</p></li><li><p>首先会去执行微任务队列，按照队列先进先出的原则，一次执行完所有 Microtask 微任务队列任务</p></li><li><p>当前微任务执行完后，判断是否有 UI 渲染如果有就执行渲染过程，没有就跳过</p></li><li><p>然后开始执行宏任务队列，一次只执行一个。执行完后检查当前微任务队列是否有任务</p></li><li><p>有，执行微任务队列，直至清空微任务</p></li><li><p>没有，执行以一个宏任务</p></li></ol><blockquote><p>重复循环上述步骤形成一个事件循环，可以看出各任务的执行先后关系：<strong>同步任务 &gt; 微任务 &gt; UI 渲染 &gt; 宏任务</strong></p><p>任务队列执行“先进先出”的顺序</p></blockquote><p>循环第一遍：先打印所有同步任务，console.log，再打印整个script中第一遍放入微任务队列中的代码</p><p>循环第二遍：按照任务队列的先进先出，执行放入任务队列中的宏任务，如定时器等，在此等宏任务中，再按照循环第一遍中的顺序，去执行，完成打印</p><div class="tip custom-block"><p class="custom-block-title">注意：</p><p>new promise是同步的，promise.then是异步，归属微任务；async await返回的是promise视为微任务，整个async 的函数加入微任务队列</p></div>',14)]))}const m=t(l,[["render",r]]);export{h as __pageData,m as default};