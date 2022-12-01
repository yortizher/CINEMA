<script setup>
import Room from "../../components/room/Room.vue"
import { reactive, ref, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia"; //para desestructurar las variables reactivas 
import { useRoomStore } from "@/stores/room.js";

const dataPinea = useRoomStore(); //no olvidar los parentisis

const {dataPineaRoom} = storeToRefs(dataPinea);

const dataRoomS = ref([])

const dataRoom = async () => {
  const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/room";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (dataRoomS.value = data));
    dataPineaRoom.value = dataRoomS.value
};

onMounted(() => {
    dataRoom();

});
</script>
<template>

<!-- 
    <Room
    v-for="item in dataRoomS"
    :key="item.id"
    
    /> -->

    <Room/>

</template>
<style scoped>

</style>