import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
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
