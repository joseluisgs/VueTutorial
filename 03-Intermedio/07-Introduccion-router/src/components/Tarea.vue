<template>
    <div>
        <h3>
            {{ titulo }}
            <button @click="$emit('eliminarTarea')">Eliminar</button>
        </h3>
    </div>
</template>

<script>
export default {
  name: 'Tarea',
  props: ['titulo'],
};
</script>

<style scoped>
    h3 {
        color: grey;
    }

    button {
        background-color: grey;
        color: white;
    }
</style>
