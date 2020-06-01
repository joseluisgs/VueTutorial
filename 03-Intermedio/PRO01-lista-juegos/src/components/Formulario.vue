<template>
  <div>
   <!--  Campos de enttrada -->
    <form>
      <p>Nombre Juego: <input type="text" required v-model="juegoTitulo" /></p>
      <p>Portada (url): <input type="text" required v-model="juegoPortada" /></p>
      <p><button @click="nuevoJuego">Añadir</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  // Mi modelo de datos
  data() {
    return {
      juegoTitulo: '',
      juegoPortada: '',
    };
  },
  // Mis métodos
  methods: {
    nuevoJuego() {
      // Filtramos los datos, pero ya tenemos puestos required, podríamos hacer otro filtro aquí
      if (this.juegoTitulo && this.juegoPortada) {
        const juego = {
          titulo: this.juegoTitulo,
          portada: this.juegoPortada,
        };
        // Lanzamos el evento al padre
        this.$emit('juegoNuevo', juego);
        // Datos en blanco
        this.juegoTitulo = '';
        this.juegoPortada = '';
      }
    },
  },
};
</script>

<style>

</style>
