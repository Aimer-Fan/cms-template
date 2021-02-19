import Mock from 'mockjs'
import app from './modules/app'
import dashboard from './modules/dashboard'
import basic from './modules/basic'

console.log('Mock mounting')

Mock.setup({ timeout: '200-600' })

app.installer()
dashboard.installer()
basic.installer()

console.log('Mock mounted')
