<template>
  <div id="info">
    <div class="icon">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="login">
      <div>登录/注册</div>
      <div>
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <img src="~assets/img/common/arrow-left.svg" alt="" class="more">
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
  #info{
    display: flex;
    padding: 10px;
    background: var(--color-tint);
    color: white;
  }
  .icon img{
    width: 70px;
  }
  .login{
    flex: 1;
    margin-left: 15px;
    font-size: 14px;
  }
  .login div{
    padding-top: 13px;
  }
  .login img{
    width: 18px;
    vertical-align: middle;
    margin-left: -5px;
    margin-top: -4px;
  }
  .more{
    width: 30px;
  }

</style>