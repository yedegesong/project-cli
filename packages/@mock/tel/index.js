module.exports = function (Router, Mock) {
  const serverRouters = new Router({
    prefix: '/mock'
  })
  serverRouters.get('/', async (ctx) => {
    ctx.body = {
      content: Mock.mock({
        'string|1-10': '★1'
      }),
      success: true
    }
  })

  return serverRouters
}
