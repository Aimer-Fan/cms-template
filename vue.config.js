/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/cms-template/',
  devServer: {
    port: 4396,
    // compress: true,
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
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false,
              drop_debugger: true
            }
          }
        })
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
