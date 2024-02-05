"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[200],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>d});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(r),g=o,d=y["".concat(p,".").concat(g)]||y[g]||c[g]||a;return r?t.createElement(d,l(l({ref:n},u),{},{components:r})):t.createElement(d,l({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82192:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(45072),o=(r(11504),r(95788));const a={id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"api/interfaces/BarStyleOptions",id:"version-4.1/api/interfaces/BarStyleOptions",title:"Interface: BarStyleOptions",description:"Represents style options for a bar series.",source:"@site/versioned_docs/version-4.1/api/interfaces/BarStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarStyleOptions",permalink:"/lightweight-charts/docs/api/interfaces/BarStyleOptions",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"upColor",id:"upcolor",level:3},{value:"downColor",id:"downcolor",level:3},{value:"openVisible",id:"openvisible",level:3},{value:"thinBars",id:"thinbars",level:3}],u={toc:s},y="wrapper";function c(e){let{components:n,...r}=e;return(0,o.yg)(y,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents style options for a bar series."),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"upcolor"},"upColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"upColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of rising bars."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"downcolor"},"downColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"downColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of falling bars."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"openvisible"},"openVisible"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"openVisible"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Show open lines on bars."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"true")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"thinbars"},"thinBars"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"thinBars"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Show bars as sticks."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"true")))}c.isMDXComponent=!0}}]);