<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>José Luis González</h2>
        <h5>@joseluisgs</h5>
<!--        <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>
        <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link>-->
<!--        <router-link :to="{ name:'fotos', params: {id: $route.params.id}}">Fotos</router-link>
        <router-link :to="{ name: 'bio', params: {id: $route.params.id}}">Bio</router-link>
        <router-view></router-view>-->
    </section>
</template>
<script>
export default {
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
