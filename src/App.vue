<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <header>
    <Navigation/> 
  </header>

  <router-view/>

  <footer>
    <Footer/>
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navigation, 
    Footer
  }
}
</script>

<style>







/* ____________________________________________ */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: var(--blue);
  color: #2c3e50;
}

nav {
  padding: 30px;
}

/* .logo-arosaje {
  text-decoration: none;
  font-family: cursive;
  color: green;
  text-shadow: 1px 1px 2px rgb(63, 217, 63), 0 0 1em rgb(63, 217, 63), 0 0 0.2em rgb(63, 217, 63);
} */

nav a.router-link-exact-active {
  color: #3d7606;
}


</style>
