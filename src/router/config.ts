import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

export const asyncRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
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

export const constantRouters: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: defineAsyncComponent(() => import('@/views/Login/index.vue'))
  }
]
