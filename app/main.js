import Vue from 'vue'
import App from './App.vue'
import { init } from './lib/init'

// eslint-disable-next-line
const { root } = init()

new Vue({
  el: root,
  render: h => h(App)
})
