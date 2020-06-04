// https://vuejs.org/v2/guide/custom-directive.html
// Son directivas personalizadas creadas para compartir y personalizar y reutilizarlas
Vue.directive('fijar', {
    // Cuando exista el bind, puesto
    // el es elemento donde lo vamos a apliacra
    // binding es la directivadir
    bind(el, binding) {
        console.log(el,binding);
        // Lo dejamos fijado...
        el.style.position = 'fixed';

        if (binding.expression) {
            el.style.top = binding.expression + 'px';
        }

        // si tenemos distintos argumentos 
        if (binding.arg) {
            let color = 'goldenrod';
            let modificadores = Object.keys(binding.modifiers);
            if (modificadores.length > 0) {
                color = modificadores[0];
            }
            el.style.backgroundColor = color;
        }
    }
});

new Vue({
   el: '#app',
});