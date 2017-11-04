// 测试模块, 使用node 标准模块assert可以实现一个测试模块
const assert = require('assert');
const testPackModule = require('../test_pack_module');

// test packModule
assert.equal(testPackModule.m1, 'hello m2');
