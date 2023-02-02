<template>
    <div class="home">
      <h1>Conseils</h1>
      <p class="text-center">Bienvenue <span class="user-bota">user.botanist</span>, donnez vos conseils professionnels.</p>
    </div>

    <form class="text-center" action="">
      <label class=" margin" for="proprietaires">Propriétaire :</label>
      <select name="proprietaires" id="proprietaires">
        <option v-for = "proprietaire in proprietaires" :value="proprietaire.id">{{ proprietaire.name }}</option>
      </select>
      <br>

      <label class=" margin" for="plantes">Plante :</label>
      <select name="plantes" id="plantes">
        <option v-for = "plante in plantes" :value="plante.id">{{ plante.name }}</option>
      </select>
      <br>

      <label class=" margin" for="comment">Conseil :</label>
      <input type="text" name="conseil" id="conseil">
      <br>

      <button class=" margin" type="submit">Ajouter</button>


    </form>
  </template>
  
  <script>
  const proprietaires = [
    { id: 1, name: 'Michel', id_plant: 1 },
    { id: 2, name: 'Jean', id_plant: 2 },
    { id: 3, name: 'Pierre', id_plant: 3 }
  ]
  const plantes = [
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
  const conseil = "";


  

  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue'
  
  export default {
    data(){
      return {
        proprietaires,
        plantes,
        conseil
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
  .user-bota {
    color: gold;
    font-weight: bold;
    text-decoration: underline;
  }
  .margin {
    margin: 10px;
  }
  </style>