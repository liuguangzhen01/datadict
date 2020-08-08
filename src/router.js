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
        // antDesignVue目录下的页面
        {
          path: '/AntDesignVue',
          name: 'AntDesignVue',
          component: () => import('@/views/antDesignVue/AntDesignVue.vue')
        },
        // vueJs目录下的页面
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: () => import('@/views/vueJs/HelloWorld.vue')
        },
        {
          path: '/VueLearning',
          name: 'VueLearning',
          component: () => import('@/views/vueJs/VueLearning.vue')
        },
        {
          path: '/Chapter_4',
          name: 'Chapter_4',
          component: () => import('@/views/vueJs/Chapter_4.vue')
        },
        {
          path: '/Chapter_6',
          name: 'Chapter_6',
          component: () => import('@/views/vueJs/Chapter_6.vue')
        },
        {
          path: '/VueDraggable',
          name: 'VueDraggable',
          component: () => import('@/views/vueJs/VueDraggable.vue')
        }
      ]
    }
  ]
})
