import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Todo lo que defina aquí es global y lo podría usar en toda la APP sin hacer los import, es decir
// si yo hago esto, UnCoponente sería global y podría usarlo sin hacer import y añadir componente en cada caomponente de la app
// import UnComponente from '@/components/Persona.vue';
// Vue.component('UnComponente', UnComponente);
// https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components

// Mi instancial principal, coge la clase App y la renderizo en la etiqeta #app de mi index
// https://es.vuejs.org/v2/guide/render-function.html
new Vue({
  render: (h) => h(App),
}).$mount('#app');
