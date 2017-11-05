const {
    EventEmitter 
} = require('events');

// process 相关
console.log('aaa');

// process.nextTick, 该操作类似于setTimeout(() => {},0), 可以让这一步异步执行, 但是比setTimeout更效率
process.nextTick(() => {
    console.log('asas')
});

console.log('ddd')

const Oper = () => {
    let ev = new EventEmitter();
    // ev.emit('success')
    // process.nextTick(() => {
    //     ev.emit('success')
    // })
    return ev;
}

let o = Oper();

process.nextTick(() => {
    o.emit('success');
});

o.on('success', () => {
    console.log('success')
});

// o.emit('success');