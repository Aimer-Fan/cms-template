import { message } from 'ant-design-vue'
import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-type': 'application/json'
    }
    return config
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      message.error(res.data)
      return new Error(res.data)
    }
  }
)

export default service
