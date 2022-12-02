<script setup>
import ChairViewVue from "./ChairView.vue";
import { storeToRefs } from "pinia"; //para desestructurar las variables reactivas
import { useRoomStore } from "@/stores/room.js";
import { reactive, ref, onMounted, computed, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";

const id = ref(0);
let cont = 0;
const dataRoomS = ref([]);
const dataRoomE = ref([]);
const bandera = ref(true);
const arrayIds = ref([]);
const arrayIds2 = ref("");
const color ="background-color:'green'"
// const arrayIds2 = ref([])

const dataPinea = useRoomStore(); //no olvidar los parentisis
const { dataPineaChair } = storeToRefs(dataPinea);
const { band } = storeToRefs(dataPinea);

const dataRoom = async () => {
  const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/room";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (dataRoomS.value = data));
};

const dataRoomId = async () => {
  const urlData = `https://cinema-production-cb13.up.railway.app/api/v1/room/${id.value}`;
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (dataRoomE.value = data));
    
};

const sendData = async () => {
  const formData = new FormData();
  formData.append("data", arrayIds.value);

  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/unavailable/${id.value}`;
  await fetch(urlDB, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
      dataRoomId();
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // message(
  //   "center",
  //   "Creación completada",
  //   "Se ha creado correctamente el registro",
  //   1500
  // );
  console.log("todo bien")
};



const sendData2 = async () => {
  const formData = new FormData();
  formData.append("data", arrayIds.value);

  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/available/${id.value}`;
  await fetch(urlDB, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
      dataRoomId();
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // message(
  //   "center",
  //   "Creación completada",
  //   "Se ha creado correctamente el registro",
  //   1500
  // );
  console.log("todo bien")
};




const sendItem = (data) => {
  id.value = data;
  bandera.value = false;

};

const sendItem2 = (data2,index) => {
  arrayIds.value.push(data2)
  console.log( "Agregado",arrayIds.value)
  arrayIds.value.toString()
  console.log( "ENVIADO",arrayIds.value)
  sendData();
  // dataRoomId();
  arrayIds.value.pop()
  // location. reload()
};

const sendItem3 = (data2,index) => {
  arrayIds.value.push(data2)
  console.log( "Agregado",arrayIds.value)
  arrayIds.value.toString()
  console.log( "ENVIADO",arrayIds.value)
  sendData2();
  // dataRoomId();
  arrayIds.value.pop()
  // location. reload()
};

onMounted(() => {
  dataRoom();
});
</script>


<template>
  <div v-if="bandera">
    <h1 class="text-center title1">Salas</h1>
    <div class="container">
      <div v-for="item in dataRoomS" :key="item.id" class="card">
     
        <h5 class="card-title" v-text="item.name"></h5>
        <h6 class="card-subtitle mb-2">Capacidad <br />{{ item.capacity }}</h6>
        <p class="card-text" v-text="item.desc_location"></p>
        <button
            @click="sendItem(item.id), dataRoomId()"
            class="btn border border-light"
          >
            ir
          </button>
      </div>
    </div>
  </div>
  <div class="container1" v-else>
    <div class="title">
      <h1>{{ dataRoomE.name }}</h1>
    </div>
    <div class="flex-container">
        <div  v-for="item in dataRoomE.seats_distribution" :key="item.ID" class="card1">
          <button v-if="item.State=='Available'"   @click="sendItem2(item.ID)" class="text-yellow" style="background:green" >{{ item.ID }} </button>
          <button v-else  style="background:red"  @click="sendItem3(item.ID)" class="text-yellow" >{{ item.ID }} </button>
        </div>

    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

* {
  color: white;
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
.container .card h6 {
  font-weight: 600;
}
.container .card p {
  padding: 0 1rem;
  font-size: 16px;
  font-weight: 300;
}

.title1 {
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  margin-top: 3%;
  margin-bottom: 1%;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card1 {
  width: 3rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.3%;
}
.flex-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2% 10% 0% 10%;
}
.title{
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10%;
}
.card1 button{
  border-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
 
}
</style>
