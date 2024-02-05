"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5272],{95788:(e,t,i)=>{i.d(t,{Iu:()=>u,yg:()=>g});var a=i(11504);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return i?a.createElement(g,r(r({ref:t},u),{},{components:i})):a.createElement(g,r({ref:t},u))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43724:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(45072),n=(i(11504),i(95788));const o={sidebar_position:0,sidebar_label:"Introduction",pagination_title:"Introduction",title:"Customizing the Chart",description:"This tutorial provides an introduction to customizing Lightweight Chart's appearance and functionality.",keywords:["customization","appearance","styling"],pagination_prev:null,pagination_next:"customization/creating-a-chart"},r="Customization - Introduction",l={unversionedId:"customization/intro",id:"customization/intro",title:"Customizing the Chart",description:"This tutorial provides an introduction to customizing Lightweight Chart's appearance and functionality.",source:"@site/tutorials/customization/intro.mdx",sourceDirName:"customization",slug:"/customization/intro",permalink:"/lightweight-charts/tutorials/customization/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Introduction",pagination_title:"Introduction",title:"Customizing the Chart",description:"This tutorial provides an introduction to customizing Lightweight Chart's appearance and functionality.",keywords:["customization","appearance","styling"],pagination_prev:null,pagination_next:"customization/creating-a-chart"},sidebar:"tutorialsSidebar",next:{title:"First steps",permalink:"/lightweight-charts/tutorials/customization/creating-a-chart"}},s={},c=[{value:"What we will be building",id:"what-we-will-be-building",level:2},{value:"Topics to be covered",id:"topics-to-be-covered",level:2},{value:"Prerequisite knowledge",id:"prerequisite-knowledge",level:2},{value:"Terminology",id:"terminology",level:2},{value:"How to set up the example so you can follow along",id:"how-to-set-up-the-example-so-you-can-follow-along",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,a.c)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"customization---introduction"},"Customization - Introduction"),(0,n.yg)("p",null,"This tutorial provides an introduction to customizing Lightweight Charts\u2122 appearance and functionality. It is not meant as an exhaustive tutorial but rather as a guided tour on how and where to apply options within the API to adjust specific parts of the chart. Along the way, we will provide links to the API documentation which outline the full set of options available for each part of the chart. It is highly recommended that you explore these API links to discover the wide range of possible customization and feature flags contained within Lightweight Charts\u2122."),(0,n.yg)("h2",{id:"what-we-will-be-building"},"What we will be building"),(0,n.yg)("p",null,"Before we get started, let us have a look at what we will be building in this tutorial."),(0,n.yg)("iframe",{className:"standalone-iframe",src:i(11328).c}),(0,n.yg)("a",{href:i(11328).c,target:"\\_blank"},"View in a new window"),(0,n.yg)("h2",{id:"topics-to-be-covered"},"Topics to be covered"),(0,n.yg)("p",null,"The following topics will be covered within the tutorial:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Styling the main chart"),(0,n.yg)("li",{parentName:"ul"},"Styling a series"),(0,n.yg)("li",{parentName:"ul"},"Setting a custom price formatter"),(0,n.yg)("li",{parentName:"ul"},"Adjusting the Price Scale"),(0,n.yg)("li",{parentName:"ul"},"Adjusting the Time Scale"),(0,n.yg)("li",{parentName:"ul"},"Customising the Crosshair"),(0,n.yg)("li",{parentName:"ul"},"Adding a second series"),(0,n.yg)("li",{parentName:"ul"},"Customising the appearance of a few data points"),(0,n.yg)("li",{parentName:"ul"},"Adding a simple attribution message"),(0,n.yg)("li",{parentName:"ul"},"Setting a different font")),(0,n.yg)("h2",{id:"prerequisite-knowledge"},"Prerequisite knowledge"),(0,n.yg)("p",null,"The tutorial requires basic knowledge of:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Javascript"),(0,n.yg)("li",{parentName:"ul"},"HTML"),(0,n.yg)("li",{parentName:"ul"},"CSS")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The tutorial will assume that you've already read the ",(0,n.yg)("a",{parentName:"p",href:"/docs"},"Getting Started")," section even though we may repeat a few aspects from that guide.")),(0,n.yg)("h2",{id:"terminology"},"Terminology"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data Series (aka data/dataset):")," A collection of data points representing a specific metric over time."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Series Type:")," A series type specifies how to draw the data on the chart. For example, a line series type will plot the data series on the chart as a series of the data points connected by straight line segments. Available series types: ",(0,n.yg)("a",{parentName:"li",href:"/docs/series-types"},"Series types | Lightweight Charts")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Series:")," A combination of a specified series type and a data series."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Price Scale:")," Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Time Scale:")," Time scale (or time axis) is a horizontal scale at the bottom of the chart that displays the time of bars."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Crosshair:")," Thin vertical and horizontal lines centered on a data point in the chart.")),(0,n.yg)("h2",{id:"how-to-set-up-the-example-so-you-can-follow-along"},"How to set up the example so you can follow along"),(0,n.yg)("p",null,"This guide makes use of a single HTML file which you can download to your computer and run in the browser without the need for any build steps or web servers. The only thing required is an active internet connection such that the Lightweight Charts\u2122 library can be downloaded from the CDN."),(0,n.yg)("p",null,"Provided below is the 'starting point' file for the guide which is a simple HTML page scaffolded out with a single div element (",(0,n.yg)("inlineCode",{parentName:"p"},"#container"),") and a JS function to generate the sample data set. ",(0,n.yg)("strong",{parentName:"p"},"At this point, you won't see anything on the page until we add the chart in the next step.")),(0,n.yg)("p",null,"You can either:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:i(77824).c,download:"customization-tutorial-start.html",target:"\\_blank"},"Download the file")," and then edit and run the example on your computer,"),(0,n.yg)("li",{parentName:"ul"},"or ",(0,n.yg)("a",{parentName:"li",href:"https://jsfiddle.net/TradingView/5h76xeqk/"},"open this JSFiddle")," and then edit and run the example within the browser.")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"At the end of each section will be a link to download the example at that stage of the guide, and a full code block.")))}h.isMDXComponent=!0},77824:(e,t,i)=>{i.d(t,{c:()=>a});const a=i.p+"b75a863c69ac849528696e2770bdb75f.html"},11328:(e,t,i)=>{i.d(t,{c:()=>a});const a=i.p+"6a391aaf940104ae3626bf595da318b6.html"}}]);