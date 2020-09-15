import './plugins/db.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/global.css'
import './assets/css/loading.scss'
import VueClipboard from 'vue-clipboard2'
import ResponsiveContainer from '@/components/utils/ResponsiveContainer.vue'

Vue.use(VueClipboard)
Vue.component('ResponsiveContainer', ResponsiveContainer)
Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
