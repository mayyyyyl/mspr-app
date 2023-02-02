<template>
    <div class="home">
      <h1>Suivi de vos plantes</h1>
      <p class="text-center">Bienvenue <span class="user-proprio">user.proprietaire</span>, suivez votre garde en cours.</p>
    </div>

    <ul class="text-center">
      <li style="list-style-type: none;" v-for="plant in listPlant" :key="plant.id">
        <h2>{{ plant.name }}</h2>
        <p>"{{ plant.conseil }}"</p>
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
   <style scoped>
   .text-center {
     text-align: center;
   }
   .user-proprio {
     color: green;
     font-weight: bold;
     text-decoration: underline;
   }
   .margin {
     margin: 10px;
   }
   </style>
  