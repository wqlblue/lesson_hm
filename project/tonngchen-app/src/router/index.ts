import { createRouter, createWebHistory } from "vue-router";
import TheRoot from '../views/TheRoot.vue'
import type { RouteRecordRaw } from 'vue-router'

// 配置home路由的二级路由
const ThePages:RouteRecordRaw[] = [
    {
        //首页
        path: '/home',
        name: 'Home',
        meta: {
            cache: true
        },
        component: () => import('../views/Home/Home.vue')
    },
    {
        //社区
        path: '/community',
        name: 'Community',
        component: () => import('../views/Community/Community.vue'),
        meta: {
            cache: false
        }
    },
    {
        //discount
        path: '/discount',
        name: 'Discount',
        component: () => import('../views/Discount/Discount.vue'),
        meta: {
            cache: false
        }
    },
    {
        //鉴别
        path: '/identify',
        name: 'Identify',
        component: () => import('../views/Identify/Identify.vue'),
        meta: {
            cache: false
        }
    },
    {
        //我的
        path:'/my',
        name: 'My',
        component: () => import('../views/My/My.vue'),
        meta: {
            cache: false
        }
    }
]
// 配置路由数组
const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: TheRoot,
        //重定向
        redirect: '/home',
        children: ThePages
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    }
]




// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;