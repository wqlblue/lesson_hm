# 响应式


{{count}}
let count = ref(0)
count.value++

- getter setter


- 数据页面 value count -> 包装成响应式对象 ref ,  被拦截去更新依赖数据的地方
   - 声明了数据 (value, count)
   - 把数据作为对象的属性
   - es5 就有，Object.defineProperty (obj, property, {
    get,
    set
    }) 在修改数据的同时，顺便把set,get  寄存的相关事情也给干了（比如更新DOM）
