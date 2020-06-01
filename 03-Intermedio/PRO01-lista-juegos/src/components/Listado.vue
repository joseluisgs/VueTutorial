<template>
  <div>
    <table>
      <tr>
        <td>Nombre de juego</td>
        <td>Portada</td>
        <td>Accion</td>
      </tr>
        <juego
          v-for="(juego, index) in juegos"
          :key="juego.titulo"
          :juego="juego"
          @eliminar="eliminarJuego(index)"> <!-- Nos suscribimos al evento -->
        </juego>
    </table>
  </div>

</template>

<script>
import juego from '@/components/Juego.vue';

export default {
  name: 'Listado',
  props: ['juegos'],
  components: {
    juego,
  },
  methods: {
    eliminarJuego(indice) {
      console.log(indice);
      // Como el modelo lo tiene mi padre debo mandarle el evento a el, aquí vemos
      // Un ejemplo de por qué puede ser util store o bus para pasarse datos
      // y evitar esta cadena de evento.
      this.$emit('eliminarJuego', indice);
    },
  },
};
</script>

<style>
  table, th, td {
    border: 1px solid black;
}
</style>
