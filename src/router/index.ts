import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/home/HomeView.vue') },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/detail_service/DetailService.vue'),
    },
  ],
})

export default router
