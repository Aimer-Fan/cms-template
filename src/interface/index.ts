export interface ResponseBody {
  code: number
  data: any
}

export interface UserState {
  name: string
  avatar: string
  token: string
  roles: Array<string>
}
export interface AppState {
  device: string;
  collapsed: boolean;
}
