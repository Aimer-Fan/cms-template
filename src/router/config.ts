// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
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
    component: async () => Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: HomeOutlined,
          permission: ['dashboard']
        },
        component: () => import('@/views/Dashboard/index.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: {
          title: 'Error',
          icon: WarningOutlined,
          permission: ['error']
        },
        component: async () => BlankLayout,
        children: [
          {
            path: '404',
            name: '404',
            meta: {
              title: '404',
              permission: ['404']
            },
            component: () => import('@/views/Error/404.vue')
          }
        ]
      },
      {
        path: 'table',
        name: 'table',
        meta: {
          title: 'Table',
          permission: ['table']
        },
        component: async () => BlankLayout,
        children: [
          {
            path: 'basic-table',
            name: 'BasicTable',
            meta: {
              title: 'BasicTable',
              permission: ['basic-table']
            },
            component: () => import('@/views/Table/BasicTable/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/.*',
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
