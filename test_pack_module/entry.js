// node js可以以文件目录为模块进行模块引入，默认会引入文件目录下的index.js文件
// 也可以在文件夹目录下新建package.json文件进行引入
const m1 = require('./m1');
const m2 = require('./m2');
module.exports = {
    m1,
    m2
}