<template>
  <div class="card-box">
    <div class="title">南山书院 2人情侣套餐</div>
    <div class="desc">仅售118元，价值192元情侣套餐，不限时段使用！黄角垭/南山</div>
    <div class="price">
      <span class="cur-price">&yen;118</span>
      <span class="cost-price">&yen;192</span>
    </div>
    <div class="img-list flex-box">
      <img class="img-list-item" src="https://p1.meituan.net/dpdeal/66a56d889ffad12601cf2de89a78fbed257992.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0" alt="">
      <img class="img-list-item" src="https://p0.meituan.net/dpdeal/bcd18a36f917498b50b556bb7a5c6df92917817.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0" alt="">
      <img class="img-list-item" src="https://p1.meituan.net/dpdeal/0fb88136cb585032069e3bfb35d8cc55280221.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0" alt="">
    </div>
    <div class="close">X</div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped lang="scss">
  .card-box{
    position: relative;
    background-color: white;
    font-size: 12px;
    border-radius: 10px;
    padding: 15px;
    .title{
      font-size: 14px;
      padding-bottom: 5px;
    }
    .desc{
      color: #666;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price{
      margin-top: 5px;
      .cur-price{
        color: #e65d2a;
        font-size: 16px;
      }
      .cost-price{
        padding-left: 5px;
        text-decoration: line-through;
        color: #666;
      }
    }
    .img-list{
      justify-content: space-between;
      margin-top: 10px;
      .img-list-item{
        width: 30%;
        height: 80px;
        border-radius: 5px;
        object-fit: cover;
        &:first-child{
          box-shadow: 0 3px 5px rgba(0,0,0, .3);
        }
      }
    }
    .close{
      position: absolute;
      right: 20px;
      top: 10px;
      padding: 0 8px;
      border-radius: 10px;
      color: #aaa;
      font-size: 10px;
      border: 1px solid #aaa;
    }
  }
</style>
