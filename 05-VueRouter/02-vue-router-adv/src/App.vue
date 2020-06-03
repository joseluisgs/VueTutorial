<template>
    <section>
        <button @click="cambiar">Cambiar Auth</button>
        <h4>Atenticación: {{auth}}</h4>
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
