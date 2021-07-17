import request from '@/utils/request'

export const GetLineData = (): Promise<any> => {
  return request.post('/GetLineData')
}
export const GetCardsData = (): Promise<any> => {
  return request.post('/GetCardsData')
}
