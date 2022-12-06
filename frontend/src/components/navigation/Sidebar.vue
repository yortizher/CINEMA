<template>
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#57557A" class="bi bi-body-text" viewBox="0 0 16 16">
     <path fill-rule="#57557A" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
    </svg>
  </label>
  <div id="sidebarMenu" class="sidebar">
    <div class="sidebar-header">
        <h3>Administración</h3>
    </div>
    <ul class="sidebarMenuInner components">
        <li ><RouterLink to="/user" href="#">Clientes</RouterLink></li>
        <li><RouterLink to="/schedule" href="#">Horarios</RouterLink></li>
        <li><RouterLink to="/category" href="#">Categorías</RouterLink></li>
        <li><RouterLink to="/movie" href="#">Películas</RouterLink></li>
        <li><RouterLink to="/billboard" href="#">Cartelera</RouterLink></li>
        <li><RouterLink to="/createRoom" href="#">Sala</RouterLink></li>
    </ul>
  </div>
  
</template>
<style scoped>

.sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #001427;
    color: #fff;
    transition: all 0.3s;
    margin: 0.1rem 0;
}

.sidebar.active {
    margin-left: -250px;
}

.sidebar .sidebar-header {
    padding: 20px;
    background: #03071E;
}

.sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

.sidebar ul p {
    color: #fff;
    padding: 10px;
}

.sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

.sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

.sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #03071E;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    left: 0;
    width: 250px;
    margin-top: 60px;
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
    z-index: 2;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
ul {
	 list-style: none;
	 margin: 0;
	 padding: 0;
}
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
}
.router-link-exact-active {
  background-color: var(--purple_navy);;
}
</style>