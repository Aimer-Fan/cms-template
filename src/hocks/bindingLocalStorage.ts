import { ACCESS_TOKEN, USER_AVATAR, USER_NAME, THEME, TOGGLE_APPLICATION_THEME } from '@/store/mutation-types'
import ls from '@/utils/ls'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default function () {
  const store = useStore()
  onMounted(() => {
    store.commit('SET_TOKEN', ls.get(ACCESS_TOKEN))
    store.commit('SET_NAME', ls.get(USER_NAME))
    store.commit('SET_AVATAR', ls.get(USER_AVATAR))
    store.dispatch(TOGGLE_APPLICATION_THEME, ls.get(THEME) || 'dark')
  })
}
