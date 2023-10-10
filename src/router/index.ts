import {
  RouteRecordSingleView,
  createRouter,
  createWebHistory,
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContentPage from '../pages/ContentPage.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes: RouteRecordSingleView[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginPage,
  },
  {
    name: 'Content',
    path: '/content/:id',
    component: ContentPage,
    props: true, // * send :id as a props instead of using $route.params.id
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
