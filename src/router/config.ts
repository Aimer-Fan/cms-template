// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import BlankLayout from '@/components/Layout/BlankLayout.vue'
import {
  HomeOutlined,
  WarningOutlined,
  TableOutlined,
  ToolOutlined
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
        meta: { title: '仪表盘', icon: HomeOutlined, permission: ['dashboard'] },
        component: () => import('@/views/Dashboard/index.vue')
      },
      {
        path: 'basic',
        name: 'basic',
        meta: { title: '基本元素', icon: TableOutlined, permission: ['basic'] },
        component: async () => BlankLayout,
        children: [
          {
            path: 'basic-form',
            name: 'basicForm',
            meta: { title: '基本表单', permission: ['basic'] },
            component: () => import('@/views/Basic/BasicForm/index.vue')
          },
          {
            path: 'basic-table',
            name: 'basicTable',
            meta: { title: '基本表格', permission: ['basic'] },
            component: () => import('@/views/Basic/BasicTable/index.vue')
          }
        ]
      },
      {
        path: 'tools',
        name: 'tools',
        meta: { title: 'Tools', icon: ToolOutlined, permission: ['tools'] },
        component: async () => BlankLayout,
        children: [
          {
            path: 'monaco-editor',
            name: 'MonacoEditor',
            meta: { title: 'MonacoEditor', permission: ['tools'] },
            component: () => import('@/views/Tools/Monaco/index.vue')
          }
        ]
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
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: async () => import('@/views/Error/404.vue')
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
