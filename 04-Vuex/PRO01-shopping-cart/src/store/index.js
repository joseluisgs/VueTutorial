import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // Variables compartidas, el estado. Es decir las cosas que compartimos
  state: {
    products: [
      {
        id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2,
      },
      {
        id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10,
      },
      {
        id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5,
      },
    ],
  },
  // El único capaz de modificar (mutar) el estado son las mutaciones.
  // El primer parámetro siempre es el estado
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {},
  modules: {},
});
