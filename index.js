// node js study
console.log(require.resolve(__filename));
console.trace('hello the trace'); // 可以通过trace 找到console的路径,便于调试

const testPackModule = require('./test_pack_module');

console.log(testPackModule);