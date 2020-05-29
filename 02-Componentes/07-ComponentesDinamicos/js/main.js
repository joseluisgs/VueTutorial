// Mi lista de tareas que renderiza un componente tarea con los datos que yo tengo
Vue.component('lista-tareas', {
    template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
                <hr>
            </div>`,
    data() {
        return {
            tareas: [
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y Webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer vídeo',
            ],
        }
    }
});

// Componente tarea
Vue.component('tarea', {
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`
});

// Componente contacto
Vue.component('contacto', {
    template: `<div><a href="mailto:correo@correo.es">correo@correo.es</a> <hr></div>`,
});

// Componete Bio
Vue.component('bio', {
    template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus. Sed diam ante, dictum sit amet tincidunt ac, facilisis eget dui. </p><hr></div>`,
});

// Aquí cargamos el componente. nostros siempre renderizamos seleccionado, pero con los eventos nos lo cambian o nos indican cual es el que almacenamos
new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas' // incluso podemos cargarlo de manera asíncrona => import('./my-async-component') Si estuviese en otro fichero .vue
    }
});