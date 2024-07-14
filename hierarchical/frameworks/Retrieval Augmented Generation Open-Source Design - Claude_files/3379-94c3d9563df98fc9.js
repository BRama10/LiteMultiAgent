"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3379],{93058:function(e,t,n){n.d(t,{xg:function(){return eE},xS:function(){return eN}});var r=n(58936),s=n(27573),i=n(97807),o=n(27551),a=n(81514),l=n(6847),c=n(11496),d=n(87190),u=n(27809),m=n(10075),p=n(67755),x=n(16096),f=n(53445),v=n(91600),h=n(89937),g=n(96111),b=n(84095),j=n(41911),y=n(7653);function w(e){let{children:t,className:n}=e,r=(0,y.useRef)(null),i=(0,y.useRef)(null),[o,a]=(0,y.useState)("auto");(0,y.useEffect)(()=>{var e,t;let n=(null===(e=i.current)||void 0===e?void 0:e.offsetHeight)||0;o!==n?a(n):null===(t=r.current)||void 0===t||t.removeAttribute("style")},[t,o]);let l=0===o?{ease:"easeOut",duration:.1}:{type:"spring",stiffness:1e3,damping:45,mass:1};return(0,s.jsx)(j.E.div,{ref:r,animate:{height:o},transition:l,onAnimationComplete:()=>{setTimeout(()=>{var e;null===(e=r.current)||void 0===e||e.removeAttribute("style")},10)},className:"overflow-hidden",children:(0,s.jsx)("div",{className:n,ref:i,children:t})})}var N=n(92472),C=n(92383),k=n(80054),E=n(55726),S=n(17262),_=n(82032),P=n(94864),D=n(58054),R=n(2280),T=n(29644),F=n(60946),z=n(97747),I=n(72214),Z=n(77331),G=n(44115),O=n(28946),A=n(41196),U=n(70913),L=n(80726),M=n(67141),H=n(96576),V=n(12544),K=n(2715),Y=e=>{let{attachments:t,files:n,onRemoveAttachment:r,onRemoveFile:i,isUploading:o}=e;return(0,s.jsxs)("div",{className:"flex items-end gap-1 overflow-x-auto px-4 pb-3 pt-2.5",children:[t.map((e,t)=>(0,s.jsx)(V.ZP,{file:e,size:"md",onRemoveFile:()=>r(t)},t)),n.map((e,t)=>(0,s.jsx)(V.ZP,{file:e,showWarnings:!0,size:"md",onRemoveFile:()=>i(t)},e.file_uuid)),o&&(0,s.jsx)(j.E.div,{className:"bg-bg-500/10 -mb-1 grid h-20 w-28 place-items-center rounded-lg",initial:{opacity:0,scale:.3},animate:{opacity:1,scale:1},children:(0,s.jsx)(K.Z,{size:"sm"})})]})},q=n(96755),Q=n(6700),W=n(59374),X=n(52976),$=n(16316),B=n(2645),J=n(56646),ee=n(27201),et=n.n(ee);n(21378);var en=n(55191),er=(0,en.$)("dff0026f86ff2c6b8b1e2e1b65fcd53ec4dab4d4"),es=(0,en.$)("180660ddbd0810c00794b3e5c5dddc07793c42c8");let ei={initial:{opacity:0},animate:{opacity:1,transition:{staggerChildren:.05}}},eo={initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1,transition:{type:"spring",stiffness:400,damping:30,mass:1}}};function ea(e){let{setExamplePrompt:t}=e,{account:n}=(0,x.useCurrentAccount)(),{addSuccess:r}=(0,W.useToasts)(),{mutate:i}=(0,q.Ck)(),{data:o,refetch:a,isLoading:l,isRefetching:c}=(0,B.useQuery)({queryKey:["random_examples"],queryFn:()=>er(d),refetchOnWindowFocus:!1}),d=o?o.map(e=>e.id):[],u=(0,y.useMemo)(()=>et()(),[o]),m=l||c;return(0,s.jsxs)("div",{className:"flex flex-col gap-2 pb-1.5 pl-3.5 pr-3 pt-2 md:flex-row",children:[(0,s.jsx)(j.E.div,{variants:ei,initial:"initial",animate:"animate",className:"grid min-h-12 min-w-0 flex-1 gap-2 md:grid-cols-3",children:!m&&(null==o?void 0:o.map((e,n)=>(0,s.jsx)(el,{example:e,setExamplePrompt:t},"".concat(u).concat(n))))},u),(0,s.jsxs)("div",{className:"flex flex-row-reverse justify-start gap-0.5 max-md:mt-2 md:flex-col md:justify-center",children:[(0,s.jsx)(b.Z,{tooltipContent:"Hide suggestions",side:"right",children:(0,s.jsx)(g.Z,{variant:"ghost",size:"unset",className:"text-text-300 h-6 w-6 rounded-md active:scale-90 max-md:ml-2",onClick:()=>{i({...null==n?void 0:n.settings,has_seen_starter_prompts:!0}),r("You can re-enable prompt suggestions in profile settings")},children:(0,s.jsx)(X.X,{size:16})})}),(0,s.jsx)(b.Z,{tooltipContent:"Reload suggestions",side:"right",children:(0,s.jsx)(g.Z,{variant:"ghost",size:"unset",className:"text-text-400 h-6 w-6 rounded-md active:scale-90",disabled:m,onClick:()=>a(),children:(0,s.jsx)($.t,{size:16})})})]})]})}function el(e){let{example:t,setExamplePrompt:n}=e,{track:r}=(0,Q.z$)(),i=(0,c.Po)(),{activeOrganization:o}=(0,x.useCurrentAccount)(),a=async()=>{if(!o||!t.image)return null;let e=await fetch(t.image.image_src),n=await e.blob(),r=new File([n],t.image.filename,{type:"image/jpeg"}),s=await i(r,o.uuid);if(!s)throw Error("Unable to upload file");return s},{mutate:l,isLoading:d}=(0,J.useMutation)({mutationFn:async()=>{r({event_key:"claudeai.conversation.suggestion.applied",suggestion_id:t.id});let[{prompt:e,attachment:s},i]=await Promise.all([es(t.id),a()]),o=null;s&&(o={file_type:"",file_size:new TextEncoder().encode(null==s?void 0:s.extracted_content).length,...s}),n(e,i,o)}});return(0,s.jsxs)(j.E.div,{variants:eo,className:"text-border-100 hover:text-accent-secondary-100 relative flex-1",children:[(0,s.jsx)(b.Z,{tooltipContent:"Try this prompt",side:"bottom",children:(0,s.jsx)("button",{className:"bg-bg-300 from-bg-200/30 to-bg-200/0 border-border-200 md:border-border-300 border-0.5 text-text-300 hover:text-accent-secondary-000 hover:border-accent-secondary-100/80 hover:bg-accent-secondary-900 relative z-[1] flex min-h-12 w-full flex-1 items-center justify-between gap-2 overflow-hidden rounded-xl bg-gradient-to-b px-2.5 text-left text-sm leading-[1.15] transition disabled:opacity-50",disabled:d,onClick:()=>l(),children:(0,s.jsx)("div",{className:"line-clamp-2",children:t.title})})}),(0,s.jsxs)("svg",{className:"pointer-events-none absolute right-full top-full -mr-[0.1875rem] -mt-[0.1875rem] -translate-y-1/2 translate-x-1/2",width:"12",height:"12",viewBox:"0 0 12 12",stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"0.5",children:[(0,s.jsx)("circle",{className:"opacity-70",cx:"7.5",cy:"4.5",r:"4"}),(0,s.jsx)("circle",{className:"opacity-50",cx:"2",cy:"9.5",r:"1.5"})]})]})}var ec=n(46441),ed=n(57115),eu=n(55593),em=n(50171),ep=n(42395),ex=n(90310);let ef=e=>{let{hasProjectSelectorOpen:t,setHasProjectSelectorOpen:n,currentProject:r}=e;return(0,s.jsx)(b.Z,{className:"text-center",tooltipContent:t?"Close":r?"Change project":"Use projects to organize chats and give Claude knowledge context",side:"left",children:(0,s.jsxs)(g.Z,{variant:"unstyled",size:"unset",className:(0,G.Z)("border-0.5 border-border-300 hover:bg-bg-500/30 flex h-7 max-w-full items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg pl-2 pr-1.5 text-xs transition-colors",void 0!==r?"text-accent-secondary-000 border-accent-secondary-000":"text-text-300",t&&"bg-bg-300 max-sm:flex-1"),onClick:()=>n(!t),children:[(0,s.jsx)(P.j,{size:14,className:"shrink-0"}),void 0===r?(0,s.jsx)(s.Fragment,{children:t?(0,s.jsxs)(s.Fragment,{children:["Select a project",(0,s.jsx)(ed.U,{size:12,className:"shrink-0"})]}):(0,s.jsxs)(s.Fragment,{children:["Use a project",(0,s.jsx)(eu.p,{size:12,className:"shrink-0"})]})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"min-w-0 truncate font-medium",children:r.name}),t?(0,s.jsx)(ed.U,{size:12,className:"shrink-0"}):(0,s.jsx)(eu.p,{size:12,className:"shrink-0"})]})]})})},ev=(0,y.forwardRef)((e,t)=>{let{query:n,onChange:r}=e;return(0,s.jsxs)("label",{className:"ml-1 flex flex-1 items-center gap-2 sm:ml-2",children:[(0,s.jsx)(em.Y,{size:16,className:"text-text-400"}),(0,s.jsx)(ec.oi,{ref:t,placeholder:"Search projects...",className:"!h-auto w-full !rounded-none border-0 bg-transparent !px-0 !py-0",value:n,onChange:e=>{r(e.target.value)},autoFocus:!0})]})});ev.displayName="ProjectSearchInput";let eh=e=>{let{currentProject:t,matchingProjects:n,hasProjects:r,searchQuery:i,searchInputRef:o,onSelectProject:a}=e,l=(0,y.useRef)(null),c=!n||0===n.length,[d,u]=(0,y.useState)(-1);return((0,y.useEffect)(()=>{-1===d&&(null==o?void 0:o.current)&&o.current.focus()},[o,d]),(0,y.useEffect)(()=>{var e;let t=null===(e=l.current)||void 0===e?void 0:e.children;t&&d>=0&&d<t.length&&t[d].focus()},[o,d]),(0,y.useEffect)(()=>{let e=e=>{n&&0!==n.length&&("ArrowUp"===e.key?(e.preventDefault(),u(e=>e<=0?-1:e-1)):"ArrowDown"===e.key&&(e.preventDefault(),u(e=>e<n.length-1?e+1:n.length-1)))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]),c||!r)?(0,s.jsx)("div",{className:"bg-bg-500/20 text-text-300 mx-3.5 mb-1.5 mt-2 flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-4 text-center text-sm",children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["No projects matching “",i,"”"]}),(0,s.jsx)(g.Z,{href:"/projects/create",variant:"secondary",children:"Create a Project"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Use projects to organize chats and re-use knowledge from files"}),(0,s.jsx)(g.Z,{href:"/projects/create",variant:"secondary",children:"Create Your First Project"})]})}):(0,s.jsx)(j.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,s.jsx)("ul",{ref:l,role:"listbox",className:"mb-1 mt-1 flex min-h-[6.125rem] flex-col gap-px px-1.5 sm:px-2.5",onBlur:()=>u(-1),children:n.map((e,n)=>(0,s.jsx)(eg,{project:e,isSelected:(null==t?void 0:t.uuid)===e.uuid,searchQuery:i,onSelect:a,onFocus:()=>u(n)},e.uuid))})},"projects")},eg=e=>{let{project:t,isSelected:n,searchQuery:r,onSelect:i,onFocus:o}=e,a=(0,y.useRef)(null),l=RegExp("(".concat(r,")"),"gi"),c=t.name.split(l),d=(0,s.jsx)(s.Fragment,{children:c.map((e,t)=>(0,s.jsx)(y.Fragment,{children:e.toLowerCase()===r.toLowerCase()&&""!==e?(0,s.jsx)("span",{className:"text-accent-secondary-100",children:e}):e},t))});return(0,s.jsxs)("li",{ref:a,role:"option","aria-selected":n,tabIndex:0,onClick:()=>{i(t.uuid)},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&i(t.uuid)},onFocus:o,className:"group relative cursor-pointer rounded-lg px-2 py-1.5 text-sm outline-none",children:[(0,s.jsx)("div",{className:(0,G.Z)("border-0.5 pointer-events-none absolute inset-0 rounded-[inherit] transition",n?"bg-accent-secondary-900 border-accent-secondary-100/20 group-hover:border-accent-secondary-100/50 group-focus-visible:border-accent-secondary-100/50":"bg-bg-400/50 scale-95 border-transparent opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100")}),(0,s.jsxs)("div",{className:"relative z-[1] flex items-center gap-1.5",children:[n?(0,s.jsx)(ep.f,{size:16,className:"text-accent-secondary-000 shrink-0"}):(0,s.jsx)(P.j,{size:16,className:"text-text-300 shrink-0"}),(0,s.jsx)("div",{className:(0,G.Z)("font-tiempos line-clamp-1 min-w-0",n?"text-text-100":"text-text-300 group-hover:text-text-100 group-focus-visible:text-text-100 transition-colors"),children:d}),t.creator&&(0,s.jsx)(ex.H,{project:t,className:"text-text-400 flex-1 text-xs max-md:hidden"}),n&&(0,s.jsx)("div",{className:"text-accent-secondary-000 text-xs font-medium opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"Unselect"})]})]})};function eb(){let e=(0,r._)(["\n  cursor-pointer\n  hover:bg-bg-100\n  text-xs \n  text-text-500 \n  transition-opacity \n  duration-700 \n  flex \n  items-center\n  border-border-300 \n  border \n  rounded-full \n  pl-1.5 \n  pr-2\n  py-0.5\n  ml-1.5\n"]);return eb=function(){return e},e}function ej(){let e=(0,r._)(["\n  flex\n  flex-col\n  bg-bg-000\n  gap-1.5\n  border-0.5\n  border-border-300\n  pl-4\n  pt-2.5\n  pr-2.5\n  pb-2.5\n  -mx-1\n  sm:mx-0\n  items-stretch\n  transition-all\n  duration-200\n  relative\n  shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.035)]\n  focus-within:shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)]\n  hover:border-border-200\n  focus-within:border-border-200\n  cursor-text\n  z-10\n"]);return ej=function(){return e},e}let ey=["preview_feature_uses_artifacts","preview_feature_uses_latex"],ew=y.createContext({attachments:[],files:[],model:"",prompt:"",project:void 0,isProjectLocked:!1,isSending:!1,setPrompt:()=>void 0,setAttachments:()=>void 0,setFiles:()=>void 0,setModel:()=>Promise.resolve(),setProject:()=>void 0,sendMessage:()=>void 0,stopSampling:()=>void 0,conversation:void 0,focusInput:()=>void 0,promptInputRef:{current:null}}),eN=e=>{var t;let n=(0,y.useRef)(null),r="conversation"in e,{children:o,projectId:a}=e,l=r?e.conversation:void 0,{input:c,setInput:d,attachments:u,setAttachments:p,files:x,setFiles:f,clear:v}=(0,i.uV)(null!==(t=null==l?void 0:l.id)&&void 0!==t?t:void 0===a?"new-conversation":"".concat(a,":conversation")),[h,g]=y.useState(null==l?void 0:l.model),{stickyModelPreference:b}=(0,m.M)();(0,y.useEffect)(()=>{!h&&b&&g(b)},[b,h,g]);let[j,w]=y.useState(a),[N,C]=y.useState(!1),k=async()=>{var t,s;if(""!==c.trim()||0!==u.length||0!==x.length){v(),null===(t=n.current)||void 0===t||t.setContent(""),C(!0);try{r?await e.onSend({prompt:c,attachments:u,files:x}):await e.onCreate({prompt:c,attachments:u,files:x,model:h,project:j})}catch(e){d(c),null===(s=n.current)||void 0===s||s.setContent(c),p(u),f(x)}finally{C(!1)}}},E=async t=>{if(g(t),r){C(!0);try{await e.onCreate({prompt:c,attachments:u,files:x,model:t,project:j})}finally{C(!1)}}};return(0,s.jsx)(ew.Provider,{value:{prompt:c,attachments:u,files:x,model:h,project:j,isProjectLocked:void 0!==a||void 0!==l,isSending:N,setPrompt:function(e){let{forceUpdateTiptap:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(d(e),!0===t){var r;null===(r=n.current)||void 0===r||r.setContent(e)}},setAttachments:e=>p(e),setFiles:e=>f(e),setModel:E,setProject:w,sendMessage:k,stopSampling:()=>{r&&e.onStopSampling()},conversation:l,focusInput:()=>{var e;return null===(e=n.current)||void 0===e?void 0:e.focus()},promptInputRef:n},children:o})},eC=()=>y.useContext(ew),ek=e=>{let t=(0,M.nR)(e),n=(0,M.mo)();return void 0!==t&&t>n},eE=e=>{var t,n,r,l,u,m,p,v,h;let{placement:g,placeholder:j,accountSettings:w}=e,{prompt:N,model:C,project:E,setPrompt:S,setModel:_,setAttachments:P,setFiles:D,attachments:R,files:T,sendMessage:F,stopSampling:z,conversation:I,isProjectLocked:Z,isSending:A,focusInput:L,promptInputRef:M}=eC(),V=e=>{S(e,{forceUpdateTiptap:!1})},K=void 0===I||0===I.messagesSoFar,[Y,q,Q,W,X,$,B]=(0,c.kS)({attachments:R,setAttachments:P,numExistingConversationAttachments:null!==(t=null==I?void 0:I.attachmentsSoFar)&&void 0!==t?t:0,files:T,setFiles:D,numExistingConversationFiles:null!==(n=null==I?void 0:I.filesSoFar)&&void 0!==n?n:0,detectSameAttachment:()=>!1,selectedModel:C}),J=ey.reduce((e,t)=>{var n;return e+(void 0===I?w[t]?1:0:(null===(n=I.previewFeaturesEnabled)||void 0===n?void 0:n[t])?1:0)},0),{openModal:ee}=(0,f.h)(),et=(0,i.YR)(R,P,q,Q,X),en=(0,d.p)(P,q),[er,es]=(0,y.useState)(!1),ei=e=>{es(e),!1===e&&L()},{exceededMessageLimitWarning:eo}=(0,a.kw)(null!==(r=null==I?void 0:I.id)&&void 0!==r?r:null),{isRavenCanceled:ea}=(0,U.pV)(),el=ea?(0,s.jsx)(a.Eo,{}):void 0,{exceededTokenLimitWarning:ec,willExceedTokenLimitWarning:ed}=(0,a.Xn)({conversationUUID:null!==(l=null==I?void 0:I.id)&&void 0!==l?l:null,input:N,attachments:R,conversationTokensSoFar:null!==(u=null==I?void 0:I.tokensSoFar)&&void 0!==u?u:0,files:T,filesSoFar:null!==(m=null==I?void 0:I.filesSoFar)&&void 0!==m?m:0,projectKnowledgebaseTokens:null!==(p=null==I?void 0:I.projectKnowledgebaseTokens)&&void 0!==p?p:0}),eu=(0,x.useIsReadOnlyMode)()?(0,s.jsx)(a.ZQ,{}):void 0,em=ek(E),ep=null!==(h=null!==(v=null!=eo?eo:ec)&&void 0!==v?v:el)&&void 0!==h?h:eu;if(void 0!==ep)return(0,s.jsx)("div",{className:(0,G.Z)("bg-bg-000 border-0.5 border-border-300 w-full pl-5 pr-4","bottom"===g?"rounded-t-2xl border-b-0":"rounded-2xl"),children:ep});let ex=0===N.length&&0===R.length&&0===T.length||Y||!!ed||em||(null==I?void 0:I.isSampling)===!0,ef=async()=>{ex||await F()};return(0,s.jsx)(H.rE,{onDrop:W,children:(0,s.jsxs)("fieldset",{className:(0,G.Z)("flex w-full min-w-0",{"flex-col":"floating"===g,"flex-col-reverse":"bottom"===g}),onPasteCapture:et,children:[(0,s.jsxs)(e_,{onClick:L,className:(0,G.Z)("bottom"===g?"rounded-t-2xl border-b-0":"rounded-2xl"),children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(eP,{ref:M,input:null!=N?N:"",setInput:e=>V(e),onSubmit:ef,onFocus:()=>ei(!1),placement:g,placeholder:null!=j?j:K?"How can Claude help you today?":"Reply to Claude...",snippetCommands:en,isFirstMessage:K}),!K&&(0,s.jsx)(eT,{asIconButton:!0,...B}),(0,s.jsx)(eI,{isSending:A,isDisabled:ex,prompt:N,files:T,attachments:R,conversation:I,onSend:()=>ef(),onStop:()=>z()})]}),(0,s.jsxs)("div",{className:"flex max-sm:flex-col-reverse max-sm:gap-1.5 max-sm:pb-1 sm:items-center",children:[(0,s.jsxs)("div",{className:"-ml-1.5 flex min-h-4 flex-1 items-center",children:[(0,s.jsx)(o.O,{selectedModel:C,onSelect:e=>_(e.model),opensInNewChat:!K}),J>0&&(0,s.jsx)(b.Z,{side:"right",tooltipContent:(0,s.jsxs)("p",{children:[J," experimental feature",J>1?"s":""," enabled"]}),children:(0,s.jsxs)(eS,{onClick:ee,children:[(0,s.jsx)(k.G,{className:"mr-1.5 inline-block"})," ",J]})})]}),(0,s.jsx)(eR,{model:C,project:E,prompt:N,conversation:I})]})]}),(0,s.jsxs)("div",{className:(0,G.Z)("flex md:px-2","bottom"===g?"flex-col-reverse":"flex-col"),children:[(0,s.jsx)(eD,{placement:g}),(0,s.jsx)(O.M,{children:(0,s.jsx)(eF,{hasProjectSelectorOpen:er,setHasProjectSelectorOpen:ei,isProjectLocked:Z,uploadInputProps:B,isUploading:Y,userHidExamples:w.has_seen_starter_prompts,placement:g})})]})]})})},eS=N.Z.div(eb()),e_=N.Z.div(ej()),eP=(0,y.forwardRef)((e,t)=>{let{disabled:n,input:r,setInput:i,placeholder:o,onSubmit:a,onReady:c,onFocus:d,snippetCommands:u,isFirstMessage:m,placement:x}=e,{editor:f,getActiveSnippetCommand:v}=(0,p.x)({input:r,setInput:i,onReady:c,snippetCommands:u,placeholder:o}),[g,b]=(0,y.useState)(!1);(0,y.useImperativeHandle)(t,()=>({setContent(e){e!==r&&(null==f||f.commands.setContent(e,!1,{preserveWhitespace:"full"}))},focus(){null==f||f.commands.focus()},getPosition:()=>null==f?void 0:f.state.selection.$anchor,getEditor:()=>f,getIsAtEnd(){if(!f)return;let e=f.state.selection.$anchor.pos;return I.Y1.atEnd(f.state.doc).$anchor.pos===e}}),[f,r]),(0,y.useEffect)(()=>{null==f||f.setOptions({editable:!n})},[f,n]),(0,y.useEffect)(()=>{if(null!==f&&""!==o){let e=f.extensionManager.extensions.filter(e=>"placeholder"===e.name)[0];e&&(e.options.placeholder=o,f.view.dispatch(f.state.tr))}},[f,o]);let j=(0,h.K)();return(0,s.jsx)(l.g.Provider,{value:{setOverrideSubmit:b},children:(0,s.jsx)(Z.kg,{"aria-label":"Write your prompt to Claude",className:(0,G.Z)("mt-1 max-h-96 w-full overflow-y-auto break-words","floating"===x&&"min-h-[4.5rem]"),editor:f,onKeyDownCapture:e=>{if("Enter"!==e.key)return;let t=v();if(t){j.track("snippets_command_used",{command:t.label,isFirstMessage:m}),e.preventDefault(),t.action(r)&&(i(""),null==f||f.commands.setContent(""));return}!a||g||e.shiftKey||e.nativeEvent.isComposing||(0,C.tq)()||(e.preventDefault(),a(e))},onFocus:d})})});eP.displayName="PromptInput";let eD=e=>{var t,n,r,i,o,l,c,d;let{placement:u}=e,{prompt:m,attachments:p,files:x,conversation:f,project:v}=eC(),{willExceedTokenLimitWarning:h,slowResponseWarning:g}=(0,a.Xn)({conversationUUID:null!==(t=null==f?void 0:f.id)&&void 0!==t?t:null,input:m,attachments:p,conversationTokensSoFar:null!==(n=null==f?void 0:f.tokensSoFar)&&void 0!==n?n:0,files:x,filesSoFar:null!==(r=null==f?void 0:f.filesSoFar)&&void 0!==r?r:0,projectKnowledgebaseTokens:null!==(i=null==f?void 0:f.projectKnowledgebaseTokens)&&void 0!==i?i:0}),b=ek(v)?(0,s.jsx)(a.AD,{children:(0,s.jsxs)("div",{className:"text-danger-000 flex items-center gap-1",children:[(0,s.jsx)(E.v,{className:"h-4 w-4 shrink-0",weight:"regular"}),(0,s.jsx)("span",{children:"Project knowledge exceeds maximum. Remove some to continue."})]})}):void 0,{systemAlertFromConfig:y}=(0,a.BR)(null!==(o=null==f?void 0:f.id)&&void 0!==o?o:null),w=y?y.component:null,N=null!==(d=null!==(c=null!==(l=null!=h?h:b)&&void 0!==l?l:g)&&void 0!==c?c:w)&&void 0!==d?d:null;return(0,s.jsx)(O.M,{children:N&&(0,s.jsx)(j.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:(0,s.jsx)("div",{className:(0,G.Z)("border-0.5 relative z-[5] px-3.5",y&&y.alert.proUpsell?"text-text-200 from-accent-pro-900/40 to-accent-pro-900/80 border-accent-pro-100/20 bg-gradient-to-b":"bg-danger-900 border-danger-100/20","bottom"===u?"-mb-1 rounded-t-xl border-b-0 pb-2.5 pt-2":"-mb-1 -mt-1 rounded-b-xl border-t-0 pb-2 pt-2.5"),children:N})})})},eR=e=>{var t,n,r,i,o,l;let{model:c,project:d,prompt:m,conversation:p}=e,{claudeDoesNotReadInternetWarning:x}=(0,a.g8)({input:m}),{approachingMessageLimitWarning:f}=(0,a.kw)(null!==(n=null==p?void 0:p.id)&&void 0!==n?n:null),{allModelOptions:v}=(0,u.u)(),h=(0,M.nR)(d),g=(null!=h?h:0)>(null!==(r=null===(t=v.find(e=>e.model===c))||void 0===t?void 0:t.slow_kb_warning_threshold)&&void 0!==r?r:155e3)?(0,s.jsx)("div",{className:"text-text-200 pr-2 text-xs max-md:hidden",children:"Large knowledge size may result in slower responses"}):void 0,b=m.length>3?(0,s.jsxs)("div",{className:"pr-2 text-xs max-md:hidden",children:["Use"," ",(0,s.jsx)("div",{className:"bg-bg-200 inline-flex rounded-md px-1",children:"shift + return"})," ","for new line"]}):void 0,j=null!==(l=null!==(o=null!==(i=null!=x?x:f)&&void 0!==i?i:g)&&void 0!==o?o:b)&&void 0!==l?l:void 0;return(0,s.jsx)("div",{className:"mr-0.5",children:j})},eT=e=>{let{asIconButton:t,...n}=e,r=(0,y.useRef)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{ref:r,"data-testid":"file-upload","aria-hidden":"true",tabIndex:-1,className:"absolute -z-10 h-0 w-0 overflow-hidden opacity-0",...n}),(0,s.jsx)(b.Z,{className:"text-center",side:t?"top":"right",tooltipContent:"Upload docs or images to Claude\n(Max 5, 30mb each)",children:t?(0,s.jsx)(g.Z,{size:"icon_sm",variant:"secondary",className:"!rounded-xl","aria-label":"Upload content",onClick:e=>{var t;e.preventDefault(),null===(t=r.current)||void 0===t||t.click()},children:(0,s.jsx)(S.p,{size:20,className:"text-text-300"})}):(0,s.jsxs)(g.Z,{size:"unset",variant:"ghost",className:"text-text-200 h-7 gap-0.5 rounded-md pl-1.5 pr-1.5 text-xs font-medium sm:text-sm",prepend:(0,s.jsx)(S.p,{size:14}),onClick:e=>{var t;e.preventDefault(),null===(t=r.current)||void 0===t||t.click()},children:[(0,s.jsx)("span",{className:"hidden sm:block",children:"Add content"}),(0,s.jsx)("span",{className:"sm:hidden",children:"Upload"})]})},"upload-tooltip")]})},eF=e=>{let{isProjectLocked:t,hasProjectSelectorOpen:n,setHasProjectSelectorOpen:r,uploadInputProps:i,isUploading:o,userHidExamples:a,placement:l}=e,{conversation:c,attachments:d,files:u}=eC(),{dragState:m}=(0,H.EO)(),p=m===H.h7.DRAGGING_OFF_TARGET||m===H.h7.DRAGGING_ON_TARGET,x=m===H.h7.DROPPED,f="bottom"===l?"7.375rem":"7.875rem",v=x?{height:f}:{},h=!!c;if(!h||d.length+u.length!==0||o||p||x)return(0,s.jsx)("div",{className:(0,G.Z)("from-bg-400/10 to-bg-400/30 border-0.5 border-border-300 relative flex bg-gradient-to-b backdrop-blur-md",{"-mt-1.5 flex-col rounded-b-xl pb-2 pt-3.5 md:rounded-b-2xl":"floating"===l,"-mb-1 flex-col-reverse rounded-t-2xl pb-3.5 pt-2.5":"bottom"===l}),children:(0,s.jsxs)(j.E.div,{animate:{opacity:1,minHeight:p?f:0,transition:p?{type:"spring",stiffness:1e3,damping:60,mass:1}:{ease:"linear",duration:.15}},className:(0,G.Z)("relative flex min-h-0 flex-col transition",{"flex-col":"floating"===l,"flex-col-reverse":"bottom"===l}),style:v,children:[(0,s.jsx)(O.M,{children:p&&(0,s.jsx)(eA,{dragState:m,placement:l})}),(0,s.jsx)(w,{className:(0,G.Z)("flex",{"flex-col":"floating"===l,"flex-col-reverse":"bottom"===l}),children:(0,s.jsx)(ez,{isProjectLocked:t,hasProjectSelectorOpen:n,setHasProjectSelectorOpen:r,uploadInputProps:i,isUploading:o,userHidExamples:a,isReply:h})})]},"drop-zone")})},ez=e=>{var t;let{isProjectLocked:n,hasProjectSelectorOpen:r,setHasProjectSelectorOpen:i,uploadInputProps:o,isUploading:a,isReply:l,userHidExamples:c}=e,{setProject:d,setAttachments:u,setFiles:m,attachments:p,project:x,files:f,prompt:v,setPrompt:h,focusInput:b,isSending:w}=eC(),N=(0,M.UG)(),C=p.length+f.length,k=C>0||a,{data:E}=(0,L.u0)({enabled:!!N}),S=null==E?void 0:E.find(e=>e.uuid===x),[D,R]=(0,y.useState)(""),T=(()=>{if(E&&D.length>1)return new A.Z(E,{includeScore:!0,isCaseSensitive:!1,ignoreLocation:!0,threshold:.4,keys:["name","description"]}).search(D);let e=null==E?void 0:E.filter(e=>e.uuid!==(null==S?void 0:S.uuid)).map(e=>({item:e,score:0}));return S&&(null==e||e.unshift({item:S,score:0})),e})(),F=null==T?void 0:T.slice(0,3).map(e=>e.item),z=(0,y.useRef)(null),I=!n&&!c&&0===v.length&&!r&&!k&&!w;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:(0,G.Z)("mr-px flex gap-2 pl-2.5 pr-2 sm:gap-4",r?"flex-col sm:flex-row-reverse":"flex-row-reverse"),children:[N?(0,s.jsx)("div",{className:"flex min-w-0 flex-1 items-center justify-end gap-1",children:n?void 0===S||l?null:(0,s.jsxs)("span",{className:"border-0.5 border-border-300 text-accent-secondary-000 border-accent-secondary-000 flex h-7 max-w-full items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg pl-2 pr-1.5 text-xs",children:[(0,s.jsx)(P.j,{size:14,className:"shrink-0"}),(0,s.jsx)("span",{className:"min-w-0 truncate font-medium",children:null!==(t=null==S?void 0:S.name)&&void 0!==t?t:"Unknown Project"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ef,{currentProject:S,hasProjectSelectorOpen:r,setHasProjectSelectorOpen:e=>{i(e),R("")}}),r&&(0,s.jsx)(g.Z,{"aria-label":"Close projects menu",size:"unset",variant:"ghost",className:"h-7 w-7 rounded-md",onClick:()=>i(!1),children:(0,s.jsx)(_.X,{size:16})})]})}):null,r?(0,s.jsx)(ev,{ref:z,query:D,onChange:e=>R(e)}):(0,s.jsxs)("div",{className:(0,G.Z)("flex min-w-0 items-center gap-1.5",!N&&"flex-1 flex-row-reverse"),children:[!l&&(0,s.jsx)(eT,{...o}),a&&(0,s.jsx)("div",{className:"text-text-400 flex-1 whitespace-nowrap pl-1 text-sm",children:"Uploading..."}),C>0&&!a&&(0,s.jsxs)("div",{className:"text-text-400 flex-1 whitespace-nowrap pl-1 text-sm",children:[C," ",1===C?"file":"files"," ","added"]}),!l&&!N&&!k&&(0,s.jsx)("div",{className:"text-text-400 flex-1 pl-1 text-xs",children:I?"Get started with an example below":(0,s.jsxs)(s.Fragment,{children:["Collaborate with Claude using"," ",(0,s.jsx)("span",{className:"inline-block",children:"documents, images, and more"})]})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:(0,G.Z)({hidden:!I}),children:(0,s.jsx)(ea,{setExamplePrompt:(e,t,n)=>{t&&m([t]),n&&u([n]),h(e,{forceUpdateTiptap:!0}),b()}})}),N&&r?(0,s.jsx)(eh,{currentProject:S,matchingProjects:F,hasProjects:void 0!==E&&E.length>0,searchQuery:D,searchInputRef:z,onSelectProject:e=>{e===(null==S?void 0:S.uuid)?d(void 0):(d(e),i(!1))}}):k?(0,s.jsx)(j.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,s.jsx)(Y,{isUploading:a,attachments:p,files:f,onRemoveAttachment:e=>{u(t=>t.filter((t,n)=>n!==e))},onRemoveFile:e=>{m(t=>t.filter((t,n)=>n!==e))}})},"attachments"):null]})]})},eI=e=>{let{prompt:t,files:n,attachments:r,conversation:i,onSend:o,onStop:a,isSending:l,isDisabled:c}=e,d=(null==i?void 0:i.isStoppingSampling)===!0&&(null==i?void 0:i.isSampling)===!0?"stopping":(null==i?void 0:i.isSampling)===!0?"sampling":t.length>0||n.length>0||r.length>0?"drafting":"empty";return(0,s.jsx)(O.M,{children:"drafting"===d?(0,s.jsx)(eZ,{isSending:l,isDisabled:c,onSend:o},"send"):"sampling"===d||"stopping"===d?(0,s.jsx)(eG,{onStop:a,isLoading:"stopping"===d},"stop"):null})},eZ=e=>{let{isSending:t,isDisabled:n,onSend:r}=e,i=(0,y.useCallback)(()=>{(0,v.bq)("event","msg_sent",{location:"chat_input"}),r()},[r]);return(0,s.jsx)(eO,{children:(0,s.jsx)(g.Z,{variant:"flat",size:"icon_sm",className:"!rounded-xl",disabled:n,onClick:()=>i(),"aria-label":"Send Message",children:t?(0,s.jsx)(D.U,{className:"animate-spin",weight:"bold",size:16}):(0,s.jsx)(R.a,{weight:"bold",size:16})})})},eG=e=>{let{onStop:t,isLoading:n}=e;return(0,y.useEffect)(()=>{let e=e=>{"Escape"!==e.key||n||t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,n]),(0,s.jsx)(b.Z,{tooltipContent:(0,s.jsxs)("div",{className:"inline-flex items-center justify-center gap-1",children:["Stop Claude response",(0,s.jsx)("div",{className:"border-border-200 rounded-md border px-0.5 py-px text-center font-mono",children:"ESC"})]}),children:(0,s.jsx)(g.Z,{variant:"secondary",size:"icon_sm",className:"!rounded-xl",onClick:()=>t(),"aria-label":"Stop Response",children:n?(0,s.jsx)(D.U,{className:"animate-spin",size:18}):(0,s.jsx)(T.P,{weight:"bold",size:16})})})},eO=e=>{let{children:t}=e;return(0,s.jsx)(j.E.div,{initial:{width:0},animate:{width:"auto"},transition:{ease:"linear",duration:.125},children:(0,s.jsx)(j.E.div,{initial:{scale:.3,opacity:0},animate:{scale:1,opacity:1,transition:{delay:.15,scale:{type:"spring",stiffness:600,damping:30},opacity:{duration:.1}}},children:t})})},eA=e=>{let{dragState:t,placement:n}=e;return(0,s.jsx)(j.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"linear",duration:.075},className:(0,G.Z)("absolute inset-0 left-2 right-2 z-30 flex flex-col justify-center border border-dashed transition-colors",t===H.h7.DRAGGING_ON_TARGET?"text-accent-secondary-000 bg-accent-secondary-900 border-accent-secondary-200":"text-text-300 bg-bg-100 border-border-200","bottom"===n?"rounded-t-lg":"rounded-b-lg"),children:(0,s.jsxs)(j.E.div,{initial:{opacity:0,scaleX:.85,scaleY:.9},animate:{opacity:1,scaleX:1,scaleY:1},transition:{delay:.075,type:"spring",stiffness:750,damping:40},className:"py-1.5 text-center",children:[(0,s.jsxs)("div",{className:"font-tiempos inline-flex items-center gap-3.5 text-lg",children:[(0,s.jsx)(F.f,{size:22,className:"translate-y-0.5 -rotate-12 opacity-60"}),"Drop files here to add to chat",(0,s.jsx)(z.a,{size:22,className:"translate-y-0.5 rotate-12 opacity-60"})]}),(0,s.jsx)("div",{className:"text-xs opacity-70",children:"Max 5 files per chat at 30mb each"})]})},"drop-zone-overlay")}},96576:function(e,t,n){n.d(t,{EO:function(){return l},h7:function(){return s},rE:function(){return c}});var r,s,i=n(27573),o=n(7653);(r=s||(s={})).IDLE="IDLE",r.DRAGGING_OFF_TARGET="DRAGGING_OFF_TARGET",r.DRAGGING_ON_TARGET="DRAGGING_ON_TARGET",r.DROPPED="DROPPED";let a=(0,o.createContext)(void 0),l=()=>{let e=(0,o.useContext)(a);if(!e)throw Error("useDropZone must be used within a DropZoneProvider");return e},c=e=>{let{onDrop:t,children:n,className:r}=e,[s,l]=(0,o.useState)("IDLE"),c=o.useRef(null),d=(0,o.useCallback)(e=>{var t;e.preventDefault(),e.stopPropagation(),(null===(t=c.current)||void 0===t?void 0:t.contains(e.target))?l("DRAGGING_ON_TARGET"):l("DRAGGING_OFF_TARGET")},[]),u=(0,o.useCallback)(e=>{var t;e.preventDefault(),e.stopPropagation(),(null===(t=c.current)||void 0===t?void 0:t.contains(e.relatedTarget))||e.target!==document.body&&null!==e.relatedTarget||l("IDLE")},[]),m=(0,o.useCallback)(e=>{var t;(null===(t=c.current)||void 0===t?void 0:t.contains(e.target))||(e.preventDefault(),l("IDLE"))},[]),p=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),t(e),l("DROPPED"),setTimeout(()=>{l("IDLE")},500)},[t]);return(0,o.useEffect)(()=>(document.body.addEventListener("dragover",d),document.body.addEventListener("dragleave",u),document.body.addEventListener("drop",m),()=>{document.body.removeEventListener("dragover",d),document.body.removeEventListener("dragleave",u),document.body.removeEventListener("drop",m)}),[d,u,m,p]),(0,i.jsx)(a.Provider,{value:{dragState:s,setDragState:l},children:(0,i.jsx)("div",{ref:c,className:r,onDrop:p,children:n})})}},96755:function(e,t,n){n.d(t,{Ck:function(){return h},IR:function(){return p},Pd:function(){return x},WQ:function(){return m},_y:function(){return f},gq:function(){return b},k7:function(){return g},ml:function(){return u},uV:function(){return a},wO:function(){return c},xo:function(){return l},yU:function(){return d},yq:function(){return v}});var r=n(83041),s=n(11492),i=n(35146),o=n(84983);let a=()=>(0,r.WE)("/api/legal",{staleTime:1/0,meta:{noToast:!0}}),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/send_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/send_magic_link","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/exchange_nonce_for_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_magic_link","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_google","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useIsClaudeDot)();return(0,r.uC)("/api/auth/accept_invite","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},f=()=>(0,r.uC)("/api/auth/logout","POST"),v=()=>{let e=(0,o.useQueryClient)();return(0,r.uC)("/api/account","PUT",{async onSuccess(){await e.invalidateQueries([i.aY])}})},h=()=>(0,r.Ne)("/api/account","PUT",(e,t)=>(null==t?void 0:t.account)?{...t,account:{...t.account,settings:e}}:t,{queryKey:[i.aY],transformVariables:e=>({settings:e})}),g=()=>{let e=(0,o.useQueryClient)();return(0,r.uC)("/api/account/accept_legal_docs","PUT",{async onSuccess(){await e.invalidateQueries([i.aY])}})};function b(e){return(0,r.WE)("/api/signups/".concat(e),{enabled:!!e})}},59374:function(e,t,n){n.r(t),n.d(t,{ErrorsProvider:function(){return o},useToasts:function(){return a}});var r=n(27573),s=n(7653);let i=(0,s.createContext)(void 0);function o(e){let{children:t}=e,n=(0,s.useRef)(1),[o,a]=(0,s.useState)([]),l=(0,s.useCallback)(e=>{let t=n.current++;return a(n=>[...n,{id:t,message:e instanceof Error?e.message:e,toastType:"error"}]),t},[]),c=(0,s.useCallback)(e=>{let t=n.current++;return a(n=>[...n,{id:t,message:e instanceof Error?e.message:e,toastType:"success"}]),t},[]),d=(0,s.useCallback)(e=>{a(t=>t.filter(t=>t.id!==e))},[]),u=(0,s.useMemo)(()=>({toasts:o,addError:l,addSuccess:c,clearToast:d}),[o,l,c,d]);return(0,r.jsx)(i.Provider,{value:u,children:t})}function a(){let e=(0,s.useContext)(i);if(!e)throw Error("Must be called within ErrorsProvider");return e}},91600:function(e,t,n){n.d(t,{HF:function(){return i},bq:function(){return s}});var r=n(43316);let s=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];try{"function"==typeof window.gtag&&gtag(e,...n)}catch(e){(0,r.Tb)(e)}},i=e=>{s("consent","update",o(e))},o=e=>({ad_personalization:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_storage:e.marketing?"granted":"denied",analytics_storage:e.analytics?"granted":"denied",functionality_storage:"granted",personalization_storage:"granted",security_storage:"granted"})},92627:function(e,t,n){n.d(t,{R:function(){return a}});var r=n(23203),s=n.n(r),i=n(7653);let o=(e,t)=>e===window.localStorage?"LSS-".concat(t):"SSS-".concat(t);function a(e,t){return function(e,t,n){let[r,a]=(0,i.useState)(()=>{if(null===e)return n;try{let r=e.getItem(o(e,t));return r?JSON.parse(r):n}catch(e){return console.log(e),n}}),l=(0,i.useRef)(s()(r=>{if(null!==e)try{if(JSON.stringify(r)===JSON.stringify(n)){e.removeItem(o(e,t));return}e.setItem(o(e,t),JSON.stringify(r))}catch(e){console.log(e)}},250)),c=(0,i.useCallback)(()=>{a(n),setTimeout(()=>{null!==e&&(l.current.cancel(),e.removeItem(o(e,t)))},0)},[a,n,e,t]);return(0,i.useEffect)(()=>{l.current(r)},[r]),[r,a,c]}(window.localStorage,e,t)}}}]);