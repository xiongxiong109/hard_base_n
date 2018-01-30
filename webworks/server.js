const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const nconf = require('nconf');

const PORT = nconf.get('PORT');
const port = PORT || 8080;

server.listen(port, (err) => {
  if (err) {return new Error(err.stack)}
  console.log(`server is running on port ${port}`);
})