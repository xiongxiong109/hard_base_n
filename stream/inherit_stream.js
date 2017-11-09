// 流是一个抽象接口, 一般会继承自流来实现具体的类
// 继承的方式有util.inherits和object.create
// { Readable, Writeable, Duplex, Transform }
const {
    Readable
} = require('stream');
const util = require('util');

function customReadStream(opts) {
    Readable.call(this, opts);
}

// 使用util.inherits继承stream.Readable
util.inherits(customReadStream, Readable);

// console.log(customReadStream);

// 使用object.create来继承流
function CustomWriteStream(opts) {
    Readable.call(this, opts);
}

CustomWriteStream.prototype = Object.create(Readable.prototype, {
    constructor: {
        value: CustomWriteStream
    }
});