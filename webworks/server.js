// 使用配置信息来更好地维护项目
// console.log(process.env); // env设置环境变量
// console.log(process.argv); // argv设置命令行参数
/**
 * env参数要放在node指令之前, 作为node启动的前置环境变量
 * 放在node 指令之后的参数，都会依次push到process.argv中去
 */
// example
// NODE_ENV=production node ./server -s aa
// 打印出来process.env.NODE_ENV = production
// argv[2] = s; argv[3] = aa;

// 使用nconf来维护配置信息
const http = require('http');
const path = require('path');
const express = require('express');
const nconf = require('nconf');
const ErrorHandle = require('./middlewares/errorHandler');
// nconf configs
nconf
  .env()
  .argv()
  .file('appSettings', path.join(__dirname, '..', 'package.json'))
  .file('testSetting', path.join(__dirname, 'test.json'));
// 多个文件的时候, 同名字段会被覆盖???

let ENV = nconf.get('NODE_ENV');
let PORT = nconf.get('PORT');
let nm = nconf.get('name');
const port = PORT || 8080;
const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(Object.assign({}, {
    ENV, port, nm
  }));
  next(new Error('fake error')); // 抛出一个异常错误
});

app.use('/', router);
app.use(ErrorHandle); // 当前面的中间件中有抛出异常的时候, 就会触发这个error中间件

const server = http.createServer(app);
server.listen(port, (err) => {
  if (err) {return new Error(err.stack)}
  console.log(`server is running on port ${port}`);
});