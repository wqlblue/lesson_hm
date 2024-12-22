 有三种方法可以使用：
  1. Object.defineProperty()
  2. Proxy
  3. Object.freeze


  需要注意的是如果使用了一次defineProperty()，且你没有显示的设置Configurable为false,则不能再次使用defineProperty()，否则会报错。并且也不可以遍历。