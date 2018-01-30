// 测试node server
const app = require('../app')
const request = require('supertest')

describe('check health', () => {
  let server = request(app);

  // 异步测试方法需要写回调函数
  it('should be code 200 when get /', (done) => {
    server
      .get('/')
      .expect(200, done);
  })
  it('should return static resources when get /static/', (done) => {
    server
      .get('/static/axios.min.js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  })
})