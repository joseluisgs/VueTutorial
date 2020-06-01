<template>
  <div id="app">
    <!--  Mi encabezado -->
    <encabezado titulo="Mi lista de juegos"></encabezado>
    <hr>
    <!-- Formulario de nuevo, cuando me llegue el evento juegoNuevo,
    ejecuto el método  agregarJuego, me viene como parámetro juego  -->
    <formulario @juegoNuevo="agregarJuego"></formulario>
    <hr>
    <!-- Buscador -->
    Buscador: <input type="search" placeholder="Filtrar por título" v-model="filtroJuego" />
    <!-- Listado -->
    <listado
      :juegos="juegosFiltrados"
      @eliminarJuego="eliminarItem"></listado>
  </div>
</template>

<script>
// Importamos los componentes
import encabezado from '@/components/Encabezado.vue';
import formulario from '@/components/Formulario.vue';
import listado from '@/components/Listado.vue';

export default {
  name: 'App',
  components: {
    encabezado,
    formulario,
    listado,
  },
  // Al montarnos leemos los datos del almacenamiento
  created() {
    if (window.localStorage.getItem('ListaJuegos')) {
      // Leemos del storage
      this.juegos = JSON.parse(window.localStorage.getItem('ListaJuegos'));
    }
  },
  // Mi modelo de datos
  data() {
    return {
      // Lista de juegos
      juegos: [
        {
          titulo: 'The Lengend of Zelda: Breath of the wild',
          portada: 'https://i11d.3djuegos.com/juegos/9205/zelda_wii_u/fotos/ficha/zelda_wii_u-3610011.jpg',
        },
        {
          titulo: 'The Witcher 3: Wild hunt',
          portada: 'https://s2.gaming-cdn.com/images/products/4846/orig/the-witcher-3-wild-hunt-complete-edition-switch-cover.jpg',
        },
      ],
      // Mi filtro para buscar juegos
      filtroJuego: '',
    };
  },
  // Métodps
  methods: {
    // Agrega un juego a la lista de juegos
    agregarJuego(juego) {
      this.juegos.unshift(juego);
      this.salvarJuegos();
      this.nuevoTitulo = ''; // Lo ponemos a vacío
      this.nuevaPortada = '';
    },
    // Elimina un juego
    eliminarItem(indice) {
      this.juegos.splice(indice, 1);
      this.salvarJuegos();
    },
    // sallva los juegos en almacenamiento
    salvarJuegos() {
      window.localStorage.setItem('ListaJuegos', JSON.stringify(this.juegos));
    },
  },
  // Propiedads computadas
  computed: {
    juegosFiltrados() {
      return this.juegos.filter((juego) => juego.titulo.toLowerCase()
        .includes(this.filtroJuego.toLowerCase()));
    },
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
