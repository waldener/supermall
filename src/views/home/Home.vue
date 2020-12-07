<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from "./childComps/RecommendView";

import {getMultiData, getProductData} from "network/home";
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return {
        banners: [],
        recommends: [],
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
    },
    created() {
      // 1.请求轮播等数据
      this._getMultiData()

      // 2.请求商品数据
    }
  }
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
</style>
