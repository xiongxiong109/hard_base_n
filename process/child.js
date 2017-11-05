// 一个一直被挂起的子进程

process.stdout.write(`hello, i am holding on ID: ${process.pid}`);
process.stdin.resume();

process.on('SIGNUP', (d) => {
    console.log(d);
});