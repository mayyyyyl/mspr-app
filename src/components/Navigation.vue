<template>
    <nav class="navbar sticky-top bg-light">
      <div class="container-fluid">
      <div class='row'>
        <div class='col-3'>
        <a aria-current="page" href="/"><img class='icon' src="@/assets/logo.png"></a>
        </div>
        <div class='col-6'>
          <p class='text'>A'rosa-je</p>
        </div>
        <div class='col-3'>
          <button class="navbar-toggler dropDownButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
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
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to='/ajouter_plante' class="nav-link">Ajouter une plante</router-link>
                <router-link to='/suivi' class="nav-link">Suivi des plantes</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gardien
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to='/garder_des_plantes' class="nav-link">Garder des plantes</router-link>
                <router-link to='/ajouter_suivi' class="nav-link">Ajouter le suivi</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Botaniste
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to='/ajouter_conseil' class="nav-link">Ajouter un conseil</router-link>
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
.navbar {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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