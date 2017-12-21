// 一个基于tls加密的 安全的tcp服务器
const fs = require('fs');
const tls = require('tls');

var serverOptions = {
  key: fs.readFileSync('./server.pem'),
  cert: fs.readFileSync('./server-cert.pem'),
  ca: [ fs.readFileSync('./client-cert.pem') ],
  requestCert: true // 是否需要ca认证
}

// tlsServer
const tlsServer = tls.createServer(serverOptions, (contextStream) => {
  var authed = contextStream.authorized;
  // 双工流
  contextStream.write(`Connected ${authed}`);
  contextStream.pipe(contextStream); // 向客户端输出流
});

tlsServer.listen(8088, err => {
  if (err) {
    return new Error(err)
  }
  console.log('server running on port 8088')
});