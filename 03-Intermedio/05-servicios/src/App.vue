<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Con sintaxis CameCase -->
    <PrimerSingleFileComponent mensaje="Mi primer Single File Component"/>
   <!--  Otra foma de llamarlo es así -->
   <!-- <primer-single-file-component msg="Mi primer Single File Component"/> -->
  </div>
</template>

<script>
// Nos traemos el componente a usar
import PrimerSingleFileComponent from './components/PrimerSingleFileComponent.vue';

export default {
  // Indicamos como me voy a exportar
  name: 'App',
  // Componentes a usar
  components: {
    PrimerSingleFileComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
