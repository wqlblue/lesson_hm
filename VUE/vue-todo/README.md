# watch vs computed  
1. watch默认不会主动执行一次，且watch是监听某个变量的变更，会执行内部的回调
2. computed默认会主动执行，当回调中任意变量值变更时，computed都会重新执行   