"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1888],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>g});var i=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(g,o(o({ref:r},c),{},{components:t})):i.createElement(g,o({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99668:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(45072),n=(t(11504),t(95788));const a={id:"ISeriesPrimitivePaneView",title:"Interface: ISeriesPrimitivePaneView",sidebar_label:"ISeriesPrimitivePaneView",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/ISeriesPrimitivePaneView",id:"api/interfaces/ISeriesPrimitivePaneView",title:"Interface: ISeriesPrimitivePaneView",description:"This interface represents the primitive for one of the pane of the chart (main chart area, time scale, price scale).",source:"@site/docs/api/interfaces/ISeriesPrimitivePaneView.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesPrimitivePaneView",permalink:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneView",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ISeriesPrimitivePaneView",title:"Interface: ISeriesPrimitivePaneView",sidebar_label:"ISeriesPrimitivePaneView",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Methods",id:"methods",level:2},{value:"zOrder",id:"zorder",level:3},{value:"Returns",id:"returns",level:4},{value:"renderer",id:"renderer",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,i.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This interface represents the primitive for one of the pane of the chart (main chart area, time scale, price scale)."),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"zorder"},"zOrder"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"zOrder"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#seriesprimitivepaneviewzorder"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesPrimitivePaneViewZOrder"))),(0,n.yg)("p",null,"Defines where in the visual layer stack the renderer should be executed. Default is ",(0,n.yg)("inlineCode",{parentName:"p"},"'normal'"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"See"))),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#seriesprimitivepaneviewzorder"},"SeriesPrimitivePaneViewZOrder")),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#seriesprimitivepaneviewzorder"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesPrimitivePaneViewZOrder"))),(0,n.yg)("p",null,"the desired position in the visual layer stack."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"renderer"},"renderer"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"renderer"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneRenderer"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneRenderer"))),(0,n.yg)("p",null,"This method returns a renderer - special object to draw data"),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneRenderer"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneRenderer"))),(0,n.yg)("p",null,"an renderer object to be used for drawing, or ",(0,n.yg)("inlineCode",{parentName:"p"},"null")," if we have nothing to draw."))}u.isMDXComponent=!0}}]);