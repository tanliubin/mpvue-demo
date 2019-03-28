<template>
  <div class="container">
    <div class="location flex-box">
      <i class="icon"></i><span class="location-name">奔力绿色空间 ></span>
    </div>
    <div class="search-box flex-box">
      <i class="iconfont icon-sousuo"></i>
      <span class="search">米多面多 满15减15</span>
    </div>
    <!--分类-->
    <div class="map-box flex-box">
      <div class="item-box" v-for="(item,index) in iconMap" :key="index">
        <i class="iconfont" :class="item.icon" :style="{ background: item.bg}"></i>
        <span>{{item.title}}</span>
      </div>
    </div>
    <!--轮播图-->
    <swiper class="swiper autoplay" indicator-dots="false" autoplay="false">
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <img :src="item" alt="">
        </swiper-item>
      </block>
    </swiper>

    <!--推荐列表-->
    <div class="recommend">
      <card></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      imgUrls: [
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
      ],
      iconMap: [
        { icon: 'icon-caigou', title: '美食', bg: '#EF8B3E' },
        { icon: 'icon-shangpin', title: '猫眼电影', bg: '#E4463B' },
        { icon: 'icon-touchengkongyun', title: '酒店住宿', bg: '#8B67E5' },
        { icon: 'icon-daohang', title: '休闲娱乐', bg: '#5DC7B0' },
        { icon: 'icon-zitigui', title: '外卖', bg: '#F3AE42' },
        { icon: 'icon-jiesuan', title: 'KTV', bg: '#5DC1A9' },
        { icon: 'icon-jijianfasong', title: '丽人', bg: '#EC5B6E' },
        { icon: 'icon-shoucang', title: '景点门票', bg: '#5CA2F2' },
        { icon: 'icon-baobiao', title: '火车票', bg: '#FD9D21' },
        { icon: 'icon-pifuzhuti', title: '民宿', bg: '#BED300' }
      ]
    }
  },

  components: {
    card
  },

  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .container{
    padding: 20px 15px;
    .location{
      font-size: 12px;
    }
    .search-box{
      margin: 10px 0;
      height: 35px;
      line-height: 35px;
      background-color: rgba(226, 224, 230, 0.35);
      color: #666;
      font-size: 12px;
      border-radius: 3px;
      padding-left: 10px;
      .iconfont{
        font-size: 14px;
        margin-right: 5px;
      }
    }
    .map-box{
      flex-wrap: wrap;
      height: 190px;
      justify-content: space-between;
      margin-top: 10px;
      .item-box{
        width: 20%;
        height: 80px;
        text-align: center;
        i{
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 100%;
          margin: 0 auto;
          font-size: 30px;
          color: #fff;
        }
        span{
          font-size: 12px;
        }
      }
    }
    .autoplay{
      height: 100px;
      margin: 10px 0;
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
</style>
