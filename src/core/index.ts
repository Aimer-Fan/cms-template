import { App } from 'vue'
import use from './use'

export default {
  install (app: App) {
    use.install(app)
  }
}
