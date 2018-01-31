// 被试应用
const fs = require('fs');

const app = {
  read(cb) {
    fs.readFile('./a', (err, data) => {
      cb(err, data);
    })
  },
  write(str) {
    if (!str) {
      throw new Error('str must be given');
    }
    return true;
  }
}

module.exports = app