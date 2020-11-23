import { login } from '@/api/login'
import { StoreOptions } from 'vuex'
import { UserState } from '@/interface'

const state: UserState = {
  name: '',
  avatar: '',
  token: ''
}

const user: StoreOptions<UserState> = {
  state: state,

  mutations: {
    SET_NAME: (state, name: string) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    async Login (context, { username, password }) {
      const response = await login(username, password)
      const userInfo: UserState = response.data
      context.commit('SET_NAME', userInfo.name)
      context.commit('SET_AVATAR', userInfo.avatar)
      context.commit('SET_TOKEN', userInfo.token)
      return userInfo
    }
  }
}

export default user
