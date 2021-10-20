import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@s/views/home/index')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "Home" */ '@s/views/article/index')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Home" */ '@s/views/about/index')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
