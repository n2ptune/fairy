import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueDompurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import FairyElement from './lib/init'
import Store from './store'
import Unicon from 'vue-unicons'
import {
  uniCommentNotes,
  uniTimes,
  uniCommentDots,
  uniCommentDotsMonochrome
} from 'vue-unicons/src/icons'
import ContentPlaceHolders from 'vue-content-placeholders'
import '@styles/_typography.scss'
import '@styles/_utils.scss'

Unicon.add([
  uniCommentNotes,
  uniTimes,
  uniCommentDots,
  uniCommentDotsMonochrome
])

Vue.use(Unicon)
Vue.use(ContentPlaceHolders)
Vue.use(VueCompositionAPI)
Vue.use(VueDompurifyHTML)

/** Entry point in development mode */
if (process.env.NODE_ENV === 'development') {
  window.FAIRY_APP = {
    id: '8bi2scdgqcua5kg23f06'
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
