"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3396],{95788:(e,a,t)=>{t.d(a,{Iu:()=>g,yg:()=>m});var r=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},g=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=l(t),h=i,m=c["".concat(s,".").concat(h)]||c[h]||y[h]||n;return t?r.createElement(m,p(p({ref:a},g),{},{components:t})):r.createElement(m,p({ref:a},g))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,p=new Array(n);p[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<n;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76672:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(45072),i=(t(11504),t(95788));const n={id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,o={unversionedId:"api/interfaces/SeriesPartialOptionsMap",id:"version-4.0/api/interfaces/SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",description:"Represents the type of partial options for each series type.",source:"@site/versioned_docs/version-4.0/api/interfaces/SeriesPartialOptionsMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesPartialOptionsMap",permalink:"/lightweight-charts/docs/4.0/api/interfaces/SeriesPartialOptionsMap",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},l=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3}],g={toc:l},c="wrapper";function y(e){let{components:a,...t}=e;return(0,i.yg)(c,(0,r.c)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents the type of partial options for each series type."),(0,i.yg)("p",null,"For example a bar series has options represented by ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#barseriespartialoptions"},"BarSeriesPartialOptions"),"."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"bar"},"Bar"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Bar"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BarStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of bar series partial options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"candlestick"},"Candlestick"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Candlestick"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/CandlestickStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of candlestick series partial options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"area"},"Area"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Area"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/AreaStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of area series partial options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"baseline"},"Baseline"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Baseline"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BaselineStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of baseline series partial options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"line"},"Line"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Line"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/LineStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of line series partial options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"histogram"},"Histogram"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Histogram"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#deeppartial"},(0,i.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/HistogramStyleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,i.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.yg)("p",null,"The type of histogram series partial options."))}y.isMDXComponent=!0}}]);