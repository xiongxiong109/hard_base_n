const dgram = require('dgram');

const socket = dgram.createSocket('udp4'); // udp4

socket.bind(4000); // tcp 与udp中前1023端口是保留的

console.log('socket is running on 4000');