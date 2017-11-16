const net = require('net');

const client = net.createConnection({
    port: 8088,
    host: '127.0.0.1'
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('tcp client connected')
    }
});

client.on('data', data => {
    console.log('data recieved');
    client.write('ok');
    console.log(data.toString());
});