// 测试模块, 使用node 标准模块assert可以实现一个测试模块(不依赖其他测试框架)
const assert = require('assert');
const testPackModule = require('../test_pack_module');
const app = require('./example')
// test packModule
assert.equal(testPackModule.m1, 'hello m1');

// 用ifError和throws测试应用是否正确地抛出了异常
// app.read();
app.read((err, data) => {
  assert.ifError(err); // ifError可以测试回调函数抛出的异常
});

// app.write
assert.equal(app.write('a'), true); // 测试write方法写入一个值返回true

assert.throws(
  app.write,
  err => {
    if (err instanceof Error && /str/.test(err)) {
      return true;
    }
  },
  '不是期望的错误'
); // 测试write方法参数为空时抛出异常