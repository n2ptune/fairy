import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/reset.css'
import './assets/css/global.css'
import { firestorePlugin } from 'vuefire'
import { fairyInit } from './functions/init'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

fairyInit()
