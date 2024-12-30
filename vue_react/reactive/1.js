const { log } = require("node:console");

// ES6 代理对象
const proxy = new Proxy(
    {},
    {
        get: function (obk, prop) {
            console.log('设置get 操作');

        }


    }
);