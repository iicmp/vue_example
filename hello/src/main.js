// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


// 引入vue.js
import Vue from 'vue'
// 引入app.vue
import App from './App'
// 引入router目录中的index.js
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注册路由
  components: { App },//注册app组件
  template: '<App/>'
})
