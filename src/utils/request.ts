import { message } from 'ant-design-vue'
import axios from 'axios'

const CancelToken = axios.CancelToken
const token = CancelToken.source()

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-type': 'application/json'
    }
    config.cancelToken = token.token
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
      token.cancel()
      return new Error(res.data)
    }
  },
  reject => {
    token.cancel()
    console.error(reject)
  }
)

export default service
