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
    tareas: [
      { nombre: 'Aprender Vue Routing', completado: false },
      { nombre: 'Organizar lecciones restantes', completado: false },
      { nombre: 'Grabar lecciones mini curso ES6', completado: false },
      { nombre: 'Preparar landing page curso', completado: false },
      { nombre: 'Diseñar acciones de marketing', completado: true },
    ],
  },
  // Getters, podemos obtener elemento computados del estado. Se realiza en único lugar:
  // https://vuex.vuejs.org/guide/getters.html
  getters: {
    tareasCompletadas: (state) => state.tareas.filter((tarea) => tarea.completado).length,
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
