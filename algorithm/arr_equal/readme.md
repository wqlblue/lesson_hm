# 数组相等判断

- 不使用排序
- 不考虑位置

[1,2,3] 和 [1,3,2] 相等


## 数据相等

- length 效率  也是逻辑核心
- arr1.some
  - find 
- some 有一个为true 就返回true
  为false 是我们可以利用的  +arr2.indexOf(item) === -1
 
- indexof
 但是NaN是不可以判断的
 
  indexOf 使用严格相等 (===) 进行比较。
NaN == NaN 和 NaN === NaN 都返回 false，因为 NaN 表示无效的数值，不应该被视为与其他任何值（包括另一个 NaN）相等。
使用 Number.isNaN() 是检查一个值是否是 NaN 的最可靠方法，因为它不会尝试进行类型转换。
- includes
   但是includes可以解决，内部用了isNaN() 进行判断


- Map es6 新增的数据结构  JSON 对象字面量
- Set 不重复