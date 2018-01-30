import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import HomeScreen from './components/screens/HomeScreen'
import ServiceScreen from './components/screens/ServiceScreen'

import * as firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeScreen }, 
  { path: '/services/:service', component: ServiceScreen, props: true }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active'
})

const config = {
  apiKey: "AIzaSyD8x4iyDGmSPb4E5iC3yHh_8rFiHjOSBrM",
    authDomain: "taec-193a4.firebaseapp.com",
    databaseURL: "https://taec-193a4.firebaseio.com",
    projectId: "taec-193a4",
    storageBucket: "",
    messagingSenderId: "277866774845"
};
firebase.initializeApp(config);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
