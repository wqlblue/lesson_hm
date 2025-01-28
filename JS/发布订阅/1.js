class EventEmitter {
    constructor() {
        // 使用Map存储事件队列（比Object更高效）
        this.eventMap = new Map();
        // 用于once的WeakMap（防止内存泄漏）
        this.onceWrapperMap = new WeakMap();
    }

    // 订阅事件（核心方法）
    on(eventName, handler) {
        if (typeof handler !== 'function') {
            throw new TypeError('Handler must be a function');
        }

        const handlers = this.eventMap.get(eventName) || [];
        handlers.push(handler);
        this.eventMap.set(eventName, handlers);
    }

    // 发布事件（支持多参数）
    emit(eventName, ...args) {
        const handlers = this.eventMap.get(eventName);
        if (!handlers) return false;

        // 创建副本执行（防止执行过程中修改队列）
        handlers.slice().forEach(handler => {
            // 异步执行更贴近实际场景（面试加分点）
            Promise.resolve().then(() => {
                handler.apply(this, args);
            });
        });
        return true;
    }

    // 取消订阅（精准删除）
    off(eventName, handler) {
        const handlers = this.eventMap.get(eventName);
        if (!handlers) return;

        // 双保险删除（直接删除+通过once包装删除）
        const index = handlers.findIndex(
            h => h === handler || h === this.onceWrapperMap.get(handler)
        );

        if (index > -1) {
            handlers.splice(index, 1);
            // 清理空数组
            if (handlers.length === 0) {
                this.eventMap.delete(eventName);
            }
        }
    }

    // 一次性订阅（高频考点）
    once(eventName, handler) {
        const onceHandler = (...args) => {
            // 先执行再清理（避免中途报错导致未清理）
            try {
                handler.apply(this, args);
            } finally {
                this.off(eventName, onceHandler);
                this.onceWrapperMap.delete(handler);
            }
        };

        // 建立原始handler与包装后的映射
        this.onceWrapperMap.set(handler, onceHandler);
        this.on(eventName, onceHandler);
    }
} 