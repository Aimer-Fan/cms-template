import request from '@/utils/request'

export const Login = (username: string, password: string) => {
  return request.post('/login', { username, password })
}
