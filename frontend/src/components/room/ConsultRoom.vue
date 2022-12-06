<script setup>
import {  ref, onMounted, computed} from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useRoomStore } from "@/stores/room.js";
import { storeToRefs } from "pinia";
const dataPinea = useRoomStore(); //no olvidar los parentisis
const { idRoom } = storeToRefs(dataPinea);
  

const router = useRouter();

const salas = ref([]);


const idTwo = ref("");


const getSalas = () => {
  const urlData =
    "https://cinema-production-cb13.up.railway.app/api/v1/room";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (salas.value = data));
};

onMounted(()=> {
	getSalas();
});

 const editCategory = (id) => router.push(`/EditRoom/${id}`)

const categoryDelete = (id) => {
  const urlData = `https://cinema-production-cb13.up.railway.app/api/v1/room/${id}`;
  fetch(urlData, {
    method: "DELETE",
  })
    .then((response) => response)
    .then((response) => {
      
      console.log(response)

/////////////////////////////////////////////aca

      getSalas();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  message(
    "center",
    "Eliminado correctamente",
    "Se ha eliminado una categoria",
    1500
  );
  console.log("diego",id)

 

};

const message = (position, title, text, time) => {
  Swal.fire({
    position: position,
    icon: "success",
    title: title,
    text: text,
    showConfirmButton: false,
    timer: time,
  });
};

const sendData =(data)=>{
  idRoom.value=data;
}

</script>
<template>
<div class="row d-flex justify-content-center">
    <div class="col-md-8 container-main">
      <div class="card-hover-shadow-2x mb-3 card">
        <div class="card-header">
          <h3 class="card-header-title font-size-lg text-capitalize text-secondary text-light text-center">Salas yenifer ortiz</h3>
         </div>
            <div style="position: static;">
              <div>
                <ul class=" list-group">
                  <li class="list-group-item" v-for="item in salas" :key="item.id">
                    <div class="todo-indicator bg-primary"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                       
                        <div class="flex2">
                          <p class="ms-2 mt-2">
                            <strong >Nombre </strong>
                            <span class="widget-subheading">: {{item.name}}</span> 
                          </p>
                        </div>
                        
                        <div class="widget-content-right">
                          <button @click="(editCategory(item.id),sendData(item.id))" class="border-0  btn btn-outline-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                          </button>
                          <button @click="categoryDelete(item.id)"  class="border-0 btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    </div>
</div>
</template>
<style scoped>
.container-main {
	margin: 9rem auto;
  width: 90%;
}
.widget-subheading{
    color: var(--medium_gray);
    font-size: 1rem;
    width: 80%;
    margin: 0 22px 0 0;
}

.card-header {
  background: var(--purple_navy);
}
.sub-title {
  color: var(--space_cadet);
}
.bg-primary {
  background-color: var(--medium_purple) !important;
}
.container{
    margin-top:10%;
}

.widget-subheading{
    color: var(--medium_gray);
    font-size: 0.8rem;
}
.todo-indicator {
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: 0.3rem;
    left: 0.625rem;
    top: 20%;
    opacity: .6;
    transition: opacity .2s;
}
.widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
}

.widget-content .widget-content-right {
    margin-left: auto;
}
.btn-outline-success:hover {
    color: var(--white);
    background-color: #3ac47d;
    border-color: #3ac47d;
}
@media(min-width: 450px){
.container-main {
  width: 85%;
}
.row-item {
  flex-direction: row;
  width: 450px;  
}
}

@media(min-width: 470px){
  
  .row-item {
  flex-direction: column;
  width: 250px;  
}

}
@media(min-width: 481px){
  .row-item {
  flex-direction: column;
  width: 310px;  
}

}
@media(min-width: 496px){
  
  .row-item {
  width: 324px;  
}

}
@media (min-width: 768px) {
  .container-main {
    width: 75%;
  }
  .row-item {
    flex-direction: row;
    width: 528px;  
}
}
@media (min-width: 1023px) {
  .row-item {
    width: 730px;  
}
}

@media (min-width: 1200px) {
  .container-main {
    width: 60%;
  }
  .row-item {
    width: 580px;  
}
}
</style>