// 执行子进程
const cp = require('child_process');
// 提供一个回调函数
// cp.exec('cat ./child.js', (err, stdout, strerr) => {
// 	if (err) {
// 		return new Error(err)
// 	}
// 	console.log(stdout);
// });

// 基于流的spawn, 第一个参数传递指令, 后面的数组传递指令执行的参数
let stream = cp.spawn('cat', ['./child.js'], {
  detached: true // 分离子进程
});
// let stream = cp.spawn('fis3', ['-v']);

stream.stdout.on('data', data => console.log(data.toString()));