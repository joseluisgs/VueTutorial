<template>
    <div id="app">
        <h1>Aprender en 2019-20</h1>
        <form @submit.prevent="agregarTecnologia">
            <input v-model="nuevaTecnologia"
                   type="text" placeholder="Tecnología a aprender">
        </form>
        <ul>
            <li v-for="(tecnologia, index) in aprender" :key="index">
                {{ tecnologia.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>
    // Importamos nuestro mixins y heredamos sus elementos
    // https://vuejs.org/v2/guide/mixins.html#Option-Merging
    import {mixin} from './mixins';
    export default {
        // Aquí ya heredamos las cosas.
        mixins: [mixin],
        nombre: 'App.vue',
        // Primero se inicializa con los mixisn 
        // luego se sobrescribe con los métodos del objeto
        created() {
            console.log('Created desde el componente');
            this.saludar();
        },
         methods: {
             // este método queda sobre escrito
            // saludar() {
            //     alert('Hola desde el component');
            // },
        },
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
