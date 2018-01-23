// 继承错误类来实现自定义的错误
const { NotFoundError } = require('../utils/error');

// 中间件如果有四个参数, 那么第一个参数就是error对象
const NotFound = (err, req, res, next) => {
  console.log(err.stack);
  next(new NotFoundError(req.query.id)); // 使用next传递错误堆栈
}

module.exports = NotFound;