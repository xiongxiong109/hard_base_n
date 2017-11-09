// 基于流的web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// 基于流和管道的渲染
const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'index.html');
    // let filePath = 'hello 404';

    let stream = fs.createReadStream(filePath, 'utf8');

    // 在流中捕获异常(如果不加捕获, 进程会crash并退出)
    stream.on('error', (err) => {
        console.trace('err happend'); // 跟踪堆栈位置
        console.error('err: ', err.stack); // 打印错误堆栈信息
    });

    stream.pipe(res);

})
// 文件可能会被阻塞的渲染
// const server = http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, content) => {
//         if (err) {
//             res.end(err);
//         } else {
//             res.end(content)
//         }
//     })
// })

server.listen(8088);
console.log('server is running on port 8088');