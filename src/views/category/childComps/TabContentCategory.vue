<template>
  <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategory.list">
    <div class="item" v-for="(item,index) in subcategory.list"  :key=index>
      <a href="item.link">
        <img :src="item.image" class='item-img' alt="" @load="imgLoad">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
  import GridView from "../../../components/common/gridView/GridView";
  export default {
    name: "TabContentCategory",
    components:{
      GridView,
    },
    props:{
      subcategory:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .panel img {
    width: 100%;
  }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>