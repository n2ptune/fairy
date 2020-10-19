import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueDompurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import FairyElement, { clientID } from './lib/init'
import Store from './store'
import Unicon from 'vue-unicons'
import {
  uniTimes,
  uniCommentDotsMonochrome,
  uniSmile
} from 'vue-unicons/src/icons'
import ContentPlaceHolders from 'vue-content-placeholders'
import '@app/styles/_typography.scss'
import '@app/styles/_utils.scss'
import 'normalize.css'

Unicon.add([uniTimes, uniCommentDotsMonochrome, uniSmile])

Vue.use(Unicon)
Vue.use(ContentPlaceHolders)
Vue.use(VueCompositionAPI)
Vue.use(VueDompurifyHTML)

if (clientID) {
  Store.dispatch(
    'loadFairy',
    process.env.NODE_ENV === 'development' ? 'pb5uuxvfmpeoac74lzbk' : clientID
  ).then(
    () =>
      new Vue({
        el: FairyElement.root,
        store: Store,
        render: h => h(App)
      })
  )
}
