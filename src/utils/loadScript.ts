import genArr from '.'

/**
 * @description 加载一个脚本
 * @author AimerFan
 * @date 04/02/2021
 * @param src 需要加载脚本的地址
 * @param callback 回调函数，成功不携带参数，失败携带失败的事件
 */
export function loadScript (src: string, callback: Function | undefined): void {
  const existedScript = document.getElementById(src)
  if (existedScript) {
    callback && callback()
    return
  }

  const $script = document.createElement('script')
  $script.src = src
  $script.id = src
  $script.async = true

  document.body.appendChild($script)

  $script.onload = () => { callback && callback() }
  $script.onerror = (ev) => { callback && callback(new Error(ev.toString())) }
}

/**
 * @description 加载脚本列表
 * @author AimerFan
 * @date 04/02/2021
 * @param srcList 脚本地址列表
 * @param callback 回调函数，全部成功或者存在一个失败都会被调用，成功不携带参数，失败携带失败的地址
 */
export function loadScriptList (srcList: Array<string>, callback: Function | undefined) {
  const list = genArr(srcList.length, 0)

  const check = (index: number, hasError: boolean) => {
    list[index] = hasError ? -1 : 1
    if (list.some(item => item < 0)) {
      const target = list.find(item => item < 0)
      callback && callback(target || 'error, but cannot find the source of error script!')
    }
    if (list.every(item => item > 0)) {
      callback && callback()
    }
  }

  srcList.forEach((src, index) => {
    loadScript(src, (ev: Event | undefined) => { check(index, !!ev) })
  })
}

/**
 * @description 加载脚本队列
 * @author AimerFan
 * @date 2021/02/05
 * @param queue 脚本队列
 * @param callback 回调函数
 */
export function loadScriptQueue (queue: Array<string>, callback: Function | undefined) {
  if (!callback) callback = () => ({})
  if (!queue.length) {
    callback()
    return
  }
  const cur = queue.shift()
  if (!cur) {
    callback()
    return
  }
  queue.length ? loadScript(cur, () => loadScriptQueue(queue, callback)) : loadScript(cur, callback)
}
