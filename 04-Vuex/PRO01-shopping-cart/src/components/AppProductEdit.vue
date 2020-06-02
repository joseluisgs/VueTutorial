<template>
  <div>
    <hr />
    <!-- Rebienta por el modo stricto <input type="text" v-model="selectedProduct.title"
    placeholder="Selecciona producto" /> Esto e debido a que no podemos mutar fuera del
    contexto de Vuex reactividad de v-model-->
    <!-- la otra opción -->
    <input type="text" v-model="title" placeholder="Selecciona producto" />
  </div>
</template>

<script>
export default {
  name: 'AppProductEdit',
  computed: {
    // Si lo ponemos así rrebienta por el modo estricto de Vuex
    // selectedProduct() {
    //   return this.$store.getters.selectedProduct;
    // },
    // Para trabajar con formulario y V-Modl hacemos
    // un objeto computable de dos sentidos
    // https://vuex.vuejs.org/guide/forms.html
    title: {
      // Al leer
      get() {
        return this.$store.getters.selectedProduct.title;
      },
      // al escribir
      set(value) {
        this.$store.commit('editProduct', { title: value });
      },
    },
  },
};
</script>
