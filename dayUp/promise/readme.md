## promise 

promise A+ 规范的具体内容

### 术语

1. thenable  具有then 方法
2. value  返回成功执行之后的值
3. reason  拒绝我总得给我一个理由吧
4. exception  异常 通过throw语法


### 要求
1. 状态
pendding(等待), fulfilled(成功), rejected(失败)
这三个状态之间的转换关系
pendding -> fulfilled
pendding -> rejected

fulfill -> rejected   不能转换

2. 方法.then

promise.then(onFulfilled, onRejected)

`onFulfilled`，成功后
`onRejected`，失败后

在什么时候执行？promise **完成后**执行
在什么时候执行？promise 只调用一次