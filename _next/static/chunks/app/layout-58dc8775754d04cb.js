(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{347:()=>{},1264:e=>{e.exports={style:{fontFamily:"'elza', 'elza Fallback'"},className:"__className_4bf54b",variable:"__variable_4bf54b"}},1469:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return i}});let n=r(8229),o=r(8883),a=r(3063),s=n._(r(1193));function i(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=a.Image},1828:(e,t,r)=>{"use strict";r.d(t,{Analytics:()=>c});var n=r(2115),o=r(9509),a=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.vaq=window.vaq||[]).push(t)})};function s(){return"undefined"!=typeof window}function i(){return"production"}function u(){return(s()?window.vam:i())||"production"}function l(){return"development"===u()}function c(e){return(0,n.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,n.useEffect)(()=>{var t;!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!s())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=i();return}window.vam=e})(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let r=t.scriptSrc?t.scriptSrc:l()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?"".concat(t.basePath,"/insights/script.js"):"/_vercel/insights/script.js";if(document.head.querySelector('script[src*="'.concat(r,'"]')))return;let n=document.createElement("script");n.src=r,n.defer=!0,n.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),n.dataset.sdkv="1.5.0",t.disableAutoTrack&&(n.dataset.disableAutoTrack="1"),t.endpoint?n.dataset.endpoint=t.endpoint:t.basePath&&(n.dataset.endpoint="".concat(t.basePath,"/insights")),t.dsn&&(n.dataset.dsn=t.dsn),n.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(r,". ").concat(e))},l()&&!1===t.debug&&(n.dataset.debug="false"),document.head.appendChild(n)}({framework:e.framework||"react",basePath:null!==(t=e.basePath)&&void 0!==t?t:function(){if(void 0!==o&&void 0!==o.env)return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,n.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:r,path:n}=e;null==(t=window.va)||t.call(window,"pageview",{route:r,path:n})}({route:e.route,path:e.path})},[e.route,e.path]),null}},2736:e=>{e.exports={style:{fontFamily:"'DM Mono', 'DM Mono Fallback'",fontWeight:300,fontStyle:"normal"},className:"__className_bd8ccd",variable:"__variable_bd8ccd"}},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return i},urlObjectKeys:function(){return s}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",s=e.pathname||"",i=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==l?(l="//"+(l||""),s&&"/"!==s[0]&&(s="/"+s)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),""+a+l+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+i}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},3059:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(5155),o=r(2115),a=r(6874),s=r.n(a);r(6766);var i=r(5695);r(5365);let u=()=>{let e=(0,i.usePathname)(),[t,r]=(0,o.useState)(!1);return(0,n.jsx)("nav",{className:"w-full mt-5",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,n.jsx)("div",{className:"flex justify-between items-center h-16",children:(0,n.jsxs)("div",{className:"flex-1 flex justify-center space-x-6 sm:space-x-8 font-mono sm:ml-5 text-xs sm:text-sm font-medium",children:[(0,n.jsx)(s(),{href:"/",className:"inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg",children:"Home"}),(0,n.jsx)(s(),{href:"/pages/about",className:"inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg ".concat("/pages/about"===e?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-blue-600"),children:"About Me"}),(0,n.jsx)(s(),{href:"https://raw.githubusercontent.com/monicafang123/monicafang123.github.io/2768648ca8ef63f977f44bcadb5e713915ca3dba/public/Resume_New_Monica.pdf",className:"inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg",children:"Resume"})]})})})})}},4741:(e,t,r)=>{"use strict";r.d(t,{AudioProvider:()=>s,G:()=>i});var n=r(5155),o=r(2115);let a=(0,o.createContext)();function s(e){let{children:t}=e,r=[],[s,i]=(0,o.useState)("paused"),[u,l]=(0,o.useState)(!1),[c,f]=(0,o.useState)(0);return(0,o.useEffect)(()=>{{let e=localStorage.getItem("currentSongIndex");e?f(parseInt(e,10)):f(Math.floor(Math.random()*r.length))}},[]),(0,o.useEffect)(()=>{u&&(localStorage.setItem("audioStatus",s),localStorage.setItem("currentSongIndex",c))},[s,c,u]),(0,n.jsx)(a.Provider,{value:{status:s,setStatus:i,currentSongIndex:c,setCurrentSongIndex:f,allSongs:r},children:t})}function i(){return(0,o.useContext)(a)}},5365:()=>{},5695:(e,t,r)=>{"use strict";var n=r(8999);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},6354:e=>{e.exports={style:{fontFamily:"'Newsreader', 'Newsreader Fallback'"},className:"__className_328ff9",variable:"__variable_328ff9"}},6618:(e,t,r)=>{Promise.resolve().then(r.bind(r,1828)),Promise.resolve().then(r.bind(r,8031)),Promise.resolve().then(r.t.bind(r,6354,23)),Promise.resolve().then(r.t.bind(r,1264,23)),Promise.resolve().then(r.t.bind(r,2736,23)),Promise.resolve().then(r.bind(r,4741)),Promise.resolve().then(r.bind(r,3059)),Promise.resolve().then(r.t.bind(r,347,23))},6766:(e,t,r)=>{"use strict";r.d(t,{default:()=>o.a});var n=r(1469),o=r.n(n)},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(8229),o=r(5155),a=n._(r(2115)),s=r(2757),i=r(5227),u=r(9818),l=r(6654),c=r(9991),f=r(5929);r(3230);let d=r(4930);function p(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let m=a.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:h,prefetch:b=null,passHref:v,replace:g,shallow:y,scroll:P,onClick:w,onMouseEnter:S,onTouchStart:_,legacyBehavior:x=!1,...E}=e;r=h,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let j=a.default.useContext(i.AppRouterContext),A=!1!==b,k=null===b?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:N,as:O}=a.default.useMemo(()=>{let e=p(s);return{href:e,as:m?p(m):e}},[s,m]);x&&(n=a.default.Children.only(r));let T=x?n&&"object"==typeof n&&n.ref:t,C=a.default.useCallback(e=>(A&&null!==j&&(0,d.mountLinkInstance)(e,N,j,k),()=>{(0,d.unmountLinkInstance)(e)}),[A,N,j,k]),I={ref:(0,l.useMergedRef)(C,T),onClick(e){x||"function"!=typeof w||w(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),j&&!e.defaultPrevented&&!function(e,t,r,n,o,s,i){let{nodeName:u}=e.currentTarget;!("A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),a.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,j,N,O,g,y,P)},onMouseEnter(e){x||"function"!=typeof S||S(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),j&&A&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){x||"function"!=typeof _||_(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),j&&A&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(O)?I.href=O:x&&!v&&("a"!==n.type||"href"in n.props)||(I.href=(0,f.addBasePath)(O)),x?a.default.cloneElement(n,I):(0,o.jsx)("a",{...E,...I,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8031:(e,t,r)=>{"use strict";r.d(t,{SpeedInsights:()=>d});var n=r(2115),o=r(5695),a=r(9509),s=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.siq=window.siq||[]).push(t)})};function i(){return"development"===function(){return"production"}()}function u(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}function l(e){(0,n.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{var r,n;let o=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof window||null===t.route)return null;s();let r=t.scriptSrc?t.scriptSrc:i()?"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js":t.dsn?"https://va.vercel-scripts.com/v1/speed-insights/script.js":t.basePath?"".concat(t.basePath,"/speed-insights/script.js"):"/_vercel/speed-insights/script.js";if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let n=document.createElement("script");return n.src=r,n.defer=!0,n.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),n.dataset.sdkv="1.2.0",t.sampleRate&&(n.dataset.sampleRate=t.sampleRate.toString()),t.route&&(n.dataset.route=t.route),t.endpoint?n.dataset.endpoint=t.endpoint:t.basePath&&(n.dataset.endpoint="".concat(t.basePath,"/speed-insights/vitals")),t.dsn&&(n.dataset.dsn=t.dsn),i()&&!1===t.debug&&(n.dataset.debug="false"),n.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(n),{setRoute:e=>{n.dataset.route=null!=e?e:void 0}}}({framework:null!==(r=e.framework)&&void 0!==r?r:"react",basePath:null!==(n=e.basePath)&&void 0!==n?n:function(){if(void 0!==a&&void 0!==a.env)return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...e});o&&(t.current=o.setRoute)}},[e.route]),null}var c=()=>{let e=(0,o.useParams)(),t=(0,o.useSearchParams)()||new URLSearchParams,r=(0,o.usePathname)();return e?function(e,t){if(!e||!t)return e;let r=e;try{let e=Object.entries(t);for(let[t,n]of e)if(!Array.isArray(n)){let e=u(n);e.test(r)&&(r=r.replace(e,"/[".concat(t,"]")))}for(let[t,n]of e)if(Array.isArray(n)){let e=u(n.join("/"));e.test(r)&&(r=r.replace(e,"/[...".concat(t,"]")))}return r}catch(t){return e}}(r,Object.keys(e).length?e:Object.fromEntries(t.entries())):null};function f(e){let t=c();return n.createElement(l,{route:t,...e,framework:"next",basePath:function(){if(void 0!==a&&void 0!==a.env)return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH}()})}function d(e){return n.createElement(n.Suspense,{fallback:null},n.createElement(f,{...e}))}},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return v},NormalizeError:function(){return h},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return s},getURL:function(){return i},isAbsoluteUrl:function(){return a},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=s();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Object.defineProperty(Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class v extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[462,63,441,684,358],()=>t(6618)),_N_E=e.O()}]);