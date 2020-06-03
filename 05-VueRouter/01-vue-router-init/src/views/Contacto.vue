<template>
  <div>
    <h2>Contacto</h2>
    <button @click="volverHome()">Volver a home</button>
  </div>
</template>

<script>
export default {
  created() {
    // A los dos segundos volvemos
    // Navegación programatica
    // https://router.vuejs.org/guide/essentials/navigation.html
    setTimeout(() => this.$router.push('/'), 2000);
  },
  methods: {
    // Cuando pulsamos
    volverHome() {
      this.$router.push('/', () => console.log('Ruta cambiada')); // Home
    },
  },
};
</script>
