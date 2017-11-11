const fs = require('fs');
const path = require('path');
const StreamReader = require('./_read');
const WriteStream = require('./_write');

let fileStream = fs.createReadStream(path.join(__dirname, 'index.html'), 'utf8');
let buffer = Buffer('xiongxiong109');
let reader = new StreamReader(fileStream);

reader.on('update', data => {
    console.log(data);
})