<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from '../src/components/navigation/Menu.vue'
import RoomViewVue from './views/room/RoomView.vue';
import RoomVue from './components/room/Room.vue';
import ChairViewVue from './components/room/ChairView.vue';
import SellVue from './components/sell/Sell.vue';
import CreateRoom from "./components/room/CreateRoom.vue"
import EditRoomVue from './components/room/EditRoom.vue';

</script>

<template>
  <!-- <EditRoomVue/> -->
  <!-- <SellVue/>  -->
  <!-- <CreateRoom/> -->

  <!-- <RoomViewVue/> -->
  <!-- <RoomVue/> -->
   <Menu/>
  <RouterView />
</template>

<style scoped>
*{
  color: black;
}


</style>
