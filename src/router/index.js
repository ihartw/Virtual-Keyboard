import Vue from 'vue'
import VueRouter from 'vue-router'
import Keyboard from '../views/Keyboard.vue'
import Guitar from '../views/Guitar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Keyboard',
    component: () => import('../views/Keyboard.vue')
  },
  {
    path: '/Guitar',
    name: 'Guitar',
    component: () => import('../views/Guitar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
