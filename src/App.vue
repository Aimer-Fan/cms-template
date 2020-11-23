<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    onMounted(() => {
      deviceEnquire((deviceType: string) => {
        switch (deviceType) {
          case DEVICE_TYPE.DESKTOP:
            store.commit('TOGGLE_DEVICE', 'desktop')
            store.dispatch('setSidebar', true)
            break
          case DEVICE_TYPE.TABLET:
            store.commit('TOGGLE_DEVICE', 'tablet')
            store.dispatch('setSidebar', false)
            break
          case DEVICE_TYPE.MOBILE:
          default:
            store.commit('TOGGLE_DEVICE', 'mobile')
            store.dispatch('setSidebar', true)
            break
        }
      })
    })
  }
})
</script>
