# vue 3 组件生命周期
  - 组件类
- v-if 
    弹窗、广告、loading...
 - 条件渲染的指令  true 显示 false 隐藏 
 - 区别  
    - v-if 是一个真正的条件渲染指令，适用于条件不经常变化的场景。它在初次渲染时更高效，但在条件变化时可能会有较大的性能开销。
        - 如果表达式一开始为 false，Vue 会完全跳过该元素及其子元素的渲染，不会将其插入到 DOM 中。
        - 如果该元素已经存在于 DOM 中并且条件从 true 变为 false，Vue 会销毁该元素及其子组件的实例，并移除它们的 DOM 节点。
    - 有的组件需要 toggle 显示/隐藏
        - 响应式数据 showComponent
        - 页面状态？ 


- 组件是一个类   vue.component  LifecycleComponent ref+defineprops ... new 实例化
  template + css + js 结合 -> 挂载到父组件 -> 渲染到页面
 当条件为 false 时，组件实例会被销毁，所有生命周期钩子都会被调用（包括 beforeDestroy 和 destroyed）。
 当条件再次变为 true 时，组件实例会被重新创建，所有生命周期钩子都会重新调用（包括 beforeCreate、created、beforeMount 和 mounted）。




v-if 是一个真正的条件渲染指令，适用于条件不经常变化的场景。它在初次渲染时更高效，但在条件变化时可能会有较大的性能开销。
v-show 通过 CSS 控制元素的可见性，适用于条件频繁变化的场景。它在切换时更高效，但始终会占用 DOM 空间。