import Vue from 'vue';
import Router from 'vue-router';
import Characters from './views/Characters.vue';
import New from './views/New.vue';
import Login from './views/Login.vue';
import Logout from "./views/Logout.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/characters', name: 'characters', component: Characters},
    { path: '/new', name: 'new', component: New },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/profile/:id", name: "profile", component: Profile }
  ]
})
