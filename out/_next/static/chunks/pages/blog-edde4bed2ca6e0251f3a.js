_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("CafY"),i=n("KtBt"),c=a.a.createElement,l=!0;function u(e){return c(o.a,{title:e.title,description:e.description},c("div",{className:"container"},c("h1",null,"Blog"),c("div",{"data-aos":"fade-up"},c(i.a,{data:e.posts,className:"mt-5 mb-5"}))))}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),i=n.n(o),c=n("YFqc"),l=n.n(c),u=[{text:"RB",link:"/"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Error",link:"/error"}],s=a.a.createElement;function f(e){var t=e.onClick,n=e.theme;return s("header",null,s("div",{className:"container"},u.map((function(e,t){return s(l.a,{href:e.link,key:e+t},e.text)})),s("button",{onClick:t,className:"btn m-2"},"dark"===n?"\ud83c\udf19":"\ud83d\udd06")))}var p=a.a.createElement;function d(){return p("footer",null,p("div",{className:"container"},p("p",null,"\xa9 ",(new Date).getFullYear()," | RB")))}var m=a.a.createElement;function v(){return m("nav",{className:"mobile-nav"},u.map((function(e,t){return m(l.a,{href:e.link,key:e+t},e.text)})))}var g=a.a.createElement;function h(e){var t=Object(r.useState)(""),n=t[0],a=t[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");a(e)}),[]);return g("main",{className:n},g(i.a,null,g("title",null,e.title),g("meta",{name:"description",content:e.description}),g("meta",{property:"og:image",content:e.img||"https://beumsk.github.io/images/rb.png"}),g("meta",{property:"og:image:secure_url",content:e.img||"https://beumsk.github.io/images/rb.png"})),g(f,{onClick:function(){var e="light"===n?"dark":"light";window.localStorage.setItem("theme",e),a(e)},theme:n}),e.children,g(d,null),g(v,null))}},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},KtBt:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),c=a.a.createElement;function l(e){var t=e.data.map((function(e,t){return c(i.a,{href:e.link||"",key:t},c("a",null,c("div",{className:"rel"},c("h2",null,e.title.replace(/-/g," ").charAt(0).toUpperCase()+e.title.replace(/-/g," ").slice(1)),c("img",{src:e.img,alt:e.title.replace(/-/g," "),loading:"lazy"}))))}));return c("div",{className:"grid "+e.className},t)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),l=n("vNVm"),u={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),p=f.href,d=f.as,m=e.children,v=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var y=o.Children.only(m),k=y&&"object"===typeof y&&y.ref,E=(0,l.useIntersection)({rootMargin:"200px"}),w=r(E,2),_=w[0],N=w[1],C=o.default.useCallback((function(e){_(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,_]);(0,o.useEffect)((function(){var e=N&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&s(n,p,d,{locale:r})}),[d,p,N,b,t,n]);var I={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:c}))}(e,n,p,d,v,g,h,b)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);I.href=M||(0,i.addBasePath)((0,i.addLocale)(d,L,n&&n.defaultLocale))}return o.default.cloneElement(y,I)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=(0,a.useRef)(),u=(0,a.useState)(!1),s=r(u,2),f=s[0],p=s[1],d=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[["JUhy",0,2,1]]]);