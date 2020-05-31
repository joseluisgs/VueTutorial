<template>
  <div>
    <h1>Posts</h1>
    <input type="text" placeholder="Añadir item" v-model="nuevoItem" />
    <input type="button" value="Agregar item" @click="agregarItem" />
    <br />
    <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems" />
    <ul>
        <li
            v-for="(item, $index) in itemsFiltrados"
            :key="item.id"
            @eliminarItem="eliminarItem($index)">
            {{ item.title }}
        </li>
    </ul>

  </div>
</template>

<script>
import postService from '../services/postService';
import crudItemsMixin from '../mixins/crudItems';

export default {
  name: 'PostsList',
  // Al utilizar Mixins ya no hablamos de tareas, , si no de un item genérico, por lo tanto
  // ya no necesitamos definir una lógica específica para Tarea, porque sabemos que así
  // Nos sirve para tareas y post. Es como aplicar una herencia de funcionalidad y datos
  // Lo que se defina dentro de Mixins se en nuestro componente
  mixins: [crudItemsMixin],
  created() {
    postService.get().then((items) => {
      this.items = items.data;
    });
  },

};
</script>
