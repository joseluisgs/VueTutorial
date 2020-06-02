<template>
  <div>
    <h1>Listado de productos</h1>
    <hr />
    <ul>
      <!-- Recorremos la lista de productos -->
      <li v-for="product in products" :key="product.id">
        {{ product.title }} | {{ product.price }} €
        <i>{{ product.inventory }} uds.</i>
      </li>
    </ul>
  </div>
</template>

<script>
// Nuestra API
import api from '../api/shop';

export default {
  name: 'AppProductList',
  // Al crearnos
  created() {
    // Obtenemos los productos desde fuera y se los asignamos al estado
    api.getProducts((products) => {
      // this.products = products; No hay un modelo local
      // Si no importamos las mutaciones con mapMutations
      // Lo hacemos accediendo al store y haciendo un commit (los cuales tambéns e pueden deshacer)
      this.$store.commit('setProducts', products);
    });
  },
  computed: {
    // Obtenemos los productos del estado.
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
