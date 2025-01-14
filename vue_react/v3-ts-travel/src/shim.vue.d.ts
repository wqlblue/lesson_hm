declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}


// 主要作用是帮助 TypeScript 理解 .vue 文件的结构。