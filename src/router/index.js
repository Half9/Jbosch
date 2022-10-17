import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Projecten from '@/views/ProjectenView.vue'
import NotFound from '@/views/NotFound.vue'

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projecten/:uid', name: 'Projecten', component: Projecten },
  { path: '/:path(.*)', name: 'NotFound', component: NotFound },
]

const router = new createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: -1 }
    }
  },
})

export default router
