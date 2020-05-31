<template>
  <div>
    <h2>Las Tareas por hacer</h2>
    <ul>
      <li v-for="(tarea) in tareasPendientes" :key="tarea.nombre">
        <a href="#" @click="actualizarTarea(tarea.nombre)" v-text="tarea.nombre"></a>
      </li>
    </ul>
    <h2>Tareas finalizadas</h2>
    <li v-for="(tarea) in tareasFinalizadas" :key="tarea.nombre">
      <a href="#" @click="actualizarTarea(tarea.nombre)" v-text="tarea.nombre"></a>
    </li>
  </div>
</template>
<script>
export default {
  name: 'Tareas',
  data() {
    return {
      tareas: [
        { nombre: 'Aprender Vue.js', completado: false },
        { nombre: 'Grabar el módulo de Vuex', completado: false },
        { nombre: 'Responder comentarios (de una vez)', completado: false },
        { nombre: 'Salir a correr para despejarme', completado: false },
        { nombre: 'Diseñar el módulo de Firebase', completado: false },
        { nombre: 'Diseñar el ejercicio final', completado: false },
        { nombre: 'Tomarme unas vacaciones', completado: false },
      ],
      finalizadas: [],
    };
  },
  methods: {
    actualizarTarea(nombre) {
      const tarea = this.tareas.find((t) => t.nombre === nombre); // La loalizo
      tarea.completado = !tarea.completado; // Lo contrario
    },
  },
  computed: {
    tareasPendientes() {
      return this.tareas.filter((tarea) => !tarea.completado);
    },
    tareasFinalizadas() {
      return this.tareas.filter((tarea) => tarea.completado);
    },
  },
};
</script>

/* Este estilo es local de este componente, por lo nato esta DOM Shadow
https://vue-loader.vuejs.org/guide/scoped-css.html */
<style scoped>
li a {
  color: red;
}
</style>
