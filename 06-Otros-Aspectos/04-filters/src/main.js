import Vue from 'vue'
import App from './App.vue'

// https://vuejs.org/v2/api/#filters
// Nos permite aplicar filtros sobre unos campos, se han sustitudio poco a poco por campos calculados
// Se pueden ir concatenando
// Esto es un filtro global
Vue.filter('mayusculas', function(valor){
    return valor.toUpperCase();
});

new Vue({
    el: '#app',
    render: h => h(App)
});
