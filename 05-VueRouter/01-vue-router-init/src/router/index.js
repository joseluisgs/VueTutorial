// https://router.vuejs.org/
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contacto from '../views/Contacto.vue';
import Usuario from '../views/Usuario.vue';
import Equipo from '../views/Equipo.vue';
import UsuarioFotos from '../views/UsuarioFotos.vue';
import UsuarioBio from '../views/UsuarioBio.vue';
import Suscripcion from '../views/Suscripcion.vue';
import NoEncontrado from '../views/NoEncontrado.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
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
    name: 'contacto',
    component: Contacto,
  },
  {
    // rutas dinámicas
    // https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
    path: '/usuario/:id', // Este es magic params, es decir, el parámetro que obtenemos.
    name: 'usuario',
    component: Usuario,
  },
  // Rutas anidadas, como un vector dentro de la ruta principal
  // https://router.vuejs.org/guide/essentials/nested-routes.html
  // como nombrar las rutas para acceder a ellas más facilmente
  // https://router.vuejs.org/guide/essentials/named-routes.html
  // es mejor usar su nombres que el pathm si cambia
  {
    path: '/equipo/:id',
    component: Equipo,
    children: [
      {
        // '/equipo/:id'
        path: '',
        // Si usamos rutas
        /* component: Usuario,
        name: 'equipo',
        children: [
          {
            // '/equipo/:id/fotos'
            path: 'fotos',
            component: UsuarioFotos,
            name: 'fotos',
          },
          // '/equipo/:id/bio'
          {
            path: 'bio',
            component: UsuarioBio,
            name: 'bio',
          },
        ], */
        // Nombrando vistas por
        // se rendirzara el componente en los routed view con
        // este nombre
        // https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views
        components: {
          default: Usuario,
          bio: UsuarioBio,
          fotos: UsuarioFotos,
        },
        name: 'equipo',
      },
    ],
  },
  // Rutas y alias
  // https://router.vuejs.org/guide/essentials/redirect-and-alias.html
  {
    path: '/prueba',
    alias: '/otraprueba',
    redirect: { name: 'home' }, // Nombre de la ruta a la que redirecciona
    component: Home,
  },
  // Pasar Propiedads a un componente
  // https://router.vuejs.org/guide/essentials/passing-props.html
  {
    path: '/suscripcion',
    component: Suscripcion,
    name: 'suscripcion',
    props: { newsletter: true },
  },
  // Otro destino que no esté ene path
  // Error 404
  {
    path: '*',
    component: NoEncontrado,
  },
];

const router = new VueRouter({
  // evita que veamos el # en la barra de historial
  // como http://loquesea.ocom/#/
  // debemos configurar correctamente el servidor para que trabaje de este modo
  // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
