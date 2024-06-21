import { createRouter, createWebHistory } from 'vue-router'
import GoodiesList from '../views/GoodiesList.vue'
import GoodiesDetail from '@/views/GoodiesDetail.vue'

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
      name: 'goodies-detail',
      component: GoodiesDetail
    }
  ]
})

export default router
