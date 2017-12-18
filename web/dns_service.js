// dns 服务
const dns = require('dns');

dns.lookup('nodejs.cn', (err, addr, fm) => {
  if (err) {
    return new Error(err)
  } else {
    console.log(addr);
    console.log(fm);
  }
});