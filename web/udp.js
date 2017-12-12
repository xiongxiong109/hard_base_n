// udp socket
const dgram = require('dgram');
const fs = require('fs');
const port = 41234;
const defaultSize = 16;

// socket客户端
const Client = (remoteIP = '127.0.0.1') => {
  let inStream = fs.createReadStream(__filename);
  let socket = dgram.createSocket('udp4');

  const _sendData = () => {
    let msg = inStream.read(defaultSize);
    if (!msg) {
      return socket.unref(); // 使用unref方法来关闭socket客户端
    }
    // 否则向客户端发送报文
    socket.send(msg, 0, msg.length, port, remoteIP, (err, bytes) => {
      if(err) {
        return new Error(err.stack);
      }
      process.stdout.write(`sending ${bytes}`); // utf8
      _sendData(); // 递归调用, 一次发送一段字节, 直到所有的字节发送完毕后, 关闭客户端
      // udp 是无状态协议, 必须一次性写一个数据包, 而且数据包大小必须小于65507bytes
    })
  }

  socket.on('readable', _sendData);
}

// socket 服务端
const Server = () => {
  let socket = dgram.createSocket('udp4');

  socket.on('message', (msg, rinfo) => {
    process.stdout.write(rinfo);
    process.stdout.write(msg.toString());
  });

  socket.on('listening', () => console.log(`Server is now ready on port: ${port}`));
  socket.bind(port);
}

module.exports = {
  Server,
  Client
}