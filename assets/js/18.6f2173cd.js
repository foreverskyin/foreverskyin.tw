(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(t,e,a){"use strict";a.r(e);var r={name:"TagList",inject:["getFrontmatterKey"],computed:{frontmatterKey:function(){return this.getFrontmatterKey()}}},n=a(56),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",color:"var(--v-surface-base)",height:"inherit"}},[a("div",{staticClass:"pa-4"},[a("v-chip-group",{attrs:{column:""}},t._l(t.frontmatterKey.list,(function(e){return a("v-chip",{key:e.name,attrs:{color:"var(--v-chip-base)","text-color":"var(--v-tag-base)",to:{path:e.path}}},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.name)+" ("+t._s(e.pages.length)+")")])])})),1)],1)])}),[],!1,null,null,null);e.default=s.exports}}]);