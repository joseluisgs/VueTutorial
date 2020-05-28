// Estado de una instancia y comunicación entre varias
const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    },
    created() {
        console.log('Created: ', this.mensaje);
    },
    // antes de actualizarme
    beforeUpdate() {
        console.log('BeforeUpdate: ', this.mensaje);
    },
    // Al actualizarme
    updated() {
        console.log('Update: ', this.mensaje);
    },
    mounted() {
        console.log('Mounted: ', this.mensaje);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeMayusculas() {
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Instancia Vue 2',
    }
});
