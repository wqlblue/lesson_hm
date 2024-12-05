function mysetInterval(fn, delay) {
    let intervalId = null;
    function loop() {
        intervalId = setTimeout(() => {
            fn();
            loop();
        }, delay);
    }
    return () => {
        clearTimeout(intervalId);
    }
}
