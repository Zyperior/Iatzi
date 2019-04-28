import App from './App.vue'
import store from './store'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  store,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
