// 现代应用中最常用的web技术, http是无状态协议
const http = require('http');
const port = 8099;

// 创建http 服务
var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello http');
  res.end();
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${port}`);
  }
});