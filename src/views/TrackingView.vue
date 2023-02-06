<template>
    <div class="home">
      <h1>Suivi de vos plantes</h1>
      <p class="text-center">Retrouvez ici toutes les photos de vos plantes envoyées par les gardiens. Et les précieux conseils de nos botanistes.</p>
    </div>

    <ul class="text-center">
      <li style="list-style-type: none;" v-for="plant in listPlant" :key="plant.id">
        <h2>{{ plant.name }}</h2>
        <p>"{{ plant.conseil }}"</p>
        <img :src="plant.image" alt="image de la plante">
      </li>
    </ul>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3>Le coin des experts:</h3>
        </div>
        <div class="row bota_section mb-2" v-for="advices in computedObj">
          <div class="col-3 bota_name">
            <img src="@/assets/avatar.png" style="width: 25px;">
            <span>{{ botanist['firstname'] }}  {{ botanist['lastname'] }}</span>
          </div>
          <div class="col-9 justify-content-center bota_advise">
            <p>{{  advices['advice'] }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 justify-content-center">
          <button class="btn" @click="limit = null">Voir plus</button>
        </div>
      </div>
    </div>

    
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

  const apiAdviceList = "http://localhost:8080/api/botanists/1/advices"
  const apiBotanist = "http://localhost:8080/api/botanists"


  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue'
  import axios from 'axios';
  
  export default {
    components: {
      Navigation, 
      Footer
    },
    data() {
        return {
            adviceList: null,
            botanist:null,
            limit: 2,
            listPlant,
        };
    },
    computed:{
    computedObj(){
      return this.limit ? this.adviceList.slice(0,this.limit) : this.adviceList
      }
    },
    created: function () {
          this.fetchData()
      },
      methods: {
          fetchData: async function () {
                try {
                    const response = await axios.get(apiAdviceList)
                    const response2 = await axios.get(apiBotanist)
                    
                    this.adviceList = response['data']['_embedded']['advices']
                    this.botanist = response2['data']['_embedded']['botanists'][0]

                    console.log(this.adviceList)
                    console.log(this.botanist)
                } catch (error) {
                    console.log(error)
                };
              }
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
   .bota_section {
    margin: auto;
    background-color: #d0f6ac;
    border-radius: 5px;
    max-width: 90%;
   }
   .bota_name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .8em;
    text-align: center;
   }
   .bota_advise{
    font-size: .8em;
    margin-top: 1em;
   }
   h3{
    font-size: 1.4em;
    padding: .7em;
   }
   </style>
  