<script setup>
defineProps(['movie']);
</script>

<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"><span class="h3">{{movie.name}}</span></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
        <div class="contant">
          <div class="container-legth">
            <p class="text-secondary"><img :src="movie.img_url"  class="img-fluid" alt="foto de película"></p>
          </div>
          <div class="container-right">
            <p class="text-secondary"><span class="h5 text-secondary">Duración:</span> {{movie.duration}}</p>  
            <p class="text-secondary"><span class="h5 text-secondary">Sinopsis:</span> {{movie.synopsis}}</p>
            <p class="text-secondary"><span class="h5 text-secondary">Rango de Edad:</span> {{movie.age_range}}</p>
          </div>
          <!-- <p class="text-secondary"><span class="h5 text-secondary ">Género:</span> {{movie.category.name}}</p>  -->
        </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.contant {
  display: flex;
}
.container-legth{
  width: 40%;
}
.container-right{
  width: 60%;
  margin-left: 1rem;
}
.img-fluid {
    max-width: 100%;
    height: 18rem;
}
.modal-header, .modal-title, .btn {
    color: #fff;
    background: var(--purple_navy);
}
</style>