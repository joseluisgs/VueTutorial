import Vue from 'vue';
import App from '@/App.vue';

Vue.config.productionTip = false;

// Creo la instancia principal y le digo que me renderizo y que me monto en la etiqueta #app del index
// De hecho el componente inicial a renderizar es el llamado App
new Vue({
  render: (h) => h(App),
}).$mount('#app');
