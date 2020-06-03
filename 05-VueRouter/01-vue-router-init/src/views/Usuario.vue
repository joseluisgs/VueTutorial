<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>José Luis González</h2>
        <h5>@joseluisgonsan</h5>
        <!-- Enlaces personalizados -->
        <!-- <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link> |
        <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link>
        Nombrando las rutas -->
        <router-link :to="{ name:'fotos', params: {id: $route.params.id}}">Fotos</router-link> |
        <router-link :to="{ name: 'bio', params: {id: $route.params.id}}">Bio</router-link>
        <!-- Carga los enlaces que queremos aquí -->
        <router-view></router-view>
    </section>
</template>
