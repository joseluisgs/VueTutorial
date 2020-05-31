<template>
    <div>
        <h3>
            {{ titulo }}
            <button @click="mostrarDetalles(titulo)">Eliminar</button>
        </h3>
    </div>
</template>

<script>
// Primera solución, importamos Bus
// import EventBus from '../EventBus';
import state from '../state';

export default {
  name: 'Tarea',
  props: ['titulo'],
  methods: {
    // Acción
    mostrarDetalles(titulo) {
      // EventBus.$emit('detalles', titulo); // Emitimos el evento personalizado con estos datos.
      state.guardarTarea(titulo); // Mutamos su estado
    },
  },
};
</script>

<style scoped>
    h3 {
        color: grey;
    }

    button {
        background-color: grey;
        color: white;
    }
</style>
