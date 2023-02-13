<template>
  <div class="container-fluid home">
    <div class="row">
        <h1>Garder des plantes</h1>
    <p class="text-center">Passionnez de botanique, vous voulez rendre un service en gardant les plantes d'un autre utilisateur. Vous êtes au bon endroit !</p>
    </div>
    <div class="row p-4">
      <form class="text-center" id="plant_id" v-on:submit.prevent="submitForm">
          <select class="form-select mb-3" id="plant_select" name="plant_select" v-model="plant_select" required >
              <option :value="null">-- Pas de plantes selectionnées --</option>
              <option v-for="proprietaire, index in proprietaires"  :value="proprietaire.firstname" >Les {{ userPlants[index] }} plante(s) de {{ proprietaire.firstname }} </option>
          </select>
          <button class="btn btn_green" type="submit">Valider cette garde</button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'


const apiUsers = "/api/users"
const apiService = "/api/services"

export default {
    data() {
        return {
            proprietaires: null,
            userPlants: [],
            plant_select: null,
        };
    },
    created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
              try {
                  const response = await axios.get(apiUsers)
                  this.proprietaires = response['data']['_embedded']['users']
              } catch (error) {
                  console.log(error)
              };
              for (var i = 1; i < this.proprietaires.length; i++) {
                try {
                    const responsePlants = await axios.get(apiUsers +"/" + i + "/services")
                    this.userPlants.push(responsePlants['data']['_embedded']['services'].length)
                    console.log(this.userPlants)
                } catch (error) {
                    console.log(error)
                }
              };
        },
        submitForm(){

        axios.post(apiService, { gardien:1 , plantsList: `http://localhost:8080/api/plantsList/${this.plant_select}`})
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
.text-center {
  text-align: center;
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
  