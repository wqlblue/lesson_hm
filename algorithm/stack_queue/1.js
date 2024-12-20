// es6 为什么引入了class ,因为引入了设计模式
class MyQueue {
    constructor() {
        // 先进先出
        this.stackIn = [];
        // 辅助先进先出
        this.stackOut = [];
    }

    push(x) {
        this.stack.push(x)
    }
    pop() {
        // 当stackOut为空时，将stackIn的元素全部导入stackOut中
        if (this.stackOut.length === 0) {
            while (this.stackIn.length) {
                this.stackOut.push(this.stackIn.pop())
            }
        }
        return this.stackOut.pop()
    }
    peek() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length) {
                this.stackOut.push(this.stackIn.pop())
            }
        }
        return this.stackOut[this.stackOut.length - 1]
    }
    empty() {
        return !this.stackIn.length && !this.stackOut.length
    }
}


