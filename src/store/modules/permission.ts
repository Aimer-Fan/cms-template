import { asyncRouters } from '@/router/config'
import { RouteRecordRaw } from 'vue-router'
import { Module } from 'vuex'
import { union } from 'lodash'

interface PermissionState {
  routers: Array<RouteRecordRaw>;
}

interface PermissionStore {
  permission: PermissionState;
}
interface Role {
  name: string;
  permissions: Array<RouterPermission>;
}

interface RouterPermission {
  name: string;
  components: Array<string>;
}

const permissionState: PermissionState = {
  routers: []
}

function hasPermission (permissions: Array<RouterPermission>, route: RouteRecordRaw) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permissions.length; i < len; i++) {
      flag = route.meta.permission.includes(permissions[i].name)
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

function getAuthorizedRouters (
  asyncRouters: Array<RouteRecordRaw>,
  routerPermissions: Array<RouterPermission>
): Array<RouteRecordRaw> {
  const authorizedRouters = asyncRouters.filter(route => {
    if (hasPermission(routerPermissions, route)) {
      if (route.children && route.children.length) {
        route.children = getAuthorizedRouters(route.children, routerPermissions)
      }
      return true
    }
    return false
  })
  return authorizedRouters
}

const permission: Module<PermissionState, PermissionStore> = {
  state: permissionState,
  mutations: {
    SET_ROUTERS (state, routers) {
      state.routers = routers
    }
  },
  actions: {
    GenerateRouters (context, roles: Array<Role>) {
      const routerPermissions = union(...roles.map(role => role.permissions))
      const authorizedRouters = getAuthorizedRouters(asyncRouters, routerPermissions)
      context.commit('SET_ROUTERS', authorizedRouters)
    }
  }
}

export default permission
