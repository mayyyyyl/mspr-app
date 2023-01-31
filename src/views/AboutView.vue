<template>
    <header>
      <Navigation/>
    </header>
  <div class="about">
    <h1>About page</h1>
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
