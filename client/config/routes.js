// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true, // 如果是/app:id会传入到Todo组件中
    component: () => import('../views/todo/todo.vue'), // 异步组件
    name: 'app',
    children: [
      {
        path: 'test',
        component: Login
      }
    ],
    beforeEnter (to, from, next) { // 钩子函数
      console.log('before enter')
      next()
    }
  },
  {
    path: '/login',
    component: Login
  }/*,
  {
    path: '/login/exact',
    component: Login
  }
  */
]
