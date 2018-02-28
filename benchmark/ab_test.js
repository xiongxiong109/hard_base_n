// 使用benchmark来进行基准测试
const Benchmark = require('benchmark');

let suite = new Benchmark.Suite;

// 字符串拼接函数测试
const { joinByArr, joinByStr } = require('./join');

let str1 = 'hello';
let str2 = 'world';
let str3 = 'pp';

suite
  .add('joinByArr', function() {
    joinByArr(str1, str2, str3);
  })
  .add('joinByStr', function() {
    joinByStr(str1, str2, str3);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(`Fastest: ${this.filter('fastest').map('name')}`)
  })
  .run({async: true})