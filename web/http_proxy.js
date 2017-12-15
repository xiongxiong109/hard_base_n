// http代理转发
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // 读取请求中的url信息
  let options = url.parse(req.url);

  options.headers = req.headers;
  options.host = 'www.baidu.com';

  let proxyRequest = http.request(options, proxyRes => {
      
    proxyRes.on('data', data => {
      console.log(data);
    });

  });
  
  req.on('data', data => {
    proxyRequest.write(data);
  })

  res.end();
  
});

server.listen(8888);