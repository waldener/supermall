<template>
  <div class="detail">
    <detail-nav-bar @titleClick="selectClick" :currentIndex="currentIndex"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :images="topImages" @swiperLoad="imgLoad"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imgLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="goodsList" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"/>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "../../components/common/bscroll/Scroll";

import GoodsList from "../../components/content/goods/GoodsList";

import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from "../../network/detail";
import {backTopMixin} from "common/mixin";
import {debounce} from '../../common/utils';
import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    mixins:[backTopMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailCommentInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      GoodsList,
      DetailBottomBar,
      Scroll
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        commentInfo:{},
        paramInfo:{},
        goodsList: [],
        themeTops:[],
        currentIndex:0,
      }
    },
    methods:{
      ...mapActions({
        addCart:'addToCart'
      }),
      imgLoad(){
        debounce(this.loadRefresh(),1000)
      },
      loadRefresh(){
        this.$refs.scroll.refresh()

        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },

      _getDetail(iid){
        //根据iid请求数据
        getDetail(iid).then(res => {
          const data = res.result
          //获取轮播图数据
          this.topImages = data.itemInfo.topImages
          //获取商品信息
          this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
          //获取商店信息
          this.shop = new Shop(data.shopInfo)
          // 5.获取商品详细信息
          this.detailInfo = data.detailInfo

          //6.获取商品商品参数
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

          // 7.保存评论数据
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
        })
      },

      _getRecommend(){
        //获取推荐数据
        getRecommend().then(res => {
          this.goodsList = res.data.list
        })
      },

      selectClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTops[index],333)
      },
      contentScroll(position){
        this.showBackTop = position.y <= -1000
        this._listenScrollTheme(-position.y)
      },
      _listenScrollTheme(position) {
        let length = this.themeTops.length;
        for (let i in this.themeTops) {
           i = i*1
          let iPos = this.themeTops[i];
          /**
           * 判断的方案:
           *  方案一:
           *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
           *    优点: 不需要引入其他的内容, 通过逻辑解决
           *    缺点: 判断条件过长, 并且不容易理解
           *  方案二:
           *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
           *    优点: 简洁明了, 便于理解
           *    缺点: 需要引入一个较大的int数字
           * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
           * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
           */
          if (position >= iPos && position < this.themeTops[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
      },
      addToCart(){
        // 2.将商品信息添加到Store中
        const obj = {}
        obj.iid = this.iid
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc
        obj.price = this.goods.realPrice

        this.addCart(obj).then(res => {
          this.$toast({message:'加入购物车成功'})
        })
        // this.$store.dispatch('addToCart', obj).then(() => {
        //  this.$toast({message: '加入购物车成功'})
        // })
      }
    },
    created() {
      //获取存入的iid
      this.iid = this.$route.query.iid

      this._getDetail(this.iid)

      this._getRecommend()
    },
    mounted() {
      //1.监听一些事件
      this.$bus.$on('imgLoad',() => {
        this.$refs.scroll.refresh()
      })
    },
    beforeDestroy() {
      this.$bus.$off('imgLoad')
    }

  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 11;
    background: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>