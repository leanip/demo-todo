<template>
  <div id='app'>
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './todo/header.vue'
  import Footer from './todo/footer.jsx'
  import Todo from './todo/todo.vue'

  export default {
    data(){
      return {
        msg: 'hello world'
      }
    },
    components: {
      Header,
      Footer,
      Todo
    }
  }
</script>

<style lang='stylus' scoped>
#app
  position absolute
  top 0
  left 0
  right 0
  bottom 0

  #cover
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    opacity .9
    background-color #999
    z-index -1
</style>