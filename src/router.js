import { createRouter, createWebHistory } from 'vue-router'

// https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite
// NOTE: if you want chunk with grouping, please check docs.
const routes = [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/about', component: () => import('@/views/About.vue') },
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
