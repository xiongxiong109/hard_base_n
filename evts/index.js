// 事件系统 (发布订阅)
const {
    EventEmitter 
} = require('events');

const util = require('util');

// 必须是一个构造函数
function TicketWatcher() {
    EventEmitter.call(this);
}

util.inherits(TicketWatcher, EventEmitter);

let szTicketWatcher = new TicketWatcher();

szTicketWatcher.on('newListener', (e) => {
    console.log(`new Listenter: ${e}`)
})

szTicketWatcher.on('update', () => {
    console.log('有票了');
});

szTicketWatcher.on('error', err => {
    console.log(err);
})

module.exports = szTicketWatcher;