/* index1.js Date:2017-04-17 11:15:18 */
define("index1.js",["filter.js","vue-resource.min.js","vue.js"],function(require,a,b){var c=require("filter.js");require("vue-resource.min.js"),require("vue.js"),Vue.use(VueResource);var d={_init:function(){if(c.filter(),d.bb(),d.getItem()){var a=d.getItem();d.aa(a)}else d.render()},render:function(){$.ajax({url:"../html/data/data.json",dataType:"JSON",type:"get"}).done(function(a){d.aa(a)})},setItem:function(a){var b=JSON.stringify(a);localStorage.setItem("huancun1",encodeURIComponent(b))},getItem:function(){var a=localStorage.getItem("huancun1");return $.parseJSON(decodeURIComponent(a))},aa:function(a){function b(a,b,c,d,e,f){a[b].isA=c,a[b].isB=d,a[b].isC=e,a[b].isD=f}var c={resume:a,cur1:{isA:!1,isB:!1},cur2:{isA:!1,isB:!1},cur3:{isA:!1,isB:!1,isC:!1,isD:!1},cur4:{isA:!1,isB:!1,isC:!1,isD:!1},cur5:{isA:!1,isB:!1,isC:!1,isD:!1},cur6:{isA:!1,isB:!1,isC:!1,isD:!1},cur7:{isA:!1,isB:!1,isC:!1,isD:!1},cur8:{isA:!1,isB:!1,isC:!1,isD:!1},hiswork:{},edu:{},certi:{},level:{}};Vue.filter("typeName",function(a){var b="";return $.each(a,function(a,c){b+=typeName[c]+" "}),b}),Vue.filter("typeSelect",function(a,b){return""!=a&&a?a:b});new Vue({el:"#all",data:c,methods:{bj1:function(a,c){b(this,c,!0,!0,!1,!0)},save1:function(a,c){b(this,c,!1,!1,!0,!0),d.setItem(this.resume)},bluetj:function(a,c){b(this,c,!0,!1,!1,!0)},add:function(a,c,d){this._index=c,console.log(1),this[d]={},b(this,a,!0,!0,!1,!0)},dele:function(a,b,c){c.splice(b,1)},bj:function(a,c,d,e){var f=JSON.stringify(c);$("#all").data("chucun",f),seajs.use("cookie.js",function(a){a("chucun",f)}),this[e]=c,this._index=d,console.log(d),b(this,a,!0,!1,!1,!0)},save2:function(a,c,e){console.log(this._index),this._index<0?(e.push(c),console.log(this._index)):e[this._index]=c,b(this,a,!1,!1,!0,!0),d.setItem(this.resume)},cancel:function(a,c){if(-100==this._index)b(this,a,!1,!1,!1,!1);else if(-99==this._index)console.log(2),b(this,a,!1,!1,!0,!0);else{seajs.use("cookie.js",function(a){console.log(a("chucun"))}),b(this,a,!1,!1,!0,!0);var d=$.parseJSON($("#all").data("chucun"));c.splice(this._index,1,d)}}}})},bb:function(){$("input").focus(function(){this.value="",this.style.color="#333"}),$("input").blur(function(){this.style.color="#999"})}};b.exports={init:d._init}});
