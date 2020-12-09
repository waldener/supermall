<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners" class="banner"></HomeSwiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control ref="contentTab" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoodsList"></goods-list>
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
      <li>商品6</li>
      <li>商品7</li>
      <li>商品8</li>
      <li>商品9</li>
      <li>商品10</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView";

import GoodsList from "../../components/content/goods/GoodsList";
import TabControl from "../../components/content/tabControl/TabControl";


import {getMultiData, getProductData} from "network/home";
  export default {
    name: "Home",
    components:{
      NavBar,

      HomeSwiper,
      RecommendView,
      FeatureView,

      TabControl,
      GoodsList
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
        currentType:'pop'
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
        })
      },

      /**
       * 事件监听
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        this.$refs.contentTab.currentIndex = index
      },
    },
    created() {
      // 1.请求轮播等数据
      this._getMultiData()

      //2.请求商品数据
      this._getProductData('pop')
      this._getProductData('new')
      this._getProductData('sell')

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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .banner{
    margin-top: 44px;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

</style>
