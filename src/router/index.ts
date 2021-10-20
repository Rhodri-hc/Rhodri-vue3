import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@s/views/home/index.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@s/views/article/index')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@s/views/about/index')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
