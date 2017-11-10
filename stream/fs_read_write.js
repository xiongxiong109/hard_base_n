const fs = require('fs');
const path = require('path');

let reader = fs.createReadStream(path.join(__dirname, 'index.html'), 'utf8');
let writer = fs.createWriteStream(path.join(__dirname, 'cloned.html'), 'utf8');

writer.cork(); // 将数据存在缓冲区, 只有调用write.end()或者uncork(), 才会把write的数据强制输出到文件

reader.on('data', (chunk) => {
    writer.write(chunk); // 直接调用writer的write api 写入流
    setTimeout(() => {
        writer.uncork();
        // writer.end();
    }, 3e3);
});

// reader.pipe(writer); // 让reader流pipe到writer, 单工流

// reader.read();