#  大厂项目技能点分析
- 全家桶
- 不要搞后端 用假数据


- **Typescript  js超集**
    - 在路由配置文件添加 RouterRecordRaw 类型约束
    - pinia 里所有响应式数据都要添加类型约束 ref<泛型>
    - types 目录是类型定义的专属目录，按模块申明类型

    export type typeName = {
        type不属于js，属于ts
    }

    - .vue文件中加入 lang="ts"支持
    - interface 接口 也可以用于 类型定义
        - login 页面 使用interface 声明了LoginInfo 接口 包含 username password 两个字段

    - 组件约束props的时候
        interface Props{
            username:string;
        }
    - 函数参数要给类型约束

**- 工程化 vite**

        - 先编译再运行
            开发时写的是ts，编译后js 运行
            scss -> css 一样

        - alias配置
            @ -> src
            path.resolve(__dirname,"./src") 更严谨
            在ts 项目里我手动安装 @type/node    node的类型文件

        - vant 自动加载
            借助vite 工程化 unplugin-vue-components 插件 
            @vant/auto-import-resolver 将vant 的加载放到vite启动运行阶段
            项目启动更快，因为首页不需要再加载vant了

        - 这将自动按需引入 van-button 组件，而不会将整个 Vant 库打包到你的应用中。
        
- **使用了vant UI组件库**
    - 选择vant 加速开发，不用重复造轮子
    - 组件开发文档
    - 学习到很多组件的写法 比如 具名插槽
        - 组件的定制性
    - van-search keep-alive
    - van-field van-form(model + rules)
    - 组件使用，项目正在使用的UI组件库 公司的开发文档
- hooks useRouter 手写自定义一个hook

- 高质量的组件

**- tailwindcss  界面 css能力较强**
    - 安装tailwindcss
    - 原子化的css
    - 基本不用写css，很快
    - bg-gradient-to-b from-orange-500 to-orange-300
    - 线性渐变的好处：如果不用渐变，就要用图片(发送http请求 + 图片比较大)
    - 了解@apply 的进阶功能
        tailwindcss 缺点是类名要写一大堆
        @apply 可以把一堆的类名交给一个类 放在 css/common.css 复用      **复合样式类，进行复用**
- **html5 的能力点**
    语义化标签
        main
    localStorage
    observer
    cookie

- **es6**
    async await
    - es6 module
        import from + export/export default
        import * as  R
        import R,{x,y} from ''
        import type R
- **css**
    - flex  flex的三个属性 0 0 auto    flex-col flex-end flex:1
    - gradient
    - tailwind AI结合 语义化

- **组件化思想**
    - 复用
    - 降低页面的复杂性 代码可维护性提升
        - props 父子数据通信
        - 组件只需要负责显示， 性能更好

- **vue 语法考点安排**
    - 插槽
    - toRefs
        将store 变成组件方便解构的响应式对象
        当从一个响应式对象直接解构时，属性会丢失响应式，原因是解构的是值
        toRefs 将响应对象方便的拆解为多个独立的响应式引用对象
    - keep alive
        vue性能优化的语法
        - router-view 路由的切换，组件会重新渲染
        - 首页不应该被卸载，频繁的会回到首页，为了提升体验，keep alive
            不卸载组件，只切换
        - 任何需要缓存的组件
        - **v-slot 插槽指令，指定内部的slot 部分即渲染组件**       **111**
        - **keep-alive 全局组件，缓存组件**                   **111**
    - watch
    - 懒加载
    - 性能优化
        - 路由懒加载
        - gradient
        - vite  vant的加载
        - keep-alive
        - include route-name 数组 route.meta | route.meta.cache
        keepAlive
            exclude
        - computed 计算属性 + useRouter
            router.allRoutes.filter.map()
    - 防抖节流


- 项目写法
    - 先选择项目
        AI- 豆包


- 首页功能介绍
- **登录页功能介绍**
    - van-form   ==》  model+rules
    - van-field  checkbox 自定义
        template#input
        van-checkbox model="checked"
        说明 ...
    - ts interface 约束 LoginInfo
        ref<boolean>




                            *****************************My Character*************************************

瀑布流

懒加载

防抖节流



coze
令牌：pat_DHwmBkZDEgwdNkpq875ZhHsSNCFnpiruJEIdka52l1buBYuP05o4VRg9jvRmSMk9