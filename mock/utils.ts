// import { ResponseBody } from '@/interface'

export function getBody (config: any) {
  return config.body && JSON.parse(config.body)
}

export function generateResponse (code: number, body: any): any {
  const result = {
    code: code,
    data: body
  }
  console.log('[Mock response]: ', result)
  return result
}
