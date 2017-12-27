// 内存泄露测试
const http = require('http')
const express = require('express');
const easyMonitor = require('easy-monitor');

const app = express();
const router = express.Router();

// monitor
easyMonitor('test-mem-app');

let theThing = null;

let replaceThing = () => {

  let leak = theThing;

  let unused = () => {
    if (leak) {
      console.log('hi')
    }
  }

  // 不断修改theThing的引用
  theThing = {
    longStr: new Array(1000000),
    someMethod: function () {
      console.log('a');
    }
  };

}

router.get('/index', (req, res) => {
  replaceThing();
  theThing = null;
  res.send('ok');
});

app.use('/', router);
const server = http.createServer(app);

server.listen(8088, err => {
  console.log('server is running on port 8088');
});