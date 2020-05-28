// Creamos la instancia de Vue.
// Le decimos que su campo de acción es todo lo que este entre las eqtiteas main, lo de fuera no lo entiende
// Su modelo de dato es data
// Vue.js
new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo!',
        edad: 20,
        conectado: true,
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Aprender Vue y Firebase', prioridad: 'alta' },
            { nombre: 'Ir al gimnasio', prioridad: 'alta' },
        ],
        persona: {
            nombre: 'joseluisgs',
            profesion: 'profesor',
            ciudad: 'en un pais multicolor'
        }
    }
});