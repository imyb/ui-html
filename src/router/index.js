import { createRouter, createWebHistory } from 'vue-router'
import sidebarNavItems from '@/router/sidebarNavItems'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/button'
    },
    ...sidebarNavItems
  ]
})

export default router
