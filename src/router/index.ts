import { createRouter, createWebHistory } from 'vue-router'
import { constantRouters } from './config'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouters
})

export default router
