import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0,
    obj: {}
  }
})

setInterval(function () {
  // 其实是代理到app.$data.text
  app.text += 1
  // app.$data.text += 2
  // app.$options.text   访问是undefined
}, 100)

// 等有值变化时调用render方法
/*
app.$options.render = (h) => {
  return h('div', {}, 'new render function')
}
*/

// console.log(app.$root === app) true

// console.log(app.$children) 子组件

// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)

// console.log(app.$isServer) 服务端渲染判断

/*   跟在Vue里定义的watch一样效果
const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})

setTimeout(() => {
  unWatch()
}, 300)
*/
/*  还有$once只触发一次
app.$on('test', (val) => {
  console.log(val)
})
app.$emit('test', '123')
*/
// app.$forceUpdate() 强制让Vue重新渲染 比如一个obj里面不定义属性，然后再外面使用更改，是不会改变视图的，使用这个方法可以解决，但耗性能，所以一般会选取app.$set(app.obj,'a',新值)，对应删除的方法，app.$delete()

// vue是异步渲染的
/*
所以就算setInterval(()=>{
  app.text += 1
  app.text += 1
  app.text += 1
},1000)
一次会app.text+3个，而不是改变一次渲染一次

app.$nextTick 等DOM更新再回调执行
 */
