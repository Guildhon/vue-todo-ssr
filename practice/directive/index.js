import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
  <div>
    <!-- v-cloak只有在引入文件时才加，如果vue没加载完，就不显示 -->
    <!-- v-once数据绑定只执行一次，如果都是静态的，就可以一次生成，不需要更新 -->
    <input type="text" v-model.number="text"> <!--将输入的数据转化为数字 v-model.trim    v-model.lazy只有在失焦的时候才会更新数据  -->
    <div :id="text">{{text}}</div> <!-- 不解析里面的代码 -->
    <div v-pre>{{text}}</div>
    <div>
      <input type="checkbox" :value="1" v-model="arr">
      <input type="checkbox" :value="2" v-model="arr">
      <input type="checkbox" :value="3" v-model="arr">
    </div>
    <div>
       <input type="radio" value="one" v-model="picked">
       <input type="radio" value="two" v-model="picked">
    </div>
  </div>
`,
  data: {
    text: 0,
    active: false,
    arr: [2, 3],
    picked: ''
  }
})
