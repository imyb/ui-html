import { createRouter, createWebHashHistory } from 'vue-router';
import sidebarNavItems from '@/router/sidebarNavItems';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/button',
    },
    ...sidebarNavItems,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
