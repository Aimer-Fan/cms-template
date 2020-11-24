import { ResponseBody } from '@/interface'
import request from '@/utils/request'

export const login = (username: string, password: string): Promise<ResponseBody> => {
  return request.post('/login', { username, password })
}

export const logout = (): Promise<ResponseBody> => {
  return request.post('/logout')
}

export const getUserInfo = (token: string): Promise<ResponseBody> => {
  return request.post('/getUserInfo', { token })
}
