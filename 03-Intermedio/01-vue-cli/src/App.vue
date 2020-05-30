<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <!--  Le paso por propiedad el mensaje a mostrar -->
    <HelloWorld msg="Bienvenidos a mi app con Vue"/>
  </div>
</template>

<script>
// Componente app, SFC
// https://es.vuejs.org/v2/guide/single-file-components.html
import HelloWorld from '@/components/HelloWorld.vue'; // Soy el componente de la apliación y por ende uso otros componentes, debo importalos

export default {
  // Debo iondicar como me exporto, es mi nombre App
  name: 'App',
  // Componentes que uso dentro de mi
  components: {
    HelloWorld,
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
