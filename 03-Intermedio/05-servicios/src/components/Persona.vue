<template>
  <div class="Persona">
    <!--  Si mnos ha llegado la persona, mostramos el bloque -->
    <template v-if="persona">
      <!--  podemos hacerlo con v-text o con {{}}<h1 v-text="datosPersona.nombre"></h1> -->
      <h1>{{datosPersona.nombre}}</h1>
      <h2>{{datosPersona.correoe}}</h2>
      <img :src="datosPersona.foto" />
    </template>
    <!-- Antes de que cargue ponemos esto -->
    <span v-else>Cargando persona...</span>
  </div>
</template>

<script>
// Librerías a usar
import personService from '../services/PersonService';

export default {
  name: 'Persona', // Como me quiero exportar (nombre para que me indexen)
  // Mi modelo de datos
  data() {
    return {
      persona: null,
    };
  },
  // Acciíon a realizar al momtarme en mi ciclo de vida
  created() {
    personService.get().then((respuesta) => {
      // Operación de propagación: const y = {...x} O con Object.assign O con JSON.parse(JSON.stringify(obj1));
      // Usaremos la política nueva de EM2019
      this.persona = { ...respuesta.data.results[0] };
      // console.log(`Mi Persona: ${this.persona}`);
    });
  },
  // datos de mi modelo computado, que es lo que usaré en vez de persona. Mapeo los atributos en algo que me guste
  computed: {
    datosPersona() {
      return {
        nombre: `${this.persona.name.first} ${this.persona.name.last}`,
        foto: this.persona.picture.large,
        correoe: this.persona.email,
      };
    },
  },
};
</script>

<style>
</style>
