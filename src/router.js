import Vue from 'vue';
import Router from 'vue-router';
import Characters from './views/Characters.vue';
import New from './views/New.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/characters', name: 'characters', component: Characters},
    { path: '/new', name: 'new', component: New},

  ]
})
