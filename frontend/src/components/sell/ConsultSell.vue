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
<div class="row d-flex justify-content-end container container-main">
    <div class="col-md-8">
      <div class="card-hover-shadow-2x mb-3 card">
        <div class="card-header">
          <h3 class="card-header-title font-size-lg text-capitalize text-secondary text-light text-center">Ventas</h3>
         </div>
            <div style="position: static;">
              <div>
                <ul class=" list-group">
                  <li class="list-group-item" v-for="item in sell" :key="item.id">
                    <div class="todo-indicator bg-primary"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">

                        <div class="">
                          <p>  Id : {{item.id}}</p>
                          <p>  Cartelera : {{item.billboard_id}}</p>
                          <p>Cantidad boletos : {{item.amount}}</p>
                          <p>Total : {{item.total}}</p>
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
	margin-top: 5rem;
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
    margin-top:100px;
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
</style>