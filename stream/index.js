// 基于流的web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(path.join(__dirname, 'index.html'), 'utf8');
    stream.pipe(res);
})

server.listen(8088);
console.log('server is running on port 8080');