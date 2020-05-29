
// Este es el bus de eventos, vamos a decir que es como una variable global donde escribismo y leemos. 
// Queda mal decirlo así, pero es una forma de entenderlo
// En el fondo es una una variable bus y como tal puede emirir y recibir eventos
const eventBus = new Vue();

// Componente listado de productos
Vue.component('listado-productos', {
    // Me inician con esta propiedad 
    props: ['productos'],
    template: `
        <section>
            <ul>
                <li v-for="producto in productos">
                    {{ producto.nombre }} - 
                    <small>{{ producto.precio.toFixed(2) }} €</small>
                    <button @click="eliminarProducto(producto.precio)">-</button>
                    <button @click="anadirProducto(producto.precio)">+</button>
                </li>
            </ul>
        </section>`,
    // Manejar los bueses es como emitir eventos asociado al mismo, todo aquel que se suscriba al bus puede recuperarlos
    // Con emit escribo en el bus (lanzo un evento para quien me escuche)
    methods: {
        anadirProducto(precio) {
            eventBus.$emit('anadir', precio);
        },
        eliminarProducto(precio) {
            eventBus.$emit('eliminar', precio);
        },
    }
});

Vue.component('carrito-compra', {
    template: `
        <section>
            <h1> {{ total.toFixed(2) }} € </h1>
            <h3> {{ cantidadProductos }} productos </h3>
        </section>`,
    data() {
        return {
            cantidadProductos: 0,
            total: 0,
        }
    },
    // On del bus, aquí escucho o leo del bus en el vento emitir
    created() {
        eventBus.$on('anadir', (precio) => {
            if (this.total >= 0) {
                this.total += precio;
                this.cantidadProductos++;
            }
        });
        eventBus.$on('eliminar', (precio) => {
            if (this.total > 0) {
                this.total -= precio;
                this.cantidadProductos--;
            }
        });
    }
});

new Vue({
    el: 'main',
    data: {
        productos: [
            { nombre: 'Libro ES6', precio: 39 },
            { nombre: 'Portátil', precio: 1300 },
            { nombre: 'Café', precio: 2 },
            { nombre: 'Auriculares', precio: 80 },
            { nombre: 'Moleskine', precio: 19 },
        ]
    }
});