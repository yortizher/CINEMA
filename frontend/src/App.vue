<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from '../src/components/navigation/Menu.vue'
import RoomViewVue from './views/room/RoomView.vue';
import RoomVue from './components/room/Room.vue';
import ChairViewVue from './components/room/ChairView.vue';

</script>

<template>
  <!-- <ChairViewVue/> -->
        <!-- <CreateRoomViewVue/> -->
  <RoomViewVue/>
  <!-- <RoomVue/> -->
   <!-- <Menu/> -->
  <!-- <RouterView /> -->
</template>

<style scoped>
*{
  color: black;
}


</style>
