<template>
    <div class="home">
      <h1> Accueil </h1>
      <p>Bienvenue sur votre application pour garder et faire garder vos plantes</p>
    </div>

    <form action="">
      <label for="proprietaires">Propriétaire</label>
      <select name="proprietaires" id="proprietaires">
        <option value="1">Michel</option>
        <option value="2">Jean</option>
        <option value="3">Pierre</option>
      </select>

      <label for="plantes">Plante</label>
      <select name="plantes" id="plantes">
        <option value="1">Mimosa</option>
        <option value="2">Hortensia</option>
        <option value="3">Dahlia</option>
      </select>

      <label for="comment">Conseil</label>
      <input type="text" name="conseil" id="conseil">

      <button type="submit">Ajouter</button>


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
        plantes
      }
    },
    components: {
      Navigation, 
      Footer
    }
  }
  </script>
  