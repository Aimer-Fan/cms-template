import Mock from 'mockjs'
import { generateResponse } from '../utils'

function GetCardsData () {
  return generateResponse(200, {
    activeUsers: { value: 112893, status: '' },
    accountBalance: { value: 112893, status: '' },
    feedback: { value: 11.28, status: 'up' },
    idle: { value: 9.3, status: 'down' }
  })
}

export default {
  installer () {
    Mock.mock(/\/api\/GetCardsData/, 'post', GetCardsData)
  }
}
