import {
  NavigationGuard,
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
import useAuthStore from '../stores/useAuthStore'

const isAuthenticated: NavigationGuard = (_, __, next) => {
  const store = useAuthStore()

  if (!store.isLoggedIn) {
    next({ name: 'Home' })
    return
  }

  next()
}

const isNotAuthenticated: NavigationGuard = (_, __, next) => {
  const store = useAuthStore()

  if (store.isLoggedIn) {
    next({ name: 'Home' })
    return
  }

  next()
}

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
    beforeEnter: isNotAuthenticated,
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterPageVue,
    beforeEnter: isNotAuthenticated,
  },
  {
    name: 'Create',
    path: '/create',
    component: CreatePageVue,
    beforeEnter: isAuthenticated,
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditPageVue,
    props: true, // * send :id as a props instead of using $route.params.id
    beforeEnter: isAuthenticated,
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
