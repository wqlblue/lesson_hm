// 路由配置
import {
    createRouter,  // 创建路由实例
    createWebHistory  // 路由模式·
} from 'vue-router' // 插件
// 页面级别组件放到views文件夹中
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/post/index/post-index.vue'
import PostShow from '../views/post/show/post-show.vue'

// 路由配置
const routes = [
    {
        path: '/',  // 路径
        component: Home  // 组件
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/post',
        component: PostIndex
    }, {
        path: '/post/:postId',
        component: PostShow
    }

]

// 路由实例
const router = createRouter({   // 创建路由
    history: createWebHistory(),  // 路由模式  
    routes
})

export default router