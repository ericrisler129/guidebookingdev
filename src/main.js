import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import filter from './utils/filters'
import './plugins/base'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import './style.scss'

Vue.config.productionTip = false

Vue.use(filter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
