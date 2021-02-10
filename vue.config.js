/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'monaco-editor': 'monaco'
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new LodashModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin(),
      new TerserPlugin({
        exclude: /\.min\.js/,
        parallel: true,
        cache: true,
        extractComments: true,
        terserOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_debugger: true,
            drop_console: false
          }
        }
      })
    ]
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
