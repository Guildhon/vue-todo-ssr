<template>
    <div id="app">
      <div id="cover"></div>
      <Header></Header>
      <router-link :to="{name:'app'}">app</router-link>
      <router-link to="/login">login</router-link>
      <!--router-link to="/login/exact">login/exact</router-link-->
      <!--todo></todo-->
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from './views/layout/header.vue'
    import Footer from './views/layout/footer.jsx'
    import Todo from './views/todo/todo.vue'

    export default {
      data () {
        return {
          text: 'absc'
        }
      },
      components: {
        Header,
        Todo,
        Footer
      }
    }
</script>

<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
</style>
