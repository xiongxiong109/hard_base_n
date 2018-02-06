// 在NodeJs中处理并捕获异常
const fs = require('fs');
// 1. 用emit事件发送异常(会稍微有点问题, 页面将难以得知错误发生的位置)
const { EventEmitter } = require('events');

const ee = new EventEmitter();

// ee.emit('error', 'a test for emit error'); // error 事件必须由new Error传递, 否则就是 uncaught error

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