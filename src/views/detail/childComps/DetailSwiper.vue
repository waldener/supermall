<template>
  <div class="detail-swiper">
    <swiper v-if="images.length">
      <swiper-item
          v-for="(item,index) in imgList"
          :key='index'
          class="swiper-item">
        <img :src="item" alt="" @load="swiperLoad">
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      images:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        imagesLength:0,
        imgList:[],
      }
    },
    watch: {
      //函数名要和监听的属性名一致才能监听
      images() {
        this.imagesLength = this.images.length
        if(this.imagesLength > 4){
          this.imgList = this.images.slice(0,4)
        }else {
          this.imgList = this.images
        }
        this.imagesLength = this.imgList.length
      }
    },
    methods:{
      swiperLoad(){
        this.$emit('swiperLoad')
      }
    }

  }
</script>

<style scoped>
  .swiper-item{
    height: 300px;
  }
</style>