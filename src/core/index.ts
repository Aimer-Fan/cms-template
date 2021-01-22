import { App } from 'vue'
import use from './use'

import './performance'

export default {
  install (app: App) {
    use.install(app)
  }
}
