// 一个写入流
const {
    Writable
} = require('stream')
const fs = require('fs');

class WriteStream extends Writable {
    constructor(reader) {
        super();
        this._reader = reader;
        this.initReaderEvts();
    }
    initReaderEvts() {
        let _writer = this;
        let _reader = this._reader;
        _reader.on('update', (source) => {
            _writer.write(source);
        })
    }
    write(data) {
        console.log(data);
    }
}

module.exports = WriteStream;