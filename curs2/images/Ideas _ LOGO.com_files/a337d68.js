(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1098:function(t,e,n){"use strict";var r=n(103);e.a={filters:{render:r.a},methods:{render:function(t){return this.$options.filters.render(t,this.ctx||this._self)}}}},1133:function(t,e,n){"use strict";var r=n(1098),o=n(28),l={mixins:[r.a],props:{page:{type:Object,default:function(){return{}}},ctx:{type:Object,default:function(){return null}},align:{type:String,default:"text-center"}},computed:Object(o.e)(["enterprise"])},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.page.show_intro,expression:"page.show_intro"}],staticClass:"mb-6",class:t.align},[e("div",{class:{"flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center":t.$slots["header-content"]}},[e("h1",{staticClass:"text-2xl md:text-4xl"},[t._v(t._s(t.render(t.page.title)))]),t._v(" "),t._t("header-content")],2),t._v(" "),t.page.intro_text?e("div",{staticClass:"mb-6 mt-2 article",domProps:{innerHTML:t._s(t.render(t.page.intro_text))}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},1172:function(t,e,n){"use strict";var r=n(124),o=n.n(r),l=n(1133),c={components:{ArrowRight:o.a,Intro:l.a},props:{input:{type:[String,Array],default:""},page:{type:Object,default:function(){return{}}},name:{type:String,required:!0},loading:Boolean},beforeDestroy:function(){window.removeEventListener("keypress",this.onKeyPress)},mounted:function(){window.addEventListener("keypress",this.onKeyPress)},computed:{skip:function(){var t;return!(null!==(t=this.input)&&void 0!==t&&t.length)},buttonText:function(){var t,e,n,r;return this.skip?null===(t=this.page)||void 0===t||null===(e=t.button)||void 0===e?void 0:e.empty_text:null===(n=this.page)||void 0===n||null===(r=n.button)||void 0===r?void 0:r.text}},methods:{handleContinue:function(t){this.$emit("continue",t)},onKeyPress:function(t){"Enter"===t.key&&this.handleContinue()}}},d=n(11),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"mb-auto pt-6 pb-12"},[e("div",{staticClass:"max-w-xl mx-auto"},[e("Intro",{attrs:{page:t.page,align:"text-left"}},[e("button",{staticClass:"btn text-left justify-start -ml-2 sm:ml-2",attrs:{slot:"header-content",type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue},slot:"header-content"},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 flex-shrink-0"})],1)]),t._v(" "),t.$slots.default?e("div",{staticClass:"mb-5"},[t._t("default")],2):t._e(),t._v(" "),t._t("button",(function(){return[e("button",{staticClass:"btn btn-primary btn-large w-full",attrs:{type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue}},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"btn-icon-right"})],1)]}))],2)])}),[],!1,null,null,null);e.a=component.exports},1334:function(t,e,n){"use strict";var r=n(1);n(19);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{data:function(){return{pageReady:!1,delay:t}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:setTimeout((function(){t.pageReady=!0}),t.delay);case 3:case"end":return e.stop()}}),e)})))()}}}},1873:function(t,e,n){"use strict";n.r(e);n(16),n(15),n(13),n(17),n(18);var r=n(1),o=n(3),l=(n(19),n(23),n(26),n(66),n(1098)),c=n(322),d=n(295),content=n(155),f=n(14),m=n(1172),h=n(1334),v=n(28),w=n(77);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={transition:"fade",layout:"progress",components:{TextInput:d.a,StepPage:m.a},mixins:[Object(content.d)(["slogan"]),l.a,Object(h.a)(),content.e],data:function(){return{submittingForm:!1,slogan:"",wordmark:"",pendingAssetsPromise:Promise.resolve()}},computed:x({sloganValidationError:function(){var t,e;return Object(c.a)(this.$v.slogan,null===(t=this.page)||void 0===t||null===(e=t.input)||void 0===e?void 0:e.name)},sloganValidationStatus:function(){return 0===this.sloganValidationError.length?"":"error"},loading:function(){return this.submittingForm||!this.pageReady}},Object(v.e)(["flags","session"])),validations:{slogan:w.k,wordmark:w.m},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wordmark=t.session.wordmark||"",t.wordmark||t.redirectToBusinessName(),t.wordmark&&(t.$v.wordmark.$touch(),null!==(n=t.$v)&&void 0!==n&&null!==(r=n.wordmark)&&void 0!==r&&r.$error&&t.redirectToBusinessName()),t.slogan=t.session.slogan||"",t.slogan&&(null===(o=t.$v)||void 0===o||null===(l=o.slogan)||void 0===l||l.$touch()),e.next=7,t.$store.dispatch("session/sendSessionToKeyworder");case 7:t.flags.client_side_logos&&(t.pendingAssetsPromise=t.$store.dispatch("editor/fetchAssetLists")),f.a.$emit(f.b.StepSetProgress,30);case 9:case"end":return e.stop()}}),e)})))()},methods:{redirectToBusinessName:function(){this.$router.push({path:this.localePath("/business-name"),query:x({},this.$route.query)})},saveSlogan:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$invalidInput()&&!t.submittingForm){e.next=2;break}return e.abrupt("return");case 2:return t.submittingForm=!0,n=t.slogan,e.prev=4,n!==t.session.slogan&&(t.$store.commit("session/setSlogan",n),t.$store.dispatch("app/refreshLogos")),path="/editor",t.flags.enable_enhanced_flow?path="/flow/industry":t.flags.skip_editor_ideas?path=t.flags.editor_start_with_colors?"/editor/colors":"/editor/templates":t.flags.enable_standalone_ideas&&(path="/ideas"),e.next=10,t.pendingAssetsPromise;case 10:t.$router.push(t.localePath(path)),t.$store.dispatch("session/sendSessionToKeyworder"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),t.submittingForm=!1;case 17:case"end":return e.stop()}}),e,null,[[4,14]])})))()}}},O=_,j=n(11),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("StepPage",{attrs:{page:t.page,name:"Slogan",input:t.slogan,loading:t.loading},on:{continue:t.saveSlogan}},[e("TextInput",{attrs:{autofocus:"",maxlength:"40","data-hj-whitelist":"",status:t.sloganValidationStatus,"status-message":t.sloganValidationError,label:t.render(t.page.input.label),placeholder:t.render(t.page.input.placeholder),prompt:t.page.input.prompt,disabled:t.loading,"input-styles":"form-input-large"},on:{enter:t.saveSlogan},model:{value:t.slogan,callback:function(e){t.slogan=e},expression:"slogan"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);