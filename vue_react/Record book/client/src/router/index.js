import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path:'/register',
      name:'register',
      component: () => import('@/views/register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path:'/noteClass',
      name:'noteClass',
      component: () => import('@/views/noteClass.vue'),
      meta: {
        title: '笔记'
      }
    },
    {
      path:'/noteList/:title',
      name:'noteList',
      component: () => import('@/views/noteList.vue'),
      meta: {
        title: '笔记列表'
      }
    },
    {
      path:'/noteDetail/:id',
      name:'noteDetail',
      component: () => import('@/views/noteDetail.vue'),
      meta: {
        title: '笔记详情'
      }
    },
    {
      path:'/notePublish',
      name:'notePublish',
      component: () => import('@/views/notePublish.vue'),
      meta: {
        title: '编辑笔记'
      }
    }
  ]
})

//全局的路由守卫
const whitePath=['/login','/register','/noteClass']
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  if(!whitePath.includes(to.path)){
    //判断浏览器本地有无userInfo
    if(!localStorage.getItem('userInfo')){//没登陆
      router.push('/login');
      return
    }
  }
  next()
})

export default router
