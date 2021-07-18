import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import BlankLayout from '@/components/Layout/BlankLayout.vue'
import {
  DashboardOutlined,
  WarningOutlined,
  TableOutlined,
  ToolOutlined,
  UserOutlined
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
        meta: { title: '仪表盘', icon: DashboardOutlined, permission: ['dashboard'] },
        component: () => import(/* webpackChunkName: "dashboard" */'@/views/Dashboard/index.vue')
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
            component: () => import(/* webpackChunkName: "baseform" */'@/views/Basic/BasicForm/index.vue')
          },
          {
            path: 'basic-table',
            name: 'basicTable',
            meta: { title: '基本表格', permission: ['basic'] },
            component: () => import(/* webpackChunkName: "baseform" */'@/views/Basic/BasicTable/index.vue')
          }
        ]
      },
      {
        path: 'tools',
        name: 'tools',
        meta: { title: '工具集', icon: ToolOutlined, permission: ['tools'] },
        component: async () => BlankLayout,
        children: [
          {
            path: 'monaco-editor',
            name: 'MonacoEditor',
            meta: { title: '代码编辑器', permission: ['tools'] },
            component: () => import(/* webpackChunkName: "tools" */'@/views/Tools/Monaco/index.vue')
          },
          {
            path: 'rich-editor',
            name: 'RichEditor',
            meta: { title: '富文本编辑器', permission: ['tools'] },
            component: () => import(/* webpackChunkName: "tools" */'@/views/Tools/RichEditor/index.vue')
          }
        ]
      },
      {
        path: 'user',
        name: 'user',
        meta: { title: '个人中心', icon: UserOutlined, permission: ['user'] },
        component: () => import(/* webpackChunkName: "user" */'@/views/User/index.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: { title: '错误页面', icon: WarningOutlined, permission: ['error'] },
        component: async () => BlankLayout,
        children: [
          {
            path: '403',
            name: '403',
            meta: { title: '403', permission: ['error'] },
            component: () => import(/* webpackChunkName: "err" */'@/views/Error/403.vue')
          },
          {
            path: '404',
            name: '404',
            meta: { title: '404', permission: ['error'] },
            component: () => import(/* webpackChunkName: "err" */'@/views/Error/404.vue')
          },
          {
            path: '500',
            name: '500',
            meta: { title: '500', permission: ['error'] },
            component: () => import(/* webpackChunkName: "err" */'@/views/Error/500.vue')
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
    component: () => import(/* webpackChunkName: "base" */'@/views/Login/index.vue')
  },
  {
    path: '/404',
    name: '/404',
    component: () => import(/* webpackChunkName: "base" */'@/views/Error/404.vue')
  }
]
