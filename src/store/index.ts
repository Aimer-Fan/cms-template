import { createStore } from 'vuex'
// import getters from './getters'

import user from './modules/user'
import app from './modules/app'
import permission from './modules/permission'
import { UserModuleState, AppModuleState, PermissionModuleState } from '@/interface'
interface AppStore {
  user: UserModuleState;
  app: AppModuleState;
  permission: PermissionModuleState;
}

const store = createStore<AppStore>({
  devtools: true,
  modules: {
    user,
    app,
    permission
  }
})

export default store
