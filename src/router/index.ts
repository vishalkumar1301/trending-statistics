import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SubmitTranscriptView.vue'),
    },
    {
      path: '/submit-transcript',
      name: 'submit-transcript',
      component: () => import('../views/SubmitTranscriptView.vue'),
    },
  ],
})

export default router
