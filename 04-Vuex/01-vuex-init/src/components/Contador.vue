<template>
    <div>
      <h1>Contador: {{ cantidad }}</h1>
      <button @click="aumentar">Aumentar</button>
      <button @click="reducir">Reducir</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Contador',
  // props: ['cantidad'], Ya no la necesitamos
  methods: mapMutations(['aumentar', 'reducir']),
  // methods: {
  //   aumentar() {
  //     // this.$emit('aumentar');
  //     // Usar estado de datos de Vuex directamente
  //     // this.$store.state.cantidad += 1;
  //     // Con mutaciones
  //     this.$store.commit('aumentar');
  //   },
  //   reducir() {
  //     // this.$emit('reducir');
  //     // this.$store.state.cantidad -= 1;
  //     // Con mutaciones
  //     this.$store.commit('reducir');
  //   },
  // },
  computed: mapState(['cantidad']),
  /* computed: {
    cantidad() {
      return this.$store.state.cantidad;
    },
  }, */
};
</script>
