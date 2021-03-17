import { RouteRecordRaw } from 'vue-router'

export interface ResponseBody {
  code: number;
  data: any;
}
export interface CustomResponse<T> {
  code: number;
  data: T;
}
export interface UserModuleState {
  name: string;
  avatar: string;
  token: string;
  roles: Array<any>;
}
export interface PermissionModuleState {
  routers: Array<RouteRecordRaw>;
}

export interface AppModuleState {
  device: 'desktop' | 'tablet' | 'mobile';
  collapsed: boolean;
  loading: boolean;
  theme: 'light' | 'dark';
}
