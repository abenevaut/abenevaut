if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/app.css",revision:null},{url:"assets/App2.js",revision:null},{url:"assets/Article.js",revision:null},{url:"assets/divider.js",revision:null},{url:"assets/Home.js",revision:null},{url:"assets/markdown.js",revision:null},{url:"assets/Privacy.js",revision:null},{url:"assets/Profile.js",revision:null},{url:"assets/Terms.js",revision:null},{url:"assets/Writeup.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"94b621b73549d12b4b2c57d7ae5fe3bc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
