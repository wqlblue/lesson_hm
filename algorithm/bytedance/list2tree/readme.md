#  列表转树

- 高频考题


## 题目
将一个列表，转换成树结构

- 什么是列表 数组
- 数组
    - 容器
    - 连续
    - 下标访问，length 属性
    - 每一项的类型都一样 [1,2,3,4]
        - var arr = [1,2,3,4]
          &arr 起始地址 i*item_size
          [1,"a",{a:1}]

- 列表
    - 每一项不确定类型的数组容器
     - value id + title
     - partent 递归 + 树

- 递归 ？ 自顶向下思维
  - 大问题是啥？
  如何将一个平面的所有节点列表转换成树形结构
  - 小问题是啥？
  <!-- 如何将 parentId 为 "" 的节点转换成树结构 -->
  如何将 parentID 为某值的节点，转换成树结构



- 可以优化不
    - 时间复杂度
      递归 O（n*d）d是树的深度
    - 空间换时间
      HashMap o(n)

- 在业务开发(多层级菜单，二连弹，三连弹select(省市区)) 常见的难点
- 多种数据结构的考察
- 复杂递归的考察
- 时间复杂度和空间复杂度的考察 常见的HashTable(json)

