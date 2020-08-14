import Vue from 'vue'
import App from './App.vue'
import FairyElement from './lib/init'
import Store from './store'
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
// if (window.FAIRY_APP) {
//   const fairy = new Fairy(window.FAIRY_APP.id, Vue)

//   Vue.prototype.$fairy = fairy

//   new Vue({
//     el: fairy.el.root,
//     store: Store,
//     render: h => h(App)
//   })
// }

if (window.FAIRY_APP) {
  Store.dispatch('loadFairy', window.FAIRY_APP.id)

  new Vue({
    el: FairyElement.root,
    store: Store,
    render: h => h(App)
  })
}
