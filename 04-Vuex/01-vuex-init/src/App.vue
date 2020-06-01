<template>
<!-- <contador :cantidad="cantidad"
              @aumentar="cantidad++"
              @reducir="cantidad&#45;&#45;">
    </contador>-->
  <div>
    <h1>Hola me llamo {{ nombre }} {{ apellidos}} y me dedico a {{profesion}}</h1>
    <!--  Datos compartidos -->
    <contador></contador>
    <contador></contador>
    <tareas></tareas>
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue';
import Tareas from '@/components/Tareas.vue';
// Usar estado de datos de Vuex directamente
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { Contador, Tareas },
  computed:
    // Nos podemos traer de un tiron todas las propiedades que nos interesen
    mapState(['nombre', 'apellidos', 'profesion']),
};
</script>
