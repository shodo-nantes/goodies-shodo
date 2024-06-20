import { createRouter, createWebHistory } from 'vue-router'
import GoodiesList from '../views/GoodiesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'goodies-list',
      component: GoodiesList
    },
  ]
})

export default router
