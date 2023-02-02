<template>
  <div class="home">
    <h1> Accueil </h1>
    <div class="container-fluid justify-content-md-center">
      <div class="row justify-content-md-center">
        <div class="col-md-6 text-center">
          <p id="text_intro">Bienvenue sur votre application pour prendre soin de vos plantes, déjà plus 2 millions de plantes sauvées ! N'oubliez pas d'ajouter vos plantes pour obtenir un conseil de vos experts en botanique</p>
          <router-link to="/ajouter_plante" custom v-slot="{ navigate }">
          <button class="btn btn_green" @click="navigate" role="link">
            <img id="icon_btn" src="@/assets/plant_icon_bw.png">
            Ajouter une plante</button>
          </router-link>
      <div class="row">
        <div class="col-12 pt-4">
          <span id="title_bloc">Plantes disponible à garder :</span>
        </div>
      </div>
        </div>
      </div>
      <div class="row justify-content-md-center p-2 align-items-center" id="bloc_annonce">
        <div class="col-3">
          <img src="@/assets/avatar.png" style="width: 25px;">
        </div>
        <div class="col-4" id="utlisateur_name">
          <span>{{ users[0]["firstname"] }} {{ users[0]["lastname"] }}</span>
        </div>
        <div class="col-5" id="nb_plant">Nombre de plantes: <span id="nb_plant_value">2</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue'
import axios from 'axios'


const apiUsers = "http://localhost:8080/api/users"

export default {
  name: 'HomeView',
  components: {
    Navigation, 
    Footer
  },
    data() {
        return {
            users: null,
        };
    },
    created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
              try {
                  const response = await axios.get(apiUsers)
                  this.users = response['data']['_embedded']['users']
                  console.log(this.users)
                  console.log(this.users[0]['firstname'])
              } catch (error) {
                  console.log(error)
            }
        },
    }
  // data () {
  //   return {
  //     users: null
  //   }
  // },
  // created: function () {
  //           this.fetchData()
  //       },
  // methods: {
  //           fetchData: async function () {
  //               const searchAddress = this.searchAddress
  //               const searchLimit = this.searchLimit

  //               if (searchAddress.length > 4) {
  //                   try {
  //                       const response = await axios.get(apiUrl + searchAddress + limit + searchLimit)
  //                       this.adresses = response.data['features']
  //                   } catch (error) {
  //                       console.log(error)
  //                   }
  //               }
  //               else {

  //               }
  //           },
  //         }
}
</script>
<style scoped>
#text_intro{
  font-size: 12px;
  padding: .6em;
  padding-top: 0;
}
#utlisateur_name{
  font-size: 13px;
}
#nb_plant{
  font-size: 11px;
}
#bloc_annonce{
  max-width: 550px;
  background-color: whitesmoke;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 2px 3px 3px rgb(206, 206, 206);
}
#title_bloc {
  font-size: 17px;
  padding-left: 1.1em;
  font-weight: 300;
  padding-bottom: .3em;
}
#nb_plant_value {
  color: #0e5e0b;
  font-weight: 600;
}
#icon_btn{
  margin-right: .8em;
  width: 22px;
}
.btn_green {
  background-color: #3d7606;
  color: white;
}

.btn_green:hover {
  background-color: #d8ffd1;
  color: #0e5e0b;
}
</style>
