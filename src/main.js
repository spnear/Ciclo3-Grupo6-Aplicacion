import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/styles.css'
import './assets/css/sb-admin-2.min.css'
import './assets/css/styles_about.css'
import './assets/css/styles_contact.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
