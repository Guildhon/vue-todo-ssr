import Vue from 'vue'
const component = {
  props: ['value'],
  template: `
    <div>
      <input type="text" @input="handelInput" :value="value">  
    </div>
  `,
  methods: {
    handelInput (e) {
      this.$emit('input', e.target.value)
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
    <div>
      <comp-one v-model="value" :value="value" ></comp-one>    
      // @input="value=arguments[0]"
    </div>
  `
})
