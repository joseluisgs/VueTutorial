import Vue from 'vue';
import Vuex from 'vuex';
// Nustra API
import shop from '../api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  // Modo estricto, no permite que accidentalmente modofiquemos el estado
  // fuera de las motaciones
  strict: true,

  // Variables compartidas, el estado. Es decir las cosas que compartimos
  state: {
    products: [], // Productos disponibles
    cart: [], // Modelo de carrito
    checkoutError: false, // si hay errores
    selectedProduct: {}, // producto seleccionado
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

    // Quita un producto del carrito
    removeProductFromCart(state, index) {
      state.cart.splice(index, 1); // el iídice y me llevo 1
    },

    // Incrementa el inventario
    incrementProductInventory(state, item) {
      const product = state.products.find((p) => p.id === item.id);
      product.inventory += item.quantity;
    },

    // vacía el carrito
    emptyCart(state) {
      state.cart = [];
    },

    // si hay errores
    setCheckoutError(state, error) {
      state.checkoutError = error;
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
        shop.getProducts((products) => {
          // Hacemos el commit llamando a la mutacion que actualiza el estado
          commit('setProducts', products);
          resolve(); // Resolvemos la promesa de manera satisfactoria
        });
      });
    },

    // Para añadir un prudcto a un carrito.
    // Usamos context porque vamos a acceder al estado
    // es una acción porque
    // Encapsula varios métodos báiscos que mutan nuestro modelo
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

    // Elimina los elementos de un carrito. es una acción porque
    // Encapsula varios métodos báiscos que mutan nuestro modelo
    removeProductFromCart(context, index) {
      const item = context.state.cart[index];
      // Eliminar el producto del carrito
      context.commit('removeProductFromCart', index);
      // Restaurar el inventario
      context.commit('incrementProductInventory', item);
    },

    // Acción que realiza el checkout, simulandolo con la api
    checkout({ commit, state }) {
      // Acepta ua función de exito y otra de error, mira la api
      shop.buyProducts(state.cart,
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

    // Devuleve el total del carrito
    cartTotal(state, getters) {
      // De los productos del carrito
      // Reduce te permite hacer una oprración sobre cada elemento
      // El valor inicial de total es 0
      return getters.productsOnCart
        .reduce((total, current) => (total + current.price * current.quantity), 0);
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
  modules: {},
});
