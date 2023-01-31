<template>
  <header>
    <Navigation/>
  </header>
  <div class="home">
    <h1> Accueil </h1>
    <p>Bienvenue sur votre application pour garder et faire garder vos plantes</p>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'HomeView',
  components: {
    Navigation
  }
}
</script>
