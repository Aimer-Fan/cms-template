import request from '@/utils/request'

export const login = (username: string, password: string): Promise<any> => {
  return request.post('/login', { username, password })
}

export const logout = (): Promise<any> => {
  return request.post('/logout')
}

export const getUserInfo = (token: string): Promise<any> => {
  return request.post('/getUserInfo', { token })
}
