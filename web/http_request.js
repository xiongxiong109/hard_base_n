// 创建http request请求, 向服务端发送请求数据
const http = require('http');

// 向服务端发起一个request
let req = http.request({
  port: 8099
}, res => {
  res.on('data', data => {
    console.log(data);
  });
});

req.end();