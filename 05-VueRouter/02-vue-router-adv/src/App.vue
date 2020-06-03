<template>
    <section>
        <button @click="cambiar">Cambiar Auth</button>
        <h4>Atenticación: {{auth}}</h4>
        <hr>
        <router-link to="/info">Info</router-link> |
        <!-- Nos vamos a desplazar hasta el hash -->
        <router-link :to="{path: '/bio', hash: '#parrafo'}">Bio</router-link>
        <hr>
        <!-- Uso transiciones para hacerlo "molón" -->
        <transition name="aparecer" appear>
          <router-view></router-view>
        </transition>
    </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  methods: mapMutations(['cambiar']),
  computed: mapState(['auth']),
};
</script>

<style>
  /* Transition */
  .aparecer-enter {
      opacity: 0;
  }

  .aparecer-enter-active {
      transition: opacity 1s;
  }

  .aparecer-leave-to {
      opacity: 0;
  }

  .aparecer-leave-active {
      transition: opacity 1s;
  }
</style>
