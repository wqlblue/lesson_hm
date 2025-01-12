// ts 是js的超集  不写 ts, 直接写js 也可以
// vue3 代码 98%的代码都是ts写的
// ts 是多了类型定义 js写起来和java一样  静态编译
// 将90%的错误提前暴露出来  编译阶段就报错
import {
    createRouter,
    createWebHistory
}
    from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

// ：生命一个类型 RouteRecordRaw 是一个类型  RouteRecordRaw[] 是一个数组
const rootRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'Home',
        component: () => import("../views/HomePage/HomePage.vue")
    },
]

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import("../views/TheRoot.vue"),
        redirect: '/home',
        children: rootRoutes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router