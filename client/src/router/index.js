import Vue from 'vue'
import Router from 'vue-router'
import Landingpage from '@/components/Landingpage'
import Signup from '@/components/Signup'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landingpage',
      component: Landingpage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
