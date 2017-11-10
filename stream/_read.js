// 实现一个可读的流(流都是基于EventEmitter的)
const {
    Readable 
} = require('stream');

// 一个继承自stream.Readable的流类
class StreamReader extends Readable {
    constructor(source) {
        super();
        this._source = source;
        this.initSourceEvt();
    }
    initSourceEvt() {
        // 传入一个流
        var _source = this._source;
        _source.on('readable', () => _source.read());
        _source.on('data', chunk => {
            this.updateStream(chunk);
        });
        _source.on('end', () => {
            this.emit('end');
        })
    }
    updateStream(chunk) { // 更新流数据
        this.emit('update', chunk);
    }
}

module.exports = StreamReader;