Vue.component('alerta', {
    // Propiedades que recibo
    props: ['tipo', 'posicion'],
    // Mi template personalizable con propiedades y slots
    // Si pulso cerrar (evento click) ejecuto mi método ocultarWidget
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                        <a href="#" @click="ocultarWidget">Cerrar</a>
                        <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
    // Al ejecutar este método, emitimos, el evento ucltar al padre.
    methods: {
        ocultarWidget() {
            this.$emit('ocultar'); // Emitimos el evento ocultar
        }
    }
});

new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    }
});