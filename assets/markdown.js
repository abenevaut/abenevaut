import{r as n,j as r}from"./App2.js";function o(){return n.useEffect(()=>{const e=window.location.hash.slice(1);if(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},[]),null}function s({article:e}){return r.jsx("article",{className:`
      max-w-none
      prose prose-base dark:prose-invert
      prose-headings:no-underline
      prose-headings:text-gray-900 prose-headings:dark:text-white
      prose-a:no-underline
      prose-a:text-abenevaut-500 prose-a:dark:text-abenevaut-600
      hover:prose-a:text-abenevaut-600 hover:prose-a:dark:text-abenevaut-500
      prose-p:text-gray-900 prose-p:dark:text-white
      prose-li:text-gray-900 prose-li:dark:text-white
    `,children:r.jsx("div",{dangerouslySetInnerHTML:{__html:e}})})}export{s as M,o as S};
