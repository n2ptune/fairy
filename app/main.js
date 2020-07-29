import Vue from 'vue'
import App from './App.vue'
import { init } from './lib/init'

// eslint-disable-next-line
const { root, container } = init()

new Vue({
  el: root,
  render: h => h(App)
})
