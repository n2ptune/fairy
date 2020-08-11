import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/global.css'
import './assets/css/loading.scss'
import { firestorePlugin } from 'vuefire'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true

Vue.use(VueClipboard)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
