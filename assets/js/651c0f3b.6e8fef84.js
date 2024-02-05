"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1736,6752],{98436:(t,n,e)=>{e.d(n,{cp:()=>h});var o=e(45072),a=(e(11504),e(95788));const r={toc:[]},i="wrapper";function h(t){let{components:n,...e}=t;return(0,a.yg)(i,(0,o.c)({},r,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("details",null,(0,a.yg)("summary",null,"How to use the code sample"),(0,a.yg)("strong",null,"The code presented below requires:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"That ",(0,a.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,a.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,a.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,a.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,a.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,a.yg)("p",null,"Here is an example skeleton setup: ",(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,a.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}h.isMDXComponent=!0},59641:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var o=e(45072),a=(e(11504),e(95788)),r=e(98436),i=e(62252);const h="// remove-start\n// Lightweight Charts\u2122 Example: Series Markers\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/series-markers\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst series = chart.addCandlestickSeries({\n\tupColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false,\n\twickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR,\n});\n\nconst data = [\n\t{\n\t\ttime: { year: 2018, month: 9, day: 22 },\n\t\topen: 29.630237296336794,\n\t\thigh: 35.36950035097501,\n\t\tlow: 26.21522501353531,\n\t\tclose: 30.734997177569916,\n\t},\n\t// hide-start\n\t{\n\t\ttime: { year: 2018, month: 9, day: 23 },\n\t\topen: 32.267626500691215,\n\t\thigh: 34.452661663723774,\n\t\tlow: 26.096868360824704,\n\t\tclose: 29.573918833457004,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 24 },\n\t\topen: 27.33996760497746,\n\t\thigh: 35.8060364835531,\n\t\tlow: 27.33996760497746,\n\t\tclose: 33.06283432964511,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 25 },\n\t\topen: 31.1654368745013,\n\t\thigh: 31.97284477478497,\n\t\tlow: 26.766743287285593,\n\t\tclose: 27.364979322283386,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 26 },\n\t\topen: 29.5901452337888,\n\t\thigh: 32.147919593347474,\n\t\tlow: 27.53289219709677,\n\t\tclose: 29.202912415085272,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 27 },\n\t\topen: 27.561741523265923,\n\t\thigh: 35.11649043301526,\n\t\tlow: 25.20035866163233,\n\t\tclose: 31.14520649627546,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 28 },\n\t\topen: 31.925975006823798,\n\t\thigh: 31.925975006823798,\n\t\tlow: 28.998500720406675,\n\t\tclose: 29.87723790403876,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 29 },\n\t\topen: 30.826956088992475,\n\t\thigh: 34.79463130873015,\n\t\tlow: 25.291546123273097,\n\t\tclose: 28.994812708315987,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 9, day: 30 },\n\t\topen: 31.202920145287838,\n\t\thigh: 33.19178819590413,\n\t\tlow: 23.94419012923956,\n\t\tclose: 31.47253745770869,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 1 },\n\t\topen: 26.927794164758666,\n\t\thigh: 34.6744456778885,\n\t\tlow: 26.927794164758666,\n\t\tclose: 31.091122539737423,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 2 },\n\t\topen: 26.452041173938298,\n\t\thigh: 34.527917622572154,\n\t\tlow: 26.452041173938298,\n\t\tclose: 27.65703395829094,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 3 },\n\t\topen: 27.74629982387605,\n\t\thigh: 29.300441707649835,\n\t\tlow: 23.761300216231263,\n\t\tclose: 29.182874625005628,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 4 },\n\t\topen: 30.41599722290526,\n\t\thigh: 31.942643078777103,\n\t\tlow: 27.09925359459428,\n\t\tclose: 30.918477883682872,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 5 },\n\t\topen: 25.76549797105683,\n\t\thigh: 33.4650523853759,\n\t\tlow: 25.76549797105683,\n\t\tclose: 28.15984801386293,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 6 },\n\t\topen: 27.543404135965382,\n\t\thigh: 30.7227783000902,\n\t\tlow: 25.749951838020884,\n\t\tclose: 29.150903848724184,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 7 },\n\t\topen: 29.34759861812077,\n\t\thigh: 31.08503530472835,\n\t\tlow: 23.395022079647823,\n\t\tclose: 25.00923131079722,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 8 },\n\t\topen: 27.00266154335036,\n\t\thigh: 29.51599687178633,\n\t\tlow: 23.46749249241176,\n\t\tclose: 28.702932483799707,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 9 },\n\t\topen: 25.569958099853594,\n\t\thigh: 27.669071502065417,\n\t\tlow: 25.569958099853594,\n\t\tclose: 25.626920473922613,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 10 },\n\t\topen: 24.886919828178304,\n\t\thigh: 27.167620185117006,\n\t\tlow: 23.71595991386752,\n\t\tclose: 23.71595991386752,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 11 },\n\t\topen: 26.14124249813686,\n\t\thigh: 29.5638477987916,\n\t\tlow: 20.82341105699825,\n\t\tclose: 25.563138238511257,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 12 },\n\t\topen: 22.26412127509447,\n\t\thigh: 27.637685003390743,\n\t\tlow: 20.838507431464958,\n\t\tclose: 22.450517792778047,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 13 },\n\t\topen: 25.75099239090953,\n\t\thigh: 28.12000626118839,\n\t\tlow: 21.929748303510852,\n\t\tclose: 22.63015682488669,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 14 },\n\t\topen: 25.428132591291497,\n\t\thigh: 25.999229490809693,\n\t\tlow: 22.266121337091555,\n\t\tclose: 23.51047528528147,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 15 },\n\t\topen: 25.07416967939059,\n\t\thigh: 25.50535192500713,\n\t\tlow: 21.96666570325133,\n\t\tclose: 21.96666570325133,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 16 },\n\t\topen: 24.957206161449307,\n\t\thigh: 26.679727314857256,\n\t\tlow: 20.196753994637245,\n\t\tclose: 21.523347810451863,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 17 },\n\t\topen: 23.705184745772733,\n\t\thigh: 26.754094837621004,\n\t\tlow: 18.724184302695104,\n\t\tclose: 20.160857555541725,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 18 },\n\t\topen: 21.95610851644136,\n\t\thigh: 22.914889536420105,\n\t\tlow: 19.567733140100472,\n\t\tclose: 22.914889536420105,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 19 },\n\t\topen: 23.216357873687972,\n\t\thigh: 25.44815512734246,\n\t\tlow: 19.54787451276509,\n\t\tclose: 20.76851802225937,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 20 },\n\t\topen: 19.6289025950405,\n\t\thigh: 24.290702755740412,\n\t\tlow: 19.041541929894358,\n\t\tclose: 22.48608548162324,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 21 },\n\t\topen: 23.599000037544915,\n\t\thigh: 26.839019853462844,\n\t\tlow: 20.884129956680898,\n\t\tclose: 22.01878871761756,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 22 },\n\t\topen: 24.618502768742008,\n\t\thigh: 28.00099352255492,\n\t\tlow: 23.061935629399088,\n\t\tclose: 23.061935629399088,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 23 },\n\t\topen: 23.840701995876866,\n\t\thigh: 28.494382608429564,\n\t\tlow: 23.840701995876866,\n\t\tclose: 25.321841131665526,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 24 },\n\t\topen: 27.764925733189372,\n\t\thigh: 31.05550601484776,\n\t\tlow: 22.810929726970702,\n\t\tclose: 30.02406259204889,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 25 },\n\t\topen: 29.703149280184604,\n\t\thigh: 34.0185175501095,\n\t\tlow: 26.82967654698301,\n\t\tclose: 32.06834171351323,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 26 },\n\t\topen: 29.0251492427822,\n\t\thigh: 36.89478162439007,\n\t\tlow: 28.3502671011196,\n\t\tclose: 32.822663125409356,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 27 },\n\t\topen: 35.040777462643284,\n\t\thigh: 35.12524316379231,\n\t\tlow: 26.805156020579663,\n\t\tclose: 34.23626219571325,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 28 },\n\t\topen: 31.21349419519032,\n\t\thigh: 35.73068910379853,\n\t\tlow: 31.064101813812698,\n\t\tclose: 34.75020857236565,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 29 },\n\t\topen: 32.34914826794689,\n\t\thigh: 42.381605482695505,\n\t\tlow: 30.176750284055878,\n\t\tclose: 39.24138147444552,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 30 },\n\t\topen: 38.84583808993371,\n\t\thigh: 41.75165839362154,\n\t\tlow: 33.37106955991806,\n\t\tclose: 35.93904098275507,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 10, day: 31 },\n\t\topen: 37.070183005323564,\n\t\thigh: 44.84460203857022,\n\t\tlow: 35.23671284121251,\n\t\tclose: 36.329972003600034,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 1 },\n\t\topen: 43.31997309164893,\n\t\thigh: 48.43216497187469,\n\t\tlow: 38.30881963355285,\n\t\tclose: 41.554948540677586,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 2 },\n\t\topen: 41.33946811092929,\n\t\thigh: 46.65347243834853,\n\t\tlow: 37.472215586661335,\n\t\tclose: 39.26832265482503,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 3 },\n\t\topen: 44.76468593661226,\n\t\thigh: 44.76468593661226,\n\t\tlow: 40.039672147314235,\n\t\tclose: 43.42106786288436,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 4 },\n\t\topen: 49.13160326887013,\n\t\thigh: 49.13160326887013,\n\t\tlow: 40.93648693038296,\n\t\tclose: 42.17817698294767,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 5 },\n\t\topen: 50.46706012970579,\n\t\thigh: 54.38104598422352,\n\t\tlow: 38.159930155343616,\n\t\tclose: 47.5899156640143,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 6 },\n\t\topen: 48.25899506613569,\n\t\thigh: 48.25899506613569,\n\t\tlow: 45.63208604138365,\n\t\tclose: 45.63208604138365,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 7 },\n\t\topen: 52.45484210527629,\n\t\thigh: 57.55979771849961,\n\t\tlow: 45.23447676016779,\n\t\tclose: 46.01127464234881,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 8 },\n\t\topen: 53.228216675179624,\n\t\thigh: 54.07804814570622,\n\t\tlow: 40.61161433961706,\n\t\tclose: 47.689867390699014,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 9 },\n\t\topen: 46.193099316212816,\n\t\thigh: 56.190537353078824,\n\t\tlow: 45.01246323828753,\n\t\tclose: 49.14012661656766,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 10 },\n\t\topen: 50.409245396927986,\n\t\thigh: 52.3082002787041,\n\t\tlow: 41.764144138886394,\n\t\tclose: 52.3082002787041,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 11 },\n\t\topen: 48.58146178816203,\n\t\thigh: 52.653922195022126,\n\t\tlow: 47.34031788474959,\n\t\tclose: 47.34031788474959,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 12 },\n\t\topen: 46.80040325283692,\n\t\thigh: 56.709349494076804,\n\t\tlow: 45.81605691554122,\n\t\tclose: 45.81605691554122,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 13 },\n\t\topen: 46.042722425788355,\n\t\thigh: 58.476056411825695,\n\t\tlow: 46.042722425788355,\n\t\tclose: 51.2300776481609,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 14 },\n\t\topen: 53.909068487588385,\n\t\thigh: 60.240990154306715,\n\t\tlow: 45.230741063278664,\n\t\tclose: 51.34529637385427,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 15 },\n\t\topen: 53.739609857086606,\n\t\thigh: 53.739609857086606,\n\t\tlow: 44.38017019990068,\n\t\tclose: 47.595960698697894,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 16 },\n\t\topen: 52.52688238296145,\n\t\thigh: 60.9220040817774,\n\t\tlow: 44.27700764117003,\n\t\tclose: 55.27309771985698,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 17 },\n\t\topen: 54.46100795908005,\n\t\thigh: 57.57937841117058,\n\t\tlow: 49.50543170388487,\n\t\tclose: 49.50543170388487,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 18 },\n\t\topen: 51.12284024600029,\n\t\thigh: 57.646718858433026,\n\t\tlow: 48.73280269653226,\n\t\tclose: 51.35457902694444,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 19 },\n\t\topen: 53.536130807863266,\n\t\thigh: 53.536130807863266,\n\t\tlow: 51.29649965636722,\n\t\tclose: 52.99088526565045,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 20 },\n\t\topen: 50.92761950009885,\n\t\thigh: 57.70671943558014,\n\t\tlow: 46.45030483558741,\n\t\tclose: 52.229112575743066,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 21 },\n\t\topen: 49.30035068900293,\n\t\thigh: 58.67691694734525,\n\t\tlow: 44.63563165197862,\n\t\tclose: 58.67691694734525,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 22 },\n\t\topen: 54.230476484061036,\n\t\thigh: 59.03831193868438,\n\t\tlow: 50.77849134047791,\n\t\tclose: 59.03831193868438,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 23 },\n\t\topen: 57.282420985156854,\n\t\thigh: 60.4869735007396,\n\t\tlow: 44.14116488798797,\n\t\tclose: 57.93461310007337,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 24 },\n\t\topen: 54.86833150125539,\n\t\thigh: 64.25102812467448,\n\t\tlow: 52.36616043331222,\n\t\tclose: 52.36616043331222,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 25 },\n\t\topen: 51.689239380620386,\n\t\thigh: 64.29747922654688,\n\t\tlow: 50.71498529572432,\n\t\tclose: 60.518206306602394,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 26 },\n\t\topen: 55.74863310659164,\n\t\thigh: 60.816819055612584,\n\t\tlow: 46.11238607935206,\n\t\tclose: 59.23044859881929,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 27 },\n\t\topen: 52.57406222528308,\n\t\thigh: 64.2058753841427,\n\t\tlow: 48.163404012323305,\n\t\tclose: 60.593847809696896,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 28 },\n\t\topen: 57.50710740029724,\n\t\thigh: 60.12123058977347,\n\t\tlow: 49.61839271711267,\n\t\tclose: 53.29152711098895,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 29 },\n\t\topen: 57.33581828303538,\n\t\thigh: 58.92432332528284,\n\t\tlow: 53.27790061455899,\n\t\tclose: 57.02787118731709,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 11, day: 30 },\n\t\topen: 57.527445314328595,\n\t\thigh: 67.63249690962569,\n\t\tlow: 49.603261485289146,\n\t\tclose: 54.589123556483656,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 1 },\n\t\topen: 59.98835793934424,\n\t\thigh: 65.51917884840141,\n\t\tlow: 52.32535994476165,\n\t\tclose: 62.127135611086565,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 2 },\n\t\topen: 52.509550731662536,\n\t\thigh: 58.49971806419494,\n\t\tlow: 52.509550731662536,\n\t\tclose: 54.759948868082255,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 3 },\n\t\topen: 58.08470541982317,\n\t\thigh: 62.74987556918568,\n\t\tlow: 47.85627992158991,\n\t\tclose: 58.690428071336406,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 4 },\n\t\topen: 58.28482939034761,\n\t\thigh: 69.16675825892361,\n\t\tlow: 57.41588944088662,\n\t\tclose: 57.74515245619454,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 5 },\n\t\topen: 60.004299871302464,\n\t\thigh: 65.82447121605708,\n\t\tlow: 53.13330527599658,\n\t\tclose: 57.64488004774012,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 6 },\n\t\topen: 61.92746155137417,\n\t\thigh: 64.36944842979646,\n\t\tlow: 49.470442234694225,\n\t\tclose: 59.94404434023895,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 7 },\n\t\topen: 63.72235832229121,\n\t\thigh: 66.33649390307095,\n\t\tlow: 49.91822946887207,\n\t\tclose: 63.56396375320479,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 8 },\n\t\topen: 56.64594047326664,\n\t\thigh: 65.3730920902599,\n\t\tlow: 52.604389283975664,\n\t\tclose: 60.71684658387917,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 9 },\n\t\topen: 58.89798885700999,\n\t\thigh: 68.04578543284373,\n\t\tlow: 58.89798885700999,\n\t\tclose: 63.36111469854223,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 10 },\n\t\topen: 58.869685789579826,\n\t\thigh: 70.99828637845869,\n\t\tlow: 52.36901833289119,\n\t\tclose: 63.15473262144694,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 11 },\n\t\topen: 57.61362492091653,\n\t\thigh: 66.41975632948531,\n\t\tlow: 50.827182111530895,\n\t\tclose: 61.770769489947064,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 12 },\n\t\topen: 57.869332957269656,\n\t\thigh: 66.28374056429257,\n\t\tlow: 57.05028878520954,\n\t\tclose: 63.87762958979595,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 13 },\n\t\topen: 68.14347595614306,\n\t\thigh: 73.46304446829079,\n\t\tlow: 50.83319311788897,\n\t\tclose: 66.9144140431443,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 14 },\n\t\topen: 56.95907344942102,\n\t\thigh: 68.81432823196859,\n\t\tlow: 56.95907344942102,\n\t\tclose: 60.69722290026252,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 15 },\n\t\topen: 69.14662166493828,\n\t\thigh: 69.14662166493828,\n\t\tlow: 58.59143795311565,\n\t\tclose: 66.25235616866007,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 16 },\n\t\topen: 64.0373004661208,\n\t\thigh: 72.91321850066319,\n\t\tlow: 52.079104978168345,\n\t\tclose: 65.92678310822487,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 17 },\n\t\topen: 68.81814300123497,\n\t\thigh: 69.51927964796873,\n\t\tlow: 62.70935477415118,\n\t\tclose: 65.64565364397754,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 18 },\n\t\topen: 63.47554821643351,\n\t\thigh: 73.6284398311906,\n\t\tlow: 58.996882824636856,\n\t\tclose: 58.996882824636856,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 19 },\n\t\topen: 69.97765183896102,\n\t\thigh: 69.97765183896102,\n\t\tlow: 58.73355952507237,\n\t\tclose: 58.73355952507237,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 20 },\n\t\topen: 63.22638756186111,\n\t\thigh: 65.67137242291682,\n\t\tlow: 59.9542779777421,\n\t\tclose: 61.20003065016431,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 21 },\n\t\topen: 59.690029086102506,\n\t\thigh: 78.08665559197297,\n\t\tlow: 54.862707942292275,\n\t\tclose: 70.58935191024504,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 22 },\n\t\topen: 66.29092355620301,\n\t\thigh: 71.82667261213395,\n\t\tlow: 65.28001993201676,\n\t\tclose: 71.82667261213395,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 23 },\n\t\topen: 60.92645998120027,\n\t\thigh: 74.21283998861118,\n\t\tlow: 57.331119016099116,\n\t\tclose: 60.36728842356329,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 24 },\n\t\topen: 60.211957192084036,\n\t\thigh: 72.37883919241614,\n\t\tlow: 60.211957192084036,\n\t\tclose: 72.37883919241614,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 25 },\n\t\topen: 64.80282266865653,\n\t\thigh: 71.00204457933133,\n\t\tlow: 54.58446926152339,\n\t\tclose: 69.9468262738086,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 26 },\n\t\topen: 66.28091239894763,\n\t\thigh: 81.00843300529249,\n\t\tlow: 54.56212171317677,\n\t\tclose: 69.58528111643206,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 27 },\n\t\topen: 66.38479296949795,\n\t\thigh: 79.97207476893692,\n\t\tlow: 59.738742243860464,\n\t\tclose: 73.77893045661807,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 28 },\n\t\topen: 73.80105714462456,\n\t\thigh: 73.80105714462456,\n\t\tlow: 59.95172576316864,\n\t\tclose: 73.49823170047799,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 29 },\n\t\topen: 75.65816205696441,\n\t\thigh: 75.65816205696441,\n\t\tlow: 63.710206287837266,\n\t\tclose: 63.710206287837266,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 30 },\n\t\topen: 70.43199072631421,\n\t\thigh: 80.48229715762909,\n\t\tlow: 62.65542750589909,\n\t\tclose: 63.42588929424237,\n\t},\n\t{\n\t\ttime: { year: 2018, month: 12, day: 31 },\n\t\topen: 74.18101512382138,\n\t\thigh: 79.0918171034821,\n\t\tlow: 57.80109358134577,\n\t\tclose: 72.91361896511863,\n\t},\n\t// hide-end\n];\nseries.setData(data);\n\n// determining the dates for the 'buy' and 'sell' markers added below.\nconst datesForMarkers = [data[data.length - 39], data[data.length - 19]];\nlet indexOfMinPrice = 0;\nfor (let i = 1; i < datesForMarkers.length; i++) {\n\tif (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {\n\t\tindexOfMinPrice = i;\n\t}\n}\n\n// highlight-start\nconst markers = [\n\t{\n\t\ttime: data[data.length - 48].time,\n\t\tposition: 'aboveBar',\n\t\tcolor: '#f68410',\n\t\tshape: 'circle',\n\t\ttext: 'D',\n\t},\n];\nfor (let i = 0; i < datesForMarkers.length; i++) {\n\tif (i !== indexOfMinPrice) {\n\t\tmarkers.push({\n\t\t\ttime: datesForMarkers[i].time,\n\t\t\tposition: 'aboveBar',\n\t\t\tcolor: '#e91e63',\n\t\t\tshape: 'arrowDown',\n\t\t\ttext: 'Sell @ ' + Math.floor(datesForMarkers[i].high + 2),\n\t\t});\n\t} else {\n\t\tmarkers.push({\n\t\t\ttime: datesForMarkers[i].time,\n\t\t\tposition: 'belowBar',\n\t\t\tcolor: '#2196F3',\n\t\t\tshape: 'arrowUp',\n\t\t\ttext: 'Buy @ ' + Math.floor(datesForMarkers[i].low - 2),\n\t\t});\n\t}\n}\nseries.setMarkers(markers);\n// highlight-end\n\nchart.timeScale().fitContent();\n",l={title:"Add Series Markers",sidebar_label:"Series Markers",description:"An example of how to add markers to a series on the chart.",pagination_prev:null,pagination_next:null,keywords:["series","markers"]},s=void 0,m={unversionedId:"how_to/series-markers",id:"how_to/series-markers",title:"Add Series Markers",description:"An example of how to add markers to a series on the chart.",source:"@site/tutorials/how_to/series-markers.mdx",sourceDirName:"how_to",slug:"/how_to/series-markers",permalink:"/lightweight-charts/tutorials/how_to/series-markers",draft:!1,tags:[],version:"current",frontMatter:{title:"Add Series Markers",sidebar_label:"Series Markers",description:"An example of how to add markers to a series on the chart.",pagination_prev:null,pagination_next:null,keywords:["series","markers"]},sidebar:"tutorialsSidebar"},c={},d=[{value:"Short answer",id:"short-answer",level:2},{value:"Further information",id:"further-information",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],y={toc:d},p="wrapper";function g(t){let{components:n,...e}=t;return(0,a.yg)(p,(0,o.c)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A series marker is an annotation which can be drawn on the chart at a specific point.\nIt can be used to draw attention to specific events within the data set.\nThis example shows how to add series markers to your chart."),(0,a.yg)("h2",{id:"short-answer"},"Short answer"),(0,a.yg)("p",null,"You can add markers to a series by passing an array of ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/SeriesMarker"},(0,a.yg)("inlineCode",{parentName:"a"},"seriesMarker")),"\nobjects to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ISeriesApi#setmarkers"},(0,a.yg)("inlineCode",{parentName:"a"},"setMarkers"))," method on\nan ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ISeriesApi"},(0,a.yg)("inlineCode",{parentName:"a"},"ISeriesApi"))," instance."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const markers = [\n    {\n        time: { year: 2018, month: 12, day: 23 },\n        position: 'aboveBar',\n        color: '#f68410',\n        shape: 'circle',\n        text: 'A',\n    },\n];\nseries.setMarkers(markers);\n")),(0,a.yg)("p",null,"You can see a full ",(0,a.yg)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,a.yg)("h2",{id:"further-information"},"Further information"),(0,a.yg)("p",null,"A series marker is an annotation which can be attached to a specific data point within a series.\nWe don't need to specify a vertical price value but rather only the ",(0,a.yg)("inlineCode",{parentName:"p"},"time")," property since the\nmarker will determine it's vertical position from the data points values (such as ",(0,a.yg)("inlineCode",{parentName:"p"},"high")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"low")," in the case of candlestick data) and the specified ",(0,a.yg)("inlineCode",{parentName:"p"},"position")," property (",(0,a.yg)("a",{parentName:"p",href:"/docs/api#seriesmarkerposition"},"SeriesMarkerPosition"),")."),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("p",null,"You can view the related APIs here:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SeriesMarker"},"SeriesMarker")," - Series Marker interface."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api#seriesmarkerposition"},"SeriesMarkerPosition")," - Positions that can be set for the marker."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api#seriesmarkershape"},"SeriesMarkerShape")," - Shapes that can be set for the marker."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api/interfaces/ISeriesApi#setmarkers"},"setMarkers")," - Method for adding markers to a series."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api#time"},"Time Types")," - Different time formats available to use.")),(0,a.yg)("h2",{id:"full-example"},"Full example"),(0,a.yg)(r.cp,{mdxType:"UsageGuidePartial"}),(0,a.yg)(i.cp,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},h))}g.isMDXComponent=!0},62252:(t,n,e)=>{e.d(n,{cp:()=>u});var o=e(11504),a=e(89066),r=e(60656),i=e(66528),h=e(94592),l=e(14640);function s(t,n,e){t.addEventListener("resize",(()=>{const t=n.getBoundingClientRect();e(t.width,t.height)}),!0)}const m={3.8:async t=>{const n=await e.e(7168).then(e.bind(e,37168));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},"4.0":async t=>{const n=await e.e(5452).then(e.bind(e,5452));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},4.1:async t=>{const n=await e.e(4956).then(e.bind(e,64956));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},current:async()=>{const t=await e.e(7152).then(e.bind(e,27152));return{module:t,createChart:(n,e)=>{const o=t.createChart(n,e);return s(window,n,o.resize.bind(o)),o}}}},c="iframe_R_Fr";function d(t){const{script:n,iframeStyle:e}=t,{preferredVersion:a}=(0,h.iy)(),r=l&&l.length>0?l[0]:"",i=a?.name??r??"current",s=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(n),d=o.useRef(null);return o.useEffect((()=>{const t=d.current,n=t?.contentWindow,e=t?.contentDocument;if(null===t||!n||!e)return;const o=async()=>{try{const{module:t,createChart:e}=await m[i](n);Object.assign(n,t),n.createChart=e,n.run?.()}catch(t){console.error(t)}};if(void 0!==n.run)o();else{const n=()=>{o(),t.removeEventListener("load",n)};t.addEventListener("load",n)}}),[s]),o.createElement("iframe",{key:n,ref:d,srcDoc:s,className:c,style:e})}var y=e(48256);const p=()=>`${Math.random().toString(36).slice(2,11)}`;function g(t){return"string"==typeof t?t:function(){const[t,n]=(0,o.useState)("");return(0,o.useEffect)((()=>n(p())),[]),t}()}const w=Object.keys(y.v.DARK);const u=t=>{const{chart:n,replaceThemeConstants:e,hideableCode:h,chartOnly:l,iframeStyle:s,...m}=t;let{children:p}=t;const{colorMode:u}=(0,i.U)(),O="dark"===u,f=g();return e&&"string"==typeof p&&(p=function(t,n){const e=n?y.v.DARK:y.v.LIGHT;let o=t;for(const a of w)o=o.replace(new RegExp(a,"g"),`'${e[a]}'`);return o}(p,O)),p=p.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),n||h?o.createElement(o.Fragment,null,h&&o.createElement(o.Fragment,null,o.createElement("input",{id:f,type:"checkbox",className:"toggle-hidden-lines"}),o.createElement("label",{className:"toggle-label",htmlFor:f},"Show all code")),!l&&o.createElement(a.c,m,p),n&&o.createElement(r.c,{fallback:o.createElement("div",{className:c},"\xa0")},(()=>o.createElement(d,{script:p,iframeStyle:s})))):o.createElement(a.c,m,p)}},48256:(t,n,e)=>{e.d(n,{v:()=>o});const o={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},14640:t=>{t.exports=["4.1","4.0","3.8"]}}]);