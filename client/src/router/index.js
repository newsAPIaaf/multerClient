import Vue from 'vue'
import Router from 'vue-router'
import Landingpage from '@/components/Landingpage'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landingpage',
      component: Landingpage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
