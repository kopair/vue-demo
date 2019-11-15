import Vue from 'vue'
import Router from 'vue-router'
import paste from '@/components/paste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'paste',
      component: paste
    }
  ]
})
