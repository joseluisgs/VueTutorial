<template>
    <div>
        <h1>Los detalles:</h1>
       <!--  Bus <p>{{ detalles }}</p> -->
       <p>{{ detalles.tituloTarea }}</p>
    </div>
</template>

<script>
// import EventBus from '../EventBus';
import state from '../state';

export default {
  name: 'TereaDetalles',
  created() {
    // Obtenemos los datos compartidos
    // Primera opción con un bus
    // EventBus.$on('detalles', (detalles) => {
    //   this.detalles = detalles;
    // });
    this.detalles = state.state; // Del estado cogemos el título de la tarea
  },
  data() {
    return {
      detalles: '',
    };
  },
};
</script>

<style scoped>
    div {
        position: fixed;
        width: 500px;
        height: 200px;
        top: 0;
        left: 0;
        padding: 20px;
        background: rgba(255, 255, 255, .7);
        border: 1px solid black;
    }
</style>
