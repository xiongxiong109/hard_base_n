// 在node中调试应用 (node debug 启动应用, repl可以停留在当前上下文中)
// node --prof 启动应用, 会记录v8.log日志, 记录的日志可以通过tick模块查看
// 在日志中的Javascript部分能让我们分析出程序中调用频繁、计算频繁的地方
// 通过node --inspect启动, 可以连接chrome devtools
const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const nconf = require('nconf');
const PORT = nconf.get('PORT');
const replPort = nconf.get('REPL') || 8577;
const port = PORT || 8080;
const net = require('net');
const repl = require('repl');

process.on('uncaughtException', (err) => {
  console.error('error', err.message, err.stack);
});
// 模块相互依赖的话存在引用问题
const replServer = net.createServer(socket => {
  let r = repl.start({
    input: socket,
    output: socket,
    terminal: true
  });
  r.on('exit', () => {
    socket.end();
  });
  r.context.server = server;
});

server.listen(port, (err) => {
  if (err) {return new Error(err.stack)}
  console.log(`server is running on port ${port}`);
})

replServer.listen(replPort, (err) => {
  console.log(`repl server is running on port ${replPort}`)
});

module.exports = server;