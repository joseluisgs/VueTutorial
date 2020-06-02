import Vue from 'vue';
import Vuex from 'vuex';
// Nustra API
import api from '../api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  // Variables compartidas, el estado. Es decir las cosas que compartimos
  state: {
    products: [], // Productos disponibles
    cart: [], // Modelo de carrito
  },
  // El único capaz de modificar (mutar) el estado son las mutaciones.
  // El primer parámetro siempre es el estado
  mutations: {
    // Establece los productos de nuestrp estado
    setProducts(state, products) {
      state.products = products;
    },
    // incrementa en 1 la cantidad
    incrementProductQuantity(state, item) {
      item.quantity += 1;
    },
    // Añade un producto al carrito, pero solo su id y su cantidad
    addProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
      });
    },
    // Decrementa en el invetario
    decrementProductInventory(state, product) {
      product.inventory -= 1;
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
    // Para añadir un prudcto a un carrito.
    // Usamos context porque vamos a acceder al estadi
    addProductToCart(context, product) {
      // ¿Hay inventario de ese producto?
      if (product.inventory === 0) return;
      // ¿Existe ya en el carrito?
      const item = context.state.cart.find((p) => p.id === product.id);
      if (item) {
        // Si es así, añadir uno más a la compra
        context.commit('incrementProductQuantity', item);
      } else {
        // Si no es así, añadir el producto al carrito
        context.commit('addProductToCart', product);
      }
      // Independientemente, restar al inventario de ese producto
      context.commit('decrementProductInventory', product);
    },
  },
  // Los Getters nos permiten realizar operaciones sobre campos del estado
  // Y devilover sus resultados, sería (son) com computed del estado
  getters: {
    // Devuleve aquellos que tiene una unidad de inventario mayor que 0
    productsOnStock(state) {
      return state.products.filter((product) => product.inventory > 0);
    },
    // Devuleve los productos del carrito, pues en el carito solo esta su id
    productsOnCart(state) {
      // Creamos un array mapeando los objetos...
      return state.cart.map((item) => {
        // Lo único que sabemos es que la id del producto coincide con la del producto
        const product = state.products.find((p) => p.id === item.id);
        // opbjeto a deviolver con el map
        return {
          title: product.title,
          price: product.price,
          quantity: item.quantity,
        };
      });
    },
  },
  modules: {},
});
