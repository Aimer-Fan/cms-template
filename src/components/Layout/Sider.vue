<script lang="tsx">
import { computed, defineComponent, ref } from 'vue'
import path from 'path'
import { useStore } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { Menu } from 'ant-design-vue'
import { isExternal } from '@/utils/validate'
import router from '@/router'

const resolvePath = (basePath: string, routePath: string): string => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  return path.resolve(basePath, routePath)
}

function generateIcon (icon: any) {
  if (icon) {
    console.log(icon)
    return icon
  }
}

function generateMenu (routerList: Array<RouteRecordRaw>, basePath?: string) {
  return routerList.map(router => {
    const resolved = resolvePath(basePath || '', router.path)
    if (router.children && router.children.length) {
      return (
        <Menu.SubMenu title={router.meta?.title}>
          { generateMenu(router.children, resolved) }
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item title={router.meta?.title} key={resolvePath(basePath || '', router.path)}>
          <router-link to={resolved}>
            { generateIcon(router.meta?.icon) }
            <span>{router.meta?.title}</span>
          </router-link>
        </Menu.Item>
      )
    }
  })
}

export default defineComponent({
  name: 'Sider',
  render (h: any) {
    const store = useStore()
    const routers = computed(() => store.state.permission.routers)
    const menuRouters = computed(() => routers.value[0].children)
    const selectedKeys = computed(() => [router.currentRoute.value.fullPath])
    return (
      <Menu
        mode="inline"
        selectedKeys={ selectedKeys.value }
      >
        { generateMenu(menuRouters.value) }
      </Menu>
    )
  }
})

</script>
