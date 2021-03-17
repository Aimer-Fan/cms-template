/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, stat } = require('fs')
const gulp = require('gulp')
const less = require('gulp-less')
const through2 = require('through2')
const Vinyl = require('vinyl')

/**
 * @description 同时打包 antd 深色模式和浅色模式到一个css文件下，深色模式下添加 [data-theme="dark"] 前缀
 * @author AimerFan
 * @date 2021/02/21
 */
function generateAntdCss () {
  gulp.src('./node_modules/ant-design-vue/dist/antd.dark.css')
    // 读取深色模式样式并用 [data-theme="dark"] {} 包裹起来
    .pipe(through2.obj(function (file, enc, cb) {
      const str = file.contents.toString()
      const result = '[data-theme="dark"] {\n' + str + '\n}'
      const vinyl = new Vinyl({
        path: file.basename,
        contents: Buffer.from(result)
      })
      cb(null, vinyl)
    }))
    // 使用 less 编译
    .pipe(less())
    // 拼接上默认模式的 css
    .pipe(through2.obj(function (file, enc, cb) {
      const str = file.contents.toString()
      readFile('./node_modules/ant-design-vue/dist/antd.css', function (err, data) {
        if (!err) {
          let result = data.toString() + str
          result = result.replace(/\/\*(\s|.)*?\*\//ig, '')
          // eslint-disable-next-line no-useless-escape
          result = result.replace(/\[data-theme=\"dark\"\] \{(\s|\n)*\}/ig, '')
          const vinyl = new Vinyl({
            path: 'antd.css',
            contents: Buffer.from(result)
          })
          cb(null, vinyl)
        } else {
          cb(new Error('can not read antd.css'))
        }
      })
    }))
    // 输出到指定的文件夹下
    .pipe(gulp.dest('./'))
}

/**
 * @description 向外暴露的任务, 打包 antd 样式表
 * @author AimerFan
 * @date 2021/02/21
 */
async function defaultTask () {
  // 如果文件已存在就不再打包
  stat('./antd.css', function (err) {
    if (err) {
      generateAntdCss()
    }
  })
}

exports.default = defaultTask
