(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{8084:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/setup-sass-in-the-best-way",function(){return n(8734)}])},3753:function(e,s,n){"use strict";n.d(s,{Z:function(){return g}});var t=n(5893),i=n(7294),a=n(1163),r=n(1664),c=n(5697),l=n.n(c),o=n(4725),d=n.n(o),h=(n(9578),n(2427),n(8193)),p=n(3422),u=n(9095),x=n(4285);function m(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function j(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(s){m(e,s,n[s])}))}return e}var f=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function g(e){var s=e.children,n=(0,a.useRouter)();(0,i.useEffect)((function(){d().highlightAll()}),[n]);var c=p.x.filter((function(e){return e.slug===n.asPath.replace("/blog/","")})),l=c[0],o=l.title,m=l.intro,g=l.img,b=l.published,w=l.modified,y=l.categories,S=(l.url,null===y||void 0===y?void 0:y.split(", ").filter((function(e){return e}))),v=p.x[p.x.findIndex((function(e){return e.title===o}))+1]||p.x[0],N=[p.x[p.x.findIndex((function(e){return e.title===o}))-1]||p.x[p.x.length-1],v];return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u.Z,j({title:"".concat(o," | Blog | R\xe9my Beumier"),description:m,itemtype:"Article"},c[0],{children:(0,t.jsx)("div",{className:"container narrow posts-shape",children:(0,t.jsx)("div",{"data-aos":"fade-left",children:(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{itemProp:"headline name",children:o}),(0,t.jsx)("img",{src:g,alt:o,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,t.jsxs)("div",{className:"space-between-x mb-10",children:[(0,t.jsx)("div",{className:"post__categories",children:null===S||void 0===S?void 0:S.map((function(e){return(0,t.jsx)(r.default,{href:"/blog?".concat(e),children:(0,t.jsx)("a",{children:(0,t.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:f(b),dateTime:f(b),children:["Published on: ",f(b)]}),(0,t.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:f(w),dateTime:f(w),children:["Modified on: ",f(w)]})]})]}),(0,t.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:s}),(0,t.jsx)("div",{className:"mb-15",children:(0,t.jsx)(r.default,{href:"/blog",children:(0,t.jsxs)("a",{className:"btn",children:[(0,t.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,t.jsx)(x.Z,{data:N,className:"mb-20"})]})]})})})}))})}g.propTypes={meta:l().object,children:l().node,posts:l().array}},9797:function(e,s,n){"use strict";n.d(s,{Z:function(){return r}});var t=n(5893),i=n(5697),a=n.n(i);function r(e){var s=e.className,n=e.sandbox,i=e.title;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"code-iframe-wrapper "+(s||""),children:(0,t.jsx)("iframe",{height:"300",title:i,view:"preview",loading:"lazy",src:"https://codesandbox.io/embed/"+n+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,t.jsx)("a",{href:"https://codesandbox.io/s/"+n,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by R\xe9my Beumier"})})})})}r.propTypes={className:a().string,sandbox:a().string,title:a().string}},8734:function(e,s,n){"use strict";n.r(s);var t=n(5893),i=n(1151),a=n(3753),r=n(9797),c=function(e){var s=e.children;return(0,t.jsx)(a.Z,{children:s})};function l(e){var s=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",em:"em",code:"code",pre:"pre",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"So far in this blog, I have mostly written about Next.js and CSS. Today, I will focus on a topic that I consider to be in between those two. I love CSS very much and there comes a point in a project where I want to abstract, sharpen or simply be able to nest selectors. That's where Sass comes into play. I know there are alternative CSS preprocessors in the likes of Less or Stylus, but I have always used Sass the most."}),"\n",(0,t.jsx)("blockquote",{children:(0,t.jsxs)(s.p,{children:["Sass (Syntactically Awesome Style Sheets) is a stylesheet language that\u2019s compiled to CSS. It allows you to use\nvariables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large\nstylesheets well-organized and makes it easy to share design within and across projects.\n",(0,t.jsx)("cite",{children:"sass-lang.com"})]})}),"\n",(0,t.jsx)(s.p,{children:"Before diving into Sass, it's important to differentiate its two syntaxes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The original syntax (.sass), known as SASS, using indentation to define blocks of code"}),"\n",(0,t.jsx)(s.li,{children:"The newer syntax (.scss), known as SCSS, similar to CSS syntaxes"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In this piece, I will use the SCSS syntax over the Sass one because I find it more readable."}),"\n",(0,t.jsx)(s.p,{children:"Some frontend frameworks give you a working environment with Sass compiling capabilities out of the box. Create React App does for example. But how do you set up the Sass compiler on your own?"}),"\n",(0,t.jsx)(s.h2,{children:"Installing Sass"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["I assume you already have Node and NPM installed on your machine and you have started your project with ",(0,t.jsx)(s.code,{children:"npm init"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:"First things first, let's install Sass. Forget about node-sass and others, the advised way is to use Dart Sass today."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"npm i sass\nyarn add sass\n"})}),"\n",(0,t.jsx)(s.p,{children:"The next step is to compile the Sass we have into formal CSS."}),"\n",(0,t.jsx)(s.h2,{children:"Compile Sass"}),"\n",(0,t.jsx)(s.p,{children:"Let's create a .scss file with a few lines."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"// src/scss/style.scss\n.example {\n  color: blue;\n  &:hover {\n    color: red;\n  }\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"In our package.json, we want to add a script that will compile that Sass file."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["We should then find the following CSS in ",(0,t.jsx)(s.code,{children:"public/css/style.css"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"/* public/css/style.css */\n.example {\n  color: blue;\n}\n.example:hover {\n  color: red;\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Do we need to run that command every time we change our CSS? Of course not. Let's see how to avoid that in the next section."}),"\n",(0,t.jsx)(s.h2,{children:"Settings"}),"\n",(0,t.jsx)(s.p,{children:"There are various settings that will help us tailor our compiling behavior and output."}),"\n",(0,t.jsxs)(s.p,{children:["The first one is the most useful; The ",(0,t.jsx)(s.code,{children:"--watch"})," option, or ",(0,t.jsx)(s.code,{children:"-w"}),", will watch your specified Sass files and compile at any change."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --watch"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The second one I use is the ",(0,t.jsx)(s.code,{children:"--no-source-map"})," option, which prevents the generation of a source map in the outputted .css file."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --no-source-map"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Another setting is the ",(0,t.jsx)(s.code,{children:"--style"}),". By defining it to ",(0,t.jsx)(s.code,{children:"compressed"}),", we will receive a minimized CSS file."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --style=compressed"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The last point we will see in this section is about compiling multiple files. The first script will compile two (or more) different Sass stylesheets, while the second one will compile all the Sass files in ",(0,t.jsx)(s.code,{children:"src/scss"})," and output them in ",(0,t.jsx)(s.code,{children:"public/css"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass-two": "sass src/scss/first.scss:public/css/first.css src/scss/second.scss:public/css/second.css",\n  "sass-folder": "sass src/scss:public/css"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Please find ",(0,t.jsx)("a",{href:"https://sass-lang.com/documentation/cli/dart-sass",target:"_blank",children:"more about settings in the official documentation."})]}),"\n",(0,t.jsx)(s.h2,{children:"Add autoprefixer"}),"\n",(0,t.jsx)(s.p,{children:"I would love that Sass CLI would handle autoprefixer, but as far as I know it's not the case. Autoprefixer will go through your CSS and, based on the level of browser compatibility you need, will output a new version with necessary specific browser prefixes."}),"\n",(0,t.jsx)(s.p,{children:"We will need other packages to be able to use autoprefixer."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"npm i postcss postcss-cli autoprefixer\nyarn add postcss postcss-cli autoprefixer\n"})}),"\n",(0,t.jsx)(s.p,{children:"And another script in our package.json."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "prefix": "postcss public/css/style.css --replace --use autoprefixer -b \'defaults\' --no-map"\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Now that we have discussed all those settings, let's take a look at the scripts that I prefer to use for compiling Sass."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts":\xa0{\n  "watch": "sass src/scss/style.scss public/css/style.css --no-source-map --watch",\n  "sass": "sass src/scss/style.scss public/css/style.css --no-source-map --style=compressed",\n  "prefix": "postcss public/css/style.css --replace --use autoprefixer -b \'defaults\' --no-map",\n  "compile": "npm run sass && npm run prefix"\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["We have ",(0,t.jsx)(s.code,{children:"watch"})," that we would use during development to compile on every change in our Sass and we have ",(0,t.jsx)(s.code,{children:"compile"})," which will be useful for production by compiling and compressing our .scss files while improving cross-browser compatibility."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"TLDR"}),": ",(0,t.jsx)("a",{href:"https://codesandbox.io/p/sandbox/setup-sass-jbjjlx",target:"_blank",children:"Codesandbox: Setup Sass in the best way"}),"."]}),"\n",(0,t.jsx)(r.Z,{sandbox:"setup-sass-climu2",title:"Setup Sass in the best way"}),"\n",(0,t.jsx)(s.p,{children:"I find Sass really useful and enjoyable, but I often forget how to set it up. I hope this guide will help you leverage the best of CSS by making it more efficient and maintainable."}),"\n",(0,t.jsx)(s.p,{children:"Enjoy coding with Sass!"})]})}s.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,Object.assign({},e,{children:(0,t.jsx)(l,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return s=8084,e(e.s=s);var s}));var s=e.O();_N_E=s}]);