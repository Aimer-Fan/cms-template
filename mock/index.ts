import Mock from 'mockjs'
import app from './modules/app'

console.log('Mock mounting')

Mock.setup({ timeout: '200-600' })
app.installer()
console.log('Mock mounted')
