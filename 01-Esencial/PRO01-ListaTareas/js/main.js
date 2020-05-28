// Instancia de Vue

new Vue({
    // Elemento del HTML donde me voy a inyectar
    el: 'main',
    // Modelo de datos 
    data: {
        tarea: {
            id: 0,
            nombre: '',
            priridad: 1,
            terminada: false,
            acepta: false
        },
        tareas: [
            {
                id: 1,
                nombre: "Prueba 01",
                prioridad: 10,
                terminada: false
            },
            {
                id: 2,
                nombre: "Prueba 02",
                prioridad: 5,
                terminada: false
            },
            {
                id: 3,
                nombre: "Prueba 03",
                prioridad: 2,
                terminada: true
            }
        ],
        // Creiterio de búsqueda
        busqueda: '',
    },
    // Al montarnos leemos los datos del almacenamiento
    created() {
        if (window.localStorage.getItem('ListaTareas'))
            // Leemos del storage
            this.tareas = JSON.parse(window.localStorage.getItem('ListaTareas'));
    },


    // Tareas computadas (solo las hace cuando detecta un cambio), lista de tareas activas y lista de tareas no activas y tareas ordenadas
    computed: {
        // Devolvemos la lista de tareas asctivas (no terminadas) y ordenadas por prioridad y que coicidan con el criterio de busqueda
        tareasActivas() {
            // Tarea terminadas
            let lista = this.tareas.filter((tarea) => !tarea.terminada);
            lista = lista.filter((tarea) => tarea.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
            // Ordenadas por prioridad
            return lista.sort((a, b) => b.prioridad - a.prioridad);
        },
        // Lista de tareas inactivas
        tareasTerminadas() {
            return this.tareas.filter((tarea) => tarea.terminada);
        },
        // Esto lo uso como filtro validador del la entrada del formulario
        errorNombre() {
            if (this.tarea.nombre.length < 3 && this.tarea.nombre.length >= 1) {
                return false;
            } else {
                return true;
            }
        },
        errorPrioridad() {
            if (this.tarea.prioridad < 1 && this.tarea.prioridad > 10) {
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {
        // Completamos la tarea en base al ID Recibido dentro de tareas (se puede hacer en tareasActivas al ser un campo calculado)
        // Pero como lo voy a usar en las dos, no lo hago así
        cambiarEstado(idTarea) {
            let tarea = this.tareas.find(tarea => tarea.id === idTarea);
            tarea.terminada = !tarea.terminada;
            window.localStorage.setItem('ListaTareas', JSON.stringify(this.tareas)); // Parta indicar los cambios que hay

        },
        // Añade una tarea
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tarea.id = Date.now();
            let nueva = { ...this.tarea }; // Creamos una copia usando sprend, tambien con let nueva = Object.assign({}, this.tarea);
            console.log(`Agregando la tarea: ${nueva}`);
            this.tareas.unshift(nueva); // Ponemos al principio
            // window.localStorage.setItem('ListaTareas', JSON.stringify(this.tareas)); // como un watch
            // Eliminamos los dtaos
            this.limpiarTarea();
        },
        limpiarTarea() {
            this.tarea.id = Date.now();
            this.tarea.nombre = '';
            this.tarea.prioridad = 1;
            this.tarea.terminada = false;
            this.tarea.acepta = false
        }
    },
    watch: {
        // Un observador de tareas, cada vez que cambie los datos de ella lo salvamos en el repositorio. podía hacerlo en el evento agregar tarea, pero lo hago aquí
        // Por usar un watch
        tareas() {
            window.localStorage.setItem('ListaTareas', JSON.stringify(this.tareas));
        }
    }
});