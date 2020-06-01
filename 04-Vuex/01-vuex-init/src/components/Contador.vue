<template>
    <div>
      <h1>Contador: {{ cantidad }}</h1>
      <button @click="aumentar">Aumentar</button>
      <button @click="reducir">Reducir</button>
    </div>
</template>
<script>
export default {
  name: 'Contador',
  // props: ['cantidad'], Ya no la necesitamos
  methods: {
    aumentar() {
      // this.$emit('aumentar');
      // Usar estado de datos de Vuex directamente
      this.$store.state.cantidad += 1;
    },
    reducir() {
      // this.$emit('reducir');
      this.$store.state.cantidad -= 1;
    },
  },
  computed: {
    cantidad() {
      return this.$store.state.cantidad;
    },
  },
};
</script>
