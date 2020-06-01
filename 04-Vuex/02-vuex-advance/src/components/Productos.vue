<template>
    <section>
        <h1>Añadir un producto</h1>
        <!-- Formulario que llama al método añadir y evita la recraga  -->
        <form @submit.prevent="anadir">
            <!-- Enlazamos con el modelo -->
            <input type="text" placeholder="Nombre" v-model="nombre" required>
            <input type="number" placeholder="Precio" v-model="precio" required>
            <input type="submit" value="Añadir">
        </form>
        <hr>
        <ul>
           <!--  Por cada producto -->
            <li v-for="(producto, indice) in productos" :key="indice">
                {{ producto.nombre }} - {{ producto.precio.toFixed(2) + ' €' }}
                <!-- Compramos -->
                <button @click="comprarProducto(indice)">+</button>
            </li>
        </ul>
    </section>
</template>
<script>
// Lo usaremos del estado
import { mapState, mapMutations } from 'vuex';

export default {
  // Modelo de datos
  data() {
    return {
      nombre: '',
      precio: 0,
    };
  },
  // Campos calculados, los del estado
  computed: mapState(['productos']),
  // Nuestros métodos y los del vuex
  methods: {
    ...mapMutations(['comprarProducto', 'anadirProducto']), // Compramos el producto
    anadir() {
      this.anadirProducto({
        nombre: this.nombre,
        precio: Number(this.precio),
      });
      // // De otra manera
      // this.$store.commit('anadirProducto', {
      //   nombre: this.nombre,
      //   precio: Number(this.precio),
      // });
      this.nombre = '';
      this.precio = 0;
    },
  },
};
</script>
