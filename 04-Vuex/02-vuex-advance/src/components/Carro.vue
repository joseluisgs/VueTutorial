<template>
    <section>
        <h2>Carro de la compra</h2>
        <!--  Ponemos el total con dos decimales -->
        <h3>Total compra: {{ totalCompra.toFixed(2) }} € </h3>
        <ul>
            <!-- Por cada producto que hay en el carro -->
            <li v-for="(producto, indice) in carro" :key="indice">
                {{ producto.nombre }}
                <!-- Llamamos a eliminar implementado en la mutacion -->
                <button @click="eliminarProducto(indice)">X</button>
            </li>
        </ul>
    </section>
</template>
<script>
// Nos traemos el estado, los getter y las acciones
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  // Con el operador spread se los incorpramos a nuestros metodos y campos computados
  computed: {
    ...mapState(['carro']), // Nos traemos del estado el carro
    ...mapGetters(['totalCompra']), // Nos taremos el total de la compra
  },
  methods: mapMutations(['eliminarProducto']), // nos traemos del estado eliminar producto
};
</script>
