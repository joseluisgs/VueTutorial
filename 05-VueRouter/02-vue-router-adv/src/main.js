import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Definimos protecciónd de rutas globales
// to a donde
// from desde donde
// next debe resolver verdadero o falso indicar otro path para dcir
// entra o no
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {
  console.log('Acceso a ruta');
  // next(store.state.auth); // Si es verdadedo o falso
  // next(); // vamos a delegar a cada ruta
  // tambien podemos pasar según metadatos de la ruta
  // es muy elegante
  if (to.meta.privado) {
    next(store.state.auth);
  } else {
    next();
  }
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
