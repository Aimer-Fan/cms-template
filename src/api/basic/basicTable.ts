import { CustomResponse } from '@/interface'
import request from '@/utils/request'

export function GetTableData<P, R> (params: P): Promise<CustomResponse<R>> {
  return request.get('/basic/basicTable', params)
}
