import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import math from 'mathjs'
import Draggable from 'vuedraggable'
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$math = math
Vue.use(Antd)
Vue.use(ElementUI)
Vue.component('Draggable', Draggable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
