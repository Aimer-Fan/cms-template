<template>
  <span class="full-screen-wrap" :title="isFullScreen ? t('exitFullscreen') : t('fullscreen')">
    <FullscreenExitOutlined class="icon" v-if="isFullScreen" @click="fullScreen"/>
    <FullscreenOutlined class="icon" v-else @click="fullScreen"/>
  </span>
</template>

<script lang="ts">
/**
 * @description
 * @author AimerFan
 * @since 2021/03/21
*/
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons-vue'
import screenfull from 'screenfull'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'FullScreen',
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  setup () {
    const { t } = useI18n()
    const isFullScreen = ref(false)
    const change = () => {
      if (screenfull.isEnabled) {
        isFullScreen.value = screenfull.isFullscreen
      }
    }
    const register = () => {
      if (screenfull.isEnabled) {
        screenfull.on('change', change)
      }
    }
    const deregister = () => {
      if (screenfull.isEnabled) {
        screenfull.off('change', change)
      }
    }
    onMounted(register)
    onBeforeUnmount(deregister)
    const fullScreen = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      } else {
        message.warn('Sorry, your device did not support fullScreen function!')
      }
    }
    return { isFullScreen, fullScreen, t }
  }
})
</script>

<style scoped lang="less">
.full-screen-wrap {
  padding: 0 6px;
  cursor: pointer;
  .icon {
    font-size: 18px;
  }
}
</style>
