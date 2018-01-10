// 父进程通过fork方法分叉一个子进程, 然后通过on和send监听子进程并与子进程进行通信
const cp = require('child_process'); // 子进程模块
const child = cp.fork('./child');

child.on('message', msg => {
  console.log(msg);
  child.kill(); // 需要杀死子进程, 否则子进程会一直存在
});

child.send('Hey');