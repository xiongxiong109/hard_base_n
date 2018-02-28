// 基本功能单元测试
const { expect } = require('chai');

const { joinByArr, joinByStr } = require('./join');

let str1 = 'hello';
let str2 = 'world';
let str3 = 'Bear';

describe('test#joinByArr', () => {
  it('返回拼接好的字符串', () => {
    expect(joinByArr(str1, str2, str3)).to.equal(str1+str2+str3);
  })
});

describe('test#joinByStr', () => {
  it('返回拼接好的字符串', () => {
    expect(joinByStr(str1, str2, str3)).to.equal(str1+str2+str3);
  })
});