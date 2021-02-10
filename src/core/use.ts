import { App, h } from 'vue'
import 'ant-design-vue/dist/antd.css'
import { LoadingOutlined } from '@ant-design/icons-vue'
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
  Statistic,
  Select,
  Steps,
  DatePicker,
  Switch,
  Checkbox,
  Radio,
  Spin,
  Descriptions,
  Table
} from 'ant-design-vue'

// 重置默认的 Loading 图标
Spin.setDefaultIndicator({
  indicator: h(LoadingOutlined)
})

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
    app.use(Select)
    app.use(Steps)
    app.use(DatePicker)
    app.use(Switch)
    app.use(Checkbox)
    app.use(Radio)
    app.use(Spin)
    app.use(Descriptions)
    app.use(Table)
  }
}
