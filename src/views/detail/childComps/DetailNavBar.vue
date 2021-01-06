<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="back">
      <img src='~assets/img/common/back.svg' alt="" class="back-img">
    </div>
    <div slot="center" class="center">
      <div v-for="(item,index) in titles"
           class="title"
           :class="{active:index == currentIndex}"
           @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default: () => {
        return ['商品', '参数', '评论', '推荐']
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods:{
    titleClick(index){
      this.$emit('titleClick', index)
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    box-shadow: 0 1px 1px #e9e9e9;
  }
  .center{
    display: flex;
    font-size: 13px;
  }
  .title{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back-img{
    width: 30%;
    transform: translate(-4px,3px);
  }
</style>