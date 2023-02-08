"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"PriceScaleMode",title:"Enumeration: PriceScaleMode",sidebar_label:"PriceScaleMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/enums/PriceScaleMode",id:"version-3.8/api/enums/PriceScaleMode",title:"Enumeration: PriceScaleMode",description:"Represents the price scale mode.",source:"@site/versioned_docs/version-3.8/api/enums/PriceScaleMode.md",sourceDirName:"api/enums",slug:"/api/enums/PriceScaleMode",permalink:"/lightweight-charts/docs/api/enums/PriceScaleMode",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"PriceScaleMode",title:"Enumeration: PriceScaleMode",sidebar_label:"PriceScaleMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Normal",id:"normal",level:3},{value:"Logarithmic",id:"logarithmic",level:3},{value:"Percentage",id:"percentage",level:3},{value:"IndexedTo100",id:"indexedto100",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the price scale mode."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"normal"},"Normal"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Normal")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,"Price scale shows prices. Price range changes linearly."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logarithmic"},"Logarithmic"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Logarithmic")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"Price scale shows prices. Price range changes logarithmically."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"percentage"},"Percentage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Percentage")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"2")),(0,i.kt)("p",null,"Price scale shows percentage values according the first visible value of the price scale.\nThe first visible value is 0% in this mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"indexedto100"},"IndexedTo100"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"IndexedTo100")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"3")),(0,i.kt)("p",null,"The same as percentage mode, but the first value is moved to 100."))}u.isMDXComponent=!0}}]);