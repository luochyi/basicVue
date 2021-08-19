import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as utils from './utils/index'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(utils)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
