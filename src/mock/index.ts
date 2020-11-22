import Mock from 'mockjs'
import { getBody } from './utils'

Mock.mock(/login/, 'post', (option: any) => {
  const body = getBody(option)
  const username = body.username
  const password = body.password
  if (username === 'admin' && password === 'admin') {
    return {
      name: 'AimerFan'
    }
  }
})
