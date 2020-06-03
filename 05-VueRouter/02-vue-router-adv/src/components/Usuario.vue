<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>José Luis González</h2>
        <h5>@joseluisgs</h5>
        <pre v-text="username"></pre>
<!--        <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>
        <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link>-->
<!--        <router-link :to="{ name:'fotos', params: {id: $route.params.id}}">Fotos</router-link>
        <router-link :to="{ name: 'bio', params: {id: $route.params.id}}">Bio</router-link>
        <router-view></router-view>-->
    </section>
</template>
<script>
export default {
  // modelo de datos
  data() {
    return {
      username: null,
    };
  },
  // Por lo tanto se realiza despues de crear, es decir una vez ha
  // procesado la ruta
  created() {
    this.obtenerUsername();
  },
  // https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-after-navigation
  // Obtenemos los datos al detectar los cambioa de lla ruta
  // cuando hay un cambio de la ruta, obtiene los datos
  watch: {
    $route: 'obtenerUsername',
  },
  methods: {
    // simulamos la conexion
    obtenerUsername() {
      setTimeout(() => {
        this.username = this.$route.params.id + Math.floor(Math.random() * 1000);
      }, 2000);
    },
  },
  // Protección del componente
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
  beforeRouteEnter: ((to, from, next) => {
    console.info('Antes de entrar');
    next((vm) => console.log(vm));
  }),
  beforeRouteUpdate: ((to, from, next) => {
    console.info('Antes de cambiar la ruta sobre el mismo componente');
    next();
  }),
  beforeRouteLeave: ((to, from, next) => {
    console.info('Antes de salir');
    next();
  }),
};
</script>
