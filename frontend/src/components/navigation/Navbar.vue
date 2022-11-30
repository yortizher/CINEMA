<script setup>

</script>
<template>
 <div class="header">
    <nav class="tabs">
        <div class="container-fluid">
            <span class="navbar-text logo">CINEMA</span>
        </div>
        <ul>
            <li><a class="tab" href="#">Peliculas</a></li>
            <li><a class="tab" href="#">Salas</a></li>
            <li><a class="tab" href="#">Cartelera</a></li>
            <li><a class="tab" href="#">Ventas de Entradas</a></li>
        </ul>
   </nav>
 </div>
  
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');



.logo {
    margin:  2% 5%;
    font-family: 'Rubik Distressed', cursive;
    font-size: 2.5rem;
    color: #6A040F;
}
.header {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 10;
}

ul {
	 list-style: none;
	 margin: 0;
	 padding: 0;
}
.tabs {
     display: flex;
	 font-family: 'Roboto', sans-serif;
	 text-transform: uppercase;
	 font-size: 1rem;
	 position: fixed;
	 /* top: 58px; */
	 left: 0;
	 background-color:  #001427;
	 border-bottom: 1px solid #03071E;
	 width: 100vw;
	 box-sizing: border-box;
}
.tabs > ul {
	 display: flex;
	 justify-content: flex-end;
     width: 950px;
	 /* overflow-x: auto; */
	 flex-wrap: wrap;
}
 .tabs .tab {
	 font-weight: 300;
	 font-size: 1em;
	 padding: 1em 0.75em;
	 display: block;
	 color: rgba(255, 255, 255, .8);
	 text-decoration: none;
}
 .tabs .tab:hover {
	 background-color: #0062b3;
	 cursor: pointer;
}
/* .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
} */

</style>