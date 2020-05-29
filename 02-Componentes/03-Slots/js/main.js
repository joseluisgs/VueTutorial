Vue.component('alerta', {
    // Aquí con propiedades 
    props: ['tipo', 'posicion'],
    // Con el slot podemos configurar que el template sea dinámico 
    // Slots anónimo solo puede haber 1, los demás deben estar identificados, tener un name
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                        <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <!-- El texto me llega en slot en la variable footer -->
                <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
});

new Vue({
    el: 'main',
});