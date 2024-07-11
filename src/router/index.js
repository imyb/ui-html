import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
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
  ],
});

export default router;
