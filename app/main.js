import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueDompurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import FairyElement, { getClientID } from './lib/init'
import Store from './store'
import Unicon from 'vue-unicons'
import { uniTimes, uniCommentDotsMonochrome } from 'vue-unicons/src/icons'
import ContentPlaceHolders from 'vue-content-placeholders'
import '@styles/_typography.scss'
import '@styles/_utils.scss'

Unicon.add([uniTimes, uniCommentDotsMonochrome])

Vue.use(Unicon)
Vue.use(ContentPlaceHolders)
Vue.use(VueCompositionAPI)
Vue.use(VueDompurifyHTML)

if (getClientID()) {
  Store.dispatch(
    'loadFairy',
    process.env.NODE_ENV === 'development'
      ? '8bi2scdgqcua5kg23f06'
      : getClientID()
  )

  new Vue({
    el: FairyElement.root,
    store: Store,
    render: h => h(App)
  })
}
