import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Definimos protecciónd de rutas globales
// to a donde
// from desde donde
// next es el paso a otra fubnción
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {
  console.log('Acceso a ruta');
  next(store.state.auth);
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
