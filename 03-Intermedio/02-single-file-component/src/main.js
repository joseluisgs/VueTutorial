import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Mi instancial principal, coge la clase App y la renderizo en la etiqeta #app de mi index
// https://es.vuejs.org/v2/guide/render-function.html
new Vue({
  render: (h) => h(App),
}).$mount('#app');
