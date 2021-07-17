import { createApp } from 'vue'

import App from './App.vue'
import core from './core'
import router from './router'
import store, { key } from './store'

import './styles/reset.less'
import './styles/index.less'
import '../antd.css'
import '../mock/index'
import './permission'

createApp(App)
  .use(store, key)
  .use(router)
  .use(core)
  .mount('#app')
