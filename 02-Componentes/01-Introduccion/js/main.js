// Un componente es un objeto bue definido por un identificador o nombre unico, en este caso mis tareas
// https://es.vuejs.org/v2/guide/components.html
Vue.component('mis-tareas', {
    // Aquñi indicamos como se renderiza este componente
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    // En un componente los datos son una funcion que devuelve un objeto con la propiedad las tareas..
    data() {
        return {
            tareas: [],
        }
    }
});

// Esta es la instancia principal de Vue que se renderiza en el elemento en main
new Vue({
    el: 'main',
});