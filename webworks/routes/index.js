const express = require('express')
const router = express.Router()
const axios = require('axios')
const path = require('path')
const nconf = require('nconf')

router.get('/', (req, res) => {
  let ENV = nconf.get('NODE_ENV')
  let nm = nconf.get('name')
  res.send({
    ENV, nm
  });
  // next(new Error('fake error')); // 抛出一个异常错误
});

// format data
router.post('/data', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.format({
    json() {
      res.send({rencode: '200'})
    }
    // xml() {
    //   res.send('<rencode>200</rencode>')
    // }
  })
});

router.get('/post', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router