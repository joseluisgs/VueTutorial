<template>
    <section>
        <h2>Dónde encontrarme</h2>
        <p>C/. Lo que sea</p>
       <!-- <h5>{{ $route.params.newsletter }}</h5>-->
        <h5>{{ newsletter }}</h5>
        <pre>{{ numero }}</pre>
        <!--<template v-if="$route.params.newsletter === 'true'">-->
        <!--<template v-if="newsletter === 'true'">-->
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo-e</label>
                <input type="email" placeholder="Tu correo-e" id="correoe">
            </form>
        </template>

    </section>
</template>

<script>
export default {
  props: ['newsletter'],
  data() {
    return {
      numero: null,
    };
  },
  // Antes de cargar la ruta
  beforeRouteEnter: ((to, from, next) => {
    console.info('Antes de entrar');
    setTimeout(() => {
      next((vm) => {
        // No podemos usar numero porque aún no existe, no se ha creado
        // https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation
        vm.numero = Math.floor(Math.random() * 1000);
      });
    }, 2000);
  }),
};
</script>
