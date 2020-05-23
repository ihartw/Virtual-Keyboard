import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import Vue2TouchEvents from 'vue2-touch-events'
import 'animate.css'
import router from './router'
import store from './store'

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: function() {
    document.getElementById('preloader').style.display = "none";
  },
  mounted: function() {
    M.AutoInit();
  },
  render: h => h(App)
}).$mount('#app')
