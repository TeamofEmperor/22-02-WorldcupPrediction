"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[989],{6918:function(t,e,s){s.r(e),s.d(e,{default:function(){return K}});var i=s(579),r=s(5352);const n=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),l=(0,r.Ji)("v-card__title");i.Z;var h=s(2118),c=s(6669),d=s(7678),u=(0,d.Z)(c.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,r.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),f=s(6877),p=s(8860);const v=(0,d.Z)(p.Z,(0,f.d)("tabsBar"),c.Z);var m=v.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...p.Z.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0},s.on={...s.on,keydown:t=>{t.keyCode===r.Do.enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),g=s(9492),b=g.Z.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=g.Z.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),w=(s(7658),s(2240)),$=s(7394),x=s(2084),y=s(7388),k=s(6746),_=s(4802);function S(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function C(t,e,s,i){const r=t.clientWidth,n=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);const o=e.wrapper+i,a=r+n,l=.4*r;return n<=i?i=Math.max(n-l,0):o<=a&&(i=Math.min(i-(o-a-l),e.content-e.wrapper)),s?-i:i}function O(t,e,s){const{offsetLeft:i,clientWidth:r}=t;if(s){const t=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const T=(0,d.Z)(x.y,y.Z).extend({name:"base-slide-group",directives:{Resize:k.Z,Touch:_.Z},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...x.y.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?S(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+S(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver((()=>{this.onResize()}));t.observe(this.$el),t.observe(this.$refs.content),this.$on("hook:destroyed",(()=>{t.disconnect()}))}else{let t=0;this.$on("hook:beforeUpdate",(()=>{var e;t=((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length})),this.$on("hook:updated",(()=>{var e;t!==((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length&&this.setWidths()}))}},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of(0,r.iZ)(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=C(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(w.Z,{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement($.Z5,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const r=s?-1:1,n=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=O(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=C(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});T.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var Z=s(9131),A=(0,d.Z)(T,Z.Z,c.Z).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...T.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=T.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,r=e.path;let n=!1,o=!1;for(const a of s)if(a.to===r?o=!0:a.to===i&&(n=!0),n&&o)break;!n&&o&&(this.internalValue=void 0)}},render(t){const e=T.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),B=s(6730),W=B.Z.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...B.Z.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||x.y.options.methods.getValue.call(this,t,e)}}}),z=s(6878),I=(0,d.Z)(z.Z).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),R=s(3457);const M=(0,d.Z)(z.Z,R.Z,c.Z);var P=M.extend().extend({name:"v-tabs",directives:{Resize:k.Z},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:(0,r.kb)(this.slider.height),left:this.isReversed?void 0:(0,r.kb)(this.slider.left),right:this.isReversed?(0,r.kb)(this.slider.right):void 0,top:this.vertical?(0,r.kb)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:(0,r.kb)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver((()=>{this.onResize()}));t.observe(this.$el),this.$on("hook:destroyed",(()=>{t.disconnect()}))}this.$nextTick((()=>{window.setTimeout(this.callSlider,30)}))},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:(0,r.kb)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(A,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(W,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(I,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],r=this.$slots.default||[],n=r.length;for(let o=0;o<n;o++){const n=r[o];if(n.componentOptions)switch(n.componentOptions.Ctor.options.name){case"v-tabs-slider":e=n;break;case"v-tabs-items":t=n;break;case"v-tab-item":s.push(n);break;default:i.push(n)}else i.push(n)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:r}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,r)])}}),H=function(){var t=this,e=t._self._c;return e("div",[e("PageQatarPreHeader"),e("div",{staticClass:"pb-6",staticStyle:{"background-color":"#020f2a",color:"white"}},[e(h.Z,[e("h3",[t._v("경기 일정")]),e(i.Z,[e(P,{attrs:{centered:"","center-active":"",dark:"","show-arrows":"","background-color":"#024e94"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.groups,(function(s){return e(m,{key:s,attrs:{href:s.link}},[t._v(" "+t._s(s.name)+" ")])})),1),e(W,{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(7,(function(s){return e(b,{key:s,attrs:{value:"tab-"+s}},[e(i.Z,{attrs:{flat:""}},[e(a,[t._v(t._s(t.text))])],1)],1)})),e(b,{attrs:{value:"tab-8"}},[e(i.Z,{attrs:{flat:""}},[[e(u,{staticClass:"text-center px-2 px-sm-10",scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",t._l(t.headers,(function(s){return e("th",{key:s,staticClass:"text-center"},[t._v(" "+t._s(s)+" ")])})),0)]),e("tbody",t._l(t.schedules,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(Math.ceil(100*s.Home_Winrate))+"%")]),e("td",[t._v(t._s(s.Home))]),e("td",[t._v(t._s(s.Date))]),e("td",[t._v(t._s(s.Away))]),e("td",[t._v(t._s(Math.ceil(100*s.Away_Win_rate))+"%")]),s.Home_Winrate>.5?e("td",[t._v(t._s(s.Home))]):.5==s.Home_Winrate?e("td",[t._v("Draw")]):s.Home_Winrate<.5?e("td",[t._v(t._s(s.Away))]):e("td",[t._v("Thinking..")])])})),0)]},proxy:!0}])})]],2)],1)],2)],1)],1)],1)],1)},E=[],D=s(6843),N=s(6190),q=function(){var t=this,e=t._self._c;return e(D.Z,{attrs:{color:"rgb(85, 0, 101)",dense:"",short:"",dark:""}},[e(N.Z,{attrs:{to:t.pageqatar.link,text:""}},[e("span",[t._v(t._s(t.pageqatar.title))])])],1)},V=[],L={name:"PageQatarPreHeader",data(){return{pageqatar:{link:"/qatar",title:"Qatar Worldcup"}}}},X=L,Q=s(1001),F=(0,Q.Z)(X,q,V,!1,null,null,null),J=F.exports,U=s(1079),Y={name:"PageQatarPre",components:{PageQatarPreHeader:J},data(){return{tab:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",schedules:[],headers:["Rate","Home","Date","Away","Rate","Prediction"],groups:[{link:"#tab-1",name:"A조"},{link:"#tab-2",name:"B조"},{link:"#tab-3",name:"C조"},{link:"#tab-4",name:"D조"},{link:"#tab-5",name:"E조"},{link:"#tab-6",name:"F조"},{link:"#tab-7",name:"G조"},{link:"#tab-8",name:"H조"}]}},methods:{dataSchedule(){U.Z.get("/qatar/qpre/schedule").then((t=>{this.schedules=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.dataSchedule()}},j=Y,G=(0,Q.Z)(j,H,E,!1,null,null,null),K=G.exports}}]);
//# sourceMappingURL=989.3076aa4b.js.map