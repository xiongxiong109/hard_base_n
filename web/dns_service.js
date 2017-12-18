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

dns.resolve4('www.baidu.com', (err, address) => {
  console.log(address);
});

dns.resolve6('www.baidu.com', (err, address) => {
  console.log(address);
});

dns.resolve('www.baidu.com', (err, address) => {
  console.log(address);
});