_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),c=n.n(o),i=n("YFqc"),l=n.n(i),u=[{text:"RB",link:"/"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Error",link:"/error"}],s=a.a.createElement;function f(e){var t=e.onClick,n=e.theme;return s("header",null,s("div",{className:"container"},u.map((function(e,t){return s(l.a,{href:e.link,key:e+t},e.text)})),s("button",{onClick:t,className:"btn m-2"},"dark"===n?"\ud83c\udf19":"\ud83d\udd06")))}var p=a.a.createElement;function d(){return p("footer",null,p("div",{className:"container"},p("p",null,"\xa9 ",(new Date).getFullYear()," | RB")))}var v=a.a.createElement;function m(){return v("nav",{className:"mobile-nav"},u.map((function(e,t){return v(l.a,{href:e.link,key:e+t},e.text)})))}var g=a.a.createElement;function h(e){var t=Object(r.useState)(""),n=t[0],a=t[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");a(e)}),[]);var o=e.img&&(e.img.startsWith("http")?e.img:"https://beumsk.github.io".concat(e.img));return g("main",{className:n},g(c.a,null,g("title",null,e.title),g("meta",{name:"description",content:e.description}),g("meta",{property:"og:image",content:o||"https://beumsk.github.io/images/rb.png"}),g("meta",{property:"og:image:secure_url",content:o||"https://beumsk.github.io/images/rb.png"})),g(f,{onClick:function(){var e="light"===n?"dark":"light";window.localStorage.setItem("theme",e),a(e)},theme:n}),e.children,g(d,null),g(m,null))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=n("vNVm"),u={};function s(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.asPath||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),p=f.href,d=f.as,v=e.children,m=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var k=o.Children.only(v),y=k&&"object"===typeof k&&k.ref,E=(0,l.useIntersection)({rootMargin:"200px"}),w=r(E,2),N=w[0],_=w[1],I=o.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,o.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&s(n,p,d,{locale:r})}),[d,p,_,b,t,n]);var C={ref:I,onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:i}))}(e,n,p,d,m,g,h,b)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===k.type&&!("href"in k.props)){var L="undefined"!==typeof b?b:n&&n.locale,x=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);C.href=x||(0,c.addBasePath)((0,c.addLocale)(d,L,n&&n.defaultLocale))}return o.default.cloneElement(k,C)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},"uNx/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("CafY"),c=n("YFqc"),i=n.n(c),l=a.a.createElement;function u(){return l(o.a,{title:"404 - Page Not Found"},l("div",{className:"container"},l("h1",null,"404 - Page Not Found"),l("div",null,l(i.a,{href:"/",className:"btn"},l("a",null,"Go back Home")))))}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=(0,a.useRef)(),u=(0,a.useState)(!1),s=r(u,2),f=s[0],p=s[1],d=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["97Is",0,2,1]]]);