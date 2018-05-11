import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
      <div>
        <p>{{myname}}</p>
        <p>{{getName()}}</p>
        <p>{{number}}</p>
        <p><input type="text" v-model="number"></p>
        <p>fullname: {{fullName}}</p>
        <p>firstName:<input type="text" v-model="firstName"></p>
        <p>lastName:<input type="text" v-model="lastName"></p>
        <p>myname:<input type="text" v-model="myname"></p>
        <p>Obj.a:<input type="text" v-model="obj.a"></p>
      </div>`,
  data: {
    firstName: 'jack',
    lastName: 'huang',
    number: 0,
    fullName: '',
    obj: {
      a: 1
    }
  },
  computed: {
    myname: { // 不是想要直接显示的，而是处理的，跟watch比生成一个新的值
      get () {
        console.log('get myname')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true // 一开始是不会执行的，但设置为true以后马上就可以求值
    },
    obj: {
      handler (newName, oldName) {
        console.log('obj changed')
      },
      immediate: true,
      deep: true // false时只能监听obj引用变化，内部的属性时无法触发handler的。使用这个性能消耗会很大
    }
  },
  methods: {
    getName () { // v-model改变每次都会重新执行，但computed会缓存
      console.log('getname function')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
