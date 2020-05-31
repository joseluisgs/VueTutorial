<template>
  <div>
    <h1>Menú principal</h1>
    <input type="range" />
    <ul>
      <li><a href="">Enlace 1</a></li>
      <li><a href="">Enlace 2</a></li>
      <li><a href="">Enlace 3</a></li>
      <li><a href="">Enlace 4</a></li>
      <li><a href="">Enlace 5</a></li>
      <li><a href="">Enlace 6</a></li>
    </ul>
    <tareas></tareas>
  </div>
</template>

<script>
import Tareas from '@/components/Tareas.vue';

export default {
  name: 'App',
  // Mi componente a usar
  components: { Tareas },
};
</script>

/* Este estilo es global, por lo tanto afecta a toda la página */
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Así podemos importar un css del directorio de assets */
@import url('/assets/main.css');
li a {
  color: blueviolet;
}
</style>
