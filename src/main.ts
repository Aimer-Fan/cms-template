import { createApp } from 'vue'
import App from './App.vue'
import core from './core'
import router from './router'
import store from './store'

import './styles/reset.less'

createApp(App).use(store).use(router).use(core).mount('#app')
