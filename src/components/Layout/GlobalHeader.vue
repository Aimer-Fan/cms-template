<template>
  <MenuUnfoldOutlined v-if="collapsed" class="icon cup" @click="toggleCollapsed(false)"/>
  <MenuFoldOutlined v-else class="icon cup" @click="toggleCollapsed(true)"/>
  <div class="fr cms-header">
    <FullscreenExitOutlined class="mr-12 icon" v-if="isFullScreen"  @click="fullScreen"/>
    <FullscreenOutlined class="mr-12 icon" v-else  @click="fullScreen"/>
    <a-dropdown :trigger="['click']">
      <img :src="avatar" alt="avatar" class="avatar mr-6">
      <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <span><UserOutlined />User Center</span>
        </a-menu-item>
        <a-menu-item key="1">
          <span @click="logout"><LogoutOutlined />Logout</span>
        </a-menu-item>
      </a-menu>
    </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { createVNode, defineComponent, onBeforeUnmount, ref, onMounted, computed } from 'vue'
import {
  LogoutOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
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
        notification.success({ message: `Goodbye ${name}`, description: 'Logout Successful!' })
        router.replace('/login')
      }
    })
  }
  return { logout }
}

function fullScreenFn () {
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

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    LogoutOutlined,
    UserOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup () {
    const store = useStore()
    const avatar = computed(() => store.state.user.avatar)
    const toggleCollapsed = (collapsed: boolean) => {
      store.dispatch('ToggleCollapsed', collapsed)
    }
    const collapsed = computed(() => store.state.app.collapsed)
    return { ...logoutFn(), ...fullScreenFn(), avatar, toggleCollapsed, collapsed }
  }
})
</script>

<style scoped lang="less">
.icon {
  font-size: 18px;
}
.cms-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 51%;
    cursor: pointer;
  }
}
</style>
