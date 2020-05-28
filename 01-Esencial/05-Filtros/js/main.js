// Creamos la instancia de Vue.
// Le decimos que su campo de acción es todo lo que este entre las eqtiteas main, lo de fuera no lo entiende
// Su modelo de dato es data
// Vue.js
new Vue({
    // Elemento donde nos inyectamos
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [{
            titulo: 'Battlefield 1',
            genero: 'FPS',
            puntuacion: 9
        },
        {
            titulo: 'Civilization VI',
            genero: 'Estrategia',
            puntuacion: 10
        },
        {
            titulo: 'resident evil 7',
            genero: 'Survival Horror',
            puntuacion: 7,
        },
        ]
    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    },
    // Vue.js le permite definir filtros que pueden usarse para aplicar algunas propiedades al modelo renderizado. Otra alternativa
    filters: {
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        reverse: function (valor) {
            return valor.split('').reverse().join('');
        }
    }
});
