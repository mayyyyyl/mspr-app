<template>
    <header>
      <Navigation/>
    </header>
  <div class="about">
    <h1>About page</h1>
  </div>
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
