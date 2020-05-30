<!--<template>
    <div>
        <article v-if="tipo === 'article'">
            <slot></slot>
        </article>
        <section v-if="tipo === 'section'">
            <slot></slot>
        </section>
        <aside v-if="tipo === 'aside'">
            <slot></slot>
        </aside>
        <nav v-if="tipo === 'nav'">
            <slot></slot>
        </nav>
        <header v-if="tipo === 'header'">
            <slot></slot>
        </header>
        <footer v-if="tipo === 'footer'">
            <slot></slot>
        </footer>
    </div>
</template>-->

<script>
// Vamos a usar funciones de renderizado para no hacer código spaguetti para que el componente sea muy adaptativo segúne el tipo, es decie
// que se muestre según el tipo que es
// https://es.vuejs.org/v2/guide/render-function.html
export default {
  name: 'Elemento',
  props: {
    tipo: String
  },
  // Renderizamos, creando e elemento del DOM del tipo que indiquemos y psando el slot recibido
  // Compruebalo en la consola del desarrolaldor del navegador
  render(createElement) {
            return createElement(
                this.tipo,
                this.$slots.default,
            )
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
