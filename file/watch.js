// 监听文件变化
const fs = require('fs');
const path = require('path');

fs.watch(path.join(__dirname, 'test.db'), (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
