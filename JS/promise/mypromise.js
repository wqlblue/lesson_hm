class myPromise {
    constructor(executor) {
        this.state = 'pending'  //'fulfilled' 'rejected'
        this.value = undefined
        this.reason = undefined
        this.onFUlfilledCallbacks = []  // 成功的回调
        this.onRejectedCallbacks = []  // 失败的回调
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onFUlfilledCallbacks.forEach(fn => {
                    fn(value)
                })
            }

        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.value = reason
                this.onRejectedCallbacks.forEach(fn => {
                    fn(reason)
                })

            }
        }
        executor(resolve, reject)
    }
    then(onFUlfilled, onRejected) {
        onFUlfilled = typeof onFUlfilled === 'function' ? onFUlfilled : (value) => value
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }

        const newPromise = new myPromise((resolve, reject) => {

        })
        return newPromise

    }
}

