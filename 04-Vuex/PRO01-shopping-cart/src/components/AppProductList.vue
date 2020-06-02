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

export default {
  name: 'AppProductList',
  // Al crearnos
  created() {
    // // Obtenemos los productos desde fuera y se los asignamos al estado
    // // Como los productos deberían crearse al princpio y para todos,
    // // por eso recogerlas aquí noes válido, debería hacerlo una acción
    // api.getProducts((products) => {
    //   // this.products = products; No hay un modelo local
    //   // Si no importamos las mutaciones con mapMutations
    //   // Lo hacemos accediendo al store y haciendo un commit
    // (los cuales tambéns e pueden deshacer)
    // Confirmamos las accion el cambio en el estado (por eso commit)
    //   this.$store.commit('setProducts', products);
    // });
    this.getProducts();
  },
  computed: {
    // Obtenemos los productos del estado.
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    async getProducts() {
      // Usando una acción
      try {
        // Usamos dispach para lanzar la accion (despacha esta acción)
        await this.$store.dispatch('getProducts');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
