<template>
    <h2>Tu id es: {{ id }}</h2>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id, // Parámetro que obtengo de la ruta
    };
  },
  // Aplicamos reactividad en la ruta para ver el estado de los componentes
  // lo antes posible
  // lgo a tener en cuenta al utilizar rutas dinámicas es que Vue, por defecto,
  // no recargar el componente base a pesar de cambiar el segmento dinámico capturado.
  // Siendo conscientes y utilizando un simple watcher podemos solucionar el problema.
  // https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },
};
</script>
