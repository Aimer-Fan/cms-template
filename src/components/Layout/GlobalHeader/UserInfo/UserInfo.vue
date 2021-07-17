<template>
  <span class="user-info-wrap">
    <a-dropdown :trigger="['hover']">
      <img :src="avatar" class="avatar" />
      <template #overlay>
        <a-menu theme="light">
          <a-menu-item key="0">
            <span @click="router2User"><UserOutlined />个人中心</span>
          </a-menu-item>
          <a-menu-item key="1">
            <span @click="logout"><LogoutOutlined />退出登录</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </span>
</template>

<script lang="ts">
/**
 * @description UserInfo
 * @author AimerFan
 * @since 2021/03/21
*/
import { computed, createVNode, defineComponent } from 'vue'
import {
  LogoutOutlined,
  UserOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { Modal, notification } from 'ant-design-vue'

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
function routertoUser () {
  const router = useRouter()
  const router2User = () => {
    router.push({ path: '/user' })
  }
  return { router2User }
}

export default defineComponent({
  name: 'UserInfo',
  components: {
    LogoutOutlined,
    UserOutlined
  },
  setup () {
    const store = useStore()
    const avatar = computed(() => store.state.user.avatar)
    return { avatar, ...routertoUser(), ...logoutFn() }
  }
})
</script>

<style scoped lang="less">
.user-info-wrap {
  padding: 0 6px;
  cursor: pointer;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 51%;
    margin-bottom: 8px;
  }
}
</style>
