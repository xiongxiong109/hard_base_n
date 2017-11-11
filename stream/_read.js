/**
 * 实现一个可读的流(流都是基于EventEmitter的)
 * 流是一个抽象类, 需要手动实现各种方法, 比如_read
 * 所有继承Readable的流类都必须手动实现_read方法
 * 继承过来之后, 打印_read会显示有这个方法, 但是在执行这个方法的时候, 就会提示
 * not implement 未实现
 */

const {
    Readable 
} = require('stream');

// 一个继承自stream.Readable的流类
class StreamReader extends Readable {
    constructor(source) {
        super();
        this._source = source;
        // 需要等待readable事件完成
        this._source.on('readable', () => {
            this.read();
        });
    }
    _read() {
        let chunk = this._source.read();
        if (chunk) {
            this.push(chunk); // push方法只能在_read里面使用
            this.emit('update', chunk);
        }
    }
}

/**
 * test reader
 * Readable类有两种模式, 一种是flowing, 一种是paused
 * paused流需要显式地调用read方法
 */
// let reader = new StreamReader();

module.exports = StreamReader;