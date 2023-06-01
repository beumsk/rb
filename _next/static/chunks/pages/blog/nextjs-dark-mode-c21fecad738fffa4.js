(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{6217:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/nextjs-dark-mode",function(){return n(4748)}])},3753:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var s=n(5893),i=n(7294),a=n(1163),r=n(1664),o=n(5697),l=n.n(o),c=n(4725),d=n.n(c),h=(n(9578),n(8674),n(7013),n(2427),n(8193)),m=n(3422),u=n.n(m),f=n(9095),g=n(4285);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){p(e,t,n[t])}))}return e}var j=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function w(e){var t=e.children,n=(0,a.useRouter)();(0,i.useEffect)((function(){d().highlightAll()}),[n]);var o=u().find((function(e){return e.slug===n.asPath.replace("/blog/","")})),l=o.title,c=o.intro,m=o.img,p=o.published,w=o.modified,b=o.categories,k=null===b||void 0===b?void 0:b.split(", ").filter((function(e){return e})),v=u()[u().findIndex((function(e){return e.title===l}))+1]||u()[0],N=[u()[u().findIndex((function(e){return e.title===l}))-1]||u()[u().length-1],v];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.Z,x({title:"".concat(l," | Blog | R\xe9my Beumier"),description:c,itemtype:"Article"},o,{children:(0,s.jsx)("div",{className:"container narrow posts-shape",children:(0,s.jsx)("div",{"data-aos":"fade-left",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{itemProp:"headline name",children:l}),(0,s.jsx)("img",{src:m,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,s.jsxs)("div",{className:"space-between-x mb-10",children:[(0,s.jsx)("div",{className:"post__categories",children:null===k||void 0===k?void 0:k.map((function(e){return(0,s.jsx)(r.default,{href:"/blog?".concat(e),children:(0,s.jsx)("a",{children:(0,s.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:j(p),dateTime:j(p),children:["Published on: ",j(p)]}),(0,s.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:j(w),dateTime:j(w),children:["Modified on: ",j(w)]})]})]}),(0,s.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,s.jsx)("div",{className:"mb-15",children:(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsxs)("a",{className:"btn",children:[(0,s.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,s.jsx)(g.Z,{data:N,className:"mb-20"})]})]})})})}))})}w.propTypes={children:l().node}},9797:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893),i=n(5697),a=n.n(i);function r(e){var t=e.className,n=e.sandbox,i=e.title;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"code-iframe-wrapper "+(t||""),children:(0,s.jsx)("iframe",{height:"300",title:i,view:"preview",loading:"lazy",src:"https://codesandbox.io/embed/"+n+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,s.jsx)("a",{href:"https://codesandbox.io/s/"+n,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by R\xe9my Beumier"})})})})}r.propTypes={className:a().string,sandbox:a().string,title:a().string}},4748:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(1151),a=n(3753),r=n(9797),o=function(e){var t=e.children;return(0,s.jsx)(a.Z,{children:t})};function l(e){var t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"When I started listing the features I wanted for my new website, a dark mode toggle was in the top tier list as it's becoming a standard. Even though I'm not a big supporter of dark mode, I know people love it and I was willing to tackle this challenge."}),"\n",(0,s.jsx)(t.h2,{children:"The CSS part"}),"\n",(0,s.jsx)(t.p,{children:"For this feature, we want to use CSS variables. We have a range of variables that will switch according to the color mode.\nHere is a snippet example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"main {\n  --text: #000000;\n  --text2: #333333;\n  --bg2: #eeeeee;\n  --bg: #ffffff;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here the dark mode style if the ",(0,s.jsx)(t.code,{children:".dark"})," class is applied. We will see the JavaScript later:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"main.dark {\n  --text: #ffffff;\n  --text2: #eeeeee;\n  --bg2: #333333;\n  --bg: #000000;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To finalise the styling part, we use the ",(0,s.jsx)(t.code,{children:"prefers-color-scheme"})," check to match users settings.\nIt needs to be overridden with the ",(0,s.jsx)(t.code,{children:".light"})," class.\nThis is done this way:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"@media (prefers-color-scheme: dark) {\n  main {\n    --text: #ffffff;\n    --text2: #eeeeee;\n    --bg2: #333333;\n    --bg: #000000;\n  }\n  main.light {\n    --text: #000000;\n    --text2: #333333;\n    --bg2: #eeeeee;\n    --bg: #ffffff;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{children:"The JavaScript and Next.js part"}),"\n",(0,s.jsxs)(t.p,{children:["Let's see how we can make this dark mode toggle with ",(0,s.jsx)(t.code,{children:"useEffect"})," and ",(0,s.jsx)(t.code,{children:"useState"}),".\nFirst, let's create a button that will change the class of our ",(0,s.jsx)(t.code,{children:"main"})," element."]}),"\n",(0,s.jsxs)(t.p,{children:["When we click on the button we toggle the ",(0,s.jsx)(t.code,{children:"theme"})," thanks to React hooks."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useState } from 'react';\n\nexport default function Main(props) {\n  const [theme, setTheme] = useState('');\n\n  const switchTheme = () => {\n    const newTheme = theme === 'light' ? 'dark' : 'light';\n    setTheme(newTheme);\n  };\n\n  return (\n    <main className={theme}>\n      <button onClick={switchTheme} theme={theme}>\n        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}\n      </button>\n    </main>\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We have a functional button toggling between dark and light modes. However, it will not save anything and if we reload the page, we will face a light mode whatever we opted for. That's where we use ",(0,s.jsx)(t.code,{children:"localStorage"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In order to access the window object and therefore the localStorage, we must ensure the page has fully loaded. We do this with the ",(0,s.jsx)(t.code,{children:"useEffect(() => {...}, [])"}),".\nWe can then check localStorage and if there is an entry for ",(0,s.jsx)(t.code,{children:"theme"})," we apply it."]}),"\n",(0,s.jsxs)(t.p,{children:["We also update the ",(0,s.jsx)(t.code,{children:"switchTheme"})," to save our theme preference in localStorage."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useEffect, useState } from 'react';\n\nexport default function Main(props) {\n  const [theme, setTheme] = useState('');\n\n  useEffect(() => {\n    let localTheme = window.localStorage.getItem('theme');\n    setTheme(localTheme);\n  }, []);\n\n  const switchTheme = () => {\n    const newTheme = theme === 'light' ? 'dark' : 'light';\n    window.localStorage.setItem('theme', newTheme);\n    setTheme(newTheme);\n  };\n\n  return (\n    <main className={theme}>\n      <button onClick={switchTheme} theme={theme}>\n        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}\n      </button>\n    </main>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"We have a functional dark mode toggle in your Next.js app by now. In case of struggle, check the steps again or click the full solution link below."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"TLDR"}),": ",(0,s.jsx)("a",{href:"https://codesandbox.io/s/darkmode-0ubir",target:"_blank",children:"Codesandbox: Dark mode toggle in Next.js"}),"."]}),"\n",(0,s.jsx)(r.Z,{sandbox:"darkmode-0ubir",title:"Dark mode toggle in Next.js"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["I really wanted to share my solution for this, as I found it particularly difficult to make it run, especially with the ",(0,s.jsx)(t.code,{children:"localStorage"}),". I hope it will make your coding easier."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,Object.assign({},e,{children:(0,s.jsx)(l,e)}))}}},function(e){e.O(0,[228,415,445,617,417,136,127,774,888,179],(function(){return t=6217,e(e.s=t);var t}));var t=e.O();_N_E=t}]);