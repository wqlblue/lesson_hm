import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/home',
      component: () => import('../views/home.vue'),
      children: [
        {
          path: "/home",
          redirect: '/class'
        },
        {
          path: '/class',
          component: () => import('../views/pages/class.vue')
        }
      ]
    }
  ]
})

export default router
