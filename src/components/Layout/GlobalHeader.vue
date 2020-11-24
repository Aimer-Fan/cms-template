<template>
  <div class="fr cms-header-icons">
    <FullscreenExitOutlined class="mr-12" v-if="isFullScreen"  @click="fullScreen"/>
    <FullscreenOutlined class="mr-12" v-else  @click="fullScreen"/>
    <UserOutlined class="mr-12 cup"/>
    <LogoutOutlined class="cup" @click="logout" />
  </div>
</template>

<script lang="ts">
import { createVNode, defineComponent, ref } from 'vue'
import {
  LogoutOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message, Modal, notification } from 'ant-design-vue'
import screenfull from 'screenfull'

function logoutFn () {
  const store = useStore()
  const router = useRouter()
  const Logout = () => store.dispatch('Logout')
  const logout = () => {
    const name = store.state.user.name
    Modal.confirm({
      title: 'Are you sure logout?',
      icon: createVNode(ExclamationCircleOutlined),
      content: 'This operation will logout this application.',
      centered: true,
      onOk: () => {
        Logout()
        notification.success({ message: `Goodbay ${name}`, description: 'Logout Successful!' })
        router.replace('/login')
      }
    })
  }
  return { logout }
}

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    LogoutOutlined,
    UserOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  setup () {
    const isFullScreen = ref(false)
    const fullScreen = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle()
        isFullScreen.value = !isFullScreen.value
      } else {
        message.warn('Sorry, your device did not support fullScreen function!')
      }
    }
    return { ...logoutFn(), isFullScreen, fullScreen }
  }
})
</script>

<style scoped lang="less">
.cms-header-icons {
  font-size: 18px;
}
</style>
