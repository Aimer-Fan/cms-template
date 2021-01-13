// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import BlankLayout from '@/components/Layout/BlankLayout.vue'
import {
  HomeOutlined,
  WarningOutlined,
  TableOutlined
} from '@ant-design/icons-vue'

export const asyncRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: async () => Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: HomeOutlined, permission: ['dashboard'] },
        component: () => import('@/views/Dashboard/index.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: { title: 'Error', icon: WarningOutlined, permission: ['error'] },
        component: async () => BlankLayout,
        children: [
          {
            path: '403',
            name: '403',
            meta: { title: '403', permission: ['error'] },
            component: () => import('@/views/Error/403.vue')
          },
          {
            path: '404',
            name: '404',
            meta: { title: '404', permission: ['error'] },
            component: () => import('@/views/Error/404.vue')
          },
          {
            path: '500',
            name: '500',
            meta: { title: '500', permission: ['error'] },
            component: () => import('@/views/Error/500.vue')
          }
        ]
      },
      {
        path: 'table',
        name: 'table',
        meta: { title: 'Table', icon: TableOutlined, permission: ['table'] },
        component: async () => BlankLayout,
        children: [
          {
            path: 'basic-table',
            name: 'BasicTable',
            meta: { title: 'BasicTable', permission: ['table'] },
            component: () => import('@/views/Table/BasicTable/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:other(.*)/',
    redirect: '/404'
  }
]

export const constantRouters: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/404.vue')
  }
]
