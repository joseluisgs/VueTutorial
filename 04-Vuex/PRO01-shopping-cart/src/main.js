import Vue from 'vue';
import App from './App.vue';
// Iniciamos store de Vuex
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store, // Store
  render: (h) => h(App),
}).$mount('#app');
