// Componente usuarios
Vue.component('usuarios', {
    // Pripiedades de nuestro padre, podríamos recibir aquí la fuente de donde conectarme o ponerla directamente
    props: ['fuente'],
    template: '#usuarios-template', // Renderizamos en este template
    mounted() { // Puedes usar created, me gusta más
        axios.get(this.fuente) // o podemos pner la cadena completa si no queremos recogerlo del padre a tarves de lapropiedad: https://randomuser.me/api/?results=500
            .then((datos) => {
                // Obtenemos el listado, mapeamos el user obtenido a un objeto usuario, map crea un objeto en base a otro, es deci mapeamos propiedades.
                const listado = datos.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title}  ${usuario.name.first} ${usuario.name.last}`,
                        correoe: usuario.email,
                        foto: usuario.picture.medium,
                    };
                });
                // Lo almacenamos
                this.usuarios = listado;
            });
    },
    // Variables de entorno
    data() {
        return {
            usuarios: [],
            busqueda: '',
        }
    },
    // Para manejar el filtro.
    computed: {
        filtrarUsuarios() {
            return this.usuarios.filter((usuario) => {
                return usuario.nombre.includes(this.busqueda)
            });
        }
    }
});

// Usuario
Vue.component('usuario', {
    // La propiedad es datos
    props: ['datos'], // LAs propiedade que nos llegara para iniciar el componente
    template: '#usuario-template',
});

// Componente principal
new Vue({
    el: 'main',
    data: {
        fuente: 'https://randomuser.me/api/?results=500', // fuente de los datos, puede tenerla la instancia principal, así si cambia no hay que tocar el componente
    }
});