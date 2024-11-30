# css 底层基础

- 何为css?
```CSS
/* css rules */
/* css规则 */
h1{   /* 选择器*/
  color: red;    /* 声明*/
  text-align: center;   /* 声明*/
}
```

- css ? 层叠样式表 
    - html DOM 不能裸奔
    - css选择DOM元素 运用样式规则
    - css是怎么引入的
        -  dom + css = render tree (显示页面 数据结构)
        -> 浏览器渲染 -> 渲染得到页面


- 优先级
    - 从小到大
    - 计算规则
    标签选择器 伪元素选择器  1  
    类名选择器，属性选择器，伪类选择器 10 
    ID选择器 100 
    行内样式 1000

    !important 10000

    - 当选择器比较复杂的时候  优先级加法

    .container ul li:nth-child(odd)   得分 22
    一定选择最后的元素 

   

    - css选择器分为哪几类？
     - 基础选择器
        - 标签选择器
        - 类选择器
        - id选择器
        - 通配符选择器  * 性能不好！！
     - 组合选择器
        - 后代选择器   空格
        - 子元素选择器  >
        - 相邻兄弟选择器    +
        - 通用兄弟选择器    ~
     - 伪类选择器   
       伪类 是 CSS 中的一种特殊类型的选择器，用于选择处于特定状态的元素。
       它们允许开发者根据元素的状态、位置或用户交互来应用样式

       ::active  ::hover ::selection   ...可交互状态

     - nth-child 和 nth-of-type

       :nth-child(n) 的限制：如果你在选择器中指定了特定的标签类型（如 p:nth-child(3)），那么只有当第 n 个子元素恰好是该类型时，样式才会应用。如果第 n 个子元素不是指定的类型，那么该选择器将不会匹配任何元素


    - 伪元素选择器
        - ::before
        - ::after
        - ::first-line
    - 属性选择器
        - [attribute]
        - [attribute=value]
        - [attribute~=value]
    