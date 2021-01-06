<template>
  <div id="info-list">
    <div v-for="item in list">
      <img :src="iconUrl(item)" alt="">
      <span>{{item.info}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NormalListView",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      iconUrl(item){
        return require('assets/img/profile/' + item.icon)
      }
    }
  }
</script>

<style scoped>
  #info-list div{
    display: flex;
    background: white;
  }
  #info-list img{
    width: 33px;
    padding-left: 13px;
  }
  span{
    flex: 1;
    margin-left: 20px;
    font-size: 14px;
    color: black;
    padding: 15px;
    padding-left: 10px;
    border-bottom: 1px solid #f0f0f3;
  }
</style>