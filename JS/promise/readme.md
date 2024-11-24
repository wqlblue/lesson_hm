# 回调
 -- 回调地狱

# promise
1. promise 要具有三种状态 'pending' ||'fulfilled' || 'rejected'
2. promise 要保证接收到的回调函数在触发时，有resolve,reject 两个函数体作为参数
3. resolve 负责执行then中的回调，并且将参数传给then中的回调函数，并且将状态改为fulfilled
4. reject 负责执行catch中的回调，并且将参数传给catch中的回调函数，并且将状态改为rejected



