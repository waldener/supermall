(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ab5517"],{"062d":function(t,e,n){},"08b3":function(t,e,n){var r=n("01e9");r("iterator")},"194c":function(t,e,n){"use strict";n("f689")},"1cf2":function(t,e,n){"use strict";var r=n("fdc8"),i=n("4326"),s=n("9aaa"),o=n("730b"),a=n("2730"),c=n("5c14"),l=n("d4eb");t.exports=function(t){var e,n,u,d,h,f,p=i(t),m="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,w=void 0!==v,y=l(p),g=0;if(w&&(v=r(v,b>2?arguments[2]:void 0,2)),void 0==y||m==Array&&o(y))for(e=a(p.length),n=new m(e);e>g;g++)f=w?v(p[g],g):p[g],c(n,g,f);else for(d=y.call(p),h=d.next,n=new m;!(u=h.call(d)).done;g++)f=w?s(d,v,[u.value,g],!0):u.value,c(n,g,f);return n.length=g,n}},"2cfd":function(t,e,n){var r=n("4292"),i=n("1cf2"),s=n("8b5c"),o=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},"301c":function(t,e,n){"use strict";n("adce")},3804:function(t,e,n){"use strict";n("d4ef")},"3bc5":function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"5eee":function(t,e,n){},"82a8":function(t,e,n){var r=n("61a2"),i=n("58ea").f,s=Function.prototype,o=s.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in s)&&i(s,c,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},9048:function(t,e,n){"use strict";n("062d")},9956:function(t,e,n){"use strict";n("cfa7")},"9aaa":function(t,e,n){var r=n("425b"),i=n("e3fb");t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){throw i(t),o}}},"9bd0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{staticClass:"tab-control-item",class:{active:t.currentIndex===r},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],s={name:"TabControl",props:{titles:{type:Array,default:function(){return["流行","新款","精选"]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},o=s,a=(n("d42e"),n("5d22")),c=Object(a["a"])(o,r,i,!1,null,"5b3fdd7f",null);e["a"]=c.exports},adce:function(t,e,n){},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("NavBar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.showTabControl,expression:"showTabControl"}],ref:"contentTab1",staticClass:"tab-control",on:{tabClick:t.tabClick}}),n("Scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0,data:[t.showGoodsList]},on:{pullingUp:t.loadMore,scroll:t.contentScroll}},[n("home-swiper",{staticClass:"banner",attrs:{banners:t.banners},on:{imgLoad:t.swiperImgLoad}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"contentTab2",staticClass:"tab-control",on:{tabClick:t.tabClick}}),n("goods-list",{ref:"goodsList",attrs:{goods:t.showGoodsList}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showBackTop,expression:"showBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},i=[];function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return s(t)}n("6b07"),n("cf2b"),n("2a39"),n("08b3"),n("f39f"),n("4021"),n("2cfd");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("c30f"),n("82a8");function c(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||a(t)||c(t)||l()}var d=n("a7ac"),h=n("f647"),f=n("6d71"),p=n("9bd0"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banners.length?n("swiper",{ref:"swiper"},t._l(t.banners,(function(e){return n("swiper-item",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image},on:{load:t.imgLoad}})])])})),1):t._e()},b=[],v=n("dc2c"),w={name:"HomeSwiper",props:{banners:{type:Array,required:!0}},components:{Swiper:v["a"],SwiperItem:v["b"]},methods:{imgLoad:function(){this.$emit("imgLoad")}}},y=w,g=(n("301c"),n("5d22")),T=Object(g["a"])(y,m,b,!1,null,"1823e102",null),C=T.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return n("div",{staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},_=[],I={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},S=I,$=(n("3804"),Object(g["a"])(S,x,_,!1,null,"2cdbbc26",null)),k=$.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],A={name:"FeatureView"},L=A,j=(n("9956"),Object(g["a"])(L,O,Y,!1,null,"cebd1746",null)),E=j.exports,D=n("a137");function W(){return Object(D["a"])({url:"/home/multidata"})}function N(t,e){return Object(D["a"])({url:"/home/data",params:{type:t,page:e}})}var M=n("eecb"),B={name:"Home",mixins:[M["a"],M["b"]],components:{NavBar:d["a"],Scroll:h["a"],TabControl:p["a"],GoodsList:f["a"],HomeSwiper:C,RecommendView:k,FeatureView:E},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",showTabControl:!1,tabOffsetTop:0,saveY:0,swiperIsLoad:!1,popY:0,newY:0,sellY:0}},computed:{showGoodsList:function(){return this.goods[this.currentType].list}},methods:{_getMultiData:function(){var t=this;W().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},_getProductData:function(t){var e=this,n=this.goods[t].page+1;N(t,n).then((function(n){var r,i=n.data.list;(r=e.goods[t].list).push.apply(r,u(i)),e.goods[t].page+=1,e.$refs.scroll.finishedPullUp()}))},tabClick:function(t){switch(t){case 0:this.currentType="pop",this.showTabControl&&(-this.popY<this.tabOffsetTop&&(this.popY=-this.tabOffsetTop),this.$refs.scroll.scrollTo(0,this.popY,0));break;case 1:this.currentType="new",this.showTabControl&&(-this.newY<this.tabOffsetTop&&(this.newY=-this.tabOffsetTop),this.$refs.scroll.scrollTo(0,this.newY,0));break;case 2:this.currentType="sell",this.showTabControl&&(-this.sellY<this.tabOffsetTop&&(this.sellY=-this.tabOffsetTop),this.$refs.scroll.scrollTo(0,this.sellY,0));break}this.$refs.contentTab1.currentIndex=t,this.$refs.contentTab2.currentIndex=t},loadMore:function(){this._getProductData(this.currentType),this.$refs.scroll.refresh()},contentScroll:function(t){this.showBackTop=t.y<=-1e3,this.showTabControl=t.y<=-this.tabOffsetTop,this.showTabControl?("pop"==this.currentType&&(this.popY=t.y),"new"==this.currentType&&(this.newY=t.y),"sell"==this.currentType&&(this.sellY=t.y)):this.popY=this.sellY=this.newY=0},swiperImgLoad:function(){this.swiperIsLoad||(this.tabOffsetTop=this.$refs.contentTab2.$el.offsetTop,this.swiperIsLoad=!this.swiperIsLoad)}},created:function(){this._getMultiData(),this._getProductData("pop"),this._getProductData("new"),this._getProductData("sell")},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("imgLoad")},activated:function(){this.saveY=this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()}},P=B,X=(n("9048"),Object(g["a"])(P,r,i,!1,null,"44c5afb4",null));e["default"]=X.exports},c30f:function(t,e,n){"use strict";var r=n("4292"),i=n("3079"),s=n("a308"),o=n("fb77"),a=n("2730"),c=n("b9dd"),l=n("5c14"),u=n("9345"),d=n("b9d5"),h=d("slice"),f=u("species"),p=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var n,r,u,d=c(this),h=a(d.length),b=o(t,h),v=o(void 0===e?h:e,h);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?i(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,b,v);for(r=new(void 0===n?Array:n)(m(v-b,0)),u=0;b<v;b++,u++)b in d&&l(r,u,d[b]);return r.length=u,r}})},cf2b:function(t,e,n){"use strict";var r=n("4292"),i=n("61a2"),s=n("73cd"),o=n("b587"),a=n("3079"),c=n("58ea").f,l=n("3150"),u=s.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(h,u);var f=h.prototype=u.prototype;f.constructor=h;var p=f.toString,m="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var n=m?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},cfa7:function(t,e,n){},d42e:function(t,e,n){"use strict";n("3bc5")},d4ef:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e){return n("div",{key:e,staticClass:"indi-item",class:{active:e===t.currentIndex}})}))):t._e()],2)],2)},i=[],s=(n("b34d"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{transform:""},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition=this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),o=s,a=(n("194c"),n("5d22")),c=Object(a["a"])(o,r,i,!1,null,"39c8e178",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],h={name:"Slide"},f=h,p=(n("ed86"),Object(a["a"])(f,u,d,!1,null,"c541eb68",null)),m=p.exports},ed86:function(t,e,n){"use strict";n("5eee")},f689:function(t,e,n){}}]);
//# sourceMappingURL=chunk-19ab5517.78a02a19.js.map