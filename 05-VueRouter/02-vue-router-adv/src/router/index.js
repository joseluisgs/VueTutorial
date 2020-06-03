import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Equipo from '../components/Equipo.vue';
import Usuario from '../components/Usuario.vue';
import UsuarioFotos from '../components/UsuarioFotos.vue';
import UsuarioBio from '../components/UsuarioBio.vue';
import Contacto from '../components/Contacto.vue';
import NoEncontrado from '../components/NoEncontrado.vue';
import Info from '../components/Info.vue';
import Bio from '../components/Bio.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/prueba',
    alias: '/otraprueba',
    redirect: { name: 'home' },
    component: Home,
  },
  {
    path: '/equipo/:id',
    component: Equipo,
    children: [
      {
        path: '',
        components: {
          default: Usuario,
          bio: UsuarioBio,
          fotos: UsuarioFotos,
        },
        name: 'equipo',
      },
    ],
  },
  {
    // De esta manera protegemos solo una ruta
    // https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
    beforeEnter: ((to, from, next) => {
      console.log('Acceso a ruta contacto');
      next(store.state.auth);
    }),
    path: '/contacto',
    component: Contacto,
    name: 'contacto',
    // Metadatos https://router.vuejs.org/guide/advanced/meta.html
    meta: { privado: true },
    props: { newsletter: false },
  },
  {
    path: '/info',
    component: Info,
  },
  {
    path: '/bio',
    component: Bio,
  },
  {
    path: '*',
    component: NoEncontrado,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // Control de scroll
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(to) {
    const position = {};
    console.log(to);
    // Nos desplazamos hasta el hash de la dirección de destino (esto sí es interesante)
    if (to.hash) {
      position.selector = to.hash;
    } else {
      position.x = 200;
      position.y = 100;
    }
    return position;
  },
});

export default router;
