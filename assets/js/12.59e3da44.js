(window.webpackJsonp=window.webpackJsonp||[]).push([[12,17,18],{364:function(t,e,n){"use strict";n.r(e);var i={name:"TagList",inject:["getFrontmatterKey"],computed:{frontmatterKey:function(){return this.getFrontmatterKey()}}},a=n(56),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"var(--v-surface-base)",height:"inherit"}},[n("div",{staticClass:"pa-4"},[n("v-chip-group",{attrs:{column:""}},t._l(t.frontmatterKey.list,(function(e){return n("v-chip",{key:e.name,attrs:{color:"var(--v-chip-base)","text-color":"var(--v-tag-base)",to:{path:e.path}}},[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.name)+" ("+t._s(e.pages.length)+")")])])})),1)],1)])}),[],!1,null,null,null);e.default=s.exports},365:function(t,e,n){"use strict";n.r(e);n(82),n(58),n(59);var i={name:"JsonLd",props:{context:{type:String,default:"http://schema.org"},type:{type:String,default:"WebPage"},name:{type:String,default:"ForeverSkyin"},description:{type:String,default:"測試工程師，平時喜歡打電動、看書、散步和練習冥想。這邊紀錄了我的學習與開發筆記，歡迎交流分享:)"}},data:function(){return{jsonld:{}}},created:function(){this.jsonld={"@context":this.context,"@type":this.type,name:this.name,description:this.description,publisher:{"@type":"ProfilePage",name:this.name}}}},a=n(56),s=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return null}),[],!1,null,null,null);e.default=s.exports},391:function(t,e,n){"use strict";n.r(e);n(82);var i=n(348),a=n(350),s=n(364),r=n(365),o={name:"Tag",components:{TheToolbar:i.default,TheHeading:a.default,TagList:s.default,JsonLd:r.default},data:function(){return{onMounted:!1}},computed:{isMobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return!0;case"md":case"lg":case"xl":return!1}},surfaceHeight:function(){var t="undefined"!=typeof window?window.innerHeight:0,e=this.isMobile?0:48;return"".concat(t-e,"px")},surfaceWidth:function(){var t="undefined"!=typeof window?window.innerWidth:0,e=this.isMobile?0:48;return"".concat(t-e,"px")}},mounted:function(){this.onMounted=!0}},l=n(56),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex justify-center align-center"},[n("transition",{attrs:{name:"slide-x-reverse-transition"}},[n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.onMounted,expression:"onMounted"}],attrs:{color:"var(--v-surface-base)",elevation:"0",rounded:t.isMobile?"":"xl",height:t.surfaceHeight,width:t.surfaceWidth}},[n("v-container",{class:{"fill-height":!t.isMobile},attrs:{fluid:""}},[n("v-row",{class:{"fill-height":!t.isMobile},attrs:{"no-gutters":""}},[n("v-col",{class:{"fill-height":!t.isMobile},attrs:{xl:"3",lg:"3",md:"3",sm:"12",xs:"12",cols:"12"}},[t.isMobile?n("the-toolbar"):t._e(),t._v(" "),n("the-heading")],1),t._v(" "),n("v-col",{attrs:{xl:"9",lg:"9",md:"9",sm:"12",xs:"12"}},[t.isMobile?t._e():n("the-toolbar"),t._v(" "),n("tag-list")],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);