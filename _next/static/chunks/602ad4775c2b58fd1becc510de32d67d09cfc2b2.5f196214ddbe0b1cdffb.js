(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),u=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=h.length;i<s;i++){var f=h[i];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;"name"===f&&c||!p.has(l)?(p.add(l),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,c.default.cloneElement(e,u)}return c.default.cloneElement(e,{key:o})}))}function m(e){var t=e.children,n=(0,c.useContext)(i.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),u=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),u=n("nOHt"),i=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),a=n&&n.asPath||"/",l=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],u=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):u||o}}),[a,e.href,e.as]),p=l.href,d=l.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=o.Children.only(h),M=b&&"object"===typeof b&&b.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),O=r(w,2),_=O[0],j=O[1],k=o.default.useCallback((function(e){_(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,_]);(0,o.useEffect)((function(){var e=j&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof g?g:n&&n.locale,a=s[p+"%"+d+(r?"%"+r:"")];e&&!a&&f(n,p,d,{locale:r})}),[d,p,j,g,t,n]);var C={ref:k,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:i,scroll:u}))}(e,n,p,d,v,m,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(n,p,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var E="undefined"!==typeof g?g:n&&n.locale,I=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,E,n&&n.locales,n&&n.domainLocales);C.href=I||(0,c.addBasePath)((0,c.addLocale)(d,E,n&&n.defaultLocale))}return o.default.cloneElement(b,C)};t.default=l},foOB:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),c=n.n(o),u=n("YFqc"),i=n.n(u),s=a.a.createElement;function f(){return s("header",null,s("div",{className:"container"},s(i.a,{href:"/"},"RB"),s(i.a,{href:"/projects"},"Projects"),s(i.a,{href:"/blog"},"Blog"),s(i.a,{href:"/contact"},"Contact")))}var l=a.a.createElement;function p(){return l("footer",null,l("div",{className:"container"},l("p",null,"\xa9 ",(new Date).getFullYear()," | RB")))}var d=a.a.createElement;function h(){return d("nav",{className:"mobile-nav"},d(i.a,{href:"/"},"RB"),d(i.a,{href:"/projects"},"Projects"),d(i.a,{href:"/blog"},"Blog"),d(i.a,{href:"/contact"},"Contact"))}var v=a.a.createElement;function m(e){return v("main",{className:"light"},v(c.a,null,v("title",null,e.title),v("meta",{name:"description",content:e.description})),v(f,null),e.children,v(p,null),v(h,null))}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,a.useRef)(),s=(0,a.useState)(!1),f=r(s,2),l=f[0],p=f[1],d=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||l||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){if(!c&&!l){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[l]),[d,l]};var a=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}}]);