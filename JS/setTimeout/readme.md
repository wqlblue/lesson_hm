# setTimeout


- setTimeout 是异步执行的计时器，会在主线程执行完后才执行
   callback 函数 ，放入 event loop 时间 （ms）
- 一定会在 指定时间后执行吗？
- 找回？
  执行的是回调函数
- 定时器ID
  可以取消定时器  clearTimeout  

- 如何用setTimeout 实现 setInterval
 - 场景编程题
 - 手写题 fn
 - customSetInterval
 - 可以用 settimeout 
 - 递归
 - 关闭


 - call
 
- 为什么 timeout.html 只输出了四次？

尽管 setTimeout(() => { interval(); }, 5000) 和 customSetTimeout 中的 setTimeout 都是宏任务，但在某些情况下，浏览器可能会优先处理 setTimeout(() => { interval(); }, 5000)，因为它是一个单独的任务，而不是一个递归的任务链。这可能导致 setTimeout(() => { interval(); }, 5000) 在第五个 setTimeout 之前被处理，从而取消了第五个 setTimeout。

