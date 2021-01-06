<template>
  <div id="account-info">
    <div>
      <p><span>0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div>
      <p><span>0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div>
      <p><span>0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
name: "AccountInfo"
}
</script>

<style scoped>
  #account-info{
    display: flex;
    text-align: center;
    background: white;
    font-size: 13px;
  }
  #account-info div{
    height: 100px;
    padding-top: 30px;
    flex: 1;
  }
  #account-info div{
    border-right: 1px solid #f2f2f2;
  }
  #account-info div:last-of-type{
    border-right: 0;
  }
  p{
    padding-bottom: 3px;
  }
  span{
    font-size: 18px;
    font-weight: bold;
    color: orangered;
  }
</style>