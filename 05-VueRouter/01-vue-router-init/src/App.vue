<template>
  <div id="app">
    <div id="nav">
      <!-- Menú de navegación, link tu redirige a la entreda de router podemos poner el
      path o el alias de la entrada de router -->
      <router-link to="/">Home</router-link> |
      <router-link to="About">About</router-link> |
      <!-- Podemos poner el alias o name del router para evitar acordarnos de los path -->
      <router-link to="About">About</router-link> |
      <router-link to="/contacto">Contacto</router-link>
     <!--  Otra manera o descomponiendo las cosas  -->
     <h1>Rutas con Vue Router</h1>
        <router-link to="/" active-class="activo" tag="li" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/contacto" active-class="activo" tag="li" >
            <a>Contacto</a>
        </router-link>
        <hr>
    </div>
    <!-- Aquí cargamos esos componentes que estan cargados en el archivo de rutas,
    o enlazados por eso se ponen en vistas, cada vista es un enlace -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* Aquí lo que estamos diciendo es poner el color del enlace activo */
#nav a.router-link-exact-active {
  color: #42b983;
}
.activo a {
  color: red;
}
</style>
