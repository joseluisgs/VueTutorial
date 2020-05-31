// Los mixins son una forma flexible de distribuir funcionalidades
// reutilizables para componentes de Vue.
// Un objeto mixin puede contener cualquier opción de componente.Cuando un componente usa un mixin,
// todas las opciones en el mixins se “mezclan” en las propias opciones del componente.
// estos elementos los voy a usar igual en Tareas y Post
// https://es.vuejs.org/v2/guide/mixins.html

const crudItemsMixin = {
  data() {
    return {
      items: [],
      nuevoItem: '',
      filtroItems: '',
    };
  },
  methods: {
    agregarItem() {
      this.items.unshift({ title: this.nuevoItem });
      this.nuevoItem = '';
    },
    eliminarItem(indice) {
      this.items.splice(indice, 1);
    },
  },
  computed: {
    itemsFiltrados() {
      return this.items.filter((item) => item.title.includes(this.filtroItems));
    },
  },
};

export default crudItemsMixin;
