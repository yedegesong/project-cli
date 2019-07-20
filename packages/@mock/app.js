const Koa = require('koa')
const chalk = require('chalk')
const logger = require('koa-logger')
const Router = require('./routers')
const log = console.log
const app = new Koa()
// 日志
app.use(logger())
app.use(Router.routes())

app.listen(3000)
log(chalk.blue('🚀 start-quick is starting at port http://localhost:3000'))
