<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Elemento tipo="footer">Hola footer</Elemento>
    <Elemento tipo="header">Hola header</Elemento>
    <Elemento tipo="aside">Hola aside</Elemento>
    <Elemento tipo="nav">Hola nav</Elemento>
    <Elemento tipo="main">Hola main</Elemento>
  </div>
</template>

<script>
import Elemento from './components/Elemento.vue'

export default {
  name: 'App',
  components: {
    Elemento
  }
}
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
