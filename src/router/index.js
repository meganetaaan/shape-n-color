import Vue from 'vue'
import Router from 'vue-router'
import Pannel from '@/components/Pannel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pannel',
      component: Pannel
    }
  ]
})
