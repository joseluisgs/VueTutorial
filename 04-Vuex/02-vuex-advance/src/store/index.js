import Vue from 'vue';
import Vuex from 'vuex';
// Modulos
import productos from './modules/productos';

Vue.use(Vuex);

export default new Vuex.Store({
  // Estado o variables compartidas
  // En vez de tener carro de la compra y productos, los productos van a un módulo y los añadimos.
  state: {
    carro: [],
  },
  // Campos calculados sobre elementos del estado: getters
  getters: {
    totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
  },
  // Mutaciones o cambios de estado síncronos: setters
  mutations: {
    comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
  },
  // acciones asíncronas del estado
  actions: {
  },
  // Nos permite subdividir el estado, o tener subestados para mejorar los edición.
  // https://vuex.vuejs.org/guide/modules.html
  modules: {
    productos,
  },
});
