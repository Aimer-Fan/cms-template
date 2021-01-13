import { ResponseBody } from '@/interface'
import request from '@/utils/request'

export const GetLineData = (): Promise<ResponseBody> => {
  return request.post('/GetLineData')
}
