module.exports = {
  devServer: {
    port: 4396,
    proxy: {
      '/api': {
        target: 'http://192.168.1.30:8085',
        changeOrigin: true,
        pathRewrite: { '^/api': '/' }
      }
    }
  },
  productionSourceMap: false
}
