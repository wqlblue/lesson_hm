class AutoExpandArrayQueue {
    #nums = [];
    #front = 0;
    #queSize = 0;
    #capacity;

    constructor(capacity) {
        this.#capacity = capacity;
        this.#nums = new Array(capacity);
    }

    isEmpty() {
        return this.#queSize === 0;
    }

    isFull() {
        return this.#queSize === this.#capacity;
    }

    // 扩展队列容量
    #expandCapacity() {
        const newCapacity = this.#capacity * 2;
        const newArray = new Array(newCapacity);

        for (let i = 0; i < this.#queSize; i++) {
            newArray[i] = this.#nums[(this.#front + i) % this.#capacity];
        }

        this.#front = 0;
        this.#nums = newArray;
        this.#capacity = newCapacity;
    }

    enqueue(element) {
        if (this.isFull()) {
            this.#expandCapacity();
        }

        this.#nums[(this.#front + this.#queSize) % this.#capacity] = element;
        this.#queSize++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Dequeue from an empty queue");
        }

        const element = this.#nums[this.#front];
        this.#front = (this.#front + 1) % this.#capacity;
        this.#queSize--;

        return element;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Peek from an empty queue");
        }

        return this.#nums[this.#front];
    }

    size() {
        return this.#queSize;
    }
}