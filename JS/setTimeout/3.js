function mysetIntervalWithIsRunning(fn, delay) {
    let timerId = null;
    let isRunning = true;

    function loop() {
        if (!isRunning) return;  // 如果已经停止，则不再继续递归

        fn();  // 执行回调函数
        timerId = setTimeout(loop, delay);  // 安排下一次执行
    }

    timerId = setTimeout(loop, delay);

    return () => {
        isRunning = false;  // 停止递归调用
        clearTimeout(timerId);  // 清除当前的定时器
    };
}

// 使用示例
const stopWithIsRunning = mysetIntervalWithIsRunning(() => {
    console.log("每1秒执行一次（有 isRunning）");
}, 1000);

// 3秒后停止定时器
setTimeout(stopWithIsRunning, 3000);