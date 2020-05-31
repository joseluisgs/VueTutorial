// Com simularemos el Vuex
export default {
  // Estado
  state: {
    tituloTarea: '',
  },

  // Mutación, es la encargada de mutar o cambiar el estado de manera directa.
  guardarTarea(titulo) {
    this.state.tituloTarea = titulo;
  },
};
