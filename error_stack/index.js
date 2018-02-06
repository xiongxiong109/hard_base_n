// 在NodeJs中处理并捕获异常
const fs = require('fs');
// 1. 用emit事件发送异常(会稍微有点问题, 页面将难以得知错误发生的位置)
const { EventEmitter } = require('events');

const ee = new EventEmitter();

process.stdin.on('data', data => {
  console.log(data.toString());
});

// 最后一道防线, 处理未捕获的异常(如果这样处理了之后, Node进程将不会被关闭, 有可能会导致内存泄漏)
process.on('uncaughtException', err => {
  // 最合适的处理方式是, 在这里捕获未捕获的异常, 发送log日志, 然后优雅地关闭掉进程
  console.log('caught unExcepted Error!');
  console.error(err);
  // web server中在这里关闭server
  // server.close();
  setTimeout(process.exit, 5e3); // 等待五秒, 让其他连接运行后结束进程
});

ee.emit('error', 'a test for emit error'); // error 事件必须由new Error传递, 否则就是 uncaught error (正好可以让process的uncaughtException 来捕获)

const handleError = (err) => {
  console.error('Failed Error: ', err.message);
  console.error(err.stack);
}

// 2. 监听error事件, 这样可以跟踪到堆栈信息
ee.on('error', err => {
  handleError(err);
});

// ee.emit('error', new Error('a test for emit error'));

// 异步方法中的错误参数
fs.readFile('./a.txt', (err, data) => {
  // console.log(err);
  if (err) {
    ee.emit('error', new Error(err.message));
    // return new Error(err.message);
  }
});