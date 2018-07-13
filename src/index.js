import Vue from 'vue'
import App from './App.vue'

import './assets/css/test.css'
import './assets/css/test.styl'
import './assets/img/1.jpeg'

const root  = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: h => h(App)
}).$mount(root)
