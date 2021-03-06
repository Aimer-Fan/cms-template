window.onload = () => {
  const t = performance.timing
  const timer = setTimeout(() => {
    console.table({
      DNS查询耗时: (t.domainLookupEnd - t.domainLookupStart).toFixed(0),
      TCP链接耗时: (t.connectEnd - t.connectStart).toFixed(0),
      request请求耗时: (t.responseEnd - t.responseStart).toFixed(0),
      解析dom树耗时: (t.domComplete - t.domInteractive).toFixed(0),
      白屏时间: (t.responseStart - t.navigationStart).toFixed(0),
      domready时间: (t.domContentLoadedEventEnd - t.navigationStart).toFixed(0),
      onload时间: (t.loadEventEnd - t.navigationStart).toFixed(0)
    })
    clearTimeout(timer)
  })
}
