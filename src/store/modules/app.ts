import { Module } from 'vuex'
import { AppState } from '@/interface'
import {
  TOGGLE_DEVICE,
  TOGGLE_COLLAPSED,
  TOGGLE_FULL_LOADING
} from '../mutation-types'

const state: AppState = {
  device: 'desktop',
  collapsed: false,
  loading: false
}

const user: Module<AppState, any> = {
  state: state,

  mutations: {
    [TOGGLE_DEVICE]: (state, device) => {
      state.device = device
    },
    [TOGGLE_COLLAPSED]: (state, collapsed) => {
      state.collapsed = collapsed
    },
    [TOGGLE_FULL_LOADING]: (state, loading) => {
      state.loading = loading
    }
  },

  actions: {
    ToggleCollapsed (context, collapsed) {
      context.commit(TOGGLE_COLLAPSED, collapsed)
    },

    [TOGGLE_FULL_LOADING] (context, loading) {
      context.commit(TOGGLE_FULL_LOADING, loading)
    }
  },

  getters: {
    collapsed: state => state.collapsed,
    device: state => state.device,
    loading: state => state.loading
  }
}

export default user
