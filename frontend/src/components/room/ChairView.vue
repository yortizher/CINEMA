<script setup>
import Room from "../../components/room/Room.vue";
import { reactive, ref, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia"; //para desestructurar las variables reactivas
import { useRoomStore } from "@/stores/room.js";

const dataPinea = useRoomStore(); //no olvidar los parentisis

const { dataPineaChair } = storeToRefs(dataPinea);
const { band } = storeToRefs(dataPinea);

const dataRoomS = ref([]);

const dataRoom = async () => {
  const urlData =`https://cinema-production-cb13.up.railway.app/api/v1/room/${dataPineaChair.value}`;
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (dataRoomS.value = data));
};

const sendState= ()=>{
  band.value=true
}

onMounted(() => {
  dataRoom();
});
</script>
<template>
  
  <div class="icono">
    <a @click="sendState()">Salir</a>
  </div>
  

  <div class="title">
    <h1>{{dataRoomS.name}}</h1>
  </div>
  <div class="flex-container">
    <div class="caja" v-for="item in dataRoomS.seats_distribution"
          :key="item.ID">
        <div
          class="card1"
        >
        {{ item.ID }}
    </div>
    </div>
  </div>
</template>
<style scoped>
 .card1{
    width: 3.3rem;
    height: 3rem;
    justify-content: center;
    text-align: center;
    margin: 40%;
    color: black;

}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  padding: 10%;
}
.caja{
    margin: 0.5rem;
}
.title{
  margin-top: 5%;
  margin-bottom: -10%;
  text-align: center;
  color: white;
}
.icono{
  justify-content: end;
  align-items: end;
  
}
.icon{
  color: white;
  font-size: 3rem
}

</style>
