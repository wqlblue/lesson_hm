FIFO queue

- 为什么0.1+0.2！=0.3
js采用IEEE 754标准，根据IEEE 754标准，浮点数使用有限数量的位来存储数值，这意味着它们只能近似地表示某些十进制小数。具体来说，0.1和0.2这两个数在二进制中是无限循环的小数，无法被精确表示。
- typeof
  变量存储的二进制 前三位 000 表示对象 010 表示函数 100 表示字符串
  110 表示布尔值   1 表示整数 0 表示浮点数  null 000(历史遗留问题)   undefined 011

- Object.prototype.toString.call()
   
- substring slice
   第二个参数 不一样
   slice 不包含第二个参数,但支持复数，反向取反而更灵活
   substring 第二个参数 endIndex，不包括，不支持复数，
   只能正向取slice更优