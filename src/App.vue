<template>
  <body>
    <header>
      <Navigation/>
    </header>
    <main>      
      <router-view/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </body>
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
/* import de font */
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Rubik:wght@300&display=swap');


h2, h3, h4, h5 {
  font-family: "Rubik";
}

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

h1 {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  padding: 0.8em;
  color: #0e5e0b;
}
html, body {
  box-sizing: content-box;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

</style>
