import { ResponseBody } from '@/interface'

export function getBody (config: any) {
  return config.body && JSON.parse(config.body)
}

export function genResponse (code: number, body: any): ResponseBody {
  return {
    code: code,
    data: body
  }
}
