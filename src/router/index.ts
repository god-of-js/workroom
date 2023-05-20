import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashboardLayout',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/DashboardView.vue')
        },
        {
          path: '/calendar',
          name: 'CalendarView',
          component: () => import('@/views/dashboard/CalendarView.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [
        {
          path: '/register',
          name: 'RegistrationView',
          component: () => import('@/views/auth/RegistrationView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const uid = localStorage.getItem('uid')
  // alert(!uid && to.name !== 'RegistrationView');
  if (!uid && to.name !== 'RegistrationView') {
    next({ name: 'RegistrationView' }) // Redirect to RegistrationView
  } else {
    next() // Continue with the navigation
  }
})

export default router
