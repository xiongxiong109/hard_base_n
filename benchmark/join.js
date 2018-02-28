// 利用数组拼接字符串
function joinByArr() {
  let arr = [];
  if (arguments.length) {
    Array.prototype.forEach.call(arguments, argv => {
      if (typeof argv == 'string') {
        arr.push(argv);
      }
    })
  }
  return arr.length ? arr.join('') : '';
}

// 直接拼接字符串
function joinByStr() {
  let str = '';
  if (arguments.length) {
    Array.prototype.forEach.call(arguments, argv => {
      if (typeof argv == 'string') {
        str += argv;
      }
    })
  }
  return str;
}

module.exports = {
  joinByArr,
  joinByStr
}