import React, { useEffect } from 'react';

// use 开头 hooks 编程 

function NotFound() {
    // 使用 useEffect 执行副作用操作
    useEffect(() => {
        // 设置页面标题
        document.title = "404 - 页面未找到";

        // 记录访问404页面的日志（可以替换为向服务器发送日志的实际逻辑）
        console.log("用户访问了不存在的页面");

        // 可选的清理函数
        return () => {
            console.log("离开404页面");
        };
    }, []); // 空数组意味着这个 effect 只会在组件挂载和卸载时执行

    return (
        <div>
            <h1>404 - 页面未找到</h1>
            <p>对不起，您访问的页面不存在。</p>
        </div>
    );
}

export default NotFound;