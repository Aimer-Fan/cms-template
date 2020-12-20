<script lang="tsx">
import { h, computed, defineComponent, ref, onMounted } from 'vue'
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
    return h(icon)
  }
}

function generateSubMenuTitle (router: RouteRecordRaw) {
  return (
    <span>
      { generateIcon(router.meta?.icon) }
      <span>{router.meta?.title}</span>
    </span>
  )
}

function generateMenu (routerList: Array<RouteRecordRaw>, basePath?: string) {
  return routerList.map(router => {
    const resolved = resolvePath(basePath || '', router.path)
    if (router.children && router.children.length) {
      return (
        <Menu.SubMenu title={generateSubMenuTitle(router)} key={resolved}>
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
  setup () {
    const store = useStore()
    const routers = computed(() => store.state.permission.routers)
    const menuRouters = computed(() => routers.value[0].children)
    const selectedKeys = computed(() => [router.currentRoute.value.fullPath])
    const openKeys = ref<Array<string>>([])
    const handleOpenChange = (keys: Array<string>) => {
      openKeys.value = keys
    }
    onMounted(() => {
      const mactched = router.currentRoute.value.matched
      mactched.pop()
      if (mactched.length > 1) {
        mactched.shift()
      }
      const result = mactched.map(item => item.path)
      openKeys.value = result
    })
    return () => (
      <Menu
        mode="inline"
        selectedKeys={selectedKeys.value}
        openKeys={openKeys.value}
        onOpenChange={handleOpenChange}
      >
        {generateMenu(menuRouters.value)}
      </Menu>
    )
  }
})
</script>
