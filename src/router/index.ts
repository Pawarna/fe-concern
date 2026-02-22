import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: () => import('@/views/home/HomeView.vue') },
    {
      path: '/news/:slug',
      name: 'public-artikel-detail',
      component: () => import('@/views/public/DetailArtikelView.vue'),
    },
    {
      path: '/category/:slug',
      name: 'public-category',
      component: () => import('@/views/public/CategoryView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/detail_service/DetailService.vue'),
    },
    {
      path: '/privacy&policy',
      name: 'privacy&policy',
      component: () => import('@/views/public/PrivacyAndPolicyView.vue'),

    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: () => import('@/views/public/TermAndConditionView.vue'),
    },
    // Auth
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue'),
          meta: { title: 'Login' },
        },
      ],
    },
    // Admin
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
          meta: { title: 'Dashboard' },
        },
        {
          path: 'artikels',
          name: 'admin-artikels',
          component: () => import('@/views/admin/artikel/Index.vue'),
          meta: { title: 'Daftar Artikel', requiresAuth: true },
        },
        {
          path: 'artikels/create',
          name: 'create-artikel',
          component: () => import('@/views/admin/artikel/CreateArtikelView.vue'),
          meta: { title: 'Buat Artikel Baru', requiresAuth: true },
        },
        {
          path: 'artikels/edit/:id',
          name: 'edit-artikel',
          component: () => import('@/views/admin/artikel/EditArtikelView.vue'),
          meta: { title: 'Update Artikel', requiresAuth: true },
        },
        {
          path: 'categories',
          name: 'admin-categories',
          component: () => import('@/views/admin/CategoryView.vue'),
          meta: { title: 'Daftar Kategori', requiresAuth: true },
        },
        {
          path: 'portfolios', // bisa diakses di /admin/portfolios
          name: 'admin-portfolio',
          component: () => import('@/views/admin/portfolio/Index.vue'),
        },
      ],
    },

    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('@/views/error/MaintenanceView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/error/NotFoundView.vue'),
      meta: { title: 'Not Found' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

function isTokenValid(): boolean {
  const token = localStorage.getItem('token')
  if (!token) return false

  // Try to decode JWT and verify `exp` claim. If token is not JWT, assume valid.
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return true
    const payload = JSON.parse(atob(parts[1]!))
    if (!payload.exp) return true
    // exp is in seconds
    return payload.exp * 1000 > Date.now()
  } catch (err) {
    return true
  }
}

router.beforeEach((to, from, next) => {
  const isAuthenticated = isTokenValid()
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (isMaintenanceMode && to.name !== 'maintenance') {
    next({ name: 'maintenance' })
    return
  }

  if (requiresAuth && !isAuthenticated) {
    // Ensure token removed to avoid stale state
    localStorage.removeItem('token')
    next({ name: 'login' })
    return
  }

  if (to.name === 'login' && isAuthenticated) {
    next({ name: 'admin-dashboard' })
    return
  }

  next()
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}` : 'Concern.dev'
  AOS.refresh()
})

export default router
