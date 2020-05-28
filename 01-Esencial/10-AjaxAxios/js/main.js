// Constante para usar axios con la misma forma de http
// Vue.prototype.$http = axios;

new Vue({
    el: 'main',
    mounted() {
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            // Si queremos hacerlo igual que antes, definimos la constante arriba
           /*  this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                }); */
            // si quieres usar la sintaxis directa de axios.
             axios.get('https://randomuser.me/api/?results=500')
                 .then((respuesta) => {
                     this.personas = respuesta.data.results;
                 });
        }
    }
});