/**
 * @description 返回一个长度为 length 的数组，数组的每个元素都是 initVal
 * @author AimerFan
 * @date 04/02/2021
 * @param length 数组的长度
 * @param initVal 初始值
 */
export default function genArr<T> (length: number, initVal: T): Array<T> {
  if (length) {
    const list = new Array(length)
    for (let i = 0; i < length; i++) {
      list[i] = initVal
    }
    return list
  } else {
    return []
  }
}
