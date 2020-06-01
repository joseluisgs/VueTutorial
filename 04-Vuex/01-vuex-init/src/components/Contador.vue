<template>
    <div>
      <h1>Contador: {{ cantidad }}</h1>
      <button @click="aumentar(1)">Aumentar</button>
      <button @click="reducir(1)">Reducir</button>
      <button @click="aumentarAsync(12)">Aumentar Async</button>
      <button @click="reducirAsync({cantidad: 15})">Reducir Async</button>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Contador',
  // props: ['cantidad'], Ya no la necesitamos
  methods: { ...mapMutations(['aumentar', 'reducir']), ...mapActions(['aumentarAsync', 'reducirAsync']) },
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
