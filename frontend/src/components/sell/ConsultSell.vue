<script setup>
import {  ref, onMounted, computed} from 'vue'
import { useRouter, useRoute } from 'vue-router'
  

const router = useRouter();

const sell = ref([]);

const getCategories = () => {
   const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/sell"
   fetch(urlData)
   .then(resp => resp.json())
   .then(data => sell.value = data )
   console.log(sell.value)
}

onMounted(()=> {
	getCategories();
});

const editCategory = (id) => router.push(`/editCategory/${id}`)

const categoryDelete = (id) => {
  const urlData = `https://cinema-production-cb13.up.railway.app/api/v1/category/${id}`;
  fetch(urlData, {
    method: "DELETE",
  })
    .then((response) => response)
    .then((response) => {
      console.log(response)
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

</script>
<template>
<div class="row d-flex justify-content-center">
    <div class="col-md-8 container-main">
      <div class="card-hover-shadow-2x mb-3 card">
        <div class="card-header">
          <h3 class="card-header-title font-size-lg text-capitalize text-secondary text-light text-center">Registro de ventas</h3>
         </div>
            <div style="position: static;">
              <div>
                <ul class=" list-group">
                  <li class="list-group-item" v-for="item in sell" :key="item.id">
                    <div class="todo-indicator bg-primary"></div>
                    <div class="widget-content ">
                      <div class="widget-content-wrapper">

                        <div class="flex2">
                          <p class="ms-2 mt-2"><strong >Id</strong> <span class="widget-subheading">: {{item.id}}</span> </p>
                          <p class="ms-2 mt-2"><strong >Cartelera</strong> <span class="widget-subheading">: {{item.billboard_id}}</span> </p>
                          <p class="ms-2 mt-2"><strong >Cantidad boletos</strong> <span class="widget-subheading">: {{item.amount}}</span> </p>
                          <p class="ms-2 mt-2"><strong >Total</strong> <span class="widget-subheading">: {{item.total}}</span> </p>


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
    margin-top: 10%;
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