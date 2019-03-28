<template>
  <div class="orders">
    <van-tabs :active="active" @change="onChange">
      <van-tab title="全部订单">
        <van-swipe-cell right-width="65" left-width="0" async-close @close="onClose">
          <order></order>
          <view slot="right">删除</view>
        </van-swipe-cell>
        <van-swipe-cell right-width="65" left-width="0" async-close @close="onClose">
          <order></order>
          <view slot="right">删除</view>
        </van-swipe-cell>
      </van-tab>
      <van-tab title="待付款">待付款</van-tab>
      <van-tab title="待使用">内容 3</van-tab>
      <van-tab title="待评价">内容 4</van-tab>
      <van-tab title="退款/售后">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import order from '@/components/order'
export default {
  name: 'index',
  components: { order },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange () {}
  }
}
</script>

<style lang="scss">
  .right{
    width: 100%;
    background-color: red;
    color: #fff;
  }
</style>
