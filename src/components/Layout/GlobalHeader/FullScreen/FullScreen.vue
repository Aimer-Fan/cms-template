<template>
  <span class="full-screen-wrap" :title="isFullScreen ? '退出全屏' : '全屏'">
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

export default defineComponent({
  name: 'FullScreen',
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  setup () {
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
    return { isFullScreen, fullScreen }
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
