import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import LoginAdmin from './views/LoginAdmin.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/login-admin',
      component: LoginAdmin
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue'),
      children: [
        {
          path: '/Profile',
          name: 'profile',
          // lazy-loaded
          component: () => import('./views/Profile.vue')
        },
      ]
    },
    // {
    //   path: '/Profile',
    //   name: 'profile',
    //   // lazy-loaded
    //   component: () => import('./views/Profile.vue')
    // },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        // lazy-loaded
        component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
