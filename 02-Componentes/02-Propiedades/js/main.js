// Componente elegir-ganador
// A través de las propiedades podemos crear componentes Vue.js que comparten 
// la misma estructura(template) pero muestran diferente información(propiedades).
Vue.component('elegir-ganador', {
    // Propiedades, es la manera de recibir la información que necesita este Componente desde nuestro padre.
    props: ['listado'],
    //template: '#elegir-ganador-template',
    /*    template: `<div>
                        <h1 v-if="ganador">El ganador es: {{ ganador }}</h1>
                        <template v-else>
                            <h1>Participantes</h1>
                            <ul>
                                <li v-for="persona in listado">{{ persona }}</li>
                            </ul>
                        </template>
                        <button @click="elegirGanador">Elegir ganador</button>
                    </div>
                   `,*/
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    },
});

// Otro componente
Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        // Las props son accesibles desde this (proxy)
        //console.log(this.nombre);
        console.log(typeof this.edad);
    },
    // Aquñi lo estamos mutando por eso esta mal. Probar con el segundo
    // template: `<div><h1> {{ nombre }} </h1><h2> {{this.edad}}</h2><button @click="cambiarProp">Cambiar Prop</button></div>`,
    // Este esta bien porque no cambiamos ni tocamos directamente la propiedad del padre, si no una copia compuada
    template: `<div><h1>{{ miNombre }} </h1><h2> {{this.edad}}</h2><button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        // Esto es muy importante y esta MAL. No podemos mutar una propiedad en el hijo. Porque son datos del padre. Así que tenlo en cuenta que por eso da error en la consola
        // Propiedades es para pasar valores, trabajar con ellos pero no cambiarlos. Para devolver del hijo a padre se usan eventos
        // https://es.vuejs.org/v2/guide/components-props.html#Flujo-de-datos-unidireccional
        // https://medium.com/noctorus/vue-js-one-way-data-binding-6cd2b6c493ec
        cambiarProp() {
            this.miNombre = this.miNombre.toUpperCase();
        },
    },
    // La forma de arreglarlo es hacer una copia en data y operar con ella,
    data() {
        return {
            miNombre: this.nombre,
        }
    },
});

// Otro componente
Vue.component('candidato', {
    /*props: ['nombre', 'correoe', 'imagen'],*/
    // Las propiedades que recibo pueden ser validadas, pueds tener datospor defecto o indicar sus tipos o requeridos
    // https://es.vuejs.org/v2/guide/components-props.html#Validacion-de-la-propiedad
    props: {
        nombre: {
            type: [String, Array], // null = * // Tipo de dato que espero
            required: true, // Es requierido, es decir si no lo tenemos error
        },
        correoe: {
            type: String,   // Tipo de dato
            default: 'correo@correo.com' // Valor por defecto si no lo recibimos (buscalo cuando lo renderice)
        },
        imagen: String,
        // como es un objeto compuesto, debemos crerar una función que devuelve el objeto. SOLO PARA COMPUESTOS
        location: {
            type: Object,
            default() { // Otra forma de hacer el default
                return {
                    ciudad: 'Ciudad Real',
                }
            }
        },
    },
    template: '#candidato-template', // Llamamos al template con esta nombre que estara en nuestro index. Los templates pueden estar en otros ficheros
});

// Instancia prinicpal de Vue con el modelo de datos personas.
new Vue({
    el: 'main',
    data: {
        personas: [
            'Víctor', 'Alicia', 'José', 'Soraya', 'Fernando'
        ],
        autor: 'José Luis',
        candidatos: [],
    },
    mounted() {
        this.obtenerCandidatos();
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});