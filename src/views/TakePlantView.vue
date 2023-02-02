<template>
    <div class="home">
      <h1>Gardiennage</h1>
      <p class="text-center">Bienvenue <span class="user-gardian">user.gardian</span>, choisissez une garde.</p>

      <form class="text-center" action="">


        <div v-for = "proprietaire in proprietaires" :key="proprietaire.id">
          <input type="radio" :id="proprietaire.id" :value="proprietaire.id" name="proprietaire">
          <label class="margin" :for="proprietaire.id">{{ proprietaire.name }}</label>
        </div>
        <br>



        <button class=" margin" type="submit">Choisir cette garde</button>
      </form>


      
    </div>
  </template>
  
  <script>
  const proprietaires = [
    { id: 1, name: 'Michel', id_plant: 1 },
    { id: 2, name: 'Jean', id_plant: 2 },
    { id: 3, name: 'Pierre', id_plant: 3 }
  ]




  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue'
  
  export default {
    data(){
      return {
        proprietaires
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
   .user-gardian {
     color: blue;
     font-weight: bold;
     text-decoration: underline;
   }
   .margin {
     margin: 10px;
   }
   </style>
  