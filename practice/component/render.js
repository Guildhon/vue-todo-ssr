import Vue from 'vue'

const component = {
  name: 'comp',
  props: ['text'],
  // template: `
  //   <div :style="style">
  //    <slot :value="value"></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => {
      //     this.$emit('click')
      //   }
      // }
    }, [this.$slots.default])
  },
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
  mounted () {
    console.log(this.text)
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
  // template: `
  //   <comp-one :text="value" ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `, // 执行了render方法 createElement
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        text: this.value
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: { // 会自动$emit，不需要手动$emit触发
        click: this.handleClick
      }
    }, [createElement('span', {
      ref: 'span'
    }, this.value)])
  },
  methods: {
    handleClick () {
      console.log('checked')
    }
  }
})
