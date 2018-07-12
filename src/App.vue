<template>
  <div id='app'>
    {{text}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello vue'
      }
    }
  }
</script>

<style scoped>
  #app{
    color: #38a
  }
</style>
