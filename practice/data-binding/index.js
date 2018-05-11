import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div :class="[{ bc : !isActive},'bbb']" :style="[style1,style2]">{{this.isActive ? 'active' : 'not active'}}</div>
  `,
  data: {
    isActive: false,
    aaa: 'main',
    style1: {
      color: 'red'
    },
    style2: {
      fontSize: '40px'
    }
  }
})
