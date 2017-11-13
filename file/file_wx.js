// 独占标记读写文件
const fs = require('fs');
const path = require('path');

/**
 * 在当前目录下写文件, 写文件之前会尝试创建一个独占lock文件
 * @param {String} fileName 
 */
const writeFileWX = (fileName, data) => {
    fs.writeFile(path.join(__dirname, `${fileName}.lock`), process.pid, {
        flag: 'wx'
    }, err => {
        if (err) {
            console.error(err);
        } else {
            fs.writeFile(path.join(__dirname, fileName), data, {
                encoding: 'utf8'
            }, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`file ${fileName} has been writed`);
                }
            })
        }
    })
}

const closeFileWX = (fileName) => {
    console.log(fileName);
    fs.unlinkSync(path.join(__dirname, `${fileName}.lock`));
}

module.exports = {
    writeFileWX,
    closeFileWX
}