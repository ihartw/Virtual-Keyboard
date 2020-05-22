import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import Vue2TouchEvents from 'vue2-touch-events'
import router from './router'
import store from './store'

Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 0,
  touchHoldTolerance: 0,
  swipeTolerance: 30,
  longTapTimeInterval: 0
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
