import Vue from 'vue'
import App from './App.vue'

let root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: h => h(App),
}).$mount(root)
