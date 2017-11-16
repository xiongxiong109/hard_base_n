// 使用net模块创建一个tcp服务器(socket.io)
/**
 * tcp是基于字节流的传输层通信协议, http自然访问不了这个端口
 */
const net = require('net');

const server = net.createServer(socket => {
    socket.write('hello tcp socket');

    socket.on('data', data => {
        console.log(data);
    });

    socket.on('error', err => {
        console.log(err);
    });

});

server.on('connection', () => {
    console.log('connected');
});

server.on('error', (err) => {
    console.error(err)
});

server.listen(8088, '127.0.0.1');
console.log('listening on port 8088');