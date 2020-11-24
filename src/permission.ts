import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  NProgress.start()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (store.getters.roles.length === 0) {
        await store.dispatch('GetUserInfo')
        next()
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
