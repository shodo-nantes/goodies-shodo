import { createRouter, createWebHistory } from 'vue-router'
import GoodiesList from '../views/GoodiesList.vue'
import GoodiesDetails from '@/views/GoodiesDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'goodies-list',
      component: GoodiesList
    },
    {
      path: '/goodies/:id',
      name: 'goodies-details',
      component: GoodiesDetails
    }
  ]
})

export default router
