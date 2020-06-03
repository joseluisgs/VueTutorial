import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router, // Le indicamos que queremos router
  render: (h) => h(App),
}).$mount('#app');
