import { App } from 'vue'
import 'ant-design-vue/dist/antd.css'
import {
  Button,
  Icon,
  Form,
  Input,
  Layout,
  Dropdown,
  Menu,
  Result,
  Drawer,
  Row,
  Col,
  Card,
  Statistic
} from 'ant-design-vue'

export default {
  install (app: App) {
    app.use(Button)
    app.use(Icon)
    app.use(Form)
    app.use(Input)
    app.use(Layout)
    app.use(Dropdown)
    app.use(Menu)
    app.use(Result)
    app.use(Drawer)
    app.use(Row)
    app.use(Col)
    app.use(Card)
    app.use(Statistic)
  }
}
