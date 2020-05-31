import Vue from 'vue';
import VueRouter from 'vue-router'; // Lo importamos
// Impostamos los componentes
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Post from '../components/Post.vue';

// Información de Vue Router
// https://router.vuejs.org/
Vue.use(VueRouter); // Lo decimos a vue que luse vue router

// Definimos nuestro ruter
const router = new VueRouter({

  // Activamos el modo history, para no ver el #
  // Esto provoca que tengamos que configurar el servidor
  // Para que sea compatibpñe, debes configurarlo desde del comienzo
  // mode: 'hstory',

  // Nuestra lista de Rutas
  routes: [
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
      // Carga asíncrona
      // component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue'),
      // de esta manera cargamo de manera asíncrona
      component: Posts,
    },
    // Definimos rutas dinámicas, donde id es el parámetro
    {
      path: '/posts/:id', // La ruta y e parámetro
      name: 'post', // el alias de la ruta
      component: Post, // Componente a carga
      // Requerimos que estamos autenticados.
      meta: { // Añadimos metadatos a la ruta
        auth: true, // Exigimos que esté autenticado
      },
    },
    // La última, redireccionamos a donde queramos o podemos poner un 404
    // si no es ninguna de las opciones anteriores.
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// Vamos a crear guards que es como un middleware
// para que analice la rutas y nos digan si podemos no procesarlas
// o con que condiciones
// https://router.vuejs.org/guide/advanced/navigation-guards.html
// antes de procesar
// to a donde vas
// from de donde vienes
// next es la función que resuleve
// Vamos a simular que estamos autenticados
const authUser = false;
// antes de acceder
router.beforeEach((to, from, next) => {
  // si no estamos autenticados mando a raiz
  if (to.meta.auth && !authUser) next('/');
  else next();
});

export default router;
