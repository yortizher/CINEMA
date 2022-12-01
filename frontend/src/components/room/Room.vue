<script setup>
import { storeToRefs } from "pinia"; //para desestructurar las variables reactivas
import { useRoomStore } from "@/stores/room.js";

const dataPinea = useRoomStore(); //no olvidar los parentisis

const { dataPineaRoom } = storeToRefs(dataPinea);
</script>


<template>
    <h1 class="text-center title">Salas</h1>
  <div class="container">
    <div v-for="item in dataPineaRoom" :key="item.id" class="card">
      <h5 class="card-title" v-text="item.name"></h5>
      <h6 class="card-subtitle mb-2">Capacidad 
        <br>{{item.capacity}}</h6>
      <p class="card-text" v-text="item.desc_location"></p>
    </div>
  </div>


 
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

* {
  color:white;
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.6;
}

.card-title {
  text-align: center;
  font-size: 25px;
  color: white;
  margin-top: 50px;
  font-weight: 800;
}
.container {
  width: 100%;
  max-width: 1200px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
}
.container .card {
  width: 250px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 20px;
  text-align: center;
  transition: all 0.25s;
  

  background: rgba(106, 4, 15, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 4, 15, 0.25);
}
.container .card:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgba(255, 255, 255, 0.2);
}
.container .card h6{
    font-weight: 600;
}
.container .card p{
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
}

.title{
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    margin-top: 3%;
    margin-bottom: 1%;
    color: white;
}
</style>
