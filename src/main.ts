import { createApp } from 'vue'

import './styles/reset.less'
import './styles/index.less'
import '../antd.css'
import '../mock/index'
import './permission'

import App from './App.vue'
import core from './core'
import router from './router'
import store, { key } from './store'
import i18n from './i18n'

createApp(App)
  .use(store, key)
  .use(router)
  .use(core)
  .use(i18n)
  .mount('#app')
