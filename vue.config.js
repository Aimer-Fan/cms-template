/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
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
    // externals: {
    //   monaco: 'monaco-editor'
    // },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new LodashModuleReplacementPlugin(),
      new MonacoWebpackPlugin({
        languages: ['typescript', 'javascript', 'css', 'html', 'json']
      }),
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
            drop_console: true
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
