<template>
  <div>
    <h2>Carrito</h2>
    <hr />
    <ul>
      <li v-for="(item, $index) in cartItems" :key="item.id">
        {{ item.title }} ({{ item.quantity }})
        <!-- Eliminamos los productos -->
        <button @click="removeItem($index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppShoppingCart',
  // Métodos
  methods: {
    // Elimina un elemento del carrito
    removeItem(index) {
      // Es una acción porque encapsula
      // varios métodos si fuera uno podría ser una mutación
      this.$store.dispatch('removeProductFromCart', index);
    },
  },
  // Datos computados
  computed: {
    cartItems() {
      // Accedemos al getter
      return this.$store.getters.productsOnCart;
    },
  },
};
</script>


<style scoped>
ul {
  text-align: left;
}
</style>
