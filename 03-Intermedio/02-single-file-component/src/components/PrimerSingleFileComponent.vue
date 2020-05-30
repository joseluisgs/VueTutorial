<template>
 <!--  Siempre tiene que haber un nodo raiz -->
  <div class="PrimerComponente">
    <h1>{{ mensaje }}</h1>
    <!-- Pongo varios componentes de personas -->
    <Persona></Persona>
    <Persona></Persona>

  </div>
</template>

<script>
// Importamos persona
import Persona from './Persona.vue';

export default {
  // Nombre con el que me voy a exportar
  name: 'PrimerSingleFileComponent',
  // Mis porpiedades que tomo
  props: {
    mensaje: String,
  },
  // Componentes a usar
  components: {
    Persona,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
