// 替换base64
const base64 = require('./base64');

const fs = require('fs');

const hyFileStr = fs.readFileSync('./hybrid', 'utf-8');
let hyArr = hyFileStr.split('\r\n');

hyArr.forEach((url, idx) => {
    hyArr[idx] = `ctrip://wireless/h5?url=${base64.encode(url)}&type=1`;
});

str = hyArr.join('\n');

fs.writeFileSync('./gen', str, 'utf-8');

console.log('done');