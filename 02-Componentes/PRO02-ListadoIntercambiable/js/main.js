// En este ejemplo en vez de definir los componentes de manera global, lo vamos a hacer de manera local a la instancia
// https://es.vuejs.org/v2/guide/components-registration.html
// Este es el paso directo a como se usará directamente en VUE como SFC

// Componente usuario
const usuario = {
    // Mi propiedad
    props: ["info"],
    template: "#usuario-template", // mi template 
    //campo calculado para mostrar el nombre completo
    computed: {
        nombreCompleto() {
            return `${this.info.name.title}: ${this.info.name.first} ${this.info.name.last}`;
        }
    },
    // Mis métodos
    methods: {
        // Cuando se haga una selección emito el evento selección con el nombre de usuario. Eventos comunicación padre e hijo
        modificarSeleccion() {
            this.$emit('seleccion', this.info.username);
        }
    }
};

// Usuarios tendrá la lista de usuarios, y recibirá de donde lo vamos a mover. Recodemos que tenemos dos listados, de usuarios y suarios seleccionados
const usuarios = {
    // Nuestra prpiedades para inicarnos son:
    // Listado del usuarios y a donde nos vamos a mover
    props: ['listado', 'moverA'], // Como es camecase en el código detemplate se debe poner mover-a
    template: '#usuarios-template', // En que parte de template nos vamos a renderizar. ¡¡ Que ganas de hacer ya SFC!!!
    // Mis métodos
    methods: {
        // Con este método llevanos a un uusuario de un lado a otro
        alterarSeleccion(username) {
            // Buscamos el usuario cuyo username coicide
            let indice = this.listado.findIndex(elemento => (elemento.username === username));
            // Si existe, su índe es mayor a cero
            if (indice > -1) {
                // En vez de hacer un bus o lanzar un evento utilizamos las variables que la instancia principal expone
                // https://es.vuejs.org/v2/api/index.html
                // De mi padre, en su campo mover a, quitamos este el indice
                // La otra forma de hacerlo sería emitir un evento, que lo capture el padre y el padre haga el intercambio 
                // (Me gusta es opción aunque esta es la permitida también por vue)
                // console.log(this.$root);
                this.$root[this.moverA].unshift(this.listado.splice(indice, 1)[0]); // splice devuelve un array, por eso nos quedamos con la componente 0
            }
        }
    },
    // Componentes que vamos a usar dentro de mi mismo al renderizarme, es decir usuarios usará compennete usuario. Definición local
    components: {
        usuario,
    }
}

// Unstancia principal de VUE, no es neceario el const vm
const vm = new Vue({
    // Trabajamos con lso estados, del ciclo de vida, en created es el recomendado para consultaer una API en Vue
    created() {
        axios.get('https://randomuser.me/api/?results=50')
            .then((datos) => {
                // Obtenemos los usuariuos y mapeamos su información
                const listado = datos.data.results.map((usuario) => {
                    return {
                        username: usuario.login.username,
                        name: usuario.name,
                        email: usuario.email,
                        picture: usuario.picture,
                    };
                });
                // Lo almacenamos si he hecho el then
                this.usuariosDisponibles = listado;
            });
    },
    // El elemento donnde me voy a renderizar
    el: 'main',
    // Mis datos de instancia principal, como soy la principal por eso es un objeto
    data: {
        usuariosDisponibles: [],
        usuariosSeleccionados: [],
    },
    // Los componentes que voy a usar, en este caso uso usuarios.
    components: {
        usuarios,
    }
});

// Activamos la configuración de depuración de vue
Vue.config.devtools = true;