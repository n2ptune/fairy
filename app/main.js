import Vue from 'vue'
import App from './App.vue'
import Fairy from './lib/init'
import Unicon from 'vue-unicons'
import { uniCommentNotes, uniTimes } from 'vue-unicons/src/icons'

Unicon.add([uniCommentNotes, uniTimes])

Vue.use(Unicon)

/** Entry point in development mode */
if (process.env.NODE_ENV === 'development') {
  window.FAIRY_APP = {
    id: 'pu79lmrvvbj96d5nypm8'
  }
}

/** Entry Point in production mode */
if (window.FAIRY_APP) {
  const fairy = new Fairy(window.FAIRY_APP.id, Vue)

  Vue.prototype.$fairy = fairy

  new Vue({
    el: fairy.el.root,
    render: h => h(App)
  })
}
