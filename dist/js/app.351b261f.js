(function(t){function e(e){for(var r,i,n=e[0],l=e[1],c=e[2],d=0,v=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"black darken-3"},[a("HelloWorld"),a("About"),a("Service"),a("v-content",[a("router-view")],1),a("Rogress"),a("foot")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{fixed:"",dense:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{attrs:{"grey--text":""}},[a("span",{staticClass:"font-weight-HEAVY"},[t._v("TADOXE")])]),a("v-spacer"),a("div",{staticClass:"hidden-md-and-down"},[a("v-btn",{attrs:{text:"",large:"",color:"error"}},[t._v("HOME "),a("v-icon",[t._v("home")])],1),a("v-btn",{attrs:{text:"",large:"",color:"error"}},[t._v("ABOUT")]),a("v-btn",{attrs:{text:"",large:"",color:"error"}},[t._v("MY SKILLS")]),a("v-btn",{attrs:{text:"",large:"",color:"error"}},[t._v("CONTACT")])],1)],1),a("v-navigation-drawer",{staticClass:"dark",attrs:{app:"",height:"500px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Home")])],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("About")])],1)],1)],1)],1)],1)},n=[],l={name:"HelloWorld",data:function(){return{drawer:!1,links:[{route:"/"},{route:"/about"},{route:"/contact"}]}}},c=l,u=a("2877"),d=a("6544"),v=a.n(d),m=a("40dc"),p=a("5bc1"),f=a("8336"),x=a("132d"),b=a("8860"),g=a("da13"),h=a("1baa"),C=a("34c3"),_=a("5d23"),V=a("f774"),w=a("2fa4"),y=a("2a7f"),q=Object(u["a"])(c,i,n,!1,null,"ed5d6708",null),S=q.exports;v()(q,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VBtn:f["a"],VIcon:x["a"],VList:b["a"],VListItem:g["a"],VListItemGroup:h["a"],VListItemIcon:C["a"],VListItemTitle:_["a"],VNavigationDrawer:V["a"],VSpacer:w["a"],VToolbarTitle:y["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{attrs:{src:"g.jpg",width:"100%",height:"900px"}},[a("v-container",{staticClass:"my-10",attrs:{color:"error"}},[a("div",{staticClass:"mx-10 my-15 pa-10 transparent align-items-center"},[a("v-card-text",{staticClass:"text-center pa-10"},[a("h1",{staticClass:"error--text"},[t._v("Hi")]),a("br"),a("h2",{staticClass:"text-capitalize font-weight-bold"},[t._v("i'm Tolu,")]),a("br"),a("h2",[t._v("WEB DESIGNER.")]),a("p",{staticClass:"text--disabled my-5"},[t._v("HTML / CSS / VUE JS")]),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"error",dark:""}},"v-btn",o,!1),r),[t._v(" CONTACT ME ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("div",{staticClass:"mx-10 "},[a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Solo",outlined:"",placeholder:"Name",solo:""}})],1)],1),a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"outlined",outlined:"",placeholder:"Email Address",solo:""}})],1)],1),a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-textarea",{attrs:{solo:"",outlined:"",name:"input-7-4",label:"Message"}})],1)],1),a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"mx-25",attrs:{large:"",color:"error"}},[t._v("send message")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Send")])],1)],1)],1)],1)],1)],1)])],1)},O=[],A={data:function(){return{dialog:!1}}},T=A,E=a("b0af"),k=a("99d9"),L=a("62ad"),I=a("a523"),H=a("169a"),M=a("adda"),P=a("0fd9"),B=a("8654"),N=a("a844"),$=Object(u["a"])(T,j,O,!1,null,null,null),R=$.exports;v()($,{VBtn:f["a"],VCard:E["a"],VCardActions:k["a"],VCardText:k["b"],VCol:L["a"],VContainer:I["a"],VDialog:H["a"],VImg:M["a"],VRow:P["a"],VSpacer:w["a"],VTextField:B["a"],VTextarea:N["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-10"},[a("v-card-title",{staticClass:"text-center"},[t._v("About Me")]),a("v-card-text",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ut omnis itaque deleniti at illo! Similique facere voluptas maxime aspernatur asperiores, modi labore, temporibus architecto obcaecati quibusdam officiis. Molestias, aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero odit cumque possimus inventore placeat. Porro nisi possimus, iusto numquam tempora enim dolores unde facilis laborum dolore praesentium, reprehenderit nemo iure?")])],1)],1)},D=[],J={},F=Object(u["a"])(J,z,D,!1,null,null,null),W=F.exports;v()(F,{VCard:E["a"],VCardText:k["b"],VCardTitle:k["c"],VContainer:I["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"my-15 py-15"},[a("H3",{staticClass:"error--text text-center"},[t._v("SKILLS")]),a("div",{staticClass:"mx-13 my-5",attrs:{width:"80%"}},[a("h4",{staticClass:"error--text"},[t._v("HTML")]),a("v-progress-linear",{attrs:{color:"error",rounded:"",height:"16px",value:"90"}},[t._v("90%")]),a("br"),a("H4",{staticClass:"indigo--text"},[t._v("CSS")]),a("v-progress-linear",{attrs:{color:"indigo",rounded:"",value:"90",height:"16px"}},[t._v("90%")]),a("br"),a("H4",{staticClass:"teal--text"},[t._v("VUE JS")]),a("v-progress-linear",{attrs:{color:"teal",rounded:"",height:"16px",value:"90"}},[t._v("90%")]),a("br"),a("h4",{staticClass:"text-capitalize cyan--text"},[t._v("JAVA SCRIPT")]),a("v-progress-linear",{attrs:{color:"cyan",value:"80",height:"16px"}},[t._v("80%")])],1)],1)},G=[],K=a("8e36"),Y={},X=Object(u["a"])(Y,U,G,!1,null,null,null),Q=X.exports;v()(X,{VContainer:I["a"],VProgressLinear:K["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{attrs:{id:"contactform"}},[a("h1",{staticClass:"text-center"},[t._v("Contact")]),a("v-container",{attrs:{fluid:"",dark:"","lighten-3":""}},[a("div",{staticClass:"mx-10 "},[a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Solo",outlined:"",placeholder:"Name",solo:""}})],1)],1),a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"outlined",outlined:"",placeholder:"Email Address",solo:""}})],1)],1),a("v-row",{attrs:{justify:"center","align-content":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-textarea",{attrs:{solo:"",outlined:"",name:"input-7-4",label:"Message"}})],1)],1),a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"mx-25",attrs:{type:"submit",large:"",color:"error"}},[t._v("send message")])],1)],1)])],1)},tt=[],et={data:function(){return{}},methods:{function:function(){function t(t){t.preventDefault(),console.log(123)}document.getElementById("contactform").addEventListener("submit",t)}}},at=et,rt=a("4bd4"),ot=Object(u["a"])(at,Z,tt,!1,null,null,null),st=ot.exports;v()(ot,{VBtn:f["a"],VCol:L["a"],VContainer:I["a"],VForm:rt["a"],VRow:P["a"],VTextField:B["a"],VTextarea:N["a"]});var it={name:"App",components:{HelloWorld:S,About:R,Service:W,Rogress:Q,foot:st},data:function(){return{}}},nt=it,lt=a("7496"),ct=a("a75b"),ut=Object(u["a"])(nt,o,s,!1,null,null,null),dt=ut.exports;v()(ut,{VApp:lt["a"],VContent:ct["a"]});var vt=a("8c4f"),mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"my-10",attrs:{id:"about"}},[a("h1",{staticClass:"text-center text-decoration-underline"},[t._v("SERVICE")]),a("br"),a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"mx-15 px-10 text-center "},[a("v-icon",{staticClass:"red--text"},[t._v("thumb_up")]),a("h1",{staticClass:"text-center font-weight-light red--text text-capitalize"},[t._v("creative design")]),a("p",{staticClass:"text-center"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptate minima laboriosam velit libero id quidem illo ab at maxime quibusdam a numquam natus rerum quas, ullam expedita quam. Necessitatibus!")])],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"mx-15 px-10 text-center"},[a("h1",{staticClass:"text-center font-weight-light text-capitalize error--text"},[t._v("web developer")]),a("p",{staticClass:"text-center"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus quam delectus quibusdam nam itaque quos dolores a, animi ea odio labore cupiditate beatae possimus quod molestiae! Ab, dicta quaerat?")])])],1)],1),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"mx-15 px-10 dark text-center"},[a("v-icon",{staticClass:"error--text "},[t._v("mdi-magnify")]),a("h1",{staticClass:"text-center font-weight-light text-capitalize error--text"},[t._v("clean code")]),a("p",{staticClass:"text-center"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus quam delectus quibusdam nam itaque quos dolores a, animi ea odio labore cupiditate beatae possimus quod molestiae! Ab, dicta quaerat?")])],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"mx-15 px-10 "},[a("h1",{staticClass:"text-center font-weight-light text-capitalize red--text"},[t._v("ui/ux designer")]),a("p",{staticClass:"text-center"},[t._v("dipisci dolorum beatae consequuntur doloribus, qui illo vero neque delectus eos? Praesentium doloribus quam delectus quibusdam nam itaque quos dolores a, animi ea odio labore cupiditate beatae possimus quod molestiae! Ab, dicta quaerat?")])])],1)],1)],1)},pt=[],ft=a("0e8f"),xt=a("a722"),bt={},gt=Object(u["a"])(bt,mt,pt,!1,null,null,null),ht=gt.exports;v()(gt,{VCard:E["a"],VContainer:I["a"],VFlex:ft["a"],VIcon:x["a"],VLayout:xt["a"]}),r["a"].use(vt["a"]);var Ct=[{path:"/",name:"Home",component:ht},{path:"/about",name:"About",component:R}],_t=new vt["a"]({mode:"history",base:"/",routes:Ct}),Vt=_t,wt=a("2f62");r["a"].use(wt["a"]);var yt=new wt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),qt=a("f309");r["a"].use(qt["a"]);var St=new qt["a"]({theme:{dark:!0,primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"},icons:{iconfont:"mdisvg"}});a("d1e78");r["a"].config.productionTip=!1,new r["a"]({router:Vt,store:yt,vuetify:St,render:function(t){return t(dt)}}).$mount("#app")}});
//# sourceMappingURL=app.351b261f.js.map