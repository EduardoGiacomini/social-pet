import Vue from 'vue'
import App from './App.vue'
import router from './globals/router'
import store from './commons/store'
import './registerServiceWorker'
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
