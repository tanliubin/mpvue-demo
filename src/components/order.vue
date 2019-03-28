<template>
  <div class="order flex-box">
    <div class="avatar">
      <img src="http://p1.meituan.net/200.0/deal/cbe85abfa89c96381c737ebacd0e3fb0369704.jpg@0_270_1080_1080a%7C267h_267w_2e_90Q" />
    </div>
    <div class="order-con">
      <h4 class="title">山城外老坛酸菜鱼2-3人餐</h4>
      <span class="count">数量：1</span>
      <span class="price">总价：&yen;118.00</span>
    </div>
    <span class="order-state">已退款</span>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.order{
  justify-content: space-between;
  padding: 10px 0;
  .avatar{
    width: 15%;
    img{
      width: 40px;
      height: 40px;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .order-con{
    width: 70%;
    display: flex;
    flex-direction: column;
    h4{
      font-size: 14px;
    }
    span{
      margin: 2px 0;
      color: #666;
    }
  }
  .order-state{
    width: 15%;
    color: #13D1BE;
    text-align: right;
    padding-right: 15px;
  }
}
</style>
