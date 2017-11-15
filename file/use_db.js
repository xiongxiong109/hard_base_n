const DataBase = require('./db');

const db = new DataBase('test.db');

// 插入数据
db.add({
    nm: 'xiong',
    age: '25'
})
    .then(info => {
        console.log('data saved');
        console.log(info)
    })
    .catch(err => {
        console.error(err);
    });

db.findAll()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    });