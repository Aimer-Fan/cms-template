import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      router.replace('/login')
    }
  }
})
