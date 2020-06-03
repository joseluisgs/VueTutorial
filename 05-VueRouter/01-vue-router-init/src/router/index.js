// https://router.vuejs.org/
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contacto from '../views/Contacto.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // carga asíncrona
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
];

const router = new VueRouter({
  // evita que veamos el # en la barra de historial
  // como http://loquesea.ocom/#/
  // debemos configurar correctamente el servidor para que trabaje de este modo
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
