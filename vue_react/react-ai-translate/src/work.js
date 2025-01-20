// 不能做DOM window  self = this
self.addEventListener('message', (event) => {
    console.log(event);
    self.postMessage({
        text: 'AI任务完成了'
    })

})