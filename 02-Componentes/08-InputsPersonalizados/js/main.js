// Creo qle componente contraseña que tiene toda su logica encapsulada. No va a depende del padre, solo para instanciarlo.
// https://es.vuejs.org/v2/guide/components-custom-events.html#Perzonalizacion-de-componente-v-model

Vue.component('contrasena', {
    // Propiedad que nos llega para ser instanciaqdos
    props: ['contrasena'],
    template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">`,
    methods: {
        comprobarContrasena(contrasena) {
            if (this.noValidas.includes(contrasena)) {
                this.$refs.pass.value = contrasena = ''; // Lo escribimos en el domm porque input tiene ref pass
            }
            // Lanzamos el evento hacia arriba (padre)
            this.$emit('input', contrasena);
        }
    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root'],
        }
    }
});

// Clase principal
new Vue({
    el: 'main',
    data: {
        contrasena: 'es3Es653!*&__', // Dato para instanciar el componente
    },
});