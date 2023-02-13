<template>
    <div class="container-fluid home">
      <div class="row">
        <h1>Ajouter un conseil</h1>
      <p class="text-center">Entant expert sur la plateforme, n'hésitez à donner vos conseils professionnels et vos secrets de grands-mères pour garder ses plantes en pleine santé</p>
    </div>
      </div>
      <div class="row p-4">
        <form id="plant_id" v-on:submit.prevent="submitForm">
      <label class="margin" for="proprietaires">Propriétaire :</label>
      <select name="proprietaires" id="proprietaires">
        <option v-for = "proprietaire in proprietaires" :value="proprietaire.id">{{ proprietaire.name }}</option>
      </select>
      <br>

      <label class="margin" for="plantes">Plante :</label>
      <select name="plantes" id="plantes">
        <option v-for = "plante in plantes" :value="plante.id">{{ plante.name }}</option>
      </select>
      <br>

      <label class="margin" for="comment">Conseil :</label>
      <input type="text" name="conseil" id="conseil">
      <br>

      <button class="btn btn_green" type="submit">Ajouter le conseil</button>

    </form>
      </div>
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

  const apiConseil = "/api/users"

  export default {
    data(){
      return {
        proprietaires,
        plantes,
        conseil,
        annonce: null,
      }
    },
    created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
              try {
                  const response = await axios.get(apiPlantList)
                  this.users = response['data']['_embedded']['users']
                  console.log(this.plantList)
              } catch (error) {
                  console.log(error)
              };
            },
            submitForm: async function () {

            this.annonce = {user: ["api/users/1"], plantsList: this.plant_select, gardien:["api/users/3"]};
            console.log(this.annonce);
            try {
              const response = await axios.post(apiService, this.annonce);
              // this.annonce.push(response.annonce);
            } catch(error) {
              console.log(error)
            }
            try {
              const resp = await axios.put(apiService + "/2", this.annonce)
            } catch(error) {
              console.log(error)
            }
          },
        }
  }
  </script>
  <style scoped>
  .text-center {
    text-align: center;
  }
  .margin {
    margin: 10px;
  }
  .btn_green {
  background-color: #3d7606;
  color: white;
  }
  .btn_green:hover {
  background-color: #d0f6ac;
  color: #0e5e0b;
  }
  </style>