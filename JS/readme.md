# 1.js数组上有多少方法？
增：push,unshift,splice,concat
删：pop ,shift,slice,splice
改：
查：includes,indexOf,LastIndexOf,find,findLast,findIndex,findLastIndex,some,every
转换：reverse,sort,toReversed,toString,join,toSorted
迭代：foreach,map,filter

# 2.字符串身上会有多少方法
增：concat
删：slice,substring
改：trim,trimRight,trimLeft,padStart,padEnd,replace,toUppercase,toLowercase
查找：indexOf,lastIndexOf,Includes,charAt,startsWidth,endsWidth
转换:parseInt



# 3.谈谈js中的类型转换机制
- 是什么：js中存在原始类型和引用类型两类，通常开发过程中可能会存在人为转换类型的行为，这种称之为显示转换。还有一种是JS引擎在执行某些操作会自动发送类型转换，我们称之为隐式类型转换

- 显式：Number(xx),String(xx)...
- 隐式：四则运算 +,-,*,/,%,if,while,==

    [] ==![]
    [] == false
    [] == 0

# 4. == vs ===
