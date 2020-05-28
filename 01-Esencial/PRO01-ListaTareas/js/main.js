// Instancia de Vue

new Vue({
    // Elemento del HTML donde me voy a inyectar
    el: 'main',
    // Modelo de datos 
    data: {
        tareas: [
            {   
                id:1,
                nombre: "Prueba 01",
                prioridad: 10,
                terminada: false
            },
            {
                id:2,
                nombre: "Prueba 02",
                prioridad: 5,
                terminada: false
            },
            {   id:3,
                nombre: "Prueba 03",
                prioridad: 2,
                terminada: true
            }
        ],
        // Creiterio de búsqueda
        busqueda: '',
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
        }
    },
    methods: {
        // Completamos la tarea en base al ID Recibido dentro de tareas activas (Lo podemos hacer al ser un campo calculado)
        completarTarea(idTarea) {
            console.log(idTarea);
            let tarea = this.tareasActivas.find(tarea => tarea.id === idTarea);
            tarea.terminada = true;

        }
    },

});