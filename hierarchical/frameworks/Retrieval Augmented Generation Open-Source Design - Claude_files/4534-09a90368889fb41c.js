"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4534],{37076:function(e,n,t){t.d(n,{ER:function(){return u},Kf:function(){return a},u3:function(){return o}});var r=t(83041),i=t(16096),s=t(35146),l=t(84983);let a=e=>{let{projectUuid:n}=e,{activeOrganization:t}=(0,i.useCurrentAccount)(),l=null==t?void 0:t.uuid,{data:a,...o}=(0,r.WE)("/api/organizations/".concat(l,"/projects/").concat(n,"/docs"),{queryKey:[s.zy,{orgUuid:l,projectUuid:n}],enabled:!!t&&!!n}),u=a;return a&&(u=a.filter(e=>{let{file_name:n,content:t}=e;return n.length>0&&t.length>0})),{data:u,...o}},o=e=>{let{projectUuid:n}=e,{activeOrganization:t}=(0,i.useCurrentAccount)(),a=null==t?void 0:t.uuid,o=(0,l.useQueryClient)();return(0,r.uC)(()=>"/api/organizations/".concat(a,"/projects/").concat(n,"/docs"),"POST",{onSuccess:()=>{o.invalidateQueries([s.zy,{orgUuid:a,projectUuid:n}]),o.invalidateQueries([s.n$,{orgUuid:a}]),o.invalidateQueries([s.VH,{orgUUID:a}])}})},u=e=>{let{projectUuid:n,docUuid:t}=e,{activeOrganization:a}=(0,i.useCurrentAccount)(),o=null==a?void 0:a.uuid,u=(0,l.useQueryClient)();return(0,r.uC)(()=>"/api/organizations/".concat(o,"/projects/").concat(n,"/docs/").concat(t),"DELETE",{onSuccess:()=>{u.invalidateQueries([s.tt,{orgUuid:o,projectUuid:n,docUuid:t}]),u.invalidateQueries([s.zy,{orgUuid:o,projectUuid:n}]),u.invalidateQueries([s.n$,{orgUuid:o}]),u.invalidateQueries([s.VH,{orgUUID:o}])}})}},80726:function(e,n,t){t.d(n,{Gm:function(){return b},Kn:function(){return j},O3:function(){return f},Qs:function(){return p},Yc:function(){return h},bQ:function(){return x},dY:function(){return g},iR:function(){return v},u0:function(){return m}});var r=t(94354),i=t(83041),s=t(16096),l=t(28648),a=t(35146),o=t(84983),u=t(99733),c=t.n(u),d=t(7653);let f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:!0},{activeOrganization:n}=(0,s.useCurrentAccount)(),t=null==n?void 0:n.uuid;return(0,i.WE)("/api/organizations/".concat(t,"/projects"),{queryKey:[a.gi,{orgUuid:t}],enabled:!!n&&e.enabled,select:e=>e.filter(e=>!e.archived_at)})},x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:!0},{data:n,isLoading:t}=f({enabled:e.enabled});return{data:null==n?void 0:n.filter(e=>e.is_starred),isLoading:t}},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:!0},{data:n,isLoading:t}=(0,r.QR)(),{data:i,isLoading:s}=f({enabled:e.enabled});return(0,d.useMemo)(()=>{if(t||s)return{data:i,isLoading:!0};if(!i||!n)return{data:i,isLoading:!1};let e=i.map(e=>({...e,lastConversation:null==n?void 0:n.find(n=>n.project_uuid===e.uuid)})).filter(e=>e.lastConversation).sort((e,n)=>new Date(n.lastConversation.created_at).getTime()-new Date(e.lastConversation.created_at).getTime()),r=null==i?void 0:i.filter(n=>!e.find(e=>e.uuid===n.uuid));return{data:[...e,...r],isLoading:!1}},[i,n,t,s])},h=e=>{let{projectUuid:n}=e,{activeOrganization:t}=(0,s.useCurrentAccount)(),r=null==t?void 0:t.uuid;return(0,i.WE)("/api/organizations/".concat(r,"/projects/").concat(n),{queryKey:[a.$T,{orgUuid:r,projectUuid:n}],enabled:!!t&&!!n,meta:{noToast:e=>e instanceof l.Hx&&404===e.statusCode}})},p=()=>{let{activeOrganization:e}=(0,s.useCurrentAccount)(),n=null==e?void 0:e.uuid,t=(0,o.useQueryClient)();return(0,i.uC)(()=>"/api/organizations/".concat(n,"/projects"),"POST",{onSuccess:()=>{t.invalidateQueries([a.gi,{orgUuid:n}]),t.invalidateQueries([a.n$,{orgUuid:n}])}})},g=e=>{let{projectUuid:n}=e,{activeOrganization:t}=(0,s.useCurrentAccount)(),r=null==t?void 0:t.uuid,l=b();return(0,i.Ne)(()=>"/api/organizations/".concat(r,"/projects/").concat(n),"PUT",(e,n)=>n?{...n,...e}:void 0,{onSuccess:()=>{l(n)},queryKey:[a.$T,{orgUuid:r,projectUuid:n}]})},v=e=>{let{projectUuid:n}=e,{activeOrganization:t}=(0,s.useCurrentAccount)(),r=null==t?void 0:t.uuid;return(0,i.WE)("/api/organizations/".concat(r,"/projects/").concat(n,"/conversations"),{queryKey:[a.lx,{orgUuid:r,projectUuid:n}],enabled:!!t,select:e=>c()(e,e=>new Date(e.updated_at)).reverse()})},j=()=>{var e,n;let t=f(),r=null===(n=t.data)||void 0===n?void 0:null===(e=n.find(e=>e.is_starter_project))||void 0===e?void 0:e.uuid;return{...t,data:r}},b=()=>{let{activeOrganization:e}=(0,s.useCurrentAccount)(),n=null==e?void 0:e.uuid,t=(0,o.useQueryClient)();return e=>{t.invalidateQueries([a.$T,{orgUuid:n,projectUuid:e}]),t.invalidateQueries([a.gi,{orgUuid:n}]),t.invalidateQueries([a.n$,{orgUuid:n}]),t.invalidateQueries([a.lx,{orgUuid:n,projectUuid:e}])}}},67141:function(e,n,t){t.d(n,{UG:function(){return u},Vq:function(){return f},mo:function(){return c},nR:function(){return d}});var r=t(63041),i=t(16096),s=t(7653),l=t(80248),a=t(37076),o=t(80726);let u=()=>{let{config:e}=(0,l.useConfig)("raven_enabled_features"),n=e.get("projects",!1),t=(0,i.useHasProSubscription)();return((0,i.useHasRaven)()||t)&&n},c=()=>{var e,n;let{config:t}=(0,l.useConfig)("hatch_token_limits"),r=t.get("default",{raven:{hardLimit:19e4}});return Math.round(.9*(null!==(n=null==r?void 0:null===(e=r.raven)||void 0===e?void 0:e.hardLimit)&&void 0!==n?n:19e4))-4e3},d=e=>{let{data:n}=(0,a.Kf)({projectUuid:e}),t=(0,s.useMemo)(()=>(n||[]).map(e=>e.content).join(" "),[n]),i=(0,r.c)(t);return void 0!==n?i:void 0},f=e=>{let{mutate:n}=(0,o.dY)({projectUuid:e}),{data:t}=(0,o.Yc)({projectUuid:e});return()=>{n({is_starred:!(null==t?void 0:t.is_starred)})}}},62467:function(e,n,t){t.d(n,{H9:function(){return a},LT:function(){return r},Rx:function(){return l},hd:function(){return s}});var r,i=t(7653);function s(){l()&&window.claudeAppBindings.toggleDarkMode&&window.claudeAppBindings.toggleDarkMode()}function l(){let e=window.navigator.userAgent.toLowerCase();return/(claude.*electron)/i.test(e)&&window.claudeAppBindings}function a(e,n){(0,i.useEffect)(()=>{if(l())return window.claudeAppBindings.registerBinding(e,n),()=>{window.claudeAppBindings.unregisterBinding(e)}},[e,n])}(r||(r={})).cmdK="cmdK"},33386:function(e,n,t){t.d(n,{Dy:function(){return x},Jh:function(){return d}});var r=t(58936),i=t(27573),s=t(94354),l=t(96111),a=t(92472),o=t(7653);function u(){let e=(0,r._)(["\n  w-full\n  text-left\n  text-sm\n  disabled:pointer-events-none\n  disabled:shadow-none\n  disabled:drop-shadow-none"]);return u=function(){return e},e}let c=e=>{let{data:n}=(0,s.QR)(),[t,r]=(0,o.useState)([]),[i,l]=(0,o.useState)(null),[a,u]=(0,o.useState)([]),{data:c,error:d}=(0,s.hA)(null!=i?i:"");return(0,o.useEffect)(()=>{if(!n)return;if(c&&c.uuid===i)t.some(e=>e.uuid===c.uuid)||r(e=>[...e,c]);else{if(!d)return;u(e=>[...e,i])}let s=n.find(e=>!t.some(n=>n.uuid===e.uuid)&&!a.includes(e.uuid));s?l(s.uuid):e(t)},[c,d,a,i,t,n,e]),{totalConversations:null==n?void 0:n.length,numExported:t.length,numFailed:a.length,startExporting:()=>{n&&n.length&&l(n[0].uuid)}}},d=(0,o.forwardRef)((e,n)=>{let[t,r]=(0,o.useState)(!1),[s,l]=(0,o.useState)(null),{totalConversations:a,numExported:u,numFailed:d,startExporting:x}=c(e=>{r(!1),l(JSON.stringify(e,null,2))});return t?(0,i.jsxs)(f,{ref:n,disabled:!0,...e,children:["Exporting: ",u," / ",a,d>0&&" (".concat(d," failed)")]}):s?(0,i.jsx)(f,{ref:n,...e,onClick:()=>{let e=new Blob([s],{type:"application/json"}),n=URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.download="conversations.json",t.click()},children:"Download Conversations"}):(0,i.jsx)(f,{ref:n,...e,onClick:()=>{r(!0),x()},children:"Export all conversations"})});d.displayName="ExportConversationsWidget";let f=a.Z.button(u()),x=e=>{let{conversationUUID:n}=e,{data:t}=(0,s.Rq)(n);return(0,i.jsx)(l.Z,{variant:"outline",size:"sm",onClick:()=>{let e=JSON.stringify(t,null,2),n=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="conversation.json",i.click()},children:"Download Conversation"})}},18256:function(e,n,t){t.d(n,{F:function(){return W},I:function(){return D}});var r=t(58936),i=t(27573),s=t(31271),l=t(6700),a=t(11492),o=t(39850),u=t(16096),c=t(53445),d=t(51722),f=t(96111),x=t(98426),m=t(92472),h=t(92946),p=t(24566),g=t(24412),v=t(55231),j=t(77350),b=t(53856),w=t(41070),C=t(44115),y=t(99733),_=t.n(y),N=t(77997),z=t(54603),Z=t(7653),k=t(80248),A=t(23904),P=t(57780),S=t(60163),E=t(88521),T=t(62467),L=()=>{let{mode:e,setMode:n}=(0,A.useTheme)();return(0,Z.useEffect)(()=>{(0,T.hd)()},[e]),(0,i.jsxs)(x.Vy,{children:[(0,i.jsxs)(x.WR,{className:"text-sm",children:["Appearance ",(0,i.jsx)(p.T,{size:16})]}),(0,i.jsx)(x.nI,{children:(0,i.jsxs)(x.A2,{sideOffset:4,children:[(0,i.jsxs)(x.hP,{onSelect:()=>n("auto"),children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 pr-4 text-sm",children:[(0,i.jsx)(P.u,{size:16})," System"]}),"auto"===e?(0,i.jsx)(j.J,{size:16}):(0,i.jsx)("div",{className:"h-4 w-4"})]}),(0,i.jsxs)(x.hP,{onSelect:()=>n("light"),children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,i.jsx)(S.k,{size:16})," Light"]}),"light"===e?(0,i.jsx)(j.J,{size:16}):(0,i.jsx)("div",{className:"h-4 w-4"})]}),(0,i.jsxs)(x.hP,{onSelect:()=>n("dark"),children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,i.jsx)(E.J,{size:16})," Dark"]}),"dark"===e?(0,i.jsx)(j.J,{size:16}):(0,i.jsx)("div",{className:"h-4 w-4"})]})]})})]})},O=t(33386);function Q(){let e=(0,r._)(["fixed top-2.5 right-3.5 z-10 flex flex-row items-center gap-2"]);return Q=function(){return e},e}function R(){let e=(0,r._)(["\n  border\n  border-accent-pro-200\n  bg-accent-pro-900\n  rounded-lg\n  mt-1\n  mb-2\n  mx-2\n  py-2\n  px-3\n"]);return R=function(){return e},e}function D(e){var n;let{className:t,showClaudiaVersion:r,onOpenChange:s}=e,{track:m}=(0,l.z$)(),{account:v}=(0,u.useCurrentAccount)(),{openConsentBanner:j}=(0,o.useConsent)(),b=null==v?void 0:v.memberships.map(e=>e.organization),w=null==b?void 0:b.some(e=>e.capabilities.includes("api")),C=Object.keys(null===(n=(0,k.useConfig)("fp_menu").config)||void 0===n?void 0:n.get("features",{})).length>0,{openModal:y}=(0,c.h)(),_=(0,a.useConfiguration)(),{value:z}=(0,k.useGate)("conversation_export"),Z=(0,u.useHasRaven)(),A=r?(0,i.jsxs)(f.Z,{variant:"unstyled",size:"unset",className:"border-0.5 border-border-300 hover:border-border-200 group relative z-[1] w-full overflow-hidden rounded-lg !px-2.5 !py-2 !text-left","data-testid":"user-menu-button",children:[(0,i.jsx)("div",{className:"from-bg-500/0 to-bg-500/40 absolute inset-0 bg-gradient-to-b opacity-70 transition-opacity group-hover:opacity-100"}),(0,i.jsxs)("div",{className:"relative z-[5] flex w-full items-center gap-1.5",children:[(0,i.jsx)(d.Z,{account:v,size:"sm"}),(0,i.jsx)("div",{className:"min-w-0 flex-1 truncate text-sm",children:null==v?void 0:v.email_address}),(0,i.jsx)(h.p,{size:12})]})]}):(0,i.jsx)(f.Z,{type:"button",variant:"unstyled",size:"icon_lg",option:"rounded",className:t,"data-testid":"user-menu-button",children:(0,i.jsx)(d.Z,{account:v,size:"lg"})});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Lt,{matchTriggerWidth:r,align:"end",unstyledTrigger:!0,trigger:A,onOpenChange:e=>{null==s||s(e)},className:"w-72",children:[(0,i.jsx)(M,{}),C&&(0,i.jsx)(x.hP,{onSelect:()=>{m({event_key:"claudeai.settings.preview_feature.opened"}),y()},className:"text-sm",children:"Feature Preview"}),(0,i.jsx)(x.u2,{}),(0,i.jsxs)(x.Vy,{children:[(0,i.jsxs)(x.WR,{className:"text-sm",children:["Learn more ",(0,i.jsx)(p.T,{size:16})]}),(0,i.jsx)(x.nI,{children:(0,i.jsxs)(x.A2,{sideOffset:4,children:[(0,i.jsx)(F,{name:"About Anthropic",path:"/"}),(0,i.jsx)(x.u2,{}),!Z&&(0,i.jsx)(F,{name:"Consumer Terms",path:"/legal/consumer-terms"}),(0,i.jsx)(F,{name:"Usage Policy",path:"/legal/aup"}),(0,i.jsx)(F,{name:"Privacy Policy",path:"/legal/privacy"}),(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsx)("button",{className:"w-full text-left text-sm",onClick:j,children:"Your Privacy Choices"})})]})})]}),w&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsxs)(N.default,{href:_.consoleAbsoluteUrl,target:"_blank",className:"text-sm",children:["API Console ",(0,i.jsx)(g.O,{})]})})}),(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsxs)(N.default,{href:"https://support.anthropic.com/",target:"_blank",className:"text-sm",onClick:()=>{m({event_key:"claudeai.support.opened"})},children:["Help & Support ",(0,i.jsx)(g.O,{})]})}),(0,i.jsx)(x.u2,{}),z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsx)(O.Jh,{})}),(0,i.jsx)(x.u2,{})]}),(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsx)(N.default,{href:"/logout",className:"text-sm",children:"Log out"})})]})," "]})}let M=()=>{let{account:e}=(0,u.useCurrentAccount)(),n=(0,Z.useMemo)(()=>{var n;return null!==(n=null==e?void 0:e.memberships.map(e=>e.organization))&&void 0!==n?n:[]},[e]),t=(0,Z.useMemo)(()=>_()(n.filter(e=>e.capabilities.includes("chat")),e=>!e.capabilities.includes("raven"),"name"),[n]),r=t.some(e=>e.capabilities.includes("raven"));return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex justify-between px-2 pb-2 pt-1",children:(0,i.jsx)("span",{className:"text-text-500 overflow-hidden overflow-ellipsis text-sm",children:null==e?void 0:e.email_address})}),t.map(e=>(0,i.jsx)(U,{org:e,hasTeam:r},e.uuid)),(0,i.jsx)(H,{orgs:t}),(0,i.jsx)(x.u2,{}),(0,i.jsx)(x.hP,{asChild:!0,"data-testid":"user-menu-settings",children:(0,i.jsx)(N.default,{href:"/settings/profile",className:"text-sm",children:"Settings"})}),(0,i.jsx)(L,{})]})})},U=e=>{let{org:n,hasTeam:t}=e,{switchAndRefresh:r}=(0,s.z6)(),{activeOrganization:l}=(0,u.useCurrentAccount)(),a=(0,z.usePathname)(),o=n.capabilities.includes("raven")?"Team":n.capabilities.includes("claude_pro")?"Pro":"Free",c=n.uuid===(null==l?void 0:l.uuid),d="Team"===o?n.name:"Personal",f=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(V,{org:n}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-text-100 text-sm",children:d}),(0,i.jsxs)("div",{className:"text-xs",children:[(0,i.jsxs)("span",{className:"text-text-300",children:[o," plan"]}),"Free"===o&&c&&t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.o,{size:12,className:"inline"}),(0,i.jsx)(N.default,{href:"/upgrade",className:"text-accent-pro-100 hover font-medium transition-all",children:"Upgrade"})]})]})]})]}),n.uuid===(null==l?void 0:l.uuid)&&(0,i.jsx)(j.J,{weight:"bold",className:"text-accent-main-100 h-4 w-4"})]});return c?(0,i.jsx)(x.AZ,{children:f}):(0,i.jsx)(x.hP,{onSelect:()=>{a.startsWith("/chat/")?r(n.uuid,"/chats"):r(n.uuid)},children:f})},V=e=>{let{org:n}=e,t=n.capabilities.includes("raven")||n.capabilities.includes("claude_pro")?"bg-accent-pro-100":"bg-text-400",r=n.capabilities.includes("raven")?(0,i.jsx)(b.$,{size:16}):(0,i.jsx)(w.n,{size:16});return(0,i.jsx)("div",{className:(0,C.Z)(t,"text-oncolor-100 flex h-7 w-7 items-center justify-center rounded-full"),children:r})},F=e=>{let{name:n,path:t}=e,{websiteBaseUrl:r}=(0,a.useConfiguration)();return(0,i.jsx)(x.hP,{asChild:!0,children:(0,i.jsxs)(N.default,{href:"".concat(r).concat(t),target:"_blank",className:"text-sm",children:[n,(0,i.jsx)(g.O,{})]})})},W=m.Z.div(Q()),H=e=>{let{orgs:n}=e,t=(0,s.zW)(),r=(0,Z.useMemo)(()=>n.some(e=>e.capabilities.includes("claude_pro")),[n]);if(n.some(e=>e.capabilities.includes("raven"))||r&&t)return null;let l="Get more from Claude with Pro or Team plans.",a="Upgrade Plan ";return r&&(l="Claude's better with your teammates.",a="Add Team Plan"),(0,i.jsxs)(K,{children:[(0,i.jsx)("p",{className:"text-text-300 text-sm",children:l}),(0,i.jsx)(N.default,{href:"/upgrade",className:"text-accent-pro-000 text-sm font-medium",children:a})]})},K=m.Z.div(R())},63041:function(e,n,t){t.d(n,{c:function(){return i}});var r=t(7653);function i(e){let{skip:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[i,s]=(0,r.useState)(0),l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!n){if(!l.current){if("undefined"==typeof Worker)return;let e=new Worker(t.tu(new URL(t.p+t.u(1188),t.b)));e.onmessage=e=>s(e.data),l.current=e}return()=>{var e;null===(e=l.current)||void 0===e||e.terminate(),l.current=null}}},[n]),(0,r.useEffect)(()=>{l.current&&l.current.postMessage(e)},[e]),i}},53445:function(e,n,t){t.d(n,{b:function(){return o},h:function(){return u}});var r=t(27573),i=t(27794),s=t.n(i),l=t(7653);let a=(0,l.createContext)({isOpen:!1,openModal:s(),closeModal:s()}),o=e=>{let{children:n}=e,[t,i]=(0,l.useState)(!1);return(0,r.jsx)(a.Provider,{value:{isOpen:t,openModal:()=>i(!0),closeModal:()=>i(!1)},children:n})},u=()=>(0,l.useContext)(a)},51722:function(e,n,t){var r=t(27573),i=t(16096),s=t(41070),l=t(44115);n.Z=e=>{var n,t,a;let{name:o,account:u,size:c="md"}=e,d=(null!==(a=null!==(t=null!==(n=null!=o?o:null==u?void 0:u.full_name)&&void 0!==n?n:null==u?void 0:u.display_name)&&void 0!==t?t:null==u?void 0:u.email_address)&&void 0!==a?a:"").split(" ").map(e=>0===e.length?"":e[0]).join("").substring(0,2).toLocaleUpperCase(),f=(0,i.useHasProSubscription)();return(0,r.jsx)("div",{className:(0,l.Z)("flex shrink-0 items-center justify-center rounded-full font-bold",{"h-4 w-4 text-[7px]":"xs"===c,"h-7 w-7 text-[12px]":"sm"===c,"h-8 w-8 text-[14px]":"md"===c,"h-10 w-10 text-lg":"lg"===c,"h-16 w-16 text-2xl":"xl"===c,"bg-text-200 text-bg-100":!f,"bg-accent-pro-100 text-oncolor-100":f}),children:d||(0,r.jsx)(s.n,{weight:(0,l.Z)({regular:"xs"===c||"sm"===c,light:"md"===c,thin:"lg"===c||"xl"===c}),size:(0,l.Z)({12:"xs"===c||"sm"===c,20:"md"===c,40:"lg"===c||"xl"===c})})})}},98426:function(e,n,t){t.d(n,{A2:function(){return y},AZ:function(){return w},Lt:function(){return h},Vy:function(){return v},WR:function(){return C},hP:function(){return b},nI:function(){return j},u2:function(){return _}});var r=t(58936),i=t(27573),s=t(92472),l=t(30763);function a(){let e=(0,r._)(["\n  z-50\n  bg-bg-300\n  border-0.5\n  border-border-300\n  backdrop-blur-xl\n  rounded-lg\n  min-w-[8rem]\n  overflow-hidden\n  p-1\n  text-text-200\n  shadow-element\n"]);return a=function(){return e},e}function o(){let e=(0,r._)(["\n  rounded\n  py-1\n  px-2\n  max-w-full\n  whitespace-nowrap\n  text-ellipsis\n  overflow-hidden\n  outline-none\n  ring-offset-2\n  ring-offset-bg-300\n  ring-accent-main-100\n  focus-visible:outline-none\n  focus-visible:ring-1\n  focus:backdrop-blur-xl\n  hover:backdrop-blur-xl\n  hover:bg-bg-400/50\n"]);return o=function(){return e},e}function u(){let e=(0,r._)(["text-text-500 pt-1 px-2"]);return u=function(){return e},e}function c(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded-md\n  cursor-pointer\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  grid\n  grid-cols-[minmax(0,_1fr)_auto]\n  gap-2\n  items-center\n  outline-none\n  select-none\n  [&[data-highlighted]]:bg-bg-400\n  [&[data-highlighted]]:text-text-000\n  ","\n"]);return c=function(){return e},e}function d(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded-md\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  flex\n  justify-between\n  gap-2\n  items-center\n"]);return d=function(){return e},e}function f(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded\n  cursor-pointer\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  grid\n  grid-cols-[minmax(0,_1fr)_auto]\n  gap-2\n  items-center\n  outline-none\n  select-none\n  [&[data-highlighted]]:bg-bg-500\n  [&[data-highlighted]]:text-text-000\n"]);return f=function(){return e},e}function x(){let e=(0,r._)(["\n  z-50\n  bg-bg-300\n  border-0.5\n  border-border-300\n  backdrop-blur-xl\n  rounded-lg\n  min-w-[8rem]\n  overflow-hidden\n  p-1\n  text-text-200\n  shadow-element\n"]);return x=function(){return e},e}function m(){let e=(0,r._)(["\n  h-[0.5px]\n  bg-border-300\n  m-1\n"]);return m=function(){return e},e}function h(e){var n;let{trigger:t,children:r,unstyledTrigger:s=!1,matchTriggerWidth:a=!1,onOpenChange:o,...u}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.fC,{onOpenChange:o,children:[s?(0,i.jsx)(l.xz,{asChild:!0,children:t}):(0,i.jsx)(g,{asChild:!0,children:t}),(0,i.jsx)(l.Uv,{children:(0,i.jsx)(p,{style:a?{width:"var(--radix-dropdown-menu-trigger-width)"}:void 0,sideOffset:null!==(n=u.sideOffset)&&void 0!==n?n:4,...u,children:r})})]})})}t(7653);let p=(0,s.Z)(l.VY)(a()),g=(0,s.Z)(l.xz)(o());l.Qk;let v=l.Tr,j=l.Uv;(0,s.Z)(l.Ju)(u());let b=(0,s.Z)(l.ck)(c(),e=>{let{disabled:n}=e;return n&&"\n    opacity-50\n    pointer-events-none\n  "}),w=s.Z.div(d()),C=(0,s.Z)(l.fF)(f()),y=(0,s.Z)(l.tu)(x()),_=(0,s.Z)(l.VD)(m())},23285:function(e,n,t){t.d(n,{ZP:function(){return p},dm:function(){return x},mH:function(){return m}});var r=t(58936),i=t(27573),s=t(52976),l=t(7472),a=t(44115),o=t(7653),u=t(92472),c=t(96111);function d(){let e=(0,r._)(['\n  fixed\n  z-50\n  inset-0\n  grid\n  items-center\n  justify-items-center\n  bg-black\n  bg-opacity-50\n  backdrop-brightness-75\n  overflow-y-auto\n  md:p-10\n  p-4\n  data-[state="open"]:animate-[fade_250ms_ease-in_forwards]\n  data-[state="closed"]:animate-[fade_125ms_ease-out_reverse_forwards]\n']);return d=function(){return e},e}function f(){let e=(0,r._)(['\n  focus:outline-none\n  relative\n  text-text-100\n  text-left\n  shadow-xl\n  border-0.5\n  border-border-300\n  rounded-2xl\n  md:p-6\n  p-4\n  align-middle\n  data-[state="open"]:animate-[zoom_250ms_ease-in_forwards]\n  data-[state="closed"]:animate-[zoom_125ms_ease-out_reverse_forwards]\n']);return f=function(){return e},e}function x(e){let{children:n,layout:t="right"}=e;return(0,i.jsx)("div",{className:(0,a.Z)("mt-4 flex flex-col gap-2","left"===t&&"sm:flex-row","center"===t&&"justify-center sm:flex-row","right"===t&&"sm:flex-row-reverse","between"===t&&"justify-between sm:flex-row"),children:n})}function m(e){let{...n}=e;return(0,i.jsx)(c.Z,{...n})}function h(e){let{onClose:n}=e;return(0,i.jsx)("button",{className:"text-text-500 hover:text-text-400 hover:bg-bg-300 -ml-2 rounded-full px-2 py-2 transition-colors",onClick:()=>n(),children:(0,i.jsx)(s.X,{color:"currentColor",size:20})})}function p(e){let{title:n,subtitle:t,isOpen:r,className:s,children:u,onClose:c,icon:d,modalSize:f="md",backgroundColor:x,autoCloseOnFocusOut:m=!0,fullWidth:p=!0,hasCloseButton:j=!1,prependBeforeCloseButton:b}=e,[w,C]=(0,o.useState)(!1);(0,o.useEffect)(()=>{C(!0)},[]);let y=e=>{m||e.preventDefault()},[_,N]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{if(r)N(!0);else{let e=window.setTimeout(()=>{N(!1)},125);return setTimeout(()=>{document.body.style.pointerEvents="auto"},300),()=>{window.clearTimeout(e)}}},[r]),w)?(0,i.jsx)(l.fC,{open:r,onOpenChange:e=>{e||c()},children:_&&(0,i.jsx)(l.h_,{forceMount:!0,children:(0,i.jsx)(g,{forceMount:!0,children:(0,i.jsx)(v,{forceMount:!0,onOpenAutoFocus:e=>e.preventDefault(),onInteractOutside:y,onEscapeKeyDown:y,className:(0,a.Z)("min-w-0",s,p&&"w-full","sm"===f&&"max-w-sm","md"===f&&"max-w-md","lg"===f&&"max-w-lg","xl"===f&&"max-w-3xl","3xl"===f&&"max-w-6xl",null!=x?x:"bg-bg-200"),children:(0,i.jsxs)("div",{className:"flex min-h-0 flex-col",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[n&&(0,i.jsxs)(l.Dx,{className:"font-styrene-display text-text-100 flex items-center text-lg font-medium leading-6",children:[d&&(0,i.jsx)("span",{className:"mr-2",children:d}),n]}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[b,j&&(0,i.jsx)(h,{onClose:c})]})]}),t&&(0,i.jsx)("p",{className:"text-text-400 mb-2 text-sm",children:t}),u]})})})})}):null}let g=(0,u.Z)(l.aV)(d()),v=(0,u.Z)(l.VY)(f())},84095:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(58936),i=t(27573),s=t(92472),l=t(35373),a=t(44115);function o(){let e=(0,r._)(["\n  px-2\n  py-1\n  text-xs\n  font-medium\n  font-sans\n  leading-tight\n  rounded-md\n  shadow-md\n  text-white\n  bg-black/80\n  backdrop-blur\n  break-words\n  z-50\n  max-w-[13rem]\n  [*:disabled_&]:hidden\n"]);return o=function(){return e},e}function u(e){let{children:n,tooltipContent:t,side:r="top",className:s,...o}=e;return(0,i.jsx)(l.zt,{delayDuration:0,children:(0,i.jsxs)(l.fC,{...o,children:[(0,i.jsx)(l.xz,{asChild:!0,children:n}),(0,i.jsx)(l.h_,{children:(0,i.jsx)(c,{className:(0,a.Z)(s,!t&&"hidden"),sideOffset:5,side:r,children:t})})]})})}let c=(0,s.Z)(l.VY)(o())},18698:function(e,n,t){var r=t(27573);n.Z=e=>{let{height:n,className:t}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 139 34",className:t,height:n,fill:"currentColor","aria-label":"Claude",children:(0,r.jsx)("path",{d:"M18.07 30.79c-5.02 0-8.46-2.8-10.08-7.11a19.2 19.2 0 0 1-1.22-7.04C6.77 9.41 10 4.4 17.16 4.4c4.82 0 7.78 2.1 9.48 7.1h2.06l-.28-6.9c-2.88-1.86-6.48-2.81-10.87-2.81-6.16 0-11.41 2.77-14.34 7.74A16.77 16.77 0 0 0 1 18.2c0 5.53 2.6 10.42 7.5 13.15a17.51 17.51 0 0 0 8.74 2.06c4.78 0 8.57-.91 11.93-2.5l.87-7.62h-2.1c-1.26 3.48-2.76 5.57-5.25 6.68-1.22.55-2.76.83-4.62.83Zm21.65-26.4.2-3.39H38.5l-6.33 1.9v1.02l2.8 1.3v23.79c0 1.62-.82 1.98-3 2.25V33h10.75v-1.74c-2.17-.27-3-.63-3-2.25V4.4Zm42.75 29h.83l7.27-1.38v-1.78l-1.03-.07c-1.7-.16-2.13-.52-2.13-1.9V15.58l.2-4.07h-1.15l-6.87.99v1.73l.67.12c1.85.28 2.4.8 2.4 2.1v11.3C80.9 29.13 79.2 30 77.19 30c-2.26 0-3.64-1.15-3.64-3.8V15.58l.2-4.07h-1.19l-6.87.99v1.73l.71.12c1.86.28 2.41.8 2.41 2.1v10.43c0 4.42 2.49 6.52 6.48 6.52 3.04 0 5.53-1.62 7.39-3.88l-.2 3.88Zm-20-14.06c0-5.65-3-7.82-8.4-7.82-4.79 0-8.27 1.97-8.27 5.25 0 1 .36 1.74 1.07 2.25l3.64-.47c-.16-1.1-.24-1.78-.24-2.05 0-1.86.99-2.8 3-2.8 2.97 0 4.47 2.09 4.47 5.44v1.11l-7.51 2.25c-2.49.67-3.91 1.27-4.86 2.65a5 5 0 0 0-.71 2.8c0 3.2 2.21 5.46 5.97 5.46 2.72 0 5.13-1.23 7.23-3.56.75 2.33 1.9 3.56 3.95 3.56 1.66 0 3.16-.68 4.5-1.98l-.4-1.38c-.59.16-1.14.23-1.73.23-1.15 0-1.7-.9-1.7-2.68v-8.26Zm-9.6 10.87c-2.05 0-3.31-1.19-3.31-3.28 0-1.43.67-2.26 2.1-2.73l6.08-1.94v5.85c-1.94 1.46-3.08 2.1-4.86 2.1Zm63.3 1.81v-1.78l-1.02-.07c-1.7-.16-2.14-.52-2.14-1.9V4.4l.2-3.4h-1.42l-6.32 1.9v1.02l2.8 1.3v7.83a8.84 8.84 0 0 0-5.37-1.54c-6.28 0-11.18 4.78-11.18 11.93 0 5.89 3.51 9.96 9.32 9.96 3 0 5.61-1.47 7.23-3.72l-.2 3.72h.83l7.27-1.39Zm-13.15-18.13c3 0 5.25 1.74 5.25 4.94v9a7.2 7.2 0 0 1-5.21 2.1c-4.31 0-6.48-3.4-6.48-7.94 0-5.1 2.48-8.1 6.44-8.1Zm28.52 4.5c-.55-2.64-2.17-4.15-4.42-4.15-3.36 0-5.7 2.53-5.7 6.17 0 5.37 2.85 8.85 7.44 8.85a8.6 8.6 0 0 0 7.38-4.35l1.35.36c-.6 4.66-4.82 8.14-10 8.14-6.08 0-10.27-4.5-10.27-10.9 0-6.45 4.54-11 10.63-11 4.54 0 7.74 2.73 8.77 7.48l-15.84 4.85V21.7l10.66-3.32Z"})})}},92383:function(e,n,t){function r(){return window.innerWidth<640}t.d(n,{V5:function(){return s},r3:function(){return a},tq:function(){return r}});let i=/(macintosh|macintel|macppc|mac68k|macos)/i;function s(){let e=window.navigator.userAgent.toLowerCase();return i.test(e)}let l=/(iphone|ipad|ipod|android|mobile|webos)/i;function a(){let e=window.navigator.userAgent.toLowerCase();return l.test(e)}}}]);