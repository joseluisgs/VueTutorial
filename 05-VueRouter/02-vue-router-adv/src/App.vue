<template>
    <section>
        <button @click="cambiar">Cambiar Auth</button>
        <h4>Atenticación: {{auth}}</h4>
        <hr>
        <router-view></router-view>
    </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  methods: mapMutations(['cambiar']),
  computed: mapState(['auth']),
};
</script>
