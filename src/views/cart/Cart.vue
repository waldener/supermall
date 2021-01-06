<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cart-list="cartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/bscroll/Scroll";

  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background: var(--color-tint);
  color: white;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 98px;
  right: 0;
  left: 0;
}
</style>
