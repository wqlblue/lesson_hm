import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from '../view/Home.vue'
import Bot from '../view/Bot.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/bot',
        component: Bot
    },
    {
        path: '/hot/:id',
        name: 'hot',
        component: () => import('../view/Hot.vue'),  //懒加载  减少初次代码加载
        props: true
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router