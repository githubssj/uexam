(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c5c63e0"],{4138:function(t,e,a){t.exports=a.p+"static/img/show2.e831e7c2.png"},"4b84":function(t,e,a){t.exports=a.p+"static/img/3.8bf0150a.png"},"5ae8":function(t,e,a){"use strict";var s=a("89e4"),A=a.n(s);A.a},"7e3b":function(t,e,a){t.exports=a.p+"static/img/4.8f00b10d.png"},"830d":function(t,e,a){t.exports=a.p+"static/img/1.be57c566.png"},"89e4":function(t,e,a){},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-top":"10px"}},[s("el-row",[s("el-carousel",{attrs:{interval:5e3,arrow:"always",type:"card"}},[s("el-carousel-item",[s("img",{staticClass:"carousel-img",attrs:{src:a("830d")}})]),s("el-carousel-item",[s("img",{staticClass:"carousel-img",attrs:{src:a("a62a")}})]),s("el-carousel-item",[s("img",{staticClass:"carousel-img",attrs:{src:a("4b84")}})]),s("el-carousel-item",[s("img",{staticClass:"carousel-img",attrs:{src:a("7e3b")}})])],1)],1),s("el-row",{staticClass:"app-item-contain"},[s("h3",{staticClass:"index-title-h3",staticStyle:{"border-left":"solid 10px #3651d4"}},[t._v("任务中心")]),s("div",{staticStyle:{"padding-left":"15px"}},[0!==t.taskList.length?s("el-collapse",{directives:[{name:"loading",rawName:"v-loading",value:t.taskLoading,expression:"taskLoading"}],attrs:{accordion:""}},t._l(t.taskList,(function(e){return s("el-collapse-item",{key:e.id,attrs:{title:e.title,name:e.id}},[s("table",{staticClass:"index-task-table"},t._l(e.paperItems,(function(e){return s("tr",{key:e.examPaperId},[s("td",{staticClass:"index-task-table-paper"},[t._v(" "+t._s(e.examPaperName)+" ")]),s("td",{attrs:{width:"70px"}},[null!==e.status?s("el-tag",{attrs:{type:t.statusTagFormatter(e.status),size:"mini"}},[t._v(" "+t._s(t.statusTextFormatter(e.status))+" ")]):t._e()],1),s("td",{attrs:{width:"80px"}},[null===e.status?s("router-link",{attrs:{target:"_blank",to:{path:"/do",query:{id:e.examPaperId}}}},[s("el-button",{attrs:{type:"text",size:"small"}},[t._v("开始答题")])],1):1===e.status?s("router-link",{attrs:{target:"_blank",to:{path:"/edit",query:{id:e.examPaperAnswerId}}}},[s("el-button",{attrs:{type:"text",size:"small"}},[t._v("批改试卷")])],1):2===e.status?s("router-link",{attrs:{target:"_blank",to:{path:"/read",query:{id:e.examPaperAnswerId}}}},[s("el-button",{attrs:{type:"text",size:"small"}},[t._v("查看试卷")])],1):t._e()],1)])})),0)])})),1):t._e()],1)]),s("el-row",{staticClass:"app-item-contain"},[s("h3",{staticClass:"index-title-h3"},[t._v("固定试卷")]),s("div",{staticStyle:{"padding-left":"15px"}},t._l(t.fixedPaper,(function(e,A){return s("el-col",{key:A,attrs:{span:4,offset:A>0?1:0}},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("b401")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v(t._s(e.name))]),s("div",{staticClass:"bottom clearfix"},[s("router-link",{attrs:{target:"_blank",to:{path:"/do",query:{id:e.id}}}},[s("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("开始做题")])],1)],1)])])],1)})),1)]),s("el-row",{staticClass:"app-item-contain"},[s("h3",{staticClass:"index-title-h3",staticStyle:{"border-left":"solid 10px rgb(220, 208, 65)"}},[t._v("时段试卷")]),s("div",{staticStyle:{"padding-left":"15px"}},t._l(t.timeLimitPaper,(function(e,A){return s("el-col",{key:A,attrs:{span:4,offset:A>0?1:0}},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("4138")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v(t._s(e.name))]),s("p",{staticClass:"index-limit-paper-time"},[s("span",[t._v(t._s(e.startTime))]),s("br"),s("span",[t._v(t._s(e.endTime))])]),s("div",{staticClass:"bottom clearfix"},[s("router-link",{attrs:{target:"_blank",to:{path:"/do",query:{id:e.id}}}},[s("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("开始做题")])],1)],1)])])],1)})),1)]),s("el-row",{staticClass:"app-item-contain"},[s("h3",{staticClass:"index-title-h3",staticStyle:{"border-left":"solid 10px #e454b1"}},[t._v("推送试卷")]),s("div",{staticStyle:{"padding-left":"15px"}},t._l(t.pushPaper,(function(e,A){return s("el-col",{key:e,attrs:{span:4,offset:A>0?1:0}},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("bd78")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v(t._s(t.item.name))]),s("p",{staticClass:"index-limit-paper-time"},[s("span",[t._v(t._s(t.item.startTime))]),s("br"),s("span",[t._v(t._s(t.item.endTime))])]),s("div",{staticClass:"bottom clearfix"},[s("router-link",{attrs:{target:"_blank",to:{path:"/do",query:{id:t.item.id}}}},[s("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("开始做题")])],1)],1)])])],1)})),1)])],1)},A=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),r=a("2f62"),n=a("b775"),o={index:function(){return Object(n["a"])("/api/student/dashboard/index")},task:function(){return Object(n["a"])("/api/student/dashboard/task")}};function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={data:function(){return{fixedPaper:[],timeLimitPaper:[],pushPaper:[],loading:!1,taskLoading:!1,taskList:[]}},created:function(){var t=this;this.loading=!0,o.index().then((function(e){t.fixedPaper=e.response.fixedPaper,t.timeLimitPaper=e.response.timeLimitPaper,t.pushPaper=e.response.pushPaper,t.loading=!1})),this.taskLoading=!0,o.task().then((function(e){t.taskList=e.response,t.taskLoading=!1}))},methods:{statusTagFormatter:function(t){return this.enumFormat(this.statusTag,t)},statusTextFormatter:function(t){return this.enumFormat(this.statusEnum,t)}},computed:l({},Object(r["c"])("enumItem",["enumFormat"]),{},Object(r["e"])("enumItem",{statusEnum:function(t){return t.exam.examPaperAnswer.statusEnum},statusTag:function(t){return t.exam.examPaperAnswer.statusTag}}))},g=d,p=(a("5ae8"),a("2877")),m=Object(p["a"])(g,s,A,!1,null,"21daf85a",null);e["default"]=m.exports},a62a:function(t,e,a){t.exports=a.p+"static/img/2.29f439e3.png"},b401:function(t,e){t.exports="data:image/png;base64,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"},bd78:function(t,e,a){t.exports=a.p+"static/img/show3.c6a482d1.png"}}]);