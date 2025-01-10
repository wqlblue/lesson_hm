// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            requireAuth: true // 需要认证
        },
        children: [
            {
                path: 'about', // 注意：路径相对于父路由 '/'
                name: 'about',
                component: About,
                meta: {
                    title: '关于',
                    requireAuth: true // 同样需要认证
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'), // 懒加载
        meta: {
            title: '登录',
            requireAuth: false // 不需要认证
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // 等同于 routes: routes
});

// 全局前置守卫：用于检查是否需要认证
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requireAuth);
    const isAuthenticated = /* 这里应实现一个方法来检查用户是否已认证 */ false;

    if (requiresAuth && !isAuthenticated) {
        next({
            path: '/login',
            query: { redirect: to.fullPath } // 登录后重定向回原路径
        });
    } else {
        document.title = to.meta.title || '默认标题'; // 设置页面标题
        next();
    }
});

export default router;