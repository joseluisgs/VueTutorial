// Reutilizar información o herencia entre componentes
// https://vuejs.org/v2/guide/mixins.html#Basics
// Se puede compartir datos, metodos, etc.

// Global mixin. Afecta a todas las instancias, así que ¡CUIDADO!
// https://vuejs.org/v2/guide/mixins.html#Global-Mixin
import Vue from 'vue';
Vue.mixin({
    created() {
        //console.info('Hola desde mixin global');
        this.saludar(this.$options.nombre)
    },
    methods: {
        saludar(nombre) {
            alert(`Hola desde ${nombre}!`);
        }
    }
});

export const mixin = {
    created() {
        console.log('Created desde el mixin');
        this.saludar();
    },
    data () {
        return {
            aprender: [
                {nombre: 'NuxtJS'},
                {nombre: 'VueJS'},
                {nombre: 'NodeJS'},
                {nombre: 'Express'},
                {nombre: 'JWT'},
            ],
            nuevaTecnologia: null,
        }
    },
    methods: {
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
        // saludar() {
        //     alert('Hola desde el mixin');
        // }
    }
};