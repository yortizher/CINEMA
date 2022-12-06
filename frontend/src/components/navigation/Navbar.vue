<script setup>

</script>
<template>
      <header class="header">
        <nav class="navbar navbar-expand-sm navbar-main tabs">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">
                    <span class="navbar-text logo">CINEMA</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#57557A" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="#57557A" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item"><RouterLink to="/" class="tab nav-link" href="#">Películas</RouterLink></li>
                        <li class="nav-item"><RouterLink to="/room" class="tab nav-link" href="#">Salas</RouterLink></li>
                        <li class="nav-item"><RouterLink to="/sell" class="tab nav-link" href="#">Ventas de Entradas</RouterLink></li>
                    </ul>
                </div>
            </div>
        </nav>  
    </header>
</template>
<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');


.navbar-brand {
  color: #f0e9cb;
}
.navbar-main {
  background-color: #292728;
  color: #f0e9cb;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  box-shadow: 0 0 0;
}
.navbar-toggler-icon {
  color: #f0e9cb;
}
.nav-link {
  color: #f0e9cb;
  font-size: 1.3rem;
}
/* .nav-link:hover {
  color: #b08338;
} */
.logo {
    margin:  2% 25%;
    font-family: 'Rubik Distressed', cursive;
    font-size: 2.5rem;
    color: var(--purple_navy);
}
.header {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    position: fixed;
    /* height: 60px!important;
    overflow: hidden; */
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
	 background-color: var(--purple_navy);;
	 cursor: pointer;
}

@media (min-width: 481px) {
  .nav-link {
    width: 90%;
    margin: 2px 28px;
    font-size: 0.8rem;
  }
}
@media (min-width: 576px) {
  .navbar-collapse {
    flex-grow: 0;
    align-items: flex-end;
  }
  .nav-link {
    width: 100%;
    margin: 2px 0px;
    font-size: 0.7rem;
  }
  .bi {
  top: 1px;
}  
   .logo {
    font-size: 1.4rem;
  }
  .navbar-expand-sm {
    flex-wrap: nowrap;
  }
}
@media (min-width: 768px) {
  .navbar-collapse {
    flex-grow: 0;
    align-items: flex-end;
  }
  .nav-link {
    width: 100%;
    margin: 5px 1px;
    font-size: 1.2rem;
  }
}
@media (min-width: 1023px) {
  .nav-link {
    width: 100%;
    margin: 5px 10px;
    font-size: 1.4rem;
  }
 
  .logo {
    font-size: 2.3rem;
  }
} 

.router-link-exact-active {
  background-color: var(--purple_navy);;
}
</style>