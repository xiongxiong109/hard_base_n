// 为列表类添加单元测试
const {
    expect
} = require('chai');

const List = require('../../datastructure/List');

describe('List Class(noLoop)', () => {

    let testArr = [1,{
        a: 'aa'
    }, 'hello'];

    let testList = null;

    before(() => {
        testList = new List(); 
    })

    it('#append', () => {
        for (let i = 0; i < testArr.length; i++) {
            testList.append(testArr[i]);
        }
        expect(testList.toString()).eql(testArr);
    });
    
    it('#insert', () => {
        let a = 'ok';
        expect(testList.insert(a, testArr[1])).to.be.true;
    })

    it('#removeByEl', () => {
        testList.removeByEl('ok');
        expect(testList.toString()).eql(testArr);
    })

    it('#moveTo', () => {
        testArr.forEach((item, idx) => {
            testList.moveTo(idx);
            expect(testList.getElement()).eql(item);
        })
    })

    it('#moveToHead', () => {
        testList.moveToHead();
        expect(testList.getElement()).eql(testArr[0]);
    })

    it('#moveToEnd', () => {
        testList.moveToEnd();
        expect(testList.getElement()).eql(testArr[testArr.length - 1]);
    })

    it('#prev #next', () => {
        testList.moveTo(0);
        testList.prev();
        // no loop
        expect(testList._curIdx).to.equal(0);

        testList.moveTo(1);
        testList.prev();
        expect(testList._curIdx).to.equal(0);        
        testList.next();        
        expect(testList._curIdx).to.equal(1);        
    })
})