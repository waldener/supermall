<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message:'默认弹窗',
        isShow:false,
      }
    }

  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    color: #fff;
    z-index: 99;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>