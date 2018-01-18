// 网络连接中间层(express所依赖的模块?)
const connect = require('connect');
const app = connect();

app.use('/', (req, res) => {
  res.end('ok');
});

app.listen(9090);