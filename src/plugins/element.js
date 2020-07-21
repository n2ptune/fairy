import Vue from 'vue'
import {
  Container,
  Header,
  Main,
  Steps,
  Step,
  Button,
  Row,
  Col
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
