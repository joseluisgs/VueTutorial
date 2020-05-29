// Componente elegir-ganador
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
    template: `<div><h1> {{ nombre }} </h1><h2> {{this.edad}}</h2><button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
        }
    }
});

// Instancia prinicpal de Vue con el modelo de datos personas.
new Vue({
    el: 'main',
    data: {
        personas: [
            'Víctor', 'Alicia', 'José', 'Soraya', 'Fernando'
        ],
        autor: 'José Luis',
    },
});