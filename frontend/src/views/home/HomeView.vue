<script setup>
import Card from "../../components/home/Card.vue"
import MenuVue from "../../components/navigation/Menu.vue";
// import Cards from "../../components/home/Cards.vue"


let URL = window.location;

</script>
<template>

<MenuVue/>

<!-- Esto va envolviendo las card de peliculas
    
    <div v-if="URL.pathname == '/'" class="container-main">
</div> -->


  
    <div class="container-main">
    <h1 class="text-center"> Películas</h1>
    <Card/>
    <!-- <Cards/> -->
    </div>
</template>
<style scoped>

</style>
