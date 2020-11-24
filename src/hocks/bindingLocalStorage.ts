import { ACCESS_TOKEN } from '@/store/mutation-types'
import ls from '@/utils/ls'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default function () {
  const store = useStore()
  onMounted(() => {
    store.commit('SET_TOKEN', ls.get(ACCESS_TOKEN))
  })
}
