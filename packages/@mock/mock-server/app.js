const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('./routers')
const app = new Koa()

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

// 日志
app.use(logger())


app.use(Router.routes())

app.listen(3000)
console.log('[demo] start-quick is starting at port http://localhost:3000')
