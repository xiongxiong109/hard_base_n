// 创建一个tls加密的tcp服务器
const fs = require('fs');
const tls = require('tls');

const options = {
  key: fs.readFileSync('./server.pem'),
  cert: fs.readFileSync('./server-cert.pem'),
  ca: [ fs.readFileSync('./client-cert.pem') ]
}

console.log(options);