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
    <div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="card-grid card-container" v-for="item in movies " :key="item.id">
            <div class="card-image">
                <a href="#" class="image">
                    <img :src="item.img_url" class="img-fluid " :alt="item.name">
                </a>
                <span class="card-discount-label">Duración:{{item.duration}}</span>
                <a href="" class="add-to-cart">Detalles</a>
            </div>
            <div class="card-content">
                <h3 class="title text-secondary">{{item.name}}</h3>
                <div class="sub-title">Género:<span>{{item.category.name}}</span></div>
            </div>
        </div>
    </div>
</div>
</template>
<style  scoped>
.card-grid{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.2fr));
  padding: 1rem 13px;
  gap: 36px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.2fr));
  padding: 1rem 13px;
  gap: 36px;
  border: none !important;
  perspective: 800px; 
}
/* .card-grid .card-image{
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.card-grid .card-image a.image{display: block; } */
.card-grid .card-image img{
    /* width: 100%;
    height: auto; */
    width: 180%;
    height: 20rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
}
/* .products .card img {
    width: 180%;
    height: 20rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
} */
.img-fluid {
    max-width: 100%;
    height: 12rem;
}
.card-grid .card-discount-label{
    color: #fff;
    background: var(--purple_navy);
    font-size: 13px;
    font-weight: 600;
    line-height: 25px;
    padding: 0 20px;
    position: absolute;
    top: 10px;
    left: 0;
}
.card-grid .card-links{
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 10px;
    right: -50px;
    transition: all .5s ease 0s;
}
.card-grid:hover .card-links{ right: 10px; }
.card-grid .card-links li a{
    color: #333;
    background: transparent;
    font-size: 17px;
    line-height: 38px;
    width: 38px;
    height: 38px;
    border: 1px solid #333;
    border-bottom: none;
    display: block;
    transition: all 0.3s;
}
.card-grid .card-links li:last-child a{ border-bottom: 1px solid #333; }
.card-grid .card-links li a:hover{
    color: #fff;
    background: #333;
}
.card-grid .add-to-cart{
    background: var(--purple_navy);;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 100%;
    padding: 10px 26px;
    position: absolute;
    left: 0;
    bottom: -60px;
    transition: all 0.3s ease 0s;
}
.card-grid:hover .add-to-cart{ bottom: 0; }
.card-grid .add-to-cart:hover{ text-shadow: 4px 4px rgba(0,0,0,0.2); }
.card-grid .card-content{
    background: #fff;
    padding: 15px;
    box-shadow: 0 0 0 5px rgba(0,0,0,0.1) inset;
}
.card-grid .title{
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px;
}
.card-grid .title a{
    color: #777;
    transition: all 0.3s ease 0s;
}
.card-grid .title a:hover{ color: var(--purple_navy); }
.card-grid .sub-title{
    color: #0d0d0d;
    font-size: 14px;
    font-weight: 600;
}
.card-grid .sub-title span{
    color: #888;
    font-size: 13px;
    font-weight: 400;
    /* text-decoration: line-through; */
}
@media screen and (max-width: 990px){
    .product-grid{ margin-bottom: 30px; }
}

</style>