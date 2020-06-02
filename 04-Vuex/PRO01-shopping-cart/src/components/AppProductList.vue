<template>
  <div>
    <h2>Listado de productos</h2>
    <hr />
    <ul>
      <!-- Recorremos la lista de productos -->
      <!-- Le indicamos la clase con claes dinámicas
      De esta manera, activa esta clase si se da la condicon del getter -->
      <li
        :class="{ 'sold-out': $store.getters.nearlySoldOut(product.id) }"
        v-for="product in products"
        :key="product.id"
        @click="selectProduct(product)"
      >
        {{ product.title }} | {{ product.price }} €
        <i>{{ product.inventory }} uds.</i>
        <button @click="addToCart(product)">Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// Nuestra API

export default {
  name: 'AppProductList',
  // Al crearnos
  async created() {
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
    await this.getProducts();
  },
  computed: {
    // Obtenemos los productos del estado.
    products() {
      // return this.$store.state.products;
      // Escuchamos los getters.
      return this.$store.getters.productsOnStock;
    },
  },
  methods: {
    // Obtiene todos los productos. Se puede meter este código en created
    async getProducts() {
      // Usando una acción
      try {
        // Usamos dispach para lanzar la accion (despacha esta acción)
        await this.$store.dispatch('getProducts');
      } catch (error) {
        console.error(error);
      }
    },
    // Añadimos un producto al carro. Es una acción porque encapsula
    // varios métodos si fuera uno podría ser una mutación
    addToCart(product) {
      this.$store.dispatch('addProductToCart', product);
    },
    // Vamos a crerar una mutación que almacene el producto a editar
    selectProduct(product) {
      this.$store.commit('setSelectedProduct', product);
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}

.sold-out {
  background-color: lightpink;
  border: 3px solid tomato;
  padding: 0.3rem;
  margin: 0.1rem;
}

</style>
