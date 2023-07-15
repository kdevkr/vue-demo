import { createRouter, createWebHistory } from 'vue-router'

// https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite
// NOTE: if you want chunk with grouping, please check docs.
const routes = [
  {
    path: '/',
    meta: { name: 'Home' },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    meta: { name: 'About' },
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/error',
    meta: { name: 'Error' },
    component: () => import('@/views/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// https://router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards
router.beforeEach((to, from) => {
  console.log('[beforeEach]', to, from)
})

export { router }
