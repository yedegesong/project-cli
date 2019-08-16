const Koa = require('koa')
const chalk = require('chalk')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const Router = require('./routers')
const log = console.log
const app = new Koa()
// 跨域 支持所有域名访问
app.use(cors())
// 日志
app.use(logger())
// 解析post body
app.use(bodyParser())
app.use(Router.routes())

app.listen(3000)
log(chalk.blue('🚀 start-quick is starting at port http://localhost:3000'))
