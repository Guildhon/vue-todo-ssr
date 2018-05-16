import Vue from 'vue'

const component = {
  props: ['text'],
  template: `
    <div :style="style">
      <div>{{text}}</div>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '300px',
        border: '1px solid #aaa',
        color: 'red'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <comp-one :text="value">
      <span slot="header">this is header</span>
      <div slot="body">this is body</div>
    </comp-one>
  `
})
