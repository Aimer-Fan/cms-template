import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import { RootStoreTypes } from './interface'

export const key: InjectionKey<Store<{}>> = Symbol('vue-store')

export function useStore<T = RootStoreTypes> () {
  return baseUseStore<T>(key)
}

export default createStore<RootStoreTypes>({
  devtools: true,
  modules: {
    app,
    user,
    permission
  }
})
