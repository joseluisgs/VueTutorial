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
  // Getters, obtenemos elementos del estado. Podemos obtener elemento computados del estado.
  // Se realiza en único lugar:
  // https://vuex.vuejs.org/guide/getters.html
  getters: {
    tareasCompletadas: (state) => state.tareas.filter((tarea) => tarea.completado).length,
  },
  // Funciones que cambian el estado, encapsulan como acceder al estado y de qué manera
  // https://vuex.vuejs.org/guide/mutations.html
  // Pueden ser los setters de nuestro modelo :)
  mutations: {
    aumentar: (state, cantidad) => {
      state.cantidad += cantidad;
    },
    reducir: (state, cantidad) => {
      state.cantidad -= cantidad;
    },
  },
  // funciones que confirman los cambios del estado deben ser asíncronos
  // Para las acciones asíncronas debemos usar actions. Le hacen un commit a las mutaciones
  // no se comunican directamente con el estado, sino que conectan con las mutations
  // https://vuex.vuejs.org/guide/actions.html
  // Pongo dos sintaxis diferentes, pero lo importante es el commit
  actions: {
    aumentarAsync: (context, cantidad) => {
      setTimeout(() => context.commit('aumentar', cantidad), 2000);
    },
    reducirAsync: ({ commit }, { cantidad }) => {
      setTimeout(() => commit('reducir', cantidad), 2000);
    },
  },
  // Agrupar e estado en cosas
  modules: {
  },
});
