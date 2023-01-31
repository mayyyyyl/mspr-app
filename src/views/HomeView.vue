<template>
  <header>
    <Navigation/>
  </header>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>
