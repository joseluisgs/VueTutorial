// Vues nos proporciona un mecanismo para poder tener datos compartidos
// entre distintos componentes fijando un protocolod e acceso y actualizacón de los mismos
// https://vuex.vuejs.org/
import Vue from 'vue';
import Vuex from 'vuex';

// Se lo indicamos a la instancia principal.
// Vamos a simularlo con state.js para no meternos de lleno enVuex, pero si conocer el por qué
Vue.use(Vuex);

export default new Vuex.Store({
  // Estado son las variables o datos a compartir
  state: {
  },
  // Metodos que cambian estas mutaciones
  mutations: {
  },
  // Acciones, confirman cambios. commit
  actions: {
  },
  // por si queremos tener un arbol de stados o tenerlos estructurdos en módulos
  modules: {
  },
});
