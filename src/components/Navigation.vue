<template>
    <nav class="navbar sticky-top">
      <div class="container-fluid">
        <div class='row'>

          <div class='col-1'>
            <button class="navbar-toggler dropDownButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class='col-3 logo-div'>
            <a aria-current="page" href="/" class='logo-arosaje'>
              <img class='icon' src="@/assets/logo.png">
              <span class='text'>A'rosa-je</span>
            </a>
          </div>
         
          

        </div>
      </div>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to='/' class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Propriétaire
              </a>
              <div class="dropdown-menu navbar-sous-menu" aria-labelledby="navbarDropdown">
                <router-link to='/ajouter_plante' class="nav-link link-ss-menu">Ajouter une plante</router-link>
                <router-link to='/suivi' class="nav-link link-ss-menu">Suivi des plantes</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gardien
              </a>
              <div class="dropdown-menu navbar-sous-menu" aria-labelledby="navbarDropdown">
                <router-link to='/garder_des_plantes' class="nav-link link-ss-menu">Garder des plantes</router-link>
                <router-link to='/ajouter_suivi' class="nav-link link-ss-menu">Ajouter le suivi</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Botaniste
              </a>
              <div class="dropdown-menu navbar-sous-menu" aria-labelledby="navbarDropdown">
                <router-link to='/ajouter_conseil' class="nav-link link-ss-menu">Ajouter un conseil</router-link>
              </div>
            </li>
          </ul>
        </div>
    </nav>
    
</template>
    
<script>
    export default {
    data() {
        return {
        showMenu:false
        }
    },
    methods: {
        toggleShowMenu() {
        if (this.showMenu == false){
            this.showMenu=true;
        } else {
            this.showMenu = false;
        }
        }
    }
    }
</script>

<style scoped>

:root {
  --light-color: #a7e09c;
  --light2-color: #ceecc9;

  --primary-color: #5fa819;
  --second-color: #3d7606;
}


.navbar {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ceecc9;
    text-align: center;
    font-weight: bold;
}
.navbar-sous-menu {
  background: #dff5db;
  text-align: center;
  font-weight: none;
  font-size: 0.7em;
}
.link-ss-menu {
  color: gray !important;
}

.row {
    width: 100%;
}
/* .logo-arosaje {
  height: 80%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.logo-arosaje img {
  width: 24m;
}
.logo-arosaje span {
  text-decoration: none;
  font-size: 1.5em;
} */
.logo-div {
  /* position: relative; */
  text-align: center;
  height: 4em;
}
.logo-arosaje {
  position: relative;
  text-decoration: none;
  margin: auto;
}
.logo-arosaje img {
  position: absolute;
  left: 8em;
  z-index: 1;
  left: 15px;
}
.logo-arosaje span {
  position: absolute;
  z-index: 5;
  font-size: 2em;
  width: 10em;
}


.menuButton{
    height: 4em;
}
.menu {
    position:sticky;
}
.icon {
    max-height:50px;
    margin-top: 10%;
}
.icons {
    height: 30px;
    margin-right: 5%;
}
.dropDownButton{
    margin-top:10%;
    height: 100%;
    width: 200%;
    margin-left: -20%;
    border:none;
}
.text{
    margin-top : 20px;
    margin-left: -10px;
    font-family: 'kanit';
}
</style>