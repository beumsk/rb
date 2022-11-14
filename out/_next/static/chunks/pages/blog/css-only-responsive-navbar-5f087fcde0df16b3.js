(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{8212:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/css-only-responsive-navbar",function(){return r(5829)}])},3753:function(e,n,r){"use strict";r.d(n,{Z:function(){return f}});var t=r(5893),i=r(7294),a=r(1163),s=r(1664),o=r(5697),l=r.n(o),c=r(4725),d=r.n(c),h=(r(9578),r(2427),r(8193)),u=r(3422),p=r(9095),g=r(4285);function f(e){var n=e.children,r=(0,a.useRouter)();(0,i.useEffect)((function(){d().highlightAll()}),[r]);var o=u.x.filter((function(e){return e.slug===r.asPath.replace("/blog/","")}))[0],l=o.title,c=o.intro,f=o.img,x=o.date,b=o.categories,m=o.url,k=""===x?"No date":"".concat(new Date(x).getDate(),".").concat(new Date(x).getMonth()+1,".").concat(new Date(x).getFullYear()),w=null===b||void 0===b?void 0:b.split(", ").filter((function(e){return e})),j=u.x[u.x.findIndex((function(e){return e.title===l}))+1]||u.x[0],v=[u.x[u.x.findIndex((function(e){return e.title===l}))-1]||u.x[u.x.length-1],j];return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.Z,{title:"".concat(l," | Blog | R\xe9my Beumier"),description:c,img:f,url:m,itemtype:"Article",children:(0,t.jsx)("div",{className:"container narrow posts-shape",children:(0,t.jsx)("div",{"data-aos":"fade-left",children:(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{itemProp:"headline name",children:l}),(0,t.jsx)("img",{src:f,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,t.jsxs)("div",{className:"space-between-x mb-10",children:[(0,t.jsx)("div",{className:"post__categories",children:null===w||void 0===w?void 0:w.map((function(e){return(0,t.jsx)(s.default,{href:"/blog?".concat(e),children:(0,t.jsx)("a",{children:(0,t.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,t.jsx)("time",{className:"post__date",itemProp:"datePublished",content:k,dateTime:k,children:k})]}),(0,t.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:n}),(0,t.jsx)("div",{className:"mb-15",children:(0,t.jsx)(s.default,{href:"/blog",children:(0,t.jsxs)("a",{className:"btn",children:[(0,t.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,t.jsx)(g.Z,{data:v,className:"mb-20"})]})]})})})})})}f.propTypes={meta:l().object,children:l().node,posts:l().array}},8368:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893),i=r(5697),a=r.n(i);function s(e){var n=e.className,r=e.pen,i=e.title;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"code-iframe-wrapper "+(n||""),children:(0,t.jsxs)("iframe",{height:"300",scrolling:"no",title:i,loading:"lazy",src:"https://codepen.io/beumsk/embed/"+r+"?default-tab=result",children:[(0,t.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+r,target:"_blank",rel:"noopener noreferrer",children:"See the Pen"}),"by",(0,t.jsx)("a",{href:"https://codepen.io/beumsk",target:"_blank",rel:"noopener noreferrer",children:"R\xe9my Beumier"})]})})})}s.propTypes={className:a().string,pen:a().string,title:a().string}},5829:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(1151),a=r(3753),s=r(8368),o=function(e){var n=e.children;return(0,t.jsx)(a.Z,{children:n})};function l(e){var n=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"I do more and more JavaScript because of the usual requirements in projects, but I will always love a useful, adaptable and cross-browser working CSS trick."}),"\n",(0,t.jsx)(n.p,{children:"I recently had to build an advanced header navigation and for some reasons it was easier not to use any JavaScript for this. Even though I knew for sure I could handle big screen layout and transitions with CSS only, I thought complexity would come with smaller devices and thus organizing the links differently."}),"\n",(0,t.jsx)(n.p,{children:"I also wanted a single navigation in HTML to avoid duplication of code and a fair level of browser compatibility (by fair I mean no IE)."}),"\n",(0,t.jsx)(n.p,{children:"Without further ado, let's dive into a working solution for our case with a first step into the HTML. It's kept dead simple, except for the checkbox that we will understand later."}),"\n",(0,t.jsx)(n.h2,{children:"The HTML structure for the navigation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<header class="header">\r\n  \x3c!-- this checkbox handles the hide/show menu logic --\x3e\r\n  <input type="checkbox" class="header__burger" />\r\n\r\n  <a href="https://remybeumier.be" target="_blank" class="header__logo">\r\n    <img src="path" alt="alt" />\r\n  </a>\r\n\r\n  <div class="header__links">\r\n    <a href="#0" class="header__link">Link with sublinks</a>\r\n    <div class="header__sublinks">\r\n      <a href="#0">Sublink</a>\r\n      <a href="#0">Sublink</a>\r\n      <a href="#0">Sublink</a>\r\n      <a href="#0">Sublink</a>\r\n      <a href="#0">Sublink</a>\r\n    </div>\r\n    <a href="#0" class="header__link">Link</a>\r\n    <a href="#0" class="header__link">Link</a>\r\n    <a href="#0" class="header__link">Link</a>\r\n    <a href="#0" class="header__link">Link</a>\r\n  </div>\r\n</header>\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you don't risk any heart attack, you can check the result as of now. It will give you a 'wow' effect when we will add some styling; Actually, I still have that great feeling after many years of web development."}),"\n",(0,t.jsx)(n.h2,{children:"Small screens header styling"}),"\n",(0,t.jsx)(n.p,{children:"Following a mobile first mindset, we will start with the SCSS from the tiniest screens."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:".header {\r\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);\r\n  position: sticky;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  background-color: white;\r\n\r\n  .header__logo {\r\n    display: flex;\r\n    padding: 11px;\r\n    transition: background-color 0.3s ease-in-out;\r\n    &:hover,\r\n    &:focus {\r\n      background-color: #f5f5f5;\r\n    }\r\n    svg {\r\n      min-width: 32px;\r\n    }\r\n  }\r\n\r\n  .header__links {\r\n    display: none;\r\n    flex-direction: column;\r\n    padding: 8px 0;\r\n    border-top: solid 1px #e5e5e5;\r\n    width: 100%;\r\n  }\r\n\r\n  .header__link {\r\n    color: #333;\r\n    text-decoration: none;\r\n    padding: 8px 16px;\r\n    white-space: nowrap;\r\n    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\r\n    &:hover,\r\n    &:focus {\r\n      background-color: #f5fafb;\r\n      color: #80d0c7;\r\n    }\r\n    &.active {\r\n      background-color: #f5fafb;\r\n    }\r\n    + .header__sublinks {\r\n      > a {\r\n        display: block;\r\n        padding: 4px 8px;\r\n        margin-left: 16px;\r\n        color: #55626a;\r\n        font-size: 0.875rem;\r\n        text-decoration: none;\r\n        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\r\n        &:hover,\r\n        &:focus {\r\n          color: #80d0c7;\r\n          background-color: #f5fafb;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Should you need to convert it into CSS, don't hesitate to copy and paste it over ",(0,t.jsx)("a",{href:"https://www.sassmeister.com/",target:"_blank",children:"https://www.sassmeister.com/"})," or ",(0,t.jsx)("a",{href:"https://sass.js.org/",target:"_blank",children:"https://sass.js.org/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Regarding the code, I don't think it contains anything fancy. We use ",(0,t.jsx)(n.code,{children:"position: sticky"})," because it is so easy for top nav, a bit of ",(0,t.jsx)(n.code,{children:"flex"})," layout and transitions but that's it for this part."]}),"\n",(0,t.jsx)(n.h2,{children:"The CSS trick"}),"\n",(0,t.jsxs)(n.p,{children:["Here is the gold of the article. We will see that we handle the toggle with the checkbox element and its ",(0,t.jsx)(n.code,{children:":checked"})," pseudo class. We also totally change its design to have a burger element."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:".header__burger {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 54px;\r\n  height: 54px;\r\n  margin: 0;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out;\r\n  &::after {\r\n    content: '';\r\n    height: 24px;\r\n    width: 24px;\r\n    top: 15px;\r\n    left: 15px;\r\n    position: absolute;\r\n    background: linear-gradient(\r\n      to bottom,\r\n      #80d0c7 20%,\r\n      transparent 20% 40%,\r\n      #80d0c7 40% 60%,\r\n      transparent 60% 80%,\r\n      #80d0c7 80% 100%\r\n    );\r\n  }\r\n  &:hover,\r\n  &:focus {\r\n    background-color: #f5f5f5;\r\n  }\r\n  &:checked {\r\n    ~ .header__links {\r\n      display: flex;\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first comment about this snippet will be about the design of the checkbox. As you can see, we removed its default with ",(0,t.jsx)(n.code,{children:"appearance: none"})," and we applied a gradient as background to mimic a burger menu. I could have avoided the ",(0,t.jsx)(n.code,{children:"::after"}),", but I liked the idea to have a bigger click area. Of course, we could change this to an icon font, or a label pointing to the checkbox giving us a lot more possibilities."]}),"\n",(0,t.jsxs)(n.p,{children:["And secondly, we handle the show/hide logic. We are looking for the checkbox to be ",(0,t.jsx)(n.code,{children:":checked"})," ",(0,t.jsx)("a",{href:"https://caniuse.com/mdn-css_selectors_checked",target:"_blank",children:"Browser compatibility on caniuse"}),", and we select the ",(0,t.jsx)(n.code,{children:".header__links"})," among its sibling with the ",(0,t.jsx)(n.code,{children:"~"})," selector. As of now, we can nicely toggle the menu on or off without JavaScript."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Some could argue a burger menu is not so user-friendly. I think given how widely it's used, a user will understand directly what it is and how to use it."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Big screens header styling"}),"\n",(0,t.jsx)(n.p,{children:"I know it's not the core content of the article, but let's design our navigation completely and give it a nice look on desktops too."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"@media only screen and (min-width: 1024px) {\r\n  flex-direction: row;\r\n  align-items: center;\r\n\r\n  .header__links {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0;\r\n    border-top: none;\r\n    width: auto;\r\n  }\r\n\r\n  .header__link {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    height: 54px;\r\n    padding: 9px 10px;\r\n    &:hover,\r\n    &:focus {\r\n      + .header__sublinks {\r\n        height: 42px;\r\n      }\r\n    }\r\n\r\n    + .header__sublinks {\r\n      display: flex;\r\n      justify-content: center;\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      top: 54px;\r\n      height: 0;\r\n      overflow: hidden;\r\n      background-color: #f5fafb;\r\n      border-top: solid 1px #e5e5e5;\r\n      transition: height 0.3s ease-in-out;\r\n      > a {\r\n        padding: 10px;\r\n        margin-left: 0;\r\n        color: #333;\r\n        font-size: 1rem;\r\n      }\r\n      &:hover,\r\n      &:focus-within {\r\n        height: 42px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .header__burger {\r\n    display: none;\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There isn't much magic in those lines. We are hiding the burger checkbox and are giving the navbar a horizontal layout to be able to display every link nicely. The only challenge was to design the sublinks in a catchy way. By default we give that sub navigation ",(0,t.jsx)(n.code,{children:"height: 0"})," and once we hover its parent link, we adjust the height with a smooth transition."]}),"\n",(0,t.jsx)(n.h2,{children:"Final navigation result"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TLDR"}),": Find the complete solution for this ",(0,t.jsx)("a",{href:"https://codepen.io/beumsk/pen/bGKbZoV",target:"_blank",children:"Responsive CSS only navigation bar using a burger menu on Codepen"}),". Feel free to take inspiration from it and adapt it to your exact need."]}),"\n",(0,t.jsx)(s.Z,{pen:"bGKbZoV",title:"Responsive CSS only navigation bar using a burger menu on Codepen"}),"\n",(0,t.jsx)(n.p,{children:"Enjoy coding with CSS!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(l,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return n=8212,e(e.s=n);var n}));var n=e.O();_N_E=n}]);