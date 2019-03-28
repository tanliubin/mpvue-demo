import * as types from './mutations-types'
const matations = {
  /**
   * state:当前状态树
   * v: 提交matations时传的参数
   */
  [types.USER_INFO] (state, v) {
    state.userInfo = v
  }

}

export default matations
