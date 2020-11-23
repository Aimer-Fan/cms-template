import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // const token = store.state.user.token
  const token = ''
  console.log(store, token)
  // debugger
  if (token) {

  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      router.replace('/login')
    }
  }
})
