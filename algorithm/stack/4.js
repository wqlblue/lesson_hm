const MinStack = function () {
    this.stack = [];
    // 定义辅助栈
    this.stack2 = [];
};


MinStack.prototype.push() = function () {
    this.stack.push(num);
    // 若入栈的值小于当前最小值，则推入辅助栈栈顶
    // 为什么要等于 ？  出栈
    if (!this.stack2.length || this.stack2[this.stack2.length - 1] >= num) {
        this.stack2.push(num);
    }
}
MinStack.prototype.pop = function () {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if (this.stack.pop() === this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
}