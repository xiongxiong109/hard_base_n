// 数据结构 列表

class List {
    constructor(props = {}) {
        this._dataStore = []; // 列表数据
        this._curIdx = 0; // 当前索引
        this._listSize = 0;
        this._isLoop = props.isLoop; // 是否可循环
    }
    prev() { // 列表的上一个元素
        if (--this._curIdx < 0) {
            if (this._isLoop) { // 如果是循环列表, 列表移动到底部
                this._curIdx = this._listSize - 1;
            } else {
                this._curIdx = 0;
            }
        }
    }
    next() { // 列表的下一个元素
        if (++this._curIdx > this._listSize - 1) {
            if (this._isLoop) {
                this._curIdx = 0;
            } else {
                this._curIdx = this._listSize - 1;
            }
        }
    }
    moveTo(index = 0) { // 自由移动
        if (this._dataStore[index]) {
            this._curIdx = index;
            return true;
        }
        return false;
    }
    moveToHead() { // 访问列表的头部元素
        this._curIdx = 0;
    }
    moveToEnd() { // 访问列表的最后一个元素
        this._curIdx = this._listSize;
    }
    length() { // 
        return this._listSize;
    }
    insert(target, curEl) { // 在列表的某一位置前插入元素
        let targetIndex = this._find(curEl);
        if (targetIndex >= 0) {
            this._dataStore.splice(targetIndex + 1, 0, target); // 三个参数的splice实现插入操作
            this._curIdx++;
            return true;
        }
        return false;
    }
    append(el) { // 在列表后一个一位置后插入元素
        this._dataStore[this._listSize++] = el;
    }
    _find(el) { // 查找元素
        return this._dataStore.indexOf(el);
    }
    removeByEl(el) { // 移除列表元素
        let targetIndex = this._find(el);
        if (targetIndex >= 0) {
            this._dataStore.splice(targetIndex, 1);
        }
    }
    getElement() { // 获取当前元素
        return this._dataStore[this._curIdx];
    }
    clear() { // 清除列表
        this._curIdx = 0;
        this._listSize = 0;
        this._dataStore = [];
    }
    toString() { // 返回列表本身
        return this._dataStore;
    }
}

module.exports = List