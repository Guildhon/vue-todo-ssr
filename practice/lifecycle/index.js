import Vue from 'vue'

const app = new Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 1
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  }, // 服务端不会有beforeMount和mounted，因为不操作DOM
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  }, // render方法是在这两个生命周期间完成的
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  }, // 这两个跟keep-alive有关系
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroy')
  },
  render (h) {
    console.log('render')
    return h('div', {}, '123')
  },
  renderError (h, err) { // render函数报错调用这个方法，用于调试
    return h('<div>', {}, err.stack)
  },
  errorCapture () { // 子组件有错误都可以捕获到
    // 会向上冒泡，线上环境可以使用
  }
})

app.$mount('#root')

/*
会执行beforeUpdate和updated
setInterval(function () {
  app.text += 1
}, 1000)
*/
/*
会执行beforeDestroy和destroy
setTimeout(() => {
  app.$destroy()
})
*/
