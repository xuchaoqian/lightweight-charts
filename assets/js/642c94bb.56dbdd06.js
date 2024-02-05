"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6032],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>f});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(45072),i=(n(11504),n(95788));const o={id:"TrackingModeOptions",title:"Interface: TrackingModeOptions",sidebar_label:"TrackingModeOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,l={unversionedId:"api/interfaces/TrackingModeOptions",id:"version-4.0/api/interfaces/TrackingModeOptions",title:"Interface: TrackingModeOptions",description:"Represent options for the tracking mode's behavior.",source:"@site/versioned_docs/version-4.0/api/interfaces/TrackingModeOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TrackingModeOptions",permalink:"/lightweight-charts/docs/4.0/api/interfaces/TrackingModeOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"TrackingModeOptions",title:"Interface: TrackingModeOptions",sidebar_label:"TrackingModeOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},c=[{value:"Properties",id:"properties",level:2},{value:"exitMode",id:"exitmode",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represent options for the tracking mode's behavior."),(0,i.yg)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"exitmode"},"exitMode"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"exitMode"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/TrackingModeExitMode"},(0,i.yg)("inlineCode",{parentName:"a"},"TrackingModeExitMode"))),(0,i.yg)("p",null,"Determine how to exit the tracking mode."),(0,i.yg)("p",null,"By default, mobile users will long press to deactivate the scroll and have the ability to check values and dates.\nAnother press is required to activate the scroll, be able to move left/right, zoom, etc."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/TrackingModeExitMode#onnexttap"},"OnNextTap")))}u.isMDXComponent=!0}}]);