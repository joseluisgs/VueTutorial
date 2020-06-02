// Estado de carrito
export default {
  state: {
    cart: [], // Modelo de carrito
  },
  mutations: {
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

    // vacía el carrito
    emptyCart(state) {
      state.cart = [];
    },

    // Quita un producto del carrito
    removeProductFromCart(state, index) {
      state.cart.splice(index, 1); // el iídice y me llevo 1
    },

  },
  actions: {
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
  },
  getters: {
    // Devuleve los productos del carrito, pues en el carito solo esta su id
    // Como vamos a acceder a su estado principal debemos pasarle le getters y el rootstate
    productsOnCart(state, getters, rootState) {
      // Creamos un array mapeando los objetos...
      return state.cart.map((item) => {
        // Lo único que sabemos es que la id del producto coincide con la del producto
        // Ahora debemos ver que en nuestra state no existe productos, si no queremos
        // El estate de productos que tiene nuestro padre, por eso los argumentos de la función
        // const product = state.products.find((p) => p.id === item.id);
        const product = rootState.products.products.find((p) => p.id === item.id);
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
  },
};
