import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/styles.css'
import './assets/css/sb-admin-2.min.css'
import './assets/css/styles_about.css'
import './assets/css/styles_contact.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, faFacebook, faTwitter, faGithub, faYoutube, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
