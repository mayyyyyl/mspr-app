<template>
  <h1>Mettre à jour le suivi</h1>
    <p id="text_intro">Ajouter une photo de la plante que vous gardez afin de compléter son suivi</p>
    <div class="container-fluid">
      <form id="app" v-on:submit.prevent="submitForm">
      <div class="row p-4">
        <div class="col">
          <label for="plant_id">Choisir la plante pour le suivi:</label>
          <select class="form-select" id="plant_select" name="plant_select" v-model="plant_select" required>
            <option :value="null">-- Pas de plante selectionnée --</option>
            <option v-for="plant, index in plantList"  :value="index + 1" >{{ plant }}</option>
          </select>
        </div>
      </div>
      <div class="row p-4">
        <div class="d-flex col justify-content-center">
          <div id="app" class="web-camera-container">
          <div class="camera-button text-center">
              <button type="button" class="btn btn_green" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                <span v-if="!isCameraOpen">Ouvrir l'appareil photo</span>
                <span v-else>Fermer l'appareil photo</span>
            </button>
          </div>
          <div v-show="isCameraOpen && isLoading" class="camera-loading">
            <ul class="loader-circle">
              <li>Connexion à la caméra</li>
            </ul>
          </div>
          
          <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
            
            <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
              
            <video v-show="!isPhotoTaken" ref="camera" :width="250" :height="337.5" autoplay></video>
            
            <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="250" :height="337.5"></canvas>
          </div>
          
          <div v-if="isCameraOpen && !isLoading" class="camera-shoot text-center">
            <button type="button" class="btn" @click="takePhoto">
              <img src="@/assets/camera.png">
            </button>
          </div>
          <div v-if="isPhotoTaken && isCameraOpen" class="camera-download text-center pt-1">
            <!-- <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
              Télécharger
            </a> -->
            <button type="submit" class="btn btn_green">Envoyer</button>
          </div>
        </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const apiServices = "/api/users/3/services"


export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      services: null,
      plantList: [],
      plant_select: null,
    }
  },
  created: function () {
        this.fetchData(),
        this.fetchPlants()
    },
  methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});


			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
    previewFiles(event) {
      console.log(event.target.files);
   },
   submitForm(){

    axios.post(apiService, { user: 1, plantsList: this.plant_select })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        }).finally(() => {
            //Perform action in always
        });
    },
    fetchPlants: async function(annonce){
      try{
        const url = annonce['_links']['plantsList']['href'].replace("http://localhost:8080/", "");
        const responsePlants = await axios.get(url)
        this.plantList.push(responsePlants['data']['spicies'])
        console.log(this.plantList)
        console.log(responsePlants['data']['spicies'])
      }catch (error){
        console.log(error)
      }
    },
    fetchData: async function () {
        try {
            const response = await axios.get(apiServices)
            this.services = response['data']['_embedded']['services']
            console.log(this.services)
        } catch (error) {
            console.log(error)
        };
        this.services.forEach(annonce => this.fetchPlants(annonce));
    },

  }
}
</script>
<style>
#text_intro{
  font-size: 14px;
  padding: .6em;
  padding-top: 0;
  text-align: center;
}
.btn_green {
  background-color: #3d7606;
  color: white;
}

.btn_green:hover {
  background-color: #d8ffd1;
  color: #0e5e0b;
}
.user-gardian {
     color: blue;
     font-weight: bold;
     text-decoration: underline;
   }
</style>