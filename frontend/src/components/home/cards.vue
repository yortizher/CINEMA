<script setup>
import {  ref, onMounted, computed} from 'vue'
import { useRouter, useRoute } from 'vue-router'
  

const router = useRouter();

const movies = ref([]);

const getMovies = () => {
   const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/movie"
   fetch(urlData)
   .then(resp => resp.json())
   .then(data => movies.value = data )
   console.log(movies)
}

onMounted(()=> {
	getMovies();
});
</script>
<template>
    <div>
        <div class="row">
        <div class="card-main">
            <div class="card-grid card-container" v-for="item in movies" :key="item.id">
              <div class="card-header bg-transparent card-image">
                <a href="#" class="image">
                    <img :src="item.img_url" class="img-fluid rounded-start" :alt="item.name"> 
                </a>
                </div>
                <div class="card-body">
                    <div class="card-header header my-2">
                        <h4>{{item.name}}</h4>
                        <div>Género:<span>{{item.category.name}}</span></div>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <button type="button" class="btn">
                     Detalles
                    </button>
                </div>  
            </div>
        </div>
    </div>  
    </div>
</template>
<style scoped>
.card-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.2fr));
  padding: 1rem 13px;
  gap: 36px;
  border: none !important;
  perspective: 800px; 
}

.card-footer {
  padding:0;
}

.card-body { 
    position: relative;
}
.card-container {
    width: 20%;
    /* background: red; */
}
.card-main .card {
  height: 28rem;
  transition: all .5s ease-out;
  overflow: hidden;
}
.input {
    width: 90%;
    text-align: center;
}

.btn {
    background: #b20837;
    color: #f0e9cb;
    width: 100%;
}
.card-main .card:hover img {
    width: 100%;
    transform: scale(1.09) rotateY(0);
}

/* .card-main .card img {
    width: 180%;
    height: 20rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
} */
.card-grid .card-image img{
    /* width: 100%;
    height: auto; */
    width: 180%;
    height: 20rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
}
.img-fluid {
    max-width: 100%;
    height: 12rem;
}
.card-desc {
    height: 11rem;
}
.card-header {
    display: flex;
    justify-content: space-between;
    padding: 0;
   
}
.header {
    border-style: 1px solid #cacbce;
    background-color: #e9eaeb;
}
.card-quantity{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2px;
}

.card-quantity button {
    border: none !important;
    background: transparent !important;
    font-size: 2rem;
}

.footer-cta {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 1.4rem;
    left: 0;
    right: 0;
}
.footer-cta button {
    border: none !important;
}
@media (min-width: 384px) {
   .card-main {
       grid-template-columns: repeat(auto-fit, minmax(340px, 0.2fr));
    }
}
@media (min-width: 481px) {
    .card-main {
        grid-template-columns: repeat(auto-fit, minmax(295px, 9fr));
    }
    .card-container {
        width: 100%;
    }
    .card-desc {
        height: 9rem;
    }
}
@media (min-width: 496px) {
   .img-fluid {
    height: 15rem;
}
}
@media (min-width: 768px) {
  .card-main {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 36px;
 }
 .card-container {
    width: 100%;
}
.card-desc {
    height: 9rem;
} 
   .img-fluid {
    height: 14rem;
}
}
@media (min-width: 1023px) {
    .card-main {
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.3fr));
        gap: 28px;
    }
    .card-container {
        width: 18rem;
        padding: 1px 1rem;
    }
    .card-desc {
        height: 10rem;
    }
      .img-fluid {
    height: 11rem;
}
} 
@media (min-width: 1200px) {
    .card-main {
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.1fr));
        gap: 29px;
        padding: 1rem 12px;
    }
  
    .card-container{
        padding: 1px 1.8rem;
        width: 20rem;
        
    }

     .card-desc {
        height: 12rem;
    }
}
</style>