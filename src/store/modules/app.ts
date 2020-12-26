import { Module } from 'vuex'
import { AppState } from '@/interface'
import {
  TOGGLE_DEVICE,
  TOGGLE_COLLAPSED
} from '../mutation-types'

const state: AppState = {
  device: 'desktop',
  collapsed: false
}

const user: Module<AppState, any> = {
  state: state,

  mutations: {
    [TOGGLE_DEVICE]: (state, device) => {
      state.device = device
    },
    [TOGGLE_COLLAPSED]: (state, collapsed) => {
      state.collapsed = collapsed
    }
  },

  actions: {
    ToggleCollapsed (context, collapsed) {
      context.commit(TOGGLE_COLLAPSED, collapsed)
    }
  },

  getters: {
    collapsed: state => state.collapsed,
    device: state => state.device
  }
}

export default user
