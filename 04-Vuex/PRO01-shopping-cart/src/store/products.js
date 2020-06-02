// Estado de productos
import Vue from 'vue';
import shop from '../api/shop';

export default {
  state: {
    products: [], // Productos disponibles
    selectedProduct: {}, // producto seleccionado
  },
  mutations: {
    // Establece los productos de nuestrp estado
    setProducts(state, products) {
      state.products = products;
    },

    // Establece el producto a editar
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },

    // Editar el producto
    editProduct(state, data) {
      // Buscar el índice del producto
      const index = state.products.findIndex((product) => product.id === state.selectedProduct.id);
      // Componer el producto en base a las propiedades cambiadas
      const product = { ...state.products[index], ...data };
      // Actualizar activando la reactividad
      Vue.set(state.products, index, product);
    },

    // Decrementa en el invetario
    decrementProductInventory(state, product) {
      product.inventory -= 1;
    },

    // Incrementa el inventario
    incrementProductInventory(state, item) {
      const product = state.products.find((p) => p.id === item.id);
      product.inventory += item.quantity;
    },
  },
  actions: {
    // Simulamos que cogemos los productos
    // De lo que me interesa es hacer un commit porque vamos a actualizar
    // nuestro estado, si no podríamos usar otros parámetros
    getProducts({ commit }) {
      return new Promise((resolve) => {
        shop.getProducts((products) => {
          // Hacemos el commit llamando a la mutacion que actualiza el estado
          commit('setProducts', products);
          resolve(); // Resolvemos la promesa de manera satisfactoria
        });
      });
    },
  },
  getters: {
    // Devuleve aquellos que tiene una unidad de inventario mayor que 0
    productsOnStock(state) {
      return state.products.filter((product) => product.inventory > 0);
    },

    // Deveuleve el producto seleccionado
    selectedProduct(state) {
      return state.selectedProduct;
    },

    // Devolvemos si el producto esta cercano a agotarse
    // Podemos pasarle argumentos a los getter si estos actúan como una función
    // pero si hacemos que retornen una función, sí. Son muy útiles para hacer cosultas en tu store
    // https://vuex.vuejs.org/guide/getters.html#method-style-access
    nearlySoldOut(state) {
      return (id) => state.products.find((product) => product.id === id).inventory < 2;
    },
  },
};
