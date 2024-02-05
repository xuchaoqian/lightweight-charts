"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6648],{95788:(e,t,a)=>{a.d(t,{Iu:()=>h,yg:()=>y});var i=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=s(a),d=r,y=g["".concat(p,".").concat(d)]||g[d]||c[d]||n;return a?i.createElement(y,l(l({ref:t},h),{},{components:a})):i.createElement(y,l({ref:t},h))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=a(45072),r=(a(11504),a(95788));const n={id:"ChartOptionsImpl",title:"Interface: ChartOptionsImpl<HorzScaleItem>",sidebar_label:"ChartOptionsImpl",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/ChartOptionsImpl",id:"api/interfaces/ChartOptionsImpl",title:"Interface: ChartOptionsImpl<HorzScaleItem>",description:"Structure describing options of the chart. Series options are to be set separately",source:"@site/docs/api/interfaces/ChartOptionsImpl.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ChartOptionsImpl",permalink:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsImpl",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChartOptionsImpl",title:"Interface: ChartOptionsImpl<HorzScaleItem>",sidebar_label:"ChartOptionsImpl",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"width",id:"width",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"height",id:"height",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"autoSize",id:"autosize",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"watermark",id:"watermark",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"layout",id:"layout",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"leftPriceScale",id:"leftpricescale",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"rightPriceScale",id:"rightpricescale",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"overlayPriceScales",id:"overlaypricescales",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"timeScale",id:"timescale",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"crosshair",id:"crosshair",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"grid",id:"grid",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"handleScroll",id:"handlescroll",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"handleScale",id:"handlescale",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"kineticScroll",id:"kineticscroll",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"trackingMode",id:"trackingmode",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"localization",id:"localization",level:3},{value:"Overrides",id:"overrides",level:4}],h={toc:s},g="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,i.c)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Structure describing options of the chart. Series options are to be set separately"),(0,r.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem"))))),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},(0,r.yg)("inlineCode",{parentName:"a"},"ChartOptionsBase"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"ChartOptionsImpl"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/TimeChartOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"TimeChartOptions"))))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"width"},"width"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"width"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,"Width of the chart in pixels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#width"},"width")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"height"},"height"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"height"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,"Height of the chart in pixels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#height"},"height")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"autosize"},"autoSize"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"autoSize"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Setting this flag to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," will make the chart watch the chart container's size and automatically resize the chart to fit its container whenever the size changes."),(0,r.yg)("p",null,"This feature requires ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},(0,r.yg)("inlineCode",{parentName:"a"},"ResizeObserver"))," class to be available in the global scope.\nNote that calling code is responsible for providing a polyfill if required. If the global scope does not have ",(0,r.yg)("inlineCode",{parentName:"p"},"ResizeObserver"),", a warning will appear and the flag will be ignored."),(0,r.yg)("p",null,"Please pay attention that ",(0,r.yg)("inlineCode",{parentName:"p"},"autoSize")," option and explicit sizes options ",(0,r.yg)("inlineCode",{parentName:"p"},"width")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"height")," don't conflict with one another.\nIf you specify ",(0,r.yg)("inlineCode",{parentName:"p"},"autoSize")," flag, then ",(0,r.yg)("inlineCode",{parentName:"p"},"width")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"height")," options will be ignored unless ",(0,r.yg)("inlineCode",{parentName:"p"},"ResizeObserver")," has failed. If it fails then the values will be used as fallback."),(0,r.yg)("p",null,"The flag ",(0,r.yg)("inlineCode",{parentName:"p"},"autoSize")," could also be set with and unset with ",(0,r.yg)("inlineCode",{parentName:"p"},"applyOptions")," function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(document.body, {\n    autoSize: true,\n});\n")),(0,r.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#autosize"},"autoSize")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"watermark"},"watermark"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"watermark"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WatermarkOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"WatermarkOptions"))),(0,r.yg)("p",null,"Watermark options."),(0,r.yg)("p",null,"A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it."),(0,r.yg)("p",null,"Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.\nWe recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally."),(0,r.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#watermark"},"watermark")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"layout"},"layout"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"layout"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"LayoutOptions"))),(0,r.yg)("p",null,"Layout options"),(0,r.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#layout"},"layout")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"leftpricescale"},"leftPriceScale"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"leftPriceScale"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,r.yg)("p",null,"Left price scale options"),(0,r.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#leftpricescale"},"leftPriceScale")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"rightpricescale"},"rightPriceScale"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"rightPriceScale"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,r.yg)("p",null,"Right price scale options"),(0,r.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#rightpricescale"},"rightPriceScale")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"overlaypricescales"},"overlayPriceScales"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"overlayPriceScales"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#overlaypricescaleoptions"},(0,r.yg)("inlineCode",{parentName:"a"},"OverlayPriceScaleOptions"))),(0,r.yg)("p",null,"Overlay price scale options"),(0,r.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#overlaypricescales"},"overlayPriceScales")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"timescale"},"timeScale"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"timeScale"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"HorzScaleOptions"))),(0,r.yg)("p",null,"Time scale options"),(0,r.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#timescale"},"timeScale")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"crosshair"},"crosshair"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"crosshair"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CrosshairOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"CrosshairOptions"))),(0,r.yg)("p",null,"The crosshair shows the intersection of the price and time scale values at any point on the chart."),(0,r.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#crosshair"},"crosshair")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"grid"},"grid"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"grid"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/GridOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"GridOptions"))),(0,r.yg)("p",null,"A grid is represented in the chart background as a vertical and horizontal lines drawn at the levels of visible marks of price and the time scales."),(0,r.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#grid"},"grid")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"handlescroll"},"handleScroll"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"handleScroll"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HandleScrollOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"HandleScrollOptions"))),(0,r.yg)("p",null,"Scroll options, or a boolean flag that enables/disables scrolling"),(0,r.yg)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#handlescroll"},"handleScroll")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"handlescale"},"handleScale"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"handleScale"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HandleScaleOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"HandleScaleOptions"))),(0,r.yg)("p",null,"Scale options, or a boolean flag that enables/disables scaling"),(0,r.yg)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#handlescale"},"handleScale")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"kineticscroll"},"kineticScroll"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"kineticScroll"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/KineticScrollOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"KineticScrollOptions"))),(0,r.yg)("p",null,"Kinetic scroll options"),(0,r.yg)("h4",{id:"inherited-from-13"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#kineticscroll"},"kineticScroll")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"trackingmode"},"trackingMode"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"trackingMode"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/TrackingModeOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"TrackingModeOptions"))),(0,r.yg)("p",null,"Represent options for the tracking mode's behavior."),(0,r.yg)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."),(0,r.yg)("h4",{id:"inherited-from-14"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#trackingmode"},"trackingMode")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"localization"},"localization"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"localization"),": ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"LocalizationOptions")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,r.yg)("p",null,"Localization options."),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase"},"ChartOptionsBase"),".",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#localization"},"localization")))}c.isMDXComponent=!0}}]);