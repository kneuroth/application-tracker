import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Applications from '../views/Applications.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Applications
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
