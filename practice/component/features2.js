import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye) // 拿到爷爷辈的对象
  }
}

const component = {
  name: 'comp',
  props: ['text'],
  template: `
    <div :style="style">
     <slot :value="value"></slot>
     <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '300px',
        border: '1px solid #aaa',
        color: 'red'
      },
      value: 'abc'
    }
  },
  components: {
    ChildComponent
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data: data
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.text)
    console.log(this.$refs.divcomp)
  },
  template: `
    <div>
    <comp-one :text="value" ref="comp">
      <div slot-scope="props" ref="divcomp">{{props.value}} {{value}}</div> <!-- 这样设置的话就会只用组件自己的值 -->
    </comp-one>
    <input type="text" v-model="value"></div>
  `
})
