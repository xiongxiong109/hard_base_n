// 创建一个基于文件系统api的小型数据库
const {
    EventEmitter 
} = require('events');

const fs = require('fs');

const {
    v4 
} = require('node-uuid');

const path = require('path');

/**
 * file DataBase CRUD
 */
class DataBase extends EventEmitter {
    constructor(dbFile) {
        super();
        this._dbFile = path.join(__dirname, dbFile);
    }
    // 增加一个key value
    add(opts) {
        return new Promise((resolve, reject) => {
            let json = Object.assign({}, opts, {
                _id: v4()
            })
            fs.appendFile(this._dbFile, `${JSON.stringify(json)}\n`, {
                encoding: 'utf8'
            }, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(json)
                }
            })
        })
    }
    findAll() {
        let dataArr = [];
        return new Promise((resolve, reject) => {
            fs.readFile(this._dbFile, {
                encoding: 'utf8'
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                dataArr = data.split('\n');
                dataArr = dataArr.map(jsonStr => {
                    return JSON.parse(jsonStr);
                });
                resolve(dataArr);
            })
        })
    }
    findById(id) {}
    deleteById(id) {}
    updateById(id) {}
}
module.exports = DataBase;