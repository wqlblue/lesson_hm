function nextTick() {
    return new Promise((resolve, reject) => {
        // DOM 更新完成否？
        if (typeof MutationObserver !== 'undefined') {
            //  MutationObserver 监听 DOM 变化
            const observer = new MutationObserver(() => {
                fn()
                resolve();
            });
            observer.observe(document.getElementById('app'), {
                childList: true,
                subtree: true,
                attributes: true
            });

        }
        // FN()
        // resolve
    });
}


window.onload = () => {
    //  页面记载完成
}
