import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { RouteRecordRaw } from 'vue-router'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  NProgress.start()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      const roles = store.getters.roles
      if (roles.length === 0) {
        const userInfo = await store.dispatch('GetUserInfo')
        const roles = userInfo.roles
        await store.dispatch('GenerateRouters', roles)
        const routers = store.state.permission.routers
        routers.forEach((r: RouteRecordRaw) => router.addRoute(r))
        next({ ...to })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      router.replace('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
