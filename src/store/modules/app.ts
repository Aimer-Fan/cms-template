import { toggleLocal } from '@/i18n'
import ls from '@/utils/ls'
import { Module } from 'vuex'
import { RootStoreTypes } from '../interface'

import {
  TOGGLE_DEVICE,
  TOGGLE_COLLAPSED,
  TOGGLE_FULL_LOADING,
  TOGGLE_APPLICATION_THEME,
  THEME,
  TOGGLE_LOCAL
} from '../mutation-types'

export interface AppModuleState {
  device: 'desktop' | 'tablet' | 'mobile';
  collapsed: boolean;
  loading: boolean;
  theme: 'light' | 'dark';
  local: string;
}

const state: AppModuleState = {
  device: 'desktop',
  collapsed: false,
  loading: false,
  theme: 'light',
  local: 'zh-CN'
}

const user: Module<AppModuleState, RootStoreTypes> = {
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
      ls.set(THEME, theme)
    },
    [TOGGLE_LOCAL]: (state, local) => {
      state.local = local
      ls.set(TOGGLE_LOCAL, local)
      toggleLocal(local)
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
      const doms = document.getElementsByTagName('html')
      Array.from(doms).forEach(dom => {
        dom.dataset.theme = theme
      })
      context.commit(TOGGLE_APPLICATION_THEME, theme)
    },

    [TOGGLE_LOCAL] (context, local) {
      context.commit(TOGGLE_LOCAL, local)
    }
  },

  getters: {
    collapsed: state => state.collapsed,
    device: state => state.device,
    loading: state => state.loading,
    theme: state => state.theme,
    local: state => state.local
  }
}

export default user
