import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView/HomeView.vue'),
      meta: {
        layout: 'Default'
      }
    }
  ]
})

export default router
