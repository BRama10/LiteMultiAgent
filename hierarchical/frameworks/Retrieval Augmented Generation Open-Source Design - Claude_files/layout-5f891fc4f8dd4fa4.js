(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{31783:function(){},60449:function(){},31489:function(e,t,n){Promise.resolve().then(n.bind(n,75113)),Promise.resolve().then(n.bind(n,6520)),Promise.resolve().then(n.bind(n,93266)),Promise.resolve().then(n.bind(n,84983)),Promise.resolve().then(n.bind(n,74127)),Promise.resolve().then(n.bind(n,57782)),Promise.resolve().then(n.bind(n,22891)),Promise.resolve().then(n.bind(n,58526)),Promise.resolve().then(n.bind(n,22935)),Promise.resolve().then(n.bind(n,56646)),Promise.resolve().then(n.bind(n,44541)),Promise.resolve().then(n.bind(n,2645)),Promise.resolve().then(n.t.bind(n,84728,23)),Promise.resolve().then(n.t.bind(n,97303,23)),Promise.resolve().then(n.t.bind(n,7900,23)),Promise.resolve().then(n.t.bind(n,84347,23)),Promise.resolve().then(n.t.bind(n,29811,23)),Promise.resolve().then(n.t.bind(n,6775,23)),Promise.resolve().then(n.bind(n,11492)),Promise.resolve().then(n.bind(n,39850)),Promise.resolve().then(n.bind(n,23532)),Promise.resolve().then(n.bind(n,16096)),Promise.resolve().then(n.bind(n,59374)),Promise.resolve().then(n.bind(n,4396)),Promise.resolve().then(n.bind(n,29294)),Promise.resolve().then(n.bind(n,75576)),Promise.resolve().then(n.bind(n,16241)),Promise.resolve().then(n.bind(n,66984)),Promise.resolve().then(n.bind(n,53555)),Promise.resolve().then(n.bind(n,64720)),Promise.resolve().then(n.bind(n,26270)),Promise.resolve().then(n.bind(n,5532)),Promise.resolve().then(n.bind(n,99639)),Promise.resolve().then(n.bind(n,65991)),Promise.resolve().then(n.t.bind(n,61464,23)),Promise.resolve().then(n.bind(n,23904))},75113:function(e,t,n){"use strict";n.r(t);var r=n(16096),s=n(54603),i=n(7653),a=n(80248);t.default=()=>(!function(){let e=(0,s.useRouter)(),{isLoading:t,account:n}=(0,r.useCurrentAccount)(),{value:o}=(0,a.useGate)("nest_enabled");(0,i.useEffect)(()=>{!t&&!o&&n&&window.navigator.userAgent.includes("ClaudeNest")&&e.push("/nest-disabled")},[o,t,e,n])}(),null)},39850:function(e,t,n){"use strict";n.r(t),n.d(t,{ConsentProvider:function(){return h},useConsent:function(){return p}});var r=n(27573),s=n(14983),i=n(27794),a=n.n(i),o=n(7653),l=n(43316),c=n(23532),u=n(91600),d=n(21728),f=n(83243);let m=(0,o.createContext)({showConsentBanner:!1,openConsentBanner:a(),preferences:f.iw,savePreferences:a()}),h=e=>{let{children:t,requiresExplicitConsent:n}=e,[i,a,h]=function(e,t){let n=(0,c.useCookies)(),[r,s]=(0,o.useState)(()=>!!n.get(e)),[i,a]=(0,o.useState)(()=>{try{let r=n.get(e);return r?JSON.parse(r):t}catch(n){return(0,l.Tb)(n,{extra:{message:"Malformed JSON cookie",cookieKey:e}}),t}});return[i,(0,o.useCallback)(t=>{n.set(e,JSON.stringify(t)),a(t),s(!0)},[n,e]),r]}(s.cn.CONSENT_PREFERENCES,n?f.iw:f.DF),[p,g]=(0,o.useState)(n&&!h),v=(0,o.useCallback)(e=>{a(e),(0,u.HF)(e),g(!1),d.u.updateCategories(e)},[a,g]);return(0,r.jsx)(m.Provider,{value:{showConsentBanner:p,openConsentBanner:()=>g(!0),preferences:i,savePreferences:v},children:t})};function p(){return(0,o.useContext)(m)}},83243:function(e,t,n){"use strict";var r,s;n.d(t,{DF:function(){return a},iw:function(){return i}}),(s=r||(r={})).GoogleTagManager="google_tag_manager",s.GoogleEnhancedConversions="google_enhanced_conversions";let i={analytics:!1,marketing:!1},a={analytics:!0,marketing:!0}},59374:function(e,t,n){"use strict";n.r(t),n.d(t,{ErrorsProvider:function(){return a},useToasts:function(){return o}});var r=n(27573),s=n(7653);let i=(0,s.createContext)(void 0);function a(e){let{children:t}=e,n=(0,s.useRef)(1),[a,o]=(0,s.useState)([]),l=(0,s.useCallback)(e=>{let t=n.current++;return o(n=>[...n,{id:t,message:e instanceof Error?e.message:e,toastType:"error"}]),t},[]),c=(0,s.useCallback)(e=>{let t=n.current++;return o(n=>[...n,{id:t,message:e instanceof Error?e.message:e,toastType:"success"}]),t},[]),u=(0,s.useCallback)(e=>{o(t=>t.filter(t=>t.id!==e))},[]),d=(0,s.useMemo)(()=>({toasts:a,addError:l,addSuccess:c,clearToast:u}),[a,l,c,u]);return(0,r.jsx)(i.Provider,{value:d,children:t})}function o(){let e=(0,s.useContext)(i);if(!e)throw Error("Must be called within ErrorsProvider");return e}},91600:function(e,t,n){"use strict";n.d(t,{HF:function(){return i},bq:function(){return s}});var r=n(43316);let s=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];try{"function"==typeof window.gtag&&gtag(e,...n)}catch(e){(0,r.Tb)(e)}},i=e=>{s("consent","update",a(e))},a=e=>({ad_personalization:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_storage:e.marketing?"granted":"denied",analytics_storage:e.analytics?"granted":"denied",functionality_storage:"granted",personalization_storage:"granted",security_storage:"granted"})},4396:function(e,t,n){"use strict";n.r(t),n.d(t,{IntercomProvider:function(){return r.H}});var r=n(77864)},29294:function(e,t,n){"use strict";n.r(t),n.d(t,{IntercomTracker:function(){return c}});var r=n(22616),s=n(84706),i=n.n(s),a=n(7653),o=n(77864),l=n(16096);function c(){let e=(0,o.o)(),{account:t,intercomAccountHash:n,activeOrganization:s}=(0,l.useCurrentAccount)();return(0,a.useEffect)(()=>{var s,a;if((0,r.yG)()||!t)return;let o=t.memberships.map(e=>e.organization),l=o.some(e=>{switch(e.billing_type){case"usage_based":return!0;case"prepaid":if(!e.rate_limit_tier)return!0;return"auto_prepaid_tier_0"!==e.rate_limit_tier&&"auto_prepaid_tier_1"!==e.rate_limit_tier;default:return!1}}),c=o.map(e=>{var t;let n=null===(t=e.rate_limit_tier)||void 0===t?void 0:t.match(/(auto_prepaid|manual)_tier_(\d)/);switch(e.billing_type){case"usage_based":return[100,"scale"];case"prepaid":if(n){let e=parseInt(n[2])+1;return[e,"build_tier_".concat(e)]}return[99,"build_custom"];case"api_evaluation":return[0,"evaluation"];default:return[-1,null]}}),u={paidAccount:l,apiTier:null!==(a=null===(s=i()(c,e=>e[0]))||void 0===s?void 0:s[1])&&void 0!==a?a:null,claudePro:o.some(e=>e.capabilities.includes("claude_pro")),hasTeamPlan:o.some(e=>e.capabilities.includes("raven")),isAdminForTeamPlan:t.memberships.some(e=>"admin"===e.role&&e.organization.capabilities.includes("raven"))};e.boot({hideDefaultLauncher:!0,userId:t.uuid,email:t.email_address,name:t.full_name,userHash:null!=n?n:void 0,customAttributes:u})},[e,t,n]),(0,a.useEffect)(()=>{!(0,r.yG)()&&s&&e.update({customAttributes:{lastActiveOrgUUID:s.uuid,lastActiveOrgName:s.name,lastActiveOrgCapabilities:s.capabilities.join(",")}})},[e,s]),null}},75576:function(e,t,n){"use strict";n.r(t),n.d(t,{LogHiring:function(){return i}});var r=n(22616),s=n(7653);let i=()=>((0,s.useEffect)(()=>{(0,r.yG)()||console.log("%c\n         &&&&&   &&&&&\n        &&&&&&&   &&&&&\n       &&&&&&&&&   &&&&&\n      &&&&  &&&&&   &&&&&\n     &&&&    &&&&&   &&&&&\n    &&&&&     &&&&&   &&&&&\n   &&&&&&&&&&&&&&&&&   &&&&&\n  &&&&&         &&&&&   &&&&&\n &&&&&           &&&&&   &&&&&\n\n We're hiring! https://anthropic.com/careers","font-family: Menlo, monospace; font-weight: bold; font-size: 14px; color: #cda177")},[]),null)},16241:function(e,t,n){"use strict";n.r(t),n.d(t,{MotionConfig:function(){return i}});var r=n(27573),s=n(47412);let i=e=>{let{children:t}=e;return(0,r.jsx)(s.A,{reducedMotion:"user",children:t})}},66984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(27573),s=n(28648),i=n(35146),a=n(89301),o=n(99426),l=n(57892),c=n(84983),u=n(6520),d=n(7653),f=n(59374);function m(e){let{state:t,children:n}=e,{addError:m}=(0,f.useToasts)(),[h]=(0,d.useState)(()=>{let e=(e,t,n)=>{if(e instanceof s.Hx&&403===e.statusCode&&e.message.includes("Not authenticated"))h.getQueryData([i.aY])&&h.invalidateQueries([i.aY]);else if(e instanceof Error){if("function"==typeof t?!t(e):!t){let t=n||e.message||e;"string"==typeof t&&t.slice(0,50).includes("html>")?m("We are experiencing technical difficulties. Some functionality may be temporarily unavailable."):t&&m(t)}}else throw Error("Unexpected query error type: ".concat(typeof e),{cause:e})};return new a.S({queryCache:new o.t({onError:(t,n)=>{var r,s;return e(t,null===(r=n.meta)||void 0===r?void 0:r.noToast,null===(s=n.meta)||void 0===s?void 0:s.errorMessage)}}),mutationCache:new l.L({onError:(t,n,r,s)=>{var i,a;return e(t,!!(null===(i=s.meta)||void 0===i?void 0:i.noToast),null===(a=s.meta)||void 0===a?void 0:a.errorMessage)}})})});return(0,r.jsx)(c.QueryClientProvider,{client:h,children:(0,r.jsx)(u.Hydrate,{state:t,children:n})})}},53555:function(e,t,n){"use strict";n.r(t),n.d(t,{AnalyticsIdentifier:function(){return d}});var r=n(22616),s=n(43316),i=n(27794),a=n.n(i),o=n(54603),l=n(7653),c=n(16096),u=n(89937);function d(){let e=(0,u.K)(),{account:t}=(0,c.useCurrentAccount)(),n=(0,o.usePathname)();return(0,l.useEffect)(()=>{if(!t)return;(0,s.av)({id:t.uuid});let n="none";for(let e of["commercial_use","claude_pro","api"])if(t.memberships.some(t=>t.organization.capabilities.includes(e))){n="commercial_use";break}e.identify(t.uuid,{plan:n}).catch(a())},[t,e]),(0,l.useEffect)(()=>{!(0,r.yG)()&&t&&n&&e.page(n).catch(a())},[n,e,t]),null}},89937:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var r=n(80248),s=n(11492),i=n(21728);let a=()=>{let{segmentKey:e,segmentCdnHost:t,segmentApiHost:n}=(0,s.useConfiguration)(),{value:a}=(0,r.useGate)("requires_explicit_consent");return i.u.loadIfNecessary({segmentKey:e,segmentCdnHost:t,segmentApiHost:n,requiresExplicitConsent:a})}},21728:function(e,t,n){"use strict";n.d(t,{u:function(){return m}});var r=n(14983),s=n(70478),i=n(39625),a=n(43316),o=n(27794),l=n.n(o),c=n(83243),u=n(23532);class d{constructor(){this.name="RemoveUserAgent",this.version="1.0.0",this.type="before",this.isLoaded=()=>!0,this.load=()=>Promise.resolve(),this.redactPiiFromContext=e=>{var t;return(null==e?void 0:null===(t=e.event)||void 0===t?void 0:t.context)&&(delete e.event.context.userAgent,delete e.event.context.email,e.event.context.ip="REDACTED"),e},this.track=this.redactPiiFromContext,this.identify=this.redactPiiFromContext,this.page=this.redactPiiFromContext,this.group=this.redactPiiFromContext,this.alias=this.redactPiiFromContext,this.screen=this.redactPiiFromContext}}class f{constructor(){this.consentChangedCallback=l(),this.preferences=f.mapConsentPreferences(c.iw),this.analyticsBrowser=null,this.loadIfNecessary=e=>{let{segmentKey:t,segmentCdnHost:n,segmentApiHost:r,requiresExplicitConsent:s}=e;return this.analyticsBrowser||(this.analyticsBrowser=new i.b,this.loadInitialConsentPreferences(s),this.wrapAnalyticsWithConsent(this.analyticsBrowser).load({writeKey:t,cdnURL:"https://".concat(n),plugins:[new d]},{disableClientPersistence:!0,integrations:{"Segment.io":{apiHost:"".concat(r,"/v1"),protocol:"https"}}}).catch(e=>{(0,a.Tb)(e,{extra:{message:"Failed to load analytics"}})})),this.analyticsBrowser},this.registerOnConsentChanged=e=>{this.consentChangedCallback=e},this.getCategories=()=>this.preferences,this.loadInitialConsentPreferences=e=>{let t;try{t=u.browserCookieStore.get(r.cn.CONSENT_PREFERENCES)}catch(e){(0,a.Tb)(e,{extra:{message:"Failed to get consent preferences cookie"}})}if(t)try{let e=JSON.parse(t);this.preferences=f.mapConsentPreferences(e)}catch(e){console.warn("Malformed consent preferences cookie",t)}else e||(this.preferences=f.mapConsentPreferences(c.DF))},this.updateCategories=e=>{this.preferences=f.mapConsentPreferences(e),this.consentChangedCallback(this.preferences)},this.wrapAnalyticsWithConsent=e=>(0,s.K)({registerOnConsentChanged:this.registerOnConsentChanged,getCategories:this.getCategories})(e)}}f.mapConsentPreferences=e=>({marketing:e.marketing,analytics:e.analytics,necessary:!0});let m=new f},64720:function(e,t,n){"use strict";n.r(t),n.d(t,{SiftEvents:function(){return i}});var r=n(54603),s=n(7653);let i=()=>{let e=(0,r.usePathname)(),t=(0,s.useRef)(!0);return(0,s.useEffect)(()=>{if(t.current){t.current=!1;return}let e=window._sift;e&&e.push(["_trackPageview"])},[e]),null}},26270:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(27573),s=n(35146),i=n(7653),a=n(82476),o=n.n(a),l=n(80248),c=n(83041),u=n(11492),d=n(16096);let f={disableAutoMetricsLogging:!0,environment:{tier:"production"},api:"https://statsig.anthropic.com/v1/"};function m(e){let{children:t}=e,{statsigClientKey:n}=(0,u.useConfiguration)(),{statsig:i,activeOrganization:a}=(0,d.useCurrentAccount)(),o=(0,d.useHasProSubscription)(),l=(0,d.useHasRaven)(),{data:m}=(0,c.WE)("/api/bootstrap/".concat(null==a?void 0:a.uuid,"/statsig"),{queryKey:[s.eW,null==a?void 0:a.uuid],enabled:!!a,meta:{noToast:!0}}),p=(null==m?void 0:m.user)||(null==i?void 0:i.user);p&&(p.custom={...p.custom,isPro:o,isRaven:l});let g=(null==m?void 0:m.values)||(null==i?void 0:i.values),v=(null==m?void 0:m.values_hash)||(null==i?void 0:i.values_hash);if(p&&(!g||0===Object.keys(g).length))throw Error("no statsig values for user");return(0,r.jsx)(h,{sdkKey:n,user:p,values:g,valuesHash:v,options:f,children:t})}function h(e){let{children:t,sdkKey:n,user:s,options:a,values:c,valuesHash:u}=e,[d,f]=(0,i.useReducer)(e=>e+1,0),m=(0,i.useRef)(!0);(0,i.useState)(()=>l.Statsig.bootstrap(n,c||{},s,a)),(0,i.useEffect)(()=>{if(m.current){m.current=!1,window.__STATSIG_SDK__=l.Statsig,window.__STATSIG_JS_SDK__=o(),window.__STATSIG_RERENDER_OVERRIDE__=()=>{f()};return}s&&c&&(l.Statsig.updateUserWithValues(s,c),f())},[s,c]),(0,i.useEffect)(()=>(l.Statsig.setReactContextUpdater(()=>f()),()=>{l.Statsig.setReactContextUpdater(null)}),[]);let h=l.Statsig.initializeCalled(),p=(0,i.useMemo)(()=>({initialized:!0,statsigPromise:null,userVersion:d,initStarted:h,hooksMemoKey:u||"no_values_hash",updateUser:()=>{}}),[d,h,u]);return(0,r.jsx)(l.StatsigContext.Provider,{value:p,children:t})}},92627:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r=n(23203),s=n.n(r),i=n(7653);let a=(e,t)=>e===window.localStorage?"LSS-".concat(t):"SSS-".concat(t);function o(e,t){return function(e,t,n){let[r,o]=(0,i.useState)(()=>{if(null===e)return n;try{let r=e.getItem(a(e,t));return r?JSON.parse(r):n}catch(e){return console.log(e),n}}),l=(0,i.useRef)(s()(r=>{if(null!==e)try{if(JSON.stringify(r)===JSON.stringify(n)){e.removeItem(a(e,t));return}e.setItem(a(e,t),JSON.stringify(r))}catch(e){console.log(e)}},250)),c=(0,i.useCallback)(()=>{o(n),setTimeout(()=>{null!==e&&(l.current.cancel(),e.removeItem(a(e,t)))},0)},[o,n,e,t]);return(0,i.useEffect)(()=>{l.current(r)},[r]),[r,o,c]}(window.localStorage,e,t)}},5532:function(e,t,n){"use strict";n.r(t),n.d(t,{WorkerUpdater:function(){return l}});var r=n(22616),s=n(7653);let i="undefined"!=typeof navigator&&"serviceWorker"in navigator,a=()=>"workbox"in window&&i?window.workbox:null,o=e=>{(async()=>{try{await e.update()}catch(e){}})()};function l(e){let{updateType:t}=e;return(0,s.useEffect)(()=>{(0,r.yG)()&&i&&(async()=>{let e=await navigator.serviceWorker.getRegistrations();0!==e.length&&(console.warn("Found ".concat(e.length," service worker(s). This was probably from running a production build at this origin. Unregistering.")),e.forEach(e=>void e.unregister()))})()},[]),(0,s.useEffect)(()=>{let e=a();e&&t&&((async()=>{let e=await window.caches.keys();await Promise.all(e.map(e=>caches.delete(e)))})(),o(e))},[t]),(0,s.useEffect)(()=>{let e=a();if(!e)return;let t=window.setInterval(()=>{o(e)},36e5);return()=>{window.clearInterval(t)}},[]),null}},96111:function(e,t,n){"use strict";var r=n(27573),s=n(2715),i=n(47828),a=n(44115),o=n(77997),l=n(7653);let c=(0,i.j)("inline-flex\n  items-center\n  justify-center\n  relative\n  shrink-0\n  ring-offset-2\n  ring-offset-bg-300\n  ring-accent-main-100\n  focus-visible:outline-none\n  focus-visible:ring-1\n  disabled:pointer-events-none\n  disabled:opacity-50\n  disabled:shadow-none\n  disabled:drop-shadow-none",{variants:{variant:{primary:"\n          bg-accent-main-100\n          bg-gradient-to-r\n          from-accent-main-100\n          via-accent-main-200/50\n          to-accent-main-200\n          bg-[length:200%_100%]\n          hover:bg-right\n          active:bg-accent-main-000\n          border-0.5\n          border-border-300\n          text-oncolor-100\n          font-medium\n          font-styrene\n          drop-shadow-sm\n          transition-all\n          shadow-[inset_0_0.5px_0px_rgba(255,255,0,0.15)]\n          [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]\n          active:shadow-[inset_0_1px_6px_rgba(0,0,0,0.2)]\n          hover:from-accent-main-200\n          hover:to-accent-main-200",flat:"bg-accent-main-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-accent-main-200",secondary:"\n          bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))]\n          from-bg-500/10\n          from-50%\n          to-bg-500/30\n          border-0.5\n          border-border-400\n          font-medium\n          font-styrene\n          text-text-100/90\n          transition-colors\n          active:bg-bg-500/50\n          hover:text-text-000\n          hover:bg-bg-500/60",outline:"border-1.5\n          font-medium\n          font-styrene\n          bg-transparent\n          text-text-200\n          transition-colors\n          hover:text-text-100\n          hover:bg-bg-400\n          hover:border-bg-400",ghost:"text-text-200\n          transition-all\n          font-styrene\n          active:bg-bg-400\n          hover:bg-bg-500/40\n          hover:text-text-100",underline:"opacity-80\n          transition-all\n          active:scale-[0.985]\n          hover:opacity-100\n          hover:underline\n          underline-offset-3",danger:"bg-danger-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-danger-200",unstyled:""},size:{default:"h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap",sm:"h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",lg:"h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",icon:"h-9 w-9 rounded-md active:scale-95 shrink-0",icon_sm:"h-8 w-8 rounded-md active:scale-95",icon_lg:"h-11 w-11 rounded-[0.6rem] active:scale-95",inline:"px-0.5 rounded-[0.25rem]",unset:""},option:{rounded:"!rounded-full",prepend:"",append:""},state:{active:""}},compoundVariants:[{size:"default",option:"prepend",class:"pl-2 pr-3 gap-1"},{size:"lg",option:"prepend",class:"pl-2.5 pr-3.5 gap-1"},{size:"sm",option:"prepend",class:" pl-2 pr-2.5 gap-1"},{size:"default",option:"append",class:"pl-3 pr-2 gap-1"},{size:"lg",option:"append",class:"pl-3.5 pr-2.5 gap-1"},{size:"sm",option:"append",class:"pl-2.5 pr-2 gap-1"},{variant:"ghost",state:"active",class:"!bg-bg-400"}],defaultVariants:{variant:"primary",size:"default"}}),u=(0,l.forwardRef)((e,t)=>{let{className:n,variant:i,size:l,option:u,loading:d,href:f,target:m,prepend:h,append:p,state:g,...v}=e;h&&(u="prepend"),p&&(u="append");let x=(0,a.Z)(c({variant:i,size:l,option:u,state:g,className:n}),d&&"text-transparent ![text-shadow:_none]"),b=(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{className:(0,a.Z)("absolute inset-0 flex items-center justify-center",i&&"primary"!==i&&"flat"!==i&&"danger"!==i?"text-text-200":"text-oncolor-100"),children:(0,r.jsx)(s.Z,{size:"sm",inheritColor:!0})}),h,v.children,p]});return f?(0,r.jsx)(o.default,{href:f,target:m||"_self",className:x,"aria-label":v["aria-label"],children:b}):(0,r.jsx)("button",{className:x,ref:t,disabled:v.disabled||d,...v,children:b})});u.displayName="Button",t.Z=u},35046:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(27573),s=n(44115);function i(e){let{className:t,variant:n,...i}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("relative",t),children:[(0,r.jsx)("input",{type:"checkbox",className:"peer sr-only",...i}),(0,r.jsx)("div",{className:(0,s.Z)("border-border-300 peer-focus:ring-offset-bg-300 peer h-5 w-[36px] rounded-full after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-offset-2 peer-disabled:opacity-50 rtl:peer-checked:after:-translate-x-full",a[n||"default"])})]})}let a={default:"\n    bg-bg-500\n    after:border-border-300\n    after:bg-white\n    peer-focus:ring-accent-main-100\n    peer-checked:bg-accent-main-000\n    peer-checked:after:border-white\n    ",secondary:"\n    bg-bg-000\n    border\n    after:border-bg-000\n    after:bg-text-500\n    peer-focus:ring-accent-secondary-100\n    peer-checked:bg-accent-secondary-900\n    peer-checked:after:border-accent-secondary-900\n    peer-checked:after:bg-accent-secondary-100\n    "}},2715:function(e,t,n){"use strict";var r=n(27573),s=n(44115),i=n(7653);t.Z=(0,i.memo)(function(e){let{size:t="md",fullscreen:n=!1,inheritColor:i}=e;return(0,r.jsx)("div",{className:(0,s.Z)(n?"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":"m-auto"),children:(0,r.jsx)("div",{className:(0,s.Z)("sm"===t&&"h-4 w-4 border-2","md"===t&&"h-20 w-20 border-8",i?"border-current":"border-border-200","text-secondary inline-block animate-spin rounded-full border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})})})},99639:function(e,t,n){"use strict";n.r(t),n.d(t,{NotificationContainer:function(){return h},default:function(){return m}});var r=n(58936),s=n(27573),i=n(59374),a=n(92472),o=n(88075),l=n(52976),c=n(54570),u=n(80072);function d(){let e=(0,r._)(["\n  flex\n  justify-end\n  ",'\n  data-[state="closed"]:animate-[fade_200ms_ease-in_forwards]\n  data-[state="closed"]:[animation-direction:reverse]\n  data-[swipe="move"]:translate-x-[var(--radix-toast-swipe-move-x)]\n  data-[swipe="cancel"]:transform-[translate-x_0]\n  data-[swipe="cancel"]:transition-transform\n  data-[swipe="cancel"]:duration-200\n  data-[swipe="cancel"]:ease-out\n  data-[swipe="end"]:animate-[translate-x_100ms_ease-out]\n']);return d=function(){return e},e}let f=e=>{let t,{toast:n,count:r=1}=e,{message:i,toastType:a}=n;switch(a){case"error":t=(0,s.jsxs)("div",{className:"text-danger-100 flex flex-row items-center gap-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o.Q,{size:18})}),(0,s.jsxs)(u.Dx,{className:"flex items-center",children:["string"==typeof i?(0,s.jsx)("p",{children:i}):i,r>1&&(0,s.jsx)("span",{className:"bg-danger-100 text-danger-900 -my-1 ml-2 rounded-full px-2 py-1 text-xs font-bold",children:r})]}),(0,s.jsx)(u.x8,{className:"ml-auto",children:(0,s.jsx)(l.X,{size:18})})]});break;case"success":t=(0,s.jsxs)("div",{className:"text-accent-secondary-100 flex flex-row items-center gap-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)(c.f,{size:18})}),(0,s.jsxs)(u.Dx,{className:"flex items-center",children:["string"==typeof i?(0,s.jsx)("p",{children:i}):i,r>1&&(0,s.jsx)("span",{className:"bg-accent-secondary-100 text-accent-secondary-900 -my-1 ml-2 rounded-full px-2 py-1 text-xs font-bold",children:r})]}),(0,s.jsx)(u.x8,{className:"ml-auto",children:(0,s.jsx)(l.X,{size:18})})]})}return(0,s.jsx)(h,{children:t})};function m(){let{toasts:e,clearToast:t}=(0,i.useToasts)(),n=function(e){let t=new Map;return e.forEach(e=>{var n,r;let s=null!==(r=null===(n=e.message)||void 0===n?void 0:n.toString())&&void 0!==r?r:"",i=t.get(s);i?(i.count+=1,i.toastIds.push(e.id)):t.set(s,{count:1,toast:e,toastIds:[e.id]})}),Array.from(t.values())}(e);return(0,s.jsxs)(u.zt,{swipeDirection:"right",label:"Error",children:[n.map(e=>{let n=e.toastIds.join("-");return(0,s.jsx)(u.fC,{asChild:!0,duration:6500,onOpenChange:n=>{n||setTimeout(()=>{e.toastIds.forEach(t)},200)},children:(0,s.jsx)(p,{isFirst:1===e.toastIds.length,children:(0,s.jsx)(f,{toast:e.toast,count:e.toastIds.length})})},n)}),(0,s.jsx)(u.l_,{className:"fixed right-0 top-0 z-50 flex flex-col gap-4 p-4"})]})}let h=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"justify-self-right bg-bg-100 border-border-300 z-50 flex max-w-lg rounded-xl border shadow-lg",children:(0,s.jsx)("div",{className:"flex flex-row px-3 py-4 text-left text-sm",children:t})})},p=a.Z.li(d(),e=>{let{isFirst:t}=e;return t?'\n    data-[state="open"]:animate-[translate-x_200ms_cubic-bezier(0.16,1,0.3,1)_forwards]\n    data-[state="open"]:[animation-direction:reverse]\n  ':""})},65991:function(e,t,n){"use strict";n.r(t),n.d(t,{ConsentBanner:function(){return b}});var r=n(58936),s=n(27573),i=n(39850),a=n(83243),o=n(96111),l=n(35046),c=n(92472),u=n(23904),d=n(27794),f=n.n(d),m=n(77997),h=n(7653),p=n(25211);function g(){let e=(0,r._)(["\n  fixed right-2 bottom-2 z-[60]\n  max-h-[calc(100vh-1rem)]\n  max-w-[calc(100vw-1rem)] sm:max-w-md\n  rounded-3xl\n  font-styrene\n  bg-bg-500\n  p-4\n  sm:p-8 \n"]);return g=function(){return e},e}function v(){let e=(0,r._)(["text-xl col-span-2 mb-2 sm:mb-4 text-text-000"]);return v=function(){return e},e}function x(){let e=(0,r._)(["text-sm text-text-300 mb-4"]);return x=function(){return e},e}function b(){let{showConsentBanner:e,savePreferences:t,preferences:n}=(0,i.useConsent)(),[r,o]=(0,h.useState)(!1),{theme:l}=(0,u.useTheme)();return e?(0,s.jsx)("div",{children:(0,s.jsxs)(_,{className:"overflow-auto","data-theme":l,"data-mode":"dark",children:[(0,s.jsx)(C,{children:"Cookie settings"}),r?(0,s.jsx)(w,{savePreferences:t,existingPreferences:n}):(0,s.jsx)(y,{acceptAll:()=>t(a.DF),rejectAll:()=>t(a.iw),openCustomOptions:()=>o(!0)})]})}):null}function y(e){let{acceptAll:t,rejectAll:n,openCustomOptions:r}=e,i=(0,p.ac)("(min-width: 640px)");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j,{children:["We use cookies to deliver and improve our services, analyze site usage, and if you agree, to customize or personalize your experience and market our services to you. You can read our Cookie Policy"," ",(0,s.jsx)(m.default,{className:"underline",href:"https://www.anthropic.com/legal/cookies",children:"here"}),"."]}),(0,s.jsxs)("div",{className:"flex grid-cols-3 grid-rows-1 justify-between gap-2 pb-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:pb-0",children:[(0,s.jsx)(o.Z,{size:i?"lg":void 0,variant:"outline",className:"col-span-1 grow sm:col-span-2",onClick:r,children:(0,s.jsxs)("span",{className:"text-center",children:[(0,s.jsx)("span",{className:"sm:hidden",children:"Customize"}),(0,s.jsx)("span",{className:"hidden sm:inline",children:"Customize Cookie Settings"})]})}),(0,s.jsxs)(o.Z,{size:i?"lg":void 0,variant:"outline",className:"col-span-1 grow sm:col-span-1",onClick:n,children:["Reject\xa0",(0,s.jsx)("span",{className:"hidden sm:inline",children:"All Cookies"})]}),(0,s.jsxs)(o.Z,{size:i?"lg":void 0,className:"col-span-1 grow sm:col-span-1",onClick:t,children:["Accept\xa0",(0,s.jsx)("span",{className:"hidden sm:inline",children:" All Cookies"})]})]})]})}function w(e){let{savePreferences:t,existingPreferences:n}=e,[r,i]=(0,h.useState)(n);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{children:"Our website uses cookies to distinguish you from other users of our website. This helps us provide you with a more personalized experience when you browse our website and also allows us to improve our site. Cookies may collect information that is used to tailor ads shown to you on our website and other websites. The information might be about you, your preferences or your device. The information does not usually directly identify you, but it can give you a more personalized web experience. You can choose not to allow some types of cookies."}),(0,s.jsxs)("ul",{className:"mb-8 flex flex-col gap-2",children:[(0,s.jsx)(k,{id:"necessary",name:"Necessary",required:!0,description:"Enables security and basic functionality.",checked:!0,setPreference:f()}),(0,s.jsx)(k,{id:"analytics",name:"Analytics",required:!1,description:"Enables tracking of site performance.",checked:r.analytics,setPreference:e=>i(t=>({...t,analytics:e}))}),(0,s.jsx)(k,{id:"marketing",name:"Marketing",required:!1,description:"Enables ads personalization and tracking.",checked:r.marketing,setPreference:e=>i(t=>({...t,marketing:e}))})]}),(0,s.jsx)(o.Z,{size:"lg",className:"w-full",onClick:()=>t(r),children:"Save preferences"})]})}let _=c.Z.div(g()),C=c.Z.h3(v()),j=c.Z.p(x());function k(e){let{id:t,name:n,required:r,description:i,checked:a,setPreference:o}=e;return(0,s.jsx)("li",{className:"bg-bg-300 rounded-lg p-3",children:(0,s.jsxs)("label",{className:"flex justify-between gap-2",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("h6",{className:"text-text-000 text-xs",children:n}),(0,s.jsx)("p",{className:"text-text-500 text-xs",children:i})]}),(0,s.jsxs)("div",{className:"flex gap-2 self-center",children:[(0,s.jsx)("span",{className:"text-text-000 self-center text-xs",children:r?"Required":a?"On":"Off"}),(0,s.jsx)(l.Z,{disabled:r,checked:a,onChange:()=>o(!a)})]})]})},t)}},92472:function(e,t,n){"use strict";var r=n(44115),s=n(7653);function i(e){return function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];let o=t.map(e=>e.replace(/\n/g,"").trim()),l=s.forwardRef((t,n)=>{let{className:a,...l}=t,c=i.map(e=>"function"==typeof e?e(t):e);return s.createElement(e,{...l,ref:n,className:(0,r.Z)(o,c,"string"==typeof a?a:"")})});return l.displayName="string"==typeof e?e:e.displayName,l}}function a(e){return i(e)}a.a=i("a"),a.aside=i("aside"),a.button=i("button"),a.main=i("main"),a.div=i("div"),a.form=i("form"),a.nav=i("nav"),a.fieldset=i("fieldset"),a.header=i("header"),a.h1=i("h1"),a.h2=i("h2"),a.h3=i("h3"),a.h4=i("h4"),a.h5=i("h5"),a.th=i("th"),a.td=i("td"),a.input=i("input"),a.label=i("label"),a.p=i("p"),a.section=i("section"),a.span=i("span"),a.li=i("li"),t.Z=a},23904:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return u},useTheme:function(){return p}});var r=n(27573),s=n(23532),i=n(92627),a=n(14983),o=n(7653);let l="(prefers-color-scheme: dark)",c=(0,o.createContext)(void 0);function u(e){let{pathTheme:t,initialTheme:n,children:a}=e,[u,m]=(0,o.useState)(n),h=(0,s.useCookies)(),[p,g]=(0,i.R)("userThemeMode","auto");(0,o.useEffect)(()=>{d(t)},[t]),(0,o.useEffect)(()=>d(u),[u]),(0,o.useEffect)(()=>f(p,h),[h,p]);let v=(0,o.useCallback)(()=>f(p,h),[h,p]);return(0,o.useEffect)(()=>{if("auto"!==p)return;let e=window.matchMedia(l);return e.addEventListener("change",v),()=>e.removeEventListener("change",v)},[p,v]),(0,r.jsx)(c.Provider,{value:{theme:u,mode:p,setMode:g,setTheme:m},children:a})}let d=e=>{"undefined"!=typeof document&&(document.documentElement.dataset.theme=e,m())},f=(e,t)=>{if("undefined"==typeof document)return;let n=h(e);t.set(a.cn.COLOR_MODE,n),document.documentElement.dataset.mode=n,m()},m=()=>{let[e,t,n]=getComputedStyle(document.documentElement).getPropertyValue("--bg-200").split(" "),r="hsl(".concat(e,",").concat(t,",").concat(n,")"),s=document.querySelector('meta[name="theme-color"]');s||((s=document.createElement("meta")).setAttribute("name","theme-color"),document.head.appendChild(s)),s.setAttribute("content",r)},h=e=>{var t;return"auto"!==e?e:(null===(t=window)||void 0===t?void 0:t.matchMedia(l).matches)?"dark":"light"},p=()=>{let e=(0,o.useContext)(c);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},22616:function(e,t,n){"use strict";n.d(t,{yG:function(){return r}}),n(68571);let r=()=>!1},61464:function(){}},function(e){e.O(0,[248,5319,3040,7992,3528,6895,5495,9329,3055,8303,8494,1293,1362,8114,1744],function(){return e(e.s=31489)}),_N_E=e.O()}]);