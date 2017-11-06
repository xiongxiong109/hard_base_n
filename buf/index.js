// buffer test

const unm = 'xiongxiong';
const pwd = 'hello';

// Buffer就像一个普通的js原始类型(如String Boolean等)
let uCode = new Buffer(`${unm}:${pwd}`);
let remotePic = null;

console.log(uCode);
console.log(uCode.toString());
console.log(uCode.toString('base64'));