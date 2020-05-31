<template>
  <div>
    <Logo />
    <div id="nav">
     <!--  Los enlaces los definimos en router
     Tenemos accceso a router porque lo hemos puesto global -->
      <router-link to="/">Home</router-link>|
      <router-link to="/posts">Posts</router-link>|
      <!-- En vez dde enrutar a un path, podemos enlazar a un nombre,
      Por eso lo ponemos en router -->
      <RouterLink :to="{name: 'posts'}">Posts</RouterLink>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
