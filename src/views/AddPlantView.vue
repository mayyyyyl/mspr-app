<template>
  <form id="plant_id" v-on:submit.prevent="submitForm">
  <div class="add_plant">
    <div class="container-fluid justify-content-md-center">
      <div class="row justify-content-md-center">
        <div class="col-md-6 text-center">
          <h1>Ajouter une annonce</h1>
          <div class="row">
            <div class="col-12 pb-4">
              <span id="title_bloc">Bienvenue, ici vous pouvez ajouter de nouvelles annonces afin de faire garder vos plantes par un autre utilisateur pendant votre absence.</span>
            </div>
          </div>
          <label for="plant_select">Veuillez choisir l'espèce de votre plante:</label>
          <select class="form-select" aria-label="Default select example" id="plant_select" name="plant_select" v-model="plant_select" required>
            <option selected>-- Pas de plantes selectionnées --</option>
            <option v-for="plant, index in plantList"  :value="index + 1" >{{ plant["spicies"] }}</option>
          </select>
            <button class="btn btn_green mt-5" type="submit" role="submit">Ajouter une plante</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

const apiPlantList = "/api/plantsLists"
const apiService = "/api/services"

export default {
  name: 'HomeView',
  components: {
    Navigation,
    Footer
  },
  data() {
        return {
            plantList: null,
        };
    },
  created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
              try {
                  const response = await axios.get(apiPlantList)
                  this.plantList = response['data']['_embedded']['plantsLists']
                  console.log(this.plantList)
              } catch (error) {
                  console.log(error)
              };
            },
            submitForm(){

            axios.post(apiService, { user_id: 1, plant_id: this.plant_select })
                 .then((res) => {
                     console.log(res)
                 })
                 .catch((error) => {
                     console.log(error)
                 }).finally(() => {
                     //Perform action in always
                 });
        }
          }
}
</script>
<style scoped>
#icon_btn{
  margin-right: .8em;
  width: 22px;
}
.btn_green {
  background-color: #3d7606;
  color: white;
}

.btn_green:hover {
  background-color: #d0f6ac;
  color: #0e5e0b;
}
.dropdown{
  block-size: 45px;
  font-size: 22px;

}
.user-proprio {
     color: green;
     font-weight: bold;
     text-decoration: underline;
}
.form-select{
  max-width: 50%;
  margin: auto;
  margin-top: .6em;
}
</style>
