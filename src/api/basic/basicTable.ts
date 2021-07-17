import request from '@/utils/request'

export function GetTableData<P, R> (params: P): any {
  return request.get('/basic/basicTable', params)
}
