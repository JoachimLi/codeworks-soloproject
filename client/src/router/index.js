import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresUser: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router guards to protect routes that require authentication
router.beforeEach(async (to, from, next) => {
  const requiresUser = to.matched.some(record => record.meta.requiresUser)

  if (requiresUser && !store.state.user) next({ name: 'Login' })
  else next();
})

export default router
