webpackJsonp([9],{iVpO:function(t,e){},"v++h":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),i=a("exGp"),r=a.n(i),c=a("s8Ph"),o={data:function(){return{list:[],listLoading:!1,count:0}},mounted:function(){this.countCategotres()},watch:{list:function(t){this.count=t.length}},methods:{countCategotres:function(){var t=this;return r()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.prev=1,e.next=4,Object(c.a)();case 4:a=e.sent,t.listLoading=!1,a.data.code?t.$message.error("获取列表失败"):t.list=a.data.data,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.listLoading=!1,t.$message.error("出错了");case 13:case"end":return e.stop()}},e,t,[[1,9]])}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[t.listLoading?a("CustomSpin"):a("div",{staticClass:"categories__container-wrap"},[a("div",{staticClass:"categories__category-container"},[a("h1",{staticClass:"categories__title"},[t._v("\n        Categories\n      ")]),t._v(" "),a("p",{staticClass:"categories__count"},[t._v("\n        目前共 "+t._s(t.count)+" 个分类\n      ")]),t._v(" "),a("ul",{staticClass:"categories__items"},t._l(t.list,function(e,n){return a("li",{key:n,staticClass:"categories__item",on:{click:function(a){t.$router.push({path:"/categories/"+e._id,query:{name:e.name}})}}},[a("a",[t._v(t._s(e.name))]),t._v("\n          ("),a("span",[t._v(t._s(e.total))]),t._v(")\n        ")])}),0)])])],1)},staticRenderFns:[]};var l=a("VU/8")(o,u,!1,function(t){a("iVpO")},"data-v-584be046",null);e.default=l.exports}});
//# sourceMappingURL=9.83788f2a4b67b682f239.js.map