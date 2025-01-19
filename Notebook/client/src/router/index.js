import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/noteClass'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('@/views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('@/views/NoteDetail.vue'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/notePublish',
    name: 'notePublish',
    component: () => import('@/views/NotePublish.vue'),
    meta: {
      title: '笔记发布'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫
const whitePath = ['/login', '/register']
router.beforeEach((to, from) => {
  // console.log(to, from);
  document.title = to.meta.title

  if (!whitePath.includes(to.path)) {
    // 看本地存储有没有值
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }

  }


})

export default router