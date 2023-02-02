<template>
    <div class="home">
      <h1> Accueil </h1>
      <p>Bienvenue sur votre application pour garder et faire garder vos plantes</p>
    </div>

    <ul>
      <li v-for="plant in listPlant" :key="plant.id">
        <h2>{{ plant.name }}</h2>
        <p>{{ plant.conseil }}</p>
        <img :src="plant.image" alt="image de la plante">
      </li>
    </ul>

    
  </template>
  
  <script>
  const listPlant = [
    { id: 1, name: 'Mimosa', 
    conseil : 'Arrosez-la peu souvent.',
    image: 'https://www.jardiner-malin.com/wp-content/uploads/2019/03/mimosa-1.jpg' },
    { id: 2, name: 'Hortensia', 
    conseil : 'Arrosez-la trés souvent.', 
    image: 'https://www.jardiner-malin.com/wp-content/uploads/2019/03/hortensia-1.jpg' },
    { id: 3, name: 'Dahlia',
    conseil : 'Arrosez-la pas du tout.',
    image: 'https://www.jardiner-malin.com/wp-content/uploads/2019/03/dahlia-1.jpg' },
  ];



  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue'
  
  export default {
    data() {
      return {
        listPlant
      }
    },

    components: {
      Navigation, 
      Footer
    }
  }
  </script>
  