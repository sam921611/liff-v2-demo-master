(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c14426d"],{a55b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h1",[t._v("ようこそ！ "+t._s(t.name)+" さん")]),i("h3",[i("v-btn",{attrs:{large:"",color:"error"},on:{click:t.logout}},[t._v("ログアウト")])],1)]),i("v-flex",{attrs:{"mb-4":"",xs12:""}},[i("div",{staticClass:"ma-4"},[i("v-btn",{attrs:{large:"",color:"success",disabled:!1===t.isClient},on:{click:t.sendLINE}},[t._v("LINEに送る")])],1)]),i("div",[i("v-snackbar",{attrs:{color:"primary","multi-line":"",timeout:t.snackbarTimeout,top:""},model:{value:t.snackbarFlag,callback:function(e){t.snackbarFlag=e},expression:"snackbarFlag"}},[t._v("\n          "+t._s(t.snackbarText)+"\n        ")])],1)],1)],1)},a=[],s={data:function(){return{snackbarFlag:!1,snackbarTimeout:3e3,snackbarText:"",name:"",imgURL:"",inClient:!1}},created:function(){this.initializeLiff()},methods:{initializeLiff:function(){var t=this;liff.init({liffId:"1654421436-wXWPDYnA"},(function(e){t.loginCheck()}),(function(t){console.log("LIFF initialization failed",t)}))},loginCheck:function(){var t=this;liff.isLoggedIn()?(this.isClient=liff.isInClient(),liff.getProfile().then((function(e){t.name=e.displayName,t.imgURL=e.pictureUrl})).catch((function(t){console.log("error",t)}))):this.$router.push({name:"home"})},logout:function(){liff.isLoggedIn()&&(liff.logout(),this.$router.push({name:"home"}))},sendLINE:function(){var t=this;liff.sendMessages([{type:"text",text:"あなたのアイコン画像を送ります"},{type:"image",originalContentUrl:t.imgURL,previewImageUrl:t.imgURL}]).then((function(){console.log("message sent"),t.showSnackbar("LINEに送信しました")})).catch((function(e){console.log("error",e),t.showSnackbar("LINEに送信失敗しました")}))},shareLINE:function(){var t=this;liff.shareTargetPicker([{type:"text",text:"あなたのアイコン画像を送ります"},{type:"image",originalContentUrl:t.imgURL,previewImageUrl:t.imgURL}]).then((function(){console.log("message sent"),t.showSnackbar("LINEにシェアしました")})).catch((function(e){console.log("error",e),t.showSnackbar("LINEにシェア失敗しました")}))},showSnackbar:function(t){var e=this;this.snackbarFlag=!0,this.snackbarText=t,setTimeout((function(){e.snackbarFlag=!1,e.snackbarText=""}),this.snackbarTimeout)}}},o=s,c=i("2877"),r=i("6544"),l=i.n(r),u=i("8336"),h=i("a523"),f=i("0e8f"),d=i("a722"),g=(i("6762"),i("2fdb"),i("bd86")),v=(i("c5f6"),i("ca71"),i("8dd9")),m=i("a9ad"),p=i("7560"),b=i("f2e7"),k=i("fe6c"),w=i("58df"),L=i("80d2"),x=i("d9bd"),T=Object(w["a"])(v["a"],m["a"],b["a"],Object(k["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:p["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,a=t.insetFooter,s=t.left,o=t.right,c=t.top;return{paddingBottom:Object(L["d"])(i+n+a),paddingLeft:this.app?Object(L["d"])(s):void 0,paddingRight:this.app?Object(L["d"])(o):void 0,paddingTop:Object(L["d"])(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(x["e"])("auto-height",this),0==this.timeout&&Object(x["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(L["h"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(g["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(L["h"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:v["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),C=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:u["a"],VContainer:h["a"],VFlex:f["a"],VLayout:d["a"],VSnackbar:T})},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1c14426d.980b01df.js.map