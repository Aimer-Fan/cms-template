import Mock from 'mockjs'
import { genResponse, getBody } from './utils'

const login = (option: any) => {
  const body = getBody(option)
  const username = body.username
  const password = body.password
  if (username === 'admin' && password === 'admin') {
    return genResponse(200, {
      id: '123',
      name: 'AimerFan',
      token: '123',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606107651100&di=de3715c39a16df641b3d89d839fb86c6&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F23%2F20200723090549_wdhgx.thumb.400_0.jpeg'
    })
  }
}

Mock.setup({ timeout: '200-600' })
Mock.mock(/\/api\/login/, 'post', login)
