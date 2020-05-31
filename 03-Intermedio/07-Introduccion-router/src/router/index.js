import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// Información de Vue Router
// https://router.vuejs.org/
Vue.use(VueRouter);

const routes = [
  {
    // Ruta principal
    path: '/', // Es la ruta
    name: 'home', // Es el nombre que le voy a dar
    component: Home, // Componente que me renderizo
  },
  // Ruta de post y como nos anunciamos
  {
    path: '/posts',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue'), // de esta manera cargamo de manera asíncrona
  },
];

const router = new VueRouter({
  routes,
});

export default router;
