import { createRouter, createWebHistory } from 'vue-router'
import { constantRouters } from './config'

/* TODO: 这里的 constantRouters 为什么是 undefined ？ */
// console.log(constantRouters)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouters || [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "base" */'@/views/Login/index.vue')
    },
    {
      path: '/404',
      name: '/404',
      component: () => import(/* webpackChunkName: "base" */'@/views/Error/404.vue')
    }
  ]
})

export default router
