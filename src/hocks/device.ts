import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { TOGGLE_COLLAPSED, TOGGLE_DEVICE } from '@/store/mutation-types'

export default function () {
  const store = useStore()
  onMounted(() => {
    deviceEnquire((deviceType: string) => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          store.commit(TOGGLE_DEVICE, 'desktop')
          store.dispatch(TOGGLE_COLLAPSED, false)
          break
        case DEVICE_TYPE.TABLET:
          store.commit(TOGGLE_DEVICE, 'tablet')
          store.dispatch(TOGGLE_COLLAPSED, true)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          store.commit(TOGGLE_DEVICE, 'mobile')
          store.dispatch(TOGGLE_COLLAPSED, true)
          break
      }
    })
  })
  const device = computed(() => store.getters.device)
  return { device }
}
