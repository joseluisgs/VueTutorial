<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  name: 'Encabezado',
  props: {
    titulo: {
      type: [String, Array], // null = * // Tipo de dato que espero
      required: true, // Es requierido, es decir si no lo tenemos error
      default: 'Lista de cosas', // Valor por defecto si no lo recibimos (buscalo cuando lo renderice)
    },
  },
};
</script>

<style>

</style>
