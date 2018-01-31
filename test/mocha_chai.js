// 使用mocha chai来编写测试用例
const { expect } = require('chai') // 使用expect语法
const app = require('./example')

describe('app.read', () => {
  it('should throw Error when no file', (done) => {
    app.read((err, data) => {
      expect(err).to.be.an('error');
      done();
    })
  });
})

describe('app.write', () => {

  it('should be true when have args', () => {
    expect(app.write('a')).to.be.true;
  })

  it('should throw error when no args', () => {
    expect(app.write).to.throw('str must be given');
  })
})