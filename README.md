# mpvue-demo

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

### mpvue 使用vant-ui等第三方ui框架
我们需要用到vant-weapp开源项目中vant UI组件，所以要将vant-weapp下载下来,下来后将其项目下的dist文件全部都copy到我们需要用到原项目中（就是我们开始初始化的项目），为了方便管理，可以在根目录下的static下新建一个vant用于存放UI组件文件；
```
git clone https://github.com/youzan/vant-weapp.git
```
我们只需要在我们需要使用组件的页面的配置json文件中引入我们需要的组件即可
比如：index.json
```
{ 
    // 页面配置，即 page.json 的内容
    navigationBarTitleText: '首页',
    'usingComponents': {
      'van-search': '/static/vant/search/index',
      'van-row': '/static/vant/row/index',
      'van-col': '/static/vant/col/index',
      'van-tab': '/static/vant/tab/index',
      'van-tabs': '/static/vant/tabs/index',
      'van-cell': '/static/vant/cell/index',
      'van-cell-group': '/static/vant/cell-group/index',
      'van-radio': '/static/vant/radio/index',
      'van-radio-group': '/static/vant/radio-group/index',
      'van-field': '/static/vant/field/index',
      'van-button': '/static/vant/button/index',
      'van-card': '/static/vant/card/index',
      'van-popup': '/static/vant/popup/index',
      'van-icon': '/static/vant/icon/index',
      'van-panel': '/static/vant/panel/index',
      'van-action-sheet': '/static/vant/cell-group/index',
      'van-switch-cell': '/static/vant/switch-cell/index',
      'van-area': '/static/vant/area/index',
      'van-dialog': '/static/vant/dialog/index'
    }
  }
```
### mpvue使用vuex并使vuex状态持久化（缓存到本地）
配置vuex
1、目录结构
```
│ ├── store      //状态管理 vuex配置目录
│ │  └── actions.js    //actions异步修改状态
│ │  └── getters.js    //getters计算过滤操作
│ │  └── mutation-types.js    //mutations 类型
│ │  └── mutations.js    //修改状态
│ │  └── index.js    //我们组装模块并导出 store 的地方
│ │  └── state.js    //数据源定义
--------------------- 
```
2、main.js中引入store, 并绑定到Vue构造函数的原型上，这样在每个vue的组件都可以通过this.$store访问store对象。
```angular2html
import store from './store/index'
Vue.prototype.$store = store
```
3、定义初始变量store/state.js
```angular2html
const state = {
  userInfo: null
}
export default state
```
4、mutation类型
方便检测错误和书写，一般写方法
```angular2html
export const USER_INFO = 'USER_INFO'
```
5、store/mutations.js
写处理方法
```angular2html
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
```
6、store/index.js
汇总配置，使用vuex-persistedstate，使vuex状态持久化（缓存到本地）
```angular2html
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  plugins: [
  // 使用vuex-persistedstate，使vuex状态持久化（缓存到本地）
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {}
      }
    })
  ]
})

```
