const {
    writeFileWX,
    closeFileWX
} = require('./file_wx');

const fileName = 'hello_test';

writeFileWX(fileName, 'I am a test string');
process.stdin.resume();

setTimeout(() => {
    process.exit(0);
}, 5e3);

process.on('exit', (code) => {
    console.log(code);
    closeFileWX(fileName);
})