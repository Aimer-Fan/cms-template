import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  NProgress.start()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
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
