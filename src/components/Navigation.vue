<!-- <template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Accueil<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
</template> -->

<template>
    <nav class="navbar sticky-top bg-light">
      <div class="container-fluid">
      <div class='row'>
        <div class='col-3'>
          <button class="navbar-toggler dropDownButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class='col-3'>
          <img class='icon' src="@/assets/logo.png">
        </div>
        <div class='col-6'>
          <p class='text'>A'rosa-je</p>
        </div>
      </div>
      
       
      </div>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <router-link to='/about' class="nav-link active">About</router-link>
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