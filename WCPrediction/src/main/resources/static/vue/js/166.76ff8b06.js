(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[166],{1597:function(t,i,a){"use strict";a.r(i),a.d(i,{default:function(){return G}});var e=a(6190),s=a(579),n=a(266),r=a(2118),o=a(4324),u=(a(7658),a(1884),a(144)),c=a(1767),l=a(5352);const f=["sm","md","lg","xl"],d=["start","end","center"];function h(t,i){return f.reduce(((a,e)=>(a[t+(0,l.jC)(e)]=i(),a)),{})}const p=t=>[...d,"baseline","stretch"].includes(t),_=h("align",(()=>({type:String,default:null,validator:p}))),g=t=>[...d,"space-between","space-around"].includes(t),m=h("justify",(()=>({type:String,default:null,validator:g}))),v=t=>[...d,"space-between","space-around","stretch"].includes(t),y=h("alignContent",(()=>({type:String,default:null,validator:v}))),$={align:Object.keys(_),justify:Object.keys(m),alignContent:Object.keys(y)},x={align:"align",justify:"justify",alignContent:"align-content"};function q(t,i,a){let e=x[t];if(null!=a){if(i){const a=i.replace(t,"");e+=`-${a}`}return e+=`-${a}`,e.toLowerCase()}}const S=new Map;var D=u.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p},..._,justify:{type:String,default:null,validator:g},...m,alignContent:{type:String,default:null,validator:v},...y},render(t,{props:i,data:a,children:e}){let s="";for(const r in i)s+=String(i[r]);let n=S.get(s);if(!n){let t;for(t in n=[],$)$[t].forEach((a=>{const e=i[a],s=q(t,a,e);s&&n.push(s)}));n.push({"no-gutters":i.noGutters,"row--dense":i.dense,[`align-${i.align}`]:i.align,[`justify-${i.justify}`]:i.justify,[`align-content-${i.alignContent}`]:i.alignContent}),S.set(s,n)}return t(i.tag,(0,c.ZP)(a,{staticClass:"row",class:n}),e)}}),C=a(6730),M=a(9492),w=function(){var t=this,i=t._self._c;return i("div",[i("PageQatarHeader"),i("div",{staticClass:"pt-5 pb-6",staticStyle:{background:"linear-gradient(#771436, #ab0c40)",color:"white"}},[i(r.Z,{staticClass:"px-6"},[i("h3",[i("img",{attrs:{src:"https://cloudinary.fifa.com/transform/178fcbc2-4bc8-4481-8b67-7a10895dcbfc/FIFA?tx=c_fill,g_auto,q_auto",width:"160px"}}),i("br"),t._v("   Qatar WORLD CUP 2022™ ")]),i("div",{staticClass:"mt-6 text-center"},[i("p",{staticClass:"text-h6 text-sm-h4 me-1 me-sm-5"},[t._v("개최까지 ")]),i("span",{staticClass:"text-h3 text-sm-h1 font-weight-medium"},[t._v(t._s(t.date))]),i("span",{staticClass:"text-h6 text-sm-h4 me-1 me-sm-6"},[t._v("일")]),i("span",{staticClass:"text-h3 text-sm-h1 font-weight-medium"},[t._v(t._s(t.hour))]),i("span",{staticClass:"text-h6 text-sm-h4 me-1 me-sm-6"},[t._v("시간")]),i("span",{staticClass:"text-h3 text-sm-h1 font-weight-medium"},[t._v(t._s(t.minute))]),i("span",{staticClass:"text-h6 text-sm-h4"},[t._v("분")])])])],1),i("div",{staticClass:"pb-6",staticStyle:{"background-color":"#2b0416",color:"white"},attrs:{id:"groupList"}},[i(r.Z,{staticClass:"px-6"},[i("h3",{staticClass:"pt-3 pb-5"},[t._v("조 편성")]),i("div",[i(D,t._l(t.groups,(function(a,e){return i(n.Z,{key:e,attrs:{cols:"12",md:"3",sm:"4"}},[i(s.Z,{staticClass:"pa-2 rounded",attrs:{outlined:"",tile:""}},[i("h2",{staticClass:"mx-4 my-2",staticStyle:{color:"#8a1538"}},[t._v(t._s(t.groups[e]))]),t._l(t.teams[e],(function(a,s){return i("div",{key:s,staticClass:"mx-3 mb-4 rounded",staticStyle:{"background-color":"#eeeee4"}},[i("img",{staticClass:"mt-2 mx-4",attrs:{src:t.flagLink[e][s],height:"20px",width:"30px"}}),i("h3",{staticClass:"d-inline-flex font-weight-medium"},[t._v(t._s(t.teams[e][s]))])])}))],2)],1)})),1)],1)])],1),i("div",{staticStyle:{"background-color":"#020f2a",color:"white"},attrs:{id:"teamIntro"}},[i(r.Z,{staticClass:"px-6"},[i("h3",{staticClass:"pt-3 pb-5"},[t._v("팀 소개")]),i("div",[i("h3",[t._v("H조")]),i("div",[i("h4",[t._v("대한민국")]),[i(C.Z,{attrs:{"show-arrows":""},scopedSlots:t._u([{key:"prev",fn:function({on:a,attrs:s}){return[i(e.Z,t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),a),[i(o.Z,{attrs:{color:"white"}},[t._v("mdi-arrow-left")])],1)]}},{key:"next",fn:function({on:a,attrs:s}){return[i(e.Z,t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),a),[i(o.Z,{attrs:{color:"white"}},[t._v("mdi-arrow-right")])],1)]}}])},t._l(t.players.filter((t=>"KOR"===t.Counntrycode)),(function(a,e){return i(M.Z,{key:`card-${e}`},[i(s.Z,{staticClass:"text-center"},[i("p",[i("span",[t._v("No."+t._s(a.Back_No)+" ")]),i("span",[t._v(" "+t._s(a.Name))])]),i("p",[t._v("Position : "+t._s(a.Position))]),i("p",[t._v("Birth : "+t._s(a.Birth))]),i("p",[t._v("Weight : "+t._s(a.Weight))]),i("p",[t._v("Foot : "+t._s(a.Footed))]),i("p",[t._v("XG : "+t._s(a.XG))]),i("p",[t._v("Club : "+t._s(a.Club))]),i("p",[t._v("Games : "+t._s(a.Games))])])],1)})),1)]],2)])])],1)],1)},b=[],k=a(6843),O=a(3687),Z=function(){var t=this,i=t._self._c;return i(k.Z,{attrs:{color:"rgb(85, 0, 101)",dense:"",short:"",dark:""}},[t._l(t.menu,(function(a){return i(e.Z,{key:a,attrs:{href:a.link,text:""}},[i("span",[t._v(t._s(a.title))])])})),i(O.Z),i(e.Z,{attrs:{to:t.predict.link,text:""}},[i("span",[t._v(t._s(t.predict.title))])])],2)},H=[],Y={name:"PageQatarHeader",data(){return{menu:[{link:"#groupList",title:"Groups"},{link:"#teamIntro",title:"Teams"}],predict:{link:"/qatar/qpre",title:"Prediction"}}}},A=Y,L=a(1001),P=(0,L.Z)(A,Z,H,!1,null,null,null),j=P.exports,N=a(7484),R=a.n(N),T=a(1079),U={name:"PageQatar",components:{PageQatarHeader:j,dayjs:R()},data(){return{players:[],groups:["A조","B조","C조","D조","E조","F조","G조","H조"],teams:[["카타르","에콰도르","세네갈","네덜란드"],["잉글랜드","이란","미국","웨일스"],["아르헨티나","사우디아라비아","멕시코","폴란드"],["프랑스","덴마크","튀니지","호주"],["스페인","독일","일본","코스타리카"],["벨기에","캐나다","모로코","크로아티아"],["브라질","세르비아","스위스","카메룬"],["포르투갈","가나","우루과이","대한민국"]],flagLink:[["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/QAT?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ECU?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SEN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/NED?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/IRN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/WAL?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KSA?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MEX?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POL?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/DEN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/TUN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/AUS?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ESP?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/JPN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRC?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CAN?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MAR?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SRB?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SUI?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CMR?tx=c_fill,g_auto,q_auto"],["https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POR?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GHA?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/URU?tx=c_fill,g_auto,q_auto","https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KOR?tx=c_fill,g_auto,q_auto"]],today:R()().format("YYYY-MM-DD HH:mm"),dateDiff:"",date:"",hour:"",minute:""}},mounted(){this.calcDate(),this.dataPlayer()},updated(){this.calcDate()},methods:{calcDate:function(){this.dateDiff=R()(R()("2022-11-20 19:00").diff(this.today)).format("YYYY-MM-DD HH:mm"),this.date=R()(this.dateDiff).date(),this.hour=R()(this.dateDiff).hour(),this.minute=R()(this.dateDiff).minute()},dataPlayer(){T.Z.get("/qatar/player").then((t=>{this.players=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}}},W=U,E=(0,L.Z)(W,w,b,!1,null,null,null),G=E.exports},7484:function(t){!function(i,a){t.exports=a()}(0,(function(){"use strict";var t=1e3,i=6e4,a=36e5,e="millisecond",s="second",n="minute",r="hour",o="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var i=["th","st","nd","rd"],a=t%100;return"["+t+(i[(a-20)%10]||i[a]||i[0])+"]"}},m=function(t,i,a){var e=String(t);return!e||e.length>=i?t:""+Array(i+1-e.length).join(a)+t},v={s:m,z:function(t){var i=-t.utcOffset(),a=Math.abs(i),e=Math.floor(a/60),s=a%60;return(i<=0?"+":"-")+m(e,2,"0")+":"+m(s,2,"0")},m:function t(i,a){if(i.date()<a.date())return-t(a,i);var e=12*(a.year()-i.year())+(a.month()-i.month()),s=i.clone().add(e,c),n=a-s<0,r=i.clone().add(e+(n?-1:1),c);return+(-(e+(a-s)/(n?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:d,h:r,m:n,s:s,ms:e,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=g;var x=function(t){return t instanceof C},q=function t(i,a,e){var s;if(!i)return y;if("string"==typeof i){var n=i.toLowerCase();$[n]&&(s=n),a&&($[n]=a,s=n);var r=i.split("-");if(!s&&r.length>1)return t(r[0])}else{var o=i.name;$[o]=i,s=o}return!e&&s&&(y=s),s||!e&&y},S=function(t,i){if(x(t))return t.clone();var a="object"==typeof i?i:{};return a.date=t,a.args=arguments,new C(a)},D=v;D.l=q,D.i=x,D.w=function(t,i){return S(t,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var C=function(){function g(t){this.$L=q(t.locale,null,!0),this.parse(t)}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var i=t.date,a=t.utc;if(null===i)return new Date(NaN);if(D.u(i))return new Date;if(i instanceof Date)return new Date(i);if("string"==typeof i&&!/Z$/i.test(i)){var e=i.match(p);if(e){var s=e[2]-1||0,n=(e[7]||"0").substring(0,3);return a?new Date(Date.UTC(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,n)):new Date(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,n)}}return new Date(i)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,i){var a=S(t);return this.startOf(i)<=a&&a<=this.endOf(i)},m.isAfter=function(t,i){return S(t)<this.startOf(i)},m.isBefore=function(t,i){return this.endOf(i)<S(t)},m.$g=function(t,i,a){return D.u(t)?this[i]:this.set(a,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,i){var a=this,e=!!D.u(i)||i,l=D.p(t),h=function(t,i){var s=D.w(a.$u?Date.UTC(a.$y,i,t):new Date(a.$y,i,t),a);return e?s:s.endOf(o)},p=function(t,i){return D.w(a.toDate()[t].apply(a.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(i)),a)},_=this.$W,g=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return e?h(1,0):h(31,11);case c:return e?h(1,g):h(0,g+1);case u:var y=this.$locale().weekStart||0,$=(_<y?_+7:_)-y;return h(e?m-$:m+(6-$),g);case o:case d:return p(v+"Hours",0);case r:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case s:return p(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,i){var a,u=D.p(t),l="set"+(this.$u?"UTC":""),h=(a={},a[o]=l+"Date",a[d]=l+"Date",a[c]=l+"Month",a[f]=l+"FullYear",a[r]=l+"Hours",a[n]=l+"Minutes",a[s]=l+"Seconds",a[e]=l+"Milliseconds",a)[u],p=u===o?this.$D+(i-this.$W):i;if(u===c||u===f){var _=this.clone().set(d,1);_.$d[h](p),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(t,i){return this.clone().$set(t,i)},m.get=function(t){return this[D.p(t)]()},m.add=function(e,l){var d,h=this;e=Number(e);var p=D.p(l),_=function(t){var i=S(h);return D.w(i.date(i.date()+Math.round(t*e)),h)};if(p===c)return this.set(c,this.$M+e);if(p===f)return this.set(f,this.$y+e);if(p===o)return _(1);if(p===u)return _(7);var g=(d={},d[n]=i,d[r]=a,d[s]=t,d)[p]||1,m=this.$d.getTime()+e*g;return D.w(m,this)},m.subtract=function(t,i){return this.add(-1*t,i)},m.format=function(t){var i=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var e=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),n=this.$H,r=this.$m,o=this.$M,u=a.weekdays,c=a.months,l=function(t,a,s,n){return t&&(t[a]||t(i,e))||s[a].slice(0,n)},f=function(t){return D.s(n%12||12,t,"0")},d=a.meridiem||function(t,i,a){var e=t<12?"AM":"PM";return a?e.toLowerCase():e},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:l(a.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(a.weekdaysMin,this.$W,u,2),ddd:l(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(n),HH:D.s(n,2,"0"),h:f(1),hh:f(2),a:d(n,r,!0),A:d(n,r,!1),m:String(r),mm:D.s(r,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return e.replace(_,(function(t,i){return i||p[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,d,h){var p,_=D.p(d),g=S(e),m=(g.utcOffset()-this.utcOffset())*i,v=this-g,y=D.m(this,g);return y=(p={},p[f]=y/12,p[c]=y,p[l]=y/3,p[u]=(v-m)/6048e5,p[o]=(v-m)/864e5,p[r]=v/a,p[n]=v/i,p[s]=v/t,p)[_]||v,h?y:D.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,i){if(!t)return this.$L;var a=this.clone(),e=q(t,i,!0);return e&&(a.$L=e),a},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),M=C.prototype;return S.prototype=M,[["$ms",e],["$s",s],["$m",n],["$H",r],["$W",o],["$M",c],["$y",f],["$D",d]].forEach((function(t){M[t[1]]=function(i){return this.$g(i,t[0],t[1])}})),S.extend=function(t,i){return t.$i||(t(i,C,S),t.$i=!0),S},S.locale=q,S.isDayjs=x,S.unix=function(t){return S(1e3*t)},S.en=$[y],S.Ls=$,S.p={},S}))}}]);
//# sourceMappingURL=166.76ff8b06.js.map