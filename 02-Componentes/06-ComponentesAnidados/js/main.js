
// Este es el componente de la lista de tareas
// enlazamos los datos como un slot, pero como se puede ver
// En el for por lista de tareas renderizamos un componente tarea
Vue.component('lista-tareas', {
    props: ['tareas'],
    template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
            </div>`,
});

// Y este componente es para una tarea
Vue.component('tarea', {
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            'Finalizar sección Componentes',
            'Iniciar workflow con Vue CLI y Webpack',
            'Terminar de estudiar la documentación de Vuex',
            'Seguir jugando con Vue Router y grabar el primer vídeo',
        ]
    }
});