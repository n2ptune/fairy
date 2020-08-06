import Vue from 'vue'
import App from './App.vue'
import Fairy from './lib/init'

if (process.env.NODE_ENV === 'development') {
  window.FAIRY_APP = {
    id: 'pu79lmrvvbj96d5nypm8'
  }
}

if (window.FAIRY_APP) {
  const fairy = new Fairy(window.FAIRY_APP.id)

  Vue.prototype.$fairy = fairy

  new Vue({
    el: fairy.el.root,
    render: h => h(App)
  })
}
