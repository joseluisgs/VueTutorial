<template>
    <div>
        <p>Esto es un Post con id: {{ this.$route.params.id }}</p>
    </div>
</template>

<script>
export default {
  mounted() {
    // Imprimo la ruta actual, que como podemos ver esta en $route
    console.log(this.$route);
  },
};
</script>
