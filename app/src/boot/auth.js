const { isAuthenticated } = require('../../../server/src/helpers/auth');

export default async ({ store, router }) => {
  const TOKEN = localStorage.getItem('token')

  if (TOKEN) {
    store.dispatch('auth/setToken', TOKEN)
  }

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated) {
        store.dispatch('auth/logout')
        return next({
          path: '/login',
        })
      }
      return next()
    }

    if (to.matched.some(record => record.meta.requiresNotAuth)) {
      if (isAuthenticated) {
        return next({
          path: '/admin'
        })
      }
      return next()
    }

    return next()
  })
}
