// 创建一个基于https的服务器
const fs = require('fs');
const tls = require('tls');
const https = require('https');

const options = {
  key: fs.readFileSync('./server.pem'),
  cert: fs.readFileSync('./server-cert.pem'),
  ca: [ fs.readFileSync('./client-cert.pem') ],
  requestCert: true
}

const server = https.createServer(options, (req, res) => {
  let { authorized } = req.socket;
  console.log(req.socket);
  res.writeHead(200);
  res.write(`Hello Https, u r ${authorized ? 'authorized': 'unauthorized'}`);
  res.end();
});

server.listen(8800, () => {
  console.log('server is running on port 8800');
});