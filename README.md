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
