<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <tab-control ref="contentTab1" class="tab-control" @tabClick="tabClick" v-show="showTabControl"></tab-control>
    <Scroll class="content"
    :probe-type="3"
    :pull-up-load="true"
    ref="scroll"
    @pullingUp="loadMore"
    @scroll="contentScroll"
    :data="[showGoodsList]">
      <home-swiper :banners="banners" class="banner" @imgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="contentTab2" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoodsList" ref="goodsList"></goods-list>
    </Scroll>
    <back-top v-show="showBackTop" @click.native="backTop"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"
import Scroll from "../../components/common/bscroll/Scroll";

import GoodsList from "../../components/content/goods/GoodsList";
import TabControl from "../../components/content/tabControl/TabControl"

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView";

import {getMultiData, getProductData} from "network/home";
import {backTopMixin,busMixin} from "common/mixin";
  export default {
    name: "Home",
    mixins: [backTopMixin,busMixin],
    components:{
      NavBar,
      Scroll,

      TabControl,
      GoodsList,

      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods:{
          "pop":{page:0, list:[]},
          "new":{page:0, list:[]},
          "sell":{page:0, list:[]},
        },
        currentType:'pop',
        showTabControl: false,
        tabOffsetTop: 0,
        saveY: 0,
        swiperIsLoad:false,
        popY:0,
        newY:0,
        sellY:0
      }
    },
    computed:{
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /**
       * 网络请求
       */
      _getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      _getProductData(type) {
        //获取页码
        const page = this.goods[type].page + 1
        getProductData(type,page).then(res => {
          const newList = res.data.list
          this.goods[type].list.push(...newList)
          this.goods[type].page += 1

          // 事情做完,需要调用此方法告诉better-scroll数据已加载,否则上拉事件只会执行一次
          this.$refs.scroll.finishedPullUp()
        })
      },

      /**
       * 事件监听
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            if(this.showTabControl){
              if(-this.popY < this.tabOffsetTop){
                this.popY = -this.tabOffsetTop
              }
              this.$refs.scroll.scrollTo(0,this.popY,0)
            }
            break
          case 1:
            this.currentType = 'new'
            if(this.showTabControl){
              if(-this.newY < this.tabOffsetTop){
                this.newY = -this.tabOffsetTop
              }
              this.$refs.scroll.scrollTo(0,this.newY,0)
            }
            break
          case 2:
            this.currentType = 'sell'
            if(this.showTabControl){
              if(-this.sellY < this.tabOffsetTop){
                this.sellY = -this.tabOffsetTop
              }
              this.$refs.scroll.scrollTo(0,this.sellY,0)
            }
            break
        }

        this.$refs.contentTab1.currentIndex = index
        this.$refs.contentTab2.currentIndex = index
      },

      loadMore(){
        this._getProductData(this.currentType)
        this.$refs.scroll.refresh()
      },
      contentScroll(position) {
        this.showBackTop = position.y <= -1000
        this.showTabControl = position.y <= -this.tabOffsetTop
        if(this.showTabControl){
          if(this.currentType == 'pop'){
            this.popY = position.y
            // console.log('滑动时popY'+this.popY);
          }
          if(this.currentType == 'new'){
            this.newY = position.y
            // console.log('滑动时newY'+this.newY);
          }
          if(this.currentType == 'sell'){
            this.sellY = position.y
            // console.log('滑动时sellY'+this.sellY);
          }
        }else {
          this.popY = this.sellY = this.newY = 0
        }
      },
      swiperImgLoad(){
        if(!this.swiperIsLoad){
          this.tabOffsetTop = this.$refs.contentTab2.$el.offsetTop
          this.swiperIsLoad = !this.swiperIsLoad
        }
      },
    },
    created() {
      // 1.请求轮播等数据
      this._getMultiData()

      //2.请求商品数据
      this._getProductData('pop')
      this._getProductData('new')
      this._getProductData('sell')


    },

    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('imgLoad')
    },
    activated() {
      this.saveY = this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
