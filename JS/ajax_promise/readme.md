- es6 promise
   Promsie 类，专门解决异步耗时性问题,执行流程可控
   其他大型语言一般是同步的，js通过es6 promise来解决了单线程，异步不好控制的问题    
   promise 让异步变成同步 提供了完美解决异步任务的机制
   - 口袋  装耗时性的内容  executor 立即执行
      - resolve 成功 reject 失败  两个函数参数
      - resolve 成功解决Promise,then执行
      - reject 失败，catch执行
   - then方法 等他完成后
     resolve(data) 后执行回调函数，data传给回调函数
   - 三种状态
     - pending 等待  实例化后  resolve reject 之前
     - fulfilled 成功  resolve执行后
     - rejected 失败    reject执行后

    promise 诺言  状态只会从 pending 切换到 fulfilled 或者 rejected