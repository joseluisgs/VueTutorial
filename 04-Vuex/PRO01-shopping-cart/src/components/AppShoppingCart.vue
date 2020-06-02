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
    <!--  Solos e verá si hay items en el carro -->
    <button v-if="cartItems.length" @click="checkout">Checkout</button>
    <hr />
    <h4>Total {{ cartTotal || 0 }}</h4>
    <!-- Mostramos los errores -->
    <div v-if="$store.state.checkoutError">
      <p>Error procesando los productos...</p>
    </div>
  </div>
</template>

<script>
import { currency } from '@/utils/currency';

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

    // Checkout, disparamos la acción
    checkout() {
      this.$store.dispatch('checkout');
    },
  },

  // Datos computados
  computed: {
    // Obtiene el listado del carrito
    cartItems() {
      // Accedemos al getter
      return this.$store.getters.productsOnCart;
    },

    // Obtiene el total del carrito
    cartTotal() {
      // Accedemos a su getter
      return currency(this.$store.getters.cartTotal, ' €');
    },
  },
};
</script>


<style scoped>
ul {
  text-align: left;
}
</style>
