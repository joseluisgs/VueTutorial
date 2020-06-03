<template>
  <main>
    <h1>Nuestro equipo:</h1>
    <!-- Aquí se renderiza los componentes de las rutas anidadas secundarias -->
    <router-view></router-view>
    <!-- Renderizados de vistas especiales
    https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views
    -->
    <router-view name="bio"></router-view>
    <router-view name="fotos"></router-view>
  </main>
</template>
