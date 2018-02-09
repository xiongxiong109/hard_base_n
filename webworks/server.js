// 在node中调试应用 (node debug 启动应用, repl可以停留在当前上下文中)
// node --prof 启动应用, 会记录v8.log日志, 记录的日志可以通过tick模块查看
// 在日志中的Javascript部分能让我们分析出程序中调用频繁、计算频繁的地方
// 通过node --inspect启动, 可以连接chrome devtools
const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const nconf = require('nconf');
const replServer = require('./repl');
const PORT = nconf.get('PORT');
const port = PORT || 8080;
const replPort = nconf.get('REPL') || 8577; // repl连接端口

process.on('uncaughtException', (err) => {
  console.error('error', err.message, err.stack);
});

server.listen(port, (err) => {
  if (err) {return new Error(err.stack)}
  console.log(`server is running on port ${port}`);
})

replServer.listen(replPort, (err) => {
  console.log(`repl server is running on port ${replPort}`)
});