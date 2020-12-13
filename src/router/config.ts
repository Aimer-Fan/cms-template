// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
// import Layout from '@/components/Layout/index.vue'
import BlankLayout from '@/components/Layout/BlankLayout.vue'
import {
  HomeOutlined,
  WarningOutlined
} from '@ant-design/icons-vue'

export const asyncRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: () => import('@/components/Layout/index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: HomeOutlined },
        component: () => import('@/views/Dashboard/index.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: { title: 'Error', icon: WarningOutlined },
        component: BlankLayout,
        children: [
          {
            path: '404',
            name: '404',
            meta: { title: '404' },
            component: () => import('@/views/Error/404.vue')
          }
        ]
      }
    ]
  }
]

export const constantRouters: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  }
]
