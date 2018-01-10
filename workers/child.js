const sendMsg = (msg) => {
  process.send(`Say Hello from ${process.pid}, ${msg}`);
}

process.on('message', msg => {
  sendMsg(msg);
});