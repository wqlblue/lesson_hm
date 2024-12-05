function mysetIntervalWithoutIsRunning(fn, delay) {
    let timerId = null;

    function loop() {
        fn();  // 执行回调函数
        timerId = setTimeout(loop, delay);  // 递归调用
    }

    timerId = setTimeout(loop, delay);

    return () => {
        clearTimeout(timerId);  // 只取消当前的定时器
    };
}

// 使用示例
const stopWithoutIsRunning = mysetIntervalWithoutIsRunning(() => {
    console.log("每1秒执行一次（无 isRunning）");
}, 1000);

// 3秒后停止定时器
setTimeout(stopWithoutIsRunning, 3000);