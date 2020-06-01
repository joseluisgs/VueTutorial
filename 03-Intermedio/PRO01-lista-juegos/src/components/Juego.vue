<template>
<tr>
  <td>{{ juego.titulo }}</td>
  <td><img :src="juego.portada" height="100"></td>
  <!-- Cuando pulse eliminar juego, emito el evento, -->
  <td><button @click="eliminarJuego">Eliminar</button></td>
</tr>
</template>

<script>
export default {
  name: 'Juego',
  props: ['juego'],
  methods: {
    // Levantamos el evento a mi padre
    eliminarJuego() {
      this.$emit('eliminar'); // Emitimos el evento
    },
  },
};
</script>

<style>

</style>
