// repl 服务连接器
const net = require('net')
const socket = net.connect(8589)

process.stdin.setRawMode(true) // 把标准输入作为原始流, 允许在命令行中使用tab键
process.stdin.pipe(socket) // 把进程的输入同步到socket中去
socket.pipe(process.stdout) // 把socket的输出同步到进程的标准输出流

process.on('uncaughtException', err => {
  console.error(err.message);
  console.error(err.stack);
  process.exit();
});

socket.once('close', () => {
  process.stdin.destroy();
})