import Vue from 'vue'
import {
  Container,
  Header,
  Main,
  Steps,
  Step,
  Button,
  Row,
  Col,
  Input,
  Form,
  FormItem,
  ColorPicker,
  Icon,
  Divider,
  Popconfirm,
  Popover,
  Notification,
  Loading,
  Menu,
  MenuItem,
  Card,
  Footer
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'

lang.el.image.error = '실패'
lang.el.pageHeader.title = '이전'
lang.el.popconfirm.confirmButtonText = '예'
lang.el.popconfirm.cancelButtonText = '아니오'

locale.use(lang)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(ColorPicker)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Footer)

Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading.service
