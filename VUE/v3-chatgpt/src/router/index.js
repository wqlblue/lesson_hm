// 引入 Vue Router
import { createRouter, createWebHashHistory } from 'vue-router';

// 导入页面级别组件（懒加载）
const Home = () => import('../views/home.vue');
const About = () => import('../views/about.vue');

// 创建路由实例
const router = createRouter({
    // 使用哈希模式（URL 中带有 #）
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',  // 根路径
            name: 'home',
            component: Home,  // 懒加载 home.vue 组件
        },
        {
            path: '/about',  // 关于页面路径
            name: 'about',
            component: About,  // 懒加载 about.vue 组件
        }
    ]
});

// 导出路由实例
export default router;