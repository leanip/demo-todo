<template>
  <div id='app'>
    {{msg}}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: 'hello world'
      }
    }
  }
</script>

<style scoped>
#app{
  color: #f90
}
</style>