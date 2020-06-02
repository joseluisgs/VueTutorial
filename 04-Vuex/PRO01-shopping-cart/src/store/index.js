import Vue from 'vue';
import Vuex from 'vuex';
// Nustra API
import shop from '../api/shop';
// Módulos de nuestro estado
import cart from './cart';
import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  // Modo estricto, no permite que accidentalmente modofiquemos el estado
  // fuera de las motaciones
  strict: true,

  // Variables compartidas, el estado. Es decir las cosas que compartimos
  state: {
    checkoutError: false, // si hay errores
  },

  // El único capaz de modificar (mutar) el estado son las mutaciones.
  // El primer parámetro siempre es el estado
  mutations: {
    // si hay errores
    setCheckoutError(state, error) {
      state.checkoutError = error;
    },
  },

  // En cuanto a las acciones, también son funciones pero a diferencia de las mutaciones
  // pueden ser asíncronas, por lo que se utilizan para comunicarse con servicios externos
  // y luego lanzar mutaciones para actualizar el estado
  // (recuerda, sólo ellas pueden mutar el estado).
  actions: {
    // Acción que realiza el checkout, simulandolo con la api
    checkout({ commit, state }) {
      // Acepta ua función de exito y otra de error, mira la api
      // Ahora accedemos de nuestro estado al modulo cart y leemos su estado cart
      shop.buyProducts(state.cart.cart,
        () => {
          // Vaciar el carrito
          commit('emptyCart');
          // Establecer que no hay errores
          commit('setCheckoutError', false);
        },
        () => {
          // Establerce que hay errores
          commit('setCheckoutError', true);
        });
    },
  },

  // Los Getters nos permiten realizar operaciones sobre campos del estado
  // Y devilover sus resultados, sería (son) com computed del estado
  getters: {

  },
  // Nos creamos módulos para modularizar en sub estados con sus elementos
  // cada uno tiene su propio estado y mutaciones
  // https://vuex.vuejs.org/guide/modules.html
  // Para Nuxt lo que debemos es hacer los ficheros de módulos directamente
  // https://nuxtjs.org/guide/vuex-store/
  modules: {
    cart,
    products,
  },
});
