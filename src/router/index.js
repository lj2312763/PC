import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      title: '法币交易',
      component: () => import('@/views/fabi')
    }
  ]
})

