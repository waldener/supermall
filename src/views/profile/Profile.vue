<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info></user-info>
    <account-info></account-info>
    <normal-list-view :list="list1" class="list"></normal-list-view>
    <normal-list-view :list="list2" class="list"></normal-list-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import UserInfo from "./childComps/UserInfo";
  import AccountInfo from "./childComps/AccountInfo";
  import NormalListView from "./childComps/NormalListView";
  export default {
    name: "Profile",
    components:{
      NavBar,
      UserInfo,
      AccountInfo,
      NormalListView,
    },
    data(){
      return {
        list1:[
          {icon: 'message.svg', info: '我的消息'},
          {icon: 'pointer.svg', info: '积分商城'},
          {icon: 'vip.svg', info: '会员卡'},
        ],
        list2:[
          {icon: 'cart.svg', info: '我的购物车'},
          {icon: 'shopping.svg', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>
  #profile{
    background: #f2f2f2;
  }
  .nav-bar{
    background: var(--color-tint);
    color: white;
  }
  .list{
    margin-top: 15px;
  }
</style>
