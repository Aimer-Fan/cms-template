import { Module } from 'vuex'
import { AppState } from '@/interface'
import { TOGGLE_DEVICE } from '../mutation-types'

const state: AppState = {
  device: ''
}

const user: Module<AppState, any> = {
  state: state,

  mutations: {
    [TOGGLE_DEVICE]: (state, device) => {
      state.device = device
    }
  },

  actions: {
  }
}

export default user
