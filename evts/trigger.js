// 发布一个订阅消息
// domain api已经被废弃
const domain = require('domain')

const wrapper = domain.create();
const szTicketWatcher = require('./index');

console.log('watching ticket...');

wrapper.on('error', err => {
    console.log('catch wrapper error', err);
})

wrapper.run(() => {
    szTicketWatcher.emit('update');
    szTicketWatcher.emit('error', 'error mistake');
});