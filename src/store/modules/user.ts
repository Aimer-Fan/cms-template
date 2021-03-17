import { login, logout, getUserInfo } from '@/api/login'
import { Module } from 'vuex'
import ls from '@/utils/ls'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { UserModuleState } from '@/interface'

const state = {
  name: '',
  avatar: '',
  token: '',
  roles: []
}

const user: Module<UserModuleState, any> = {
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
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
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
      const userInfo: UserModuleState = response.data
      context.commit('SET_NAME', userInfo.name)
      context.commit('SET_TOKEN', userInfo.token)
      context.commit('SET_AVATAR', userInfo.avatar)
      context.commit('SET_ROLES', userInfo.roles)
      return userInfo
    },

    async Logout (context) {
      logout()
      context.commit('SET_NAME', '')
      context.commit('SET_TOKEN', '')
      context.commit('SET_AVATAR', '')
    }
  },

  getters: {
    token: state => state.token,
    roles: state => state.roles
  }
}

export default user
