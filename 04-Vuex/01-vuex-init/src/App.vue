<template>
<!-- <contador :cantidad="cantidad"
              @aumentar="cantidad++"
              @reducir="cantidad&#45;&#45;">
    </contador>-->
  <div>
    <!--  Datos compartidos -->
    <contador></contador>
    <contador></contador>
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue';

export default {
  name: 'App',
  components: { Contador },
};
</script>
