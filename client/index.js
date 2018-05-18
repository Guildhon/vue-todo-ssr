import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import createRouter from './config/router'

import './assert/styles/global.styl'

// const root = document.createElement('div')
// document.body.appendChild(root)

Vue.use(VueRouter)

const router = createRouter()

// 路由导航守卫，路由跳转时触发的钩子函数
router.beforeEach((to, from, next) => {
  console.log('before each')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('befor resolve')
  next()
})

router.afterEach((to, from) => {
  console.log('after each')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
