// 在NodeJs中处理并捕获异常

// 1. 用emit事件发送异常(会稍微有点问题, 页面将难以得知错误发生的位置)
const { EventEmitter } = require('events');

const ee = new EventEmitter();

// ee.emit('error', 'a test for emit error'); // error 事件必须由new Error传递, 否则就是 uncaught error
ee.emit('error', new Error('a test for emit error'));