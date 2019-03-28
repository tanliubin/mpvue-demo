<template>
  <div class="mine">
    <div class="mine-info">
      <div class="avatar">
        <img v-if="userInfo" class="avatar" :src="userInfo.avatarUrl" alt="">
      </div>
      <div class="info">
        <p v-if="userInfo">{{userInfo.nickName}}</p>
        <button class="name" open-type="getUserInfo" @getuserinfo="getUserInfo" v-else>请点击登陆</button>
        <span class="account">账号管理</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { USER_INFO } from '../../store/mutations-types'
export default {
  name: 'mine',
  data () {
    return {
      userInfo: null || this.$store.state.userInfo
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations({
      USER_INFO: USER_INFO
    }),
    login () {
      wx.login({
        success: res => {
          console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    getUserInfo (e) {
      this.userInfo = e.mp.detail.userInfo
      this.USER_INFO(e.mp.detail.userInfo)
    }
  },
  mounted () {
    this.login()
  }
}
</script>

<style lang="scss" scoped>
  .mine-info{
    display: flex;
    height: 150px;
    padding: 20px;
    background-color: #13D1BE;
    .avatar{
      width: 20%;
      img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
      }
    }
    .info{
      width: 80%;
      font-size: 14px;
      color: #fff;
    }
  }
</style>
