import Vue from 'vue'

const component = {
  props: ['propsData'],
  template: `<div>
    <input type="text" v-model.number="text">
    {{text}}
    <div>{{propsData}}</div>
  </div>`,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('component mounted')
  }
}

const component2 = { // 可以指定parent，但需要是new出来的
  extends: component,
  data () {
    return {
      text: 2
    }
  },
  props: ['abc'],
  mounted () {
    console.log('comp2 mounted')
    console.log(this.$parent.$options.name)
    this.$parent.text = '12345'
  }
}

/*
const CompVue = Vue.extend(component)
new CompVue({
  el: '#root',
  name: 'CompVue',
  propsData: {
    propsData: 'abc'
  },
  data: {
    text: 123 // 合并覆盖掉component的text
  },
  mounted () {
    console.log('instant mounted')
  }
})
*/
new Vue({
  el: '#root',
  name: 'Root',
  components: {
    Comp: component2
  },
  data: {
    text: 2333
  },
  template: `
    <div>
      <comp></comp>
      <span>{{text}}</span>  
    </div>
  `
})
