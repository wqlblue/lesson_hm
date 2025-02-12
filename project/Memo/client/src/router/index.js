import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta:{
        title: '登陆'  // 路由的名称
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      meta:{
        title: '注册'  // 路由的名称
      }
    },
    {
      path:'/noteClass',
      name:'noteClass',
      component: () => import('../views/NoteClass.vue'),
      meta:{
        title: '笔记分类'  // 路由的名称
      }
    },
    {
      path:'/list',
      name:'list',
      component: () => import('../views/List.vue'),
      meta:{
        title: '笔记列表'  // 路由的名称
      }
    },
    {
      path:'/noteDetail',
      name:'noteDetail',
      component: () => import('../views/NoteDetail.vue'),
      meta:{
        title: '笔记详情'  // 路由的名称
      }
    },
    {
      path:'/notePublish',
      name:'notePublish',
      component: () => import('../views/NotePublish.vue'),
      meta:{
        title: '笔记发布'  // 路由的名称
      }
    }
  ]
})


// 全局的路由守卫
const whitePath = ['/login','/register','/noteClass']
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  console.log(to);         // 要去的路由信息
  if(!whitePath.includes(to.path)){   //需要校验的路由地址
    // 判断浏览器本地是否有无账号信息
    if(localStorage.getItem('userInfo')){
      next()
      return
    }else{    //无信息
      next({path:'/login'})
      return
    }
  }
  next()  // 在白名单的路由直接放行
})

export default router
