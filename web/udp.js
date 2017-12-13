// udp socket
const dgram = require('dgram');
const fs = require('fs');
const readline = require('readline');
const port = 41234;
const defaultSize = 256;

const rl = readline.createInterface(process.stdin, process.stdout); // 创建一个处理用户输入的接口

// socket客户端
const Client = (remoteIP = `127.0.0.1:${port}`) => {
  let client = dgram.createSocket('udp4');

  rl.setPrompt('Please input your message\n');
  rl.prompt(); // 等待用户输入
  
  const _sendData = (msg) => {
    // let msg = inStream.read(defaultSize);
    if (!msg) {
      return client.unref(); // 使用unref方法来关闭socket客户端
    }
    // 否则向客户端发送报文
    client.send(msg, 0, msg.length, port, remoteIP, (err, bytes) => {
      if(err) {
        return new Error(err.stack);
      }
      process.stdout.write(`sending ${bytes} bytes\n`); // utf8
      _sendData(); // 递归调用, 一次发送一段字节, 直到所有的字节发送完毕后, 关闭客户端
      // udp 是无状态协议, 必须一次性写一个数据包, 而且数据包大小必须小于65507bytes
    });
    // 客户端监听服务端的发送数据
    client.on('message', (msg, rinfo) => {
      console.log(msg.toString());
      // console.log(rinfo);
    });
  }
  // 得到用户的输入后, 将输入发送到服务端
  rl.on('line', msg => {
    console.log(`You: ${msg}`);
    _sendData(msg);
  });
}

// socket 服务端
const Server = () => {
  let server = dgram.createSocket('udp4');
  let ClientUsers = {};
  server.on('message', (msg, rinfo) => {
    let { address, port } = rinfo;
    let ipd = `${address}:${port}`;

    if (!ClientUsers[ipd]) { // 填充客户端数组
      ClientUsers[ipd] = { address, port, id: ipd };
    }

    console.log(`Get message: "${msg}" from ${address}:${port}`);

    // 将收到的消息下发到所有的客户端
    for (let client in ClientUsers) {
      if (ClientUsers[client].id != ipd) {
        server.send(msg, ClientUsers[client].port, ClientUsers[client].address, err => {
          if (err) {
            return new Error(err.stack);
          }
        });
      }
    }
    // process.stdout.write('\nchunk start >>>>>>>>>\n');
    // process.stdout.write(msg.toString());
    // process.stdout.write('\nchunk end <<<<<<<<<\n');
  });

  server.on('listening', () => console.log(`Server is now ready on port: ${port}`));
  server.bind(port);
}

// module.exports = {
//   Server,
//   Client
// }

// 通过命令行创建server 与 client
if (process.argv[2] == 'client') {
  Client(process.argv[3]);
} else {
  Server();
}