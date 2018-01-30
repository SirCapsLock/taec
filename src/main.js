import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import HomeScreen from './components/screens/HomeScreen'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeScreen }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
