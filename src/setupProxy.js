/**
 * 设置 开发proxy
 *
 * 注意： 你无需在任何位置导入此文件。 它在启动开发服务器时会自动注册。
 * 注意： 此文件仅支持 Node 的 JavaScript 语法。 请务必仅使用支持的语言特性（即不支持 Flow ，ES Modules 等）。
 * 注意： 将路径传递给代理函数允许你在路径上使用 globbing 和/或 模式匹配，这比 express 路由匹配更灵活。
 * */

const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  // 为 内嵌 express服务器 使用 proxy 中间件
  app.use(proxy('/api', {
    target: 'http://localhost:5000/'
  }))
}

// TODO https://www.html.cn/create-react-app/docs/using-https-in-development/
// TODO 读至 在开发环境中使用 HTTPS
// TODO https://zh-hans.reactjs.org/docs/hello-world.html
// TODO 读至 在本指南中，我们将研究 Rea
