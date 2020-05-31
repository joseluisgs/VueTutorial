<template>
  <div>
    <h1>Tareas</h1>
    <input type="text" placeholder="Añadir item" v-model="nuevoItem" />
    <input type="button" value="Agregar item" @click="agregarItem" />
    <br />
    <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems" />
    <Tarea
      v-for="(item, $index) in itemsFiltrados"
      :key="item.id"
      :titulo="item.title"
      @eliminarItem="eliminarItem($index)"
    ></Tarea>
  </div>
</template>

<script>
import Tarea from '@/components/Tarea.vue';
import todoService from '../services/todoService';
import crudItemsMixin from '../mixins/crudItems';

export default {
  name: 'Tareas',
  // Al utilizar Mixins ya no hablamos de tareas, , si no de un item genérico, por lo tanto
  // ya no necesitamos definir una lógica específica para Tarea, porque sabemos que así
  // Nos sirve para tareas y post. Es como aplicar una herencia de funcionalidad y datos
  // Lo que se defina dentro de Mixins se en nuestro componente
  mixins: [crudItemsMixin],
  created() {
    todoService.get().then((items) => {
      this.items = items.data;
    });
  },
  components: {
    Tarea,
  },
};
</script>
