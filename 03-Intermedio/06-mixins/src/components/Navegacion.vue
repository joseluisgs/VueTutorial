<template>
  <div>
    <Logo />
    <div id="nav">
     <!--  Los enlaces los definimos en router -->
      <router-link to="/">Home</router-link>|
      <router-link to="/posts">Posts</router-link>
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
