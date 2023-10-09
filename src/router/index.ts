import {
  RouteRecordSingleView,
  createRouter,
  createWebHistory,
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContentPage from '../pages/ContentPage.vue'

const routes: RouteRecordSingleView[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/content',
    component: ContentPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
