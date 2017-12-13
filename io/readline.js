// 使用readline模块对用户的输入进行逐行读取
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Who r u ?\n', answer => {
  console.log(`U r ${answer}`);
  rl.close();
});