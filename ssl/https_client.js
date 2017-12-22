const fs = require('fs');
const tls = require('tls');
const https = require('https');

var options = {
  key: fs.readFileSync('./client.pem'),
  cert: fs.readFileSync('./client-cert.pem'),
  ca: [ fs.readFileSync('./server-cert.pem') ],
  servername: 'Bear',
  port: 8800,
  path: '/',
  method: 'GET'
}

const req = https.request(options, res => {
  res.on('data', data => {
    process.stdout.write(data.toString())
  });
});

req.end();

req.on('error', err => {
  console.log(err);
  // process.stdout.write(err)
});