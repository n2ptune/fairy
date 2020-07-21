import Vue from 'vue'
import { Container, Header } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Container)
Vue.use(Header)
