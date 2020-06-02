import Vue from 'vue';
import Vuex from 'vuex';
// Nustra API
import api from '../api/shop';

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
  // En cuanto a las acciones, también son funciones pero a diferencia de las mutaciones
  // pueden ser asíncronas, por lo que se utilizan para comunicarse con servicios externos
  // y luego lanzar mutaciones para actualizar el estado
  // (recuerda, sólo ellas pueden mutar el estado).
  actions: {
    // Simulamos que cogemos los productos
    // De lo que me interesa es hacer un commit porque vamos a actualizar
    // nuestro estado, si no podríamos usar otros parámetros
    getProducts({ commit }) {
      return new Promise((resolve) => {
        api.getProducts((products) => {
          // Hacemos el commit llamando a la mutacion que actualiza el estado
          commit('setProducts', products);
          resolve();
        });
      });
    },
  },
  // Los Getters nos permiten realizar operaciones sobre campos del estado
  // Y devilover sus resultados, sería (son) com computed del estado
  getters: {
    // Devuleve aquellos que tiene una unidad de inventario mayor que 0
    productsOnStock(state) {
      return state.products.filter((product) => product.inventory > 0);
    },
  },
  modules: {},
});
