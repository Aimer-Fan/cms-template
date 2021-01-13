import Mock from 'mockjs'
import { generateResponse, getBody } from '../utils'

const login = (option: any) => {
  const body = getBody(option)
  const username = body.username
  const password = body.password
  if (username === 'admin' && password === 'admin') {
    return generateResponse(200, {
      token: '123'
    })
  }
}

const logout = () => {
  return generateResponse(200, 'logout successful')
}

const getUserInfo = () => {
  return generateResponse(200, {
    id: '202101',
    name: 'AimerFan',
    token: '123',
    avatar: 'https://avatars2.githubusercontent.com/u/47803845?s=40&v=4',
    roles: [
      {
        name: 'admin',
        permissions: [
          {
            name: 'dashboard',
            components: ['']
          },
          {
            name: 'error',
            components: ['']
          },
          {
            name: 'table',
            components: ['']
          }
        ]
      }
    ]
  })
}

export default {
  installer () {
    Mock.mock(/\/api\/login/, 'post', login)
    Mock.mock(/\/api\/getUserInfo/, 'post', getUserInfo)
    Mock.mock(/\/api\/logout/, 'post', logout)
  }
}
