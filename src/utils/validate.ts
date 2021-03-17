/**
 * @description 是否是外部连接
 * @author AimerFan
 * @date 2021/03/17
 * @param path 路径
 */
export function isExternal (path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
