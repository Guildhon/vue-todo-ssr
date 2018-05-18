import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // 默认是hash模式
    // base: '/base/', // 默认跳转的路由会加上该路径
    linkActiveClass: 'active-link', // url部分一样就加上
    linkExactActiveClass: 'exact-active-link', // 连接激活时加上该class,url一样才会加上
    scrollBehavior (to, from, savedPostion) {
      if (savedPostion) {
        return savedPostion // 如果上一次滚动条到达某个位置，下次依旧滚回到这个位置
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
    // parseQuery (query) {},
    // stringifyQuery (obj) {},
    // fallback: true 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式
  })
}
