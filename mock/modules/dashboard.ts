import Mock from 'mockjs'
import { generateResponse } from '../utils'
import lineData from './data/lineData'

const GetLineData = () => {
  return generateResponse(200, lineData)
}

export default {
  installer () {
    Mock.mock(/\/api\/GetLineData/, 'post', GetLineData)
  }
}
