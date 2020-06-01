// https://vuex.vuejs.org/
import Vue from 'vue';
import Vuex from 'vuex';

// Le decimos a Vue que use Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  // Estado es el conjunto de información compartida
  // https://vuex.vuejs.org/guide/state.html
  state: {
    cantidad: 0,
    nombre: 'José Luis',
    apellidos: 'González',
    profesion: 'Profesor',
  },
  // Funciones que cambian el estado
  mutations: {
  },
  // funciones que confirman los cambios del estado
  actions: {
  },
  // Agrupar e estado en cosas
  modules: {
  },
});
