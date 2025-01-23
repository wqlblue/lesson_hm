// 基础定义
// 定义promise A+规范的三种状态

const PENDING_state = 'pending'
const FULFILLED_state = 'fulfilled'
const REJECTED_state = 'rejected'


// function mypromise(){}
// class mypromise{}


// 判断是否为函数
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
}

// 判断是否为Object
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// 1. 先定义整个类构造器
// 2. 定义失败，成功，的回调函数
function mypromise(fn) {
    // 发布订阅模式 vs 观察者模式  (有没有中间人  有的话就是发布订阅模式  没有的话就是观察者模式)
    this.onfulfilledCallbacks = []  // 成功的回调函数
    this.onrejectedCallbacks = []   // 失败的回调函数

    // 定义初始化的promsie状态
    this.state = PENDING_state

    // 定义成功后的值 或者 失败的原因
    this.value = void 0

    const resolve = function (value) {
        // 成功的回调函数
        // 具体实现
        resolutionProdure(this, value)

    }

    const resolutionProdure = function (promis, x) {
        // 状态只能由pending 到 fulfilled  
        if (promise.state === PENDING_state) {
            // 状态修改为成功
            promise.state = FULFILLED_state
            promise.value = x


            // 发布
            this.onfulfilledCallbacks.forEach(fn => fn())
        }




    }
    const reject = function (reason) {
        // 失败的回调函数   

        // 状态只能由pending 到 rejected
        if (promise.state === PENDING_state) {
            // 状态修改为失败
            promise.state = REJECTED_state
            promise.value = reason

            // 发布
            this.onrejectedCallbacks.forEach(fn => fn())
        }

    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

//  为 mypromise 原型上添加then方法
mypromise.prototype.then = function (onfulfilled, onrejected) {
    onfulfilled && this.onfulfilledCallbacks.push(onfulfilled)
    onrejected && this.onrejectedCallbacks.push(onrejected)

    // 链式调用
    return this
}  