import Vue from 'vue'
import App from './App.vue'
import FairyElement from './lib/init'
import Store from './store'
import Unicon from 'vue-unicons'
import { uniCommentNotes, uniTimes } from 'vue-unicons/src/icons'
import ContentPlaceHolders from 'vue-content-placeholders'
import '@styles/_typography.scss'
import '@styles/_utils.scss'

Unicon.add([uniCommentNotes, uniTimes])

Vue.use(Unicon)
Vue.use(ContentPlaceHolders)

/** Entry point in development mode */
if (process.env.NODE_ENV === 'development') {
  window.FAIRY_APP = {
    id: 'dxsyy3zo8w4mlpa4uoxs'
  }
}

if (window.FAIRY_APP) {
  Store.dispatch('loadFairy', window.FAIRY_APP.id)

  new Vue({
    el: FairyElement.root,
    store: Store,
    render: h => h(App)
  })
}
