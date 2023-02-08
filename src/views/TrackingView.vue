<template>
    <div class="home">
      <h1>Suivi de vos plantes</h1>
      <p class="text-center">Retrouvez ici toutes les photos de vos plantes envoyées par les gardiens. Et les précieux conseils de nos botanistes.</p>
    </div>
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner text-center">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/smallplant.jpg" alt="First plant">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/plant-pot.jpg" alt="Second plant">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/succulents.jpg" alt="Third plant">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
    </div>
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
  const apiAdviceList = "/api/botanists/1/advices"
  const apiBotanist = "/api/botanists"


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
  