import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import infoWindow from './components/infoWindow';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: infoWindow
    },
  ]
})
