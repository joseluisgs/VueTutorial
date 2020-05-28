new Vue({
    el: 'main',
    // Es el mejor momento para  consultar API, aqui o created
    mounted() {
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                });
        }
    }
});