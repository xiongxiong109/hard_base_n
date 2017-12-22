// tls加密通信的client
const fs = require('fs');
const tls = require('tls');
const os = require('os');

const clientOptions = {
  key: fs.readFileSync('./client.pem'),
  cert: fs.readFileSync('./client-cert.pem'),
  ca: [ fs.readFileSync('./server-cert.pem') ],
  servername: 'Bear' // 这个值与生成server-cert的commonName一致
}

// 连接
const tlsContextStream = tls.connect(8088, clientOptions, () => {
  console.log(tlsContextStream)
  console.log('save tcp connected');
});

tlsContextStream.on('data', data => {
  console.log(data.toString());
})