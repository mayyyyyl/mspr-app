<template>
  <h1>Mettre à jour le suivi</h1>
    <p id="text_intro">Ajouter une photo de la plante que vous garder afin de compléter le suivi</p>
    <div class="container-fluid">
      <form id="app" @submit="checkForm" method="post">
      <div class="row p-4">
        <div class="col">
          <label for="plant_id">Choisir la plante pour le suivi:</label>
          <select class="form-select" aria-label="Default select example" id="plant_id" required>
            <option selected>-- Pas de plante selectionnée --</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row p-4">
        <div class="d-flex col justify-content-center">
          <div id="app" class="web-camera-container">
          <div class="camera-button">
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
          <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
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
export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
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
   }
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
</style>