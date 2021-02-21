<template>
  <div class="global-header-wrap">
    <MenuUnfoldOutlined v-if="collapsed" class="icon cup" @click="toggleCollapsed(false)"/>
    <MenuFoldOutlined v-else class="icon cup" @click="toggleCollapsed(true)"/>
    <div class="fr cms-header">
      <div>
        <AlertOutlined v-if="theme === 'dark'" class="mr-12 icon cup" @click="changeTheme('light')" />
        <AlertFilled v-if="theme === 'light'" class="mr-12 icon cup" @click="changeTheme('dark')" />
      </div>
      <div>
        <FullscreenExitOutlined class="mr-12 icon" v-if="isFullScreen" title="退出全屏" @click="fullScreen"/>
        <FullscreenOutlined class="mr-12 icon" v-else title="全屏" @click="fullScreen"/>
      </div>
      <a-dropdown :trigger="['hover']">
        <img :src="avatar" class="avatar mr-6">
        <template #overlay>
        <a-menu theme="light">
          <a-menu-item key="0">
            <span @click="go2user"><UserOutlined />个人中心</span>
          </a-menu-item>
          <a-menu-item key="1">
            <span @click="logout"><LogoutOutlined />退出登录</span>
          </a-menu-item>
        </a-menu>
      </template>
      </a-dropdown>
    </div>
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
  MenuUnfoldOutlined,
  AlertOutlined,
  AlertFilled
} from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message, Modal, notification } from 'ant-design-vue'
import screenfull from 'screenfull'
import { TOGGLE_APPLICATION_THEME } from '@/store/mutation-types'

function logoutFn () {
  const store = useStore()
  const router = useRouter()
  const Logout = () => store.dispatch('Logout')
  const logout = () => {
    const name = store.state.user.name
    Modal.confirm({
      title: '确认登出吗？',
      icon: createVNode(ExclamationCircleOutlined),
      content: '此操作将会登出系统。',
      okText: '确认',
      cancelText: '取消',
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
function router2User () {
  const router = useRouter()
  const go2user = () => {
    router.push({ path: '/user' })
  }
  return { go2user }
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

/**
 * @description 标题栏
 * @author AimerFan
 * @date 2021/02/19
*/
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    LogoutOutlined,
    UserOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AlertOutlined,
    AlertFilled
  },
  setup () {
    const store = useStore()
    const avatar = computed(() => store.state.user.avatar)
    const toggleCollapsed = (collapsed: boolean) => {
      store.dispatch('ToggleCollapsed', collapsed)
    }
    const collapsed = computed(() => store.state.app.collapsed)
    const theme = computed(() => store.getters.theme)
    const changeTheme = (theme: 'light'|'dark') => {
      console.log('clicked')
      store.dispatch(TOGGLE_APPLICATION_THEME, theme)
    }
    return {
      ...logoutFn(),
      ...fullScreenFn(),
      ...router2User(),
      changeTheme,
      avatar,
      toggleCollapsed,
      collapsed,
      theme
    }
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
.global-header-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
