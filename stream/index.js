// 基于流的web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// 基于流和管道的渲染
const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(path.join(__dirname, 'index.html'), 'utf8');
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