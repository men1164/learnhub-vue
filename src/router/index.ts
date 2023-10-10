import {
  RouteRecordSingleView,
  createRouter,
  createWebHistory,
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContentPage from '../pages/ContentPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPageVue from '../pages/RegisterPage.vue'
import CreatePageVue from '../pages/CreatePage.vue'
import EditPageVue from '../pages/EditPage.vue'

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
    name: 'Register',
    path: '/register',
    component: RegisterPageVue,
  },
  {
    name: 'Create',
    path: '/create',
    component: CreatePageVue,
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditPageVue,
    props: true, // * send :id as a props instead of using $route.params.id
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
