import { asyncRouters } from '@/router/config'
import { RouteRecordRaw } from 'vue-router'
import { Module } from 'vuex'

interface PermissionState {
  routers: Array<RouteRecordRaw>;
}

const permissionState: PermissionState = {
  routers: []
}

function hasPermission (permission: Array<any>, route: RouteRecordRaw) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

function getAuthorizedRouters (asyncRouters: Array<RouteRecordRaw>, roles: any): Array<RouteRecordRaw> {
  const authorizedRouters = asyncRouters.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = getAuthorizedRouters(route.children, roles)
      }
      return true
    }
    return false
  })
  return authorizedRouters
}

const permission: Module<PermissionState, any> = {
  state: permissionState,
  mutations: {
    SET_ROUTERS (state, routers) {
      state.routers = routers
    }
  },
  actions: {
    GenerateRouters (context, roles) {
      console.log(roles)
      // const authorizedRouters = getAuthorizedRouters(asyncRouters, roles)
      const authorizedRouters = asyncRouters
      context.commit('SET_ROUTERS', authorizedRouters)
    }
  }
}

export default permission
