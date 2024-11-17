import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    }
    ,
    {
      path: '/home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/item',
      component: () => import('@/views/item.vue')
    }
    ,
    {
      path: 'item',
      component: () => import('@/views/item.vue')
    }

  ]
})

export default router
