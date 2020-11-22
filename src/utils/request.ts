import axios, { AxiosRequestConfig } from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 3000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = {
      'Content-type': 'application/json'
    }
    return config
  }
)

export default service
