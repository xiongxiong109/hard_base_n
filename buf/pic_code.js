// 读取文件流, 并创建base64编码和dataURI
const fs = require('fs');
const path = require('path');
let dataURI = '';
let mimeType = 'image/png';
let encode = 'base64';
// 通过path.join 和__dirname, 可以找到当前文件目录的相对路径，而不必担心node 进程在哪个目录下执行
let picCode = fs.readFileSync(path.join(__dirname, '..', 'assets', 'avatar.png'), encode);
// console.log(pic); // 默认编码都是buffer
dataURI = `data:${mimeType};${encode},${picCode}`;

fs.writeFile(path.join(__dirname, 'pic'), dataURI, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('dataURI writed');
    }
});