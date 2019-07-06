import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/AntDesignVue',
          name: 'AntDesignVue',
          component: () => import('@/views/AntDesignVue.vue')
        },
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: () => import('@/views/HelloWorld.vue')
        }
      ]
    }
  ]
})
