import Vue from 'vue'

// 这样定义的话组件都会共享同一个data，这样改变一个组件的数据也会导致其他组件的数据
const data = {
  text: 9
}
const component = {
  props: {
    active: Boolean // 验证传输过来的是否是布尔值
    // required validator default
  },
  template: `<div>
    <input type="text" v-model.number="text">
    {{text}}
    <div>{{active}}</div>
  </div>`,
  data () {
    return data
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  template: `<div>
    <comp-one :active="true"></comp-one>
    <comp-one></comp-one>
</div>`
})
