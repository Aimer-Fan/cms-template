import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Home',
    component: defineAsyncComponent(() => import('@/views/Login/index.vue'))
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: defineAsyncComponent(() => import('@/views/Dashboard/index.vue'))
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
