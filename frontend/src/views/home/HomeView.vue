<script setup>
import Card from "../../components/home/Card.vue";
import MenuVue from "../../components/navigation/Menu.vue";
<<<<<<< HEAD
=======


>>>>>>> 32befd1caff71ef083a65082b965117d99c0d847

let URL = window.location;
</script>
<template>
  <MenuVue />

<MenuVue/>

<!-- Esto va envolviendo las card de peliculas -->
    
<div v-if="URL.pathname == '/'" class="container-main">
        <h1 class="text-center"> Películas</h1>
        <Card/>
</div>
</template>
<style scoped>
</style>
