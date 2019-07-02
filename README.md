#project-cli

工程搭建

### 安装

```bash
# 安装依赖
npm install

# 因为未发布到npm源上故采用npm link本地安装
npm link

# 查看是否安装成功
my-cli -h
```

### 模板拉取

```
# 第一步：执行my-cli create 工程名
my-cli create yourProject

# 第二步：根据终端提示拉取不同模板

# 第三步：在拉取的工程模板下npm install
```

### 启动mock服务模拟接口

**第一步：在工程下创建一个mock/index.js文件**

案列结构：

```js
  module.exports = function (Router,Mock) {
    const serverRouters = new Router({
      prefix: '/test'
    })
    serverRouters.get('/', async (ctx) => {
      ctx.body = {
        content : Mock.mock({
        "string|1-10": "★"
      }),
      success: true
      }
    })
    return serverRouters
  }
```

外层采用函数方法包裹：\(Router, Mock\)

有两个参数组成：Router表示koa-router，Mock表示mockjs

官方使用地址：

[https://www.npmjs.com/package/koa-router](https://www.npmjs.com/package/koa-router)

[http://mockjs.com/](http://mockjs.com/)

**第二步：执行my-cli mock**

**第三步：打开浏览器**[**http://localhost:3000/test**](http://localhost:3000/test/)** 可以看到你自己编写的Mock数据**



