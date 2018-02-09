// 使用repl来查看运行中的进程
// 需要在server 中暴露一个tcp服务, 然后通过一个repl客户端连接到node中去
const net = require('net');
const repl = require('repl');

let replServer = net.createServer(socket => {
  let r = repl.start({
    input: socket,
    output: socket,
    terminal: true
  });
  r.on('exit', () => {
    socket.end();
  })
});

module.exports = replServer