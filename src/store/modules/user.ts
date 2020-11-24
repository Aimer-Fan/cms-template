import { login, logout, getUserInfo } from '@/api/login'
import { Module } from 'vuex'
import { UserState } from '@/interface'
import ls from '@/utils/ls'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const state: UserState = {
  name: '',
  avatar: '',
  token: '',
  roles: []
}

const user: Module<UserState, any> = {
  state: state,

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      ls.set(ACCESS_TOKEN, token)
    }
  },

  actions: {
    async Login (context, { username, password }) {
      const response = await login(username, password)
      const token = response.data.token
      context.commit('SET_TOKEN', token)
    },

    async GetUserInfo (context, token: string) {
      const response = await getUserInfo(token)
      const userInfo: UserState = response.data
      context.commit('SET_NAME', userInfo.name)
      context.commit('SET_TOKEN', userInfo.token)
      context.commit('SET_AVATAR', userInfo.avatar)
    },

    async Logout (context) {
      logout()
      context.commit('SET_NAME', '')
      context.commit('SET_TOKEN', '')
      context.commit('SET_AVATAR', '')
    }
  }
}

export default user
