import { ACCESS_TOKEN, USER_AVATAR, USER_NAME, THEME, TOGGLE_APPLICATION_THEME } from '@/store/mutation-types'
import ls from '@/utils/ls'
import { onMounted } from 'vue'
import { useStore } from '@/store'

export default function () {
  const store = useStore()
  onMounted(() => {
    // 支持主题色 处于深色模式
    const defaultTheme =
      window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

    store.commit('SET_TOKEN', ls.get(ACCESS_TOKEN))
    store.commit('SET_NAME', ls.get(USER_NAME))
    store.commit('SET_AVATAR', ls.get(USER_AVATAR))
    store.dispatch(TOGGLE_APPLICATION_THEME, ls.get(THEME) || defaultTheme)
  })
}
