/**
 * 文件锁, 使用文件锁，可以在进程协作之间独占某个文件
 * 1. 使用独占标记来创建锁文件, open一个${file}.lock.${ext}文件, 带上x标记
 * 以标识该文件以独占模式打开
 */
const fs = require('fs');
const path = require('path');

let config = {
    name: 'custom name'
}
fs.writeFile(
    path.join(__dirname, 'config.lock'),
    process.pid,
    {
        flag: 'wx'
    },
    err => {
        if (err) {
            console.error(err);
            return
        } else {
            fs.writeFile(
                path.join(__dirname, 'config.json'),
                JSON.stringify(config),
                (err) => {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log('json file writed');
                    }
                    process.stdin.resume();
                });
        }
    }
)