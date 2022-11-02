import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Projecten from '@/views/ProjectenView.vue'
import NotFound from '@/views/NotFound.vue'
import FormSucces from '@/views/SuccesFormSubmit.vue'
import MijnVerhaal from '@/views/MijnVerhaal.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projecten/:uid',
    name: 'Projecten',
    component: Projecten,
  },
  {
    path: '/mijn-verhaal',
    name: 'Mijn Verhaal',
    component: MijnVerhaal,
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/succes',
    name: 'FormSucces',
    component: FormSucces,
  },
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

router.beforeEach((to, form, next) => {
  let pageTitle = `JBosch - ${to.name}`

  function titleFirstLetterUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  if (to.params.uid) {
    let uid = titleFirstLetterUppercase(to.params.uid.replace(/-/g, ' '))
    pageTitle += ` - ${uid}`
  }

  document.title = pageTitle
  next()
})

export default router
