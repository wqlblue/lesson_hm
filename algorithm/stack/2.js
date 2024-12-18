class ArrayStack {
    // 类的属性
    // public 公有 类的外部，内部 子类都可以访问
    // PRIVATE 私有 类的外部不能访问   内部可以访问 子类不能访问
    items;
    #stack;
    constructor() {
        this.#stack = [];
        this.items = 1;
    }

    push(element) {
        this.#stack.push(element);
    }
    pop() {
        return this.#stack.pop();
    }
    peek() {
        if (this.#stack.length === 0) {
            throw new Error('stack is empty');
        }
        return this.#stack[this.#stack.length - 1];
    }
    get size() {
        return this.#stack.length;
    }

}


const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size);
