// Creamos la instancia de Vue.
// Le decimos que su campo de acción es todo lo que este entre las eqtiteas main, lo de fuera no lo entiende
// Su modelo de dato es data
// Vue.js
new Vue({
    el: 'main',
    data: {
        nuevaTarea: null, // Recogemos los datos de la tarea
        // Nuestra lista de tareas
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los días'
        ],
    },
    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            console.log(`Agregando la tarea: ${this.nuevaTarea}`);
            this.tareas.unshift(this.nuevaTarea); // Ponemos al principio
            this.nuevaTarea = null; // La ponemos a nulo
        }
    }
});
