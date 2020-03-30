import router from './router'
import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import store from './store'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login' || to.path === '/404') {
      // if is logged in, redirect to the home page
      next() // { path: '/login' }
      NProgress.done()
    } else {
      if (store.state.phone || store.state.email) {
        next()
      } else {
        store.dispatch('getInfo').then((res) => {
          next()
          NProgress.done()
        }).catch(() => {
          store.dispatch('resetToken')
          NProgress.done()
        })
      }
    }
  } else {
    /* has no token*/
    console.log(to.path)
    if ( window.GLOBAL.whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/login?redirect=${to.path}`)
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
