const Router = require('koa-router')
const Mock = require('mockjs')
const serverRouters = require(`${process.cwd()}/mock`)(Router, Mock)
const routerCompose = new Router()
const baseRouters = new Router()
baseRouters.get('/', async (ctx) => {
  ctx.body = {
    success: true,
    content: 'hello,mock-api'
  }
})
/* const serverRouters = new Router({
  prefix: '/api/v1'
})
serverRouters.get('/user', async (ctx) => {
  ctx.body = {
    success: true
  }
}) */
/**
 * 路由嵌套
 */
routerCompose.use(baseRouters.routes(), baseRouters.allowedMethods())
routerCompose.use(serverRouters.routes(), serverRouters.allowedMethods())

module.exports = routerCompose
