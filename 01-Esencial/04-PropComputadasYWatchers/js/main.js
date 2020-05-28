// Creamos la instancia de Vue.
// Le decimos que su campo de acción es todo lo que este entre las eqtiteas main, lo de fuera no lo entiende
// Su modelo de dato es data
// Vue.js
new Vue({
    // Elemento donde nos inyectamos
    el: 'main',
    // Modelo de datos
    data: {
        mensaje: 'Hola Mundo :) !',
        nuevaTarea: '',
        tareas: [{
            titulo: 'Aprender Vue.js',
            prioridad: true,
            antiguedad: 23
        },
        {
            titulo: 'Aprender ES6',
            prioridad: false,
            antiguedad: 135
        },
        {
            titulo: 'Publicar algo todos los días',
            prioridad: true,
            antiguedad: 378
        },
        ],
        error: '',
        errorComp: ''
    },
    // Métodos
    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = '';
        },
    },
    // Prpiedades computadas, es dcir, realiza operaciones de con elementos de nuestro modelo automáticamente antes de renderizarlos
    computed: {
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        mensajeAlReves() {
            if (this.nuevaTarea.length != 0)
                return this.nuevaTarea.split('').reverse().join('');
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        },
        errorComputado() {
            if (this.nuevaTarea.length < 5 && this.nuevaTarea.length >= 1) {
                this.errorComp = 'Nombre de tarea demasiado corto de manera computada';
                return true;
            } else {
                this.errorComp = '';
                return false;
            }
        },
    },
    // Cuando tiene algunos datos que necesitan cambiarse en función de otros datos, es tentador utilizar watch en exceso, 
    // especialmente si proviene de tener experiencia en AngularJS. 
    // Sin embargo, a menudo es una mejor idea usar una propiedad computada en lugar de una imperativa llamada a watch
    // Como watch observo esta variable de mi modelo de dato (se debe llamar igual)
     watch: {
        nuevaTarea() {
             if (this.nuevaTarea.length < 5) {
                this.error = 'Nombre de tarea demasiado corto de manera observada';
            } else {
                this.error = '';
            }
        }
    }
});
