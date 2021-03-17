import { AppModuleState } from '@/interface'
import ls from '@/utils/ls'
import { Module } from 'vuex'

import {
  TOGGLE_DEVICE,
  TOGGLE_COLLAPSED,
  TOGGLE_FULL_LOADING,
  TOGGLE_APPLICATION_THEME,
  THEME
} from '../mutation-types'

const state: AppModuleState = {
  device: 'desktop',
  collapsed: false,
  loading: false,
  theme: 'light'
}

const user: Module<AppModuleState, any> = {
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
    },
    [TOGGLE_APPLICATION_THEME]: (state, theme) => {
      state.theme = theme
      const doms = document.getElementsByTagName('html')
      Array.from(doms).forEach(dom => {
        dom.dataset.theme = theme
      })
      ls.set(THEME, theme)
    }
  },

  actions: {
    [TOGGLE_COLLAPSED] (context, collapsed) {
      context.commit(TOGGLE_COLLAPSED, collapsed)
    },

    [TOGGLE_FULL_LOADING] (context, loading) {
      context.commit(TOGGLE_FULL_LOADING, loading)
    },

    [TOGGLE_APPLICATION_THEME] (context, theme) {
      context.commit(TOGGLE_APPLICATION_THEME, theme)
    }
  },

  getters: {
    collapsed: state => state.collapsed,
    device: state => state.device,
    loading: state => state.loading,
    theme: state => state.theme
  }
}

export default user
