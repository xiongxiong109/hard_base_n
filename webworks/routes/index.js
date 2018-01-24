const express = require('express')
const router = express.Router()
const nconf = require('nconf')

router.get('/', (req, res, next) => {
  let ENV = nconf.get('NODE_ENV')
  let nm = nconf.get('name')
  res.send({
    ENV, nm
  });
  // next(new Error('fake error')); // 抛出一个异常错误
});

module.exports = router