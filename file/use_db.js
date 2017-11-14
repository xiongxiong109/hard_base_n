const DataBase = require('./db');

const db = new DataBase('test.db');
db
    .add({
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