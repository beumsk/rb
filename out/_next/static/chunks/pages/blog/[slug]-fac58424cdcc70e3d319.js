_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=n("g4pe"),l=n.n(o),i=n("YFqc"),c=n.n(i),u=[{text:"RB",link:"/"},{text:"Projects",link:"/projects"},{text:"Blog",link:"blog"},{text:"Error",link:"/error"}],s=r.a.createElement;function f(e){var t=e.onClick,n=e.theme;return s("header",null,s("div",{className:"container"},u.map((function(e,t){return s(c.a,{href:e.link,key:e+t},e.text)})),s("button",{onClick:t,className:"btn m-2"},"dark"===n?"\ud83c\udf19":"\ud83d\udd06")))}var d=r.a.createElement;function p(){return d("footer",null,d("div",{className:"container"},d("p",null,"\xa9 ",(new Date).getFullYear()," | RB")))}var m=r.a.createElement;function v(){return m("nav",{className:"mobile-nav"},u.map((function(e,t){return m(c.a,{href:e.link,key:e+t},e.text)})))}var g=r.a.createElement;function h(e){var t=Object(a.useState)(""),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("theme");r(e),console.log(n)}),[]);return g("main",{className:n},g(l.a,null,g("title",null,e.title),g("meta",{name:"description",content:e.description}),g("meta",{property:"og:image",content:e.img||"https://beumsk.github.io/images/rb.png"}),g("meta",{property:"og:image:secure_url",content:e.img||"https://beumsk.github.io/images/rb.png"})),g(f,{onClick:function(){var e="light"===n?"dark":"light";window.localStorage.setItem("theme",e),r(e)},theme:n}),e.children,g(p,null),g(v,null))}},KTQB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("CafY"),l=n("YFqc"),i=n.n(l),c=r.a.createElement,u=!0;function s(e){var t,n=""===e.data.date?"No date":new Date(e.data.date).getDate()+"."+(new Date(e.data.date).getMonth()+1)+"."+new Date(e.data.date).getFullYear(),a=(null===(t=e.posts[e.posts.findIndex((function(t){return t.title===e.data.title}))+1])||void 0===t?void 0:t.link)||e.posts[0].link;return c(o.a,{title:e.data.title+" | R\xe9my Beumier",img:e.data.img,description:e.data.intro},c("div",{className:"container narrow","data-aos":"fade-left"},c("article",null,c("h1",null,e.data.title),c("img",{src:e.data.img,alt:e.data.title,className:"post__img mb-5"}),c("p",{className:"post__date pb-5"},n),c("div",{className:"post__content mb-5",dangerouslySetInnerHTML:{__html:e.data.content}}),c("div",null,c(i.a,{href:a},c("a",{className:"btn mb-2 mr-2"},"Next blog post")),c(i.a,{href:"/blog"},c("a",{className:"btn"},"Back to blog listing"))))))}},MTnK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("KTQB")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),l=n("elyg"),i=n("nOHt"),c=n("vNVm"),u={};function s(e,t,n,a){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),r=n&&n.asPath||"/",f=o.default.useMemo((function(){var t=(0,l.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,l.resolveHref)(r,e.as):i||o}}),[r,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var _=o.Children.only(m),k=_&&"object"===typeof _&&_.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),y=a(w,2),N=y[0],E=y[1],M=o.default.useCallback((function(e){N(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,N]);(0,o.useEffect)((function(){var e=E&&t&&(0,l.isLocalURL)(d),a="undefined"!==typeof b?b:n&&n.locale,r=u[d+"%"+p+(a?"%"+a:"")];e&&!r&&s(n,d,p,{locale:a})}),[p,d,E,b,t,n]);var I={ref:M,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:c,scroll:i}))}(e,n,d,p,v,g,h,b)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var L="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&(0,l.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);I.href=C||(0,l.addBasePath)((0,l.addLocale)(p,L,n&&n.defaultLocale))}return o.default.cloneElement(_,I)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,c=(0,r.useRef)(),u=(0,r.useState)(!1),s=a(u,2),f=s[0],d=s[1],p=(0,r.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,l=a.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!l&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var r=n("q1tI"),o=n("0G5g"),l="undefined"!==typeof IntersectionObserver;var i=new Map}},[["MTnK",0,2,1]]]);