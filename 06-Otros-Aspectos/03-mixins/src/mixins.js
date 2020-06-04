// Reutilizar información o herencia entre componentes
// https://vuejs.org/v2/guide/mixins.html#Basics
// Se puede compartir datos, metodos, etc.
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
        saludar() {
            alert('Hola desde el mixin');
        }
    }
};