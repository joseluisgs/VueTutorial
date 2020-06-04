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
    import {mixin} from './mixins';
    export default {
        // Aquí ya heredamos las cosas.
        mixins: [mixin],
    }
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
