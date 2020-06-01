<template>
    <main>
        <tareas-restantes></tareas-restantes>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">{{ tarea.nombre }}</li>
        </ul>
    </main>
</template>

<script>
import TareasRestantes from '@/components/TareasRestantes.vue';
import { mapState } from 'vuex';

export default {
/*        computed: {
            tareas() {
                return this.$store.state.tareas;
            }
        } */
  components: { TareasRestantes },
  computed: mapState(['tareas']), // Obtengo todas las tareas
};
</script>
