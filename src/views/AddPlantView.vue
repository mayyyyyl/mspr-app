<template>
  <div class="add_plant">
    <div class="container-fluid justify-content-md-center">
      <div class="row justify-content-md-center">
        <div class="col-md-6 text-center">
          <h1>Faire garder sa plante</h1>
          <p>

          </p>
          <label for="plants"></label>
          <select class="dropdown" name="plants" id="plants">
              <option value="especes">Espèces</option>
              <option value="mimosa">Mimosa</option>
              <option value="hortancia">Hortancia</option>
              <option value="dahlia">Dahlia</option>
          </select>
          <p>


          </p>
          <router-link to="/ajouter_plante" custom v-slot="{ navigate }">
            <button class="btn btn_green" @click="navigate" role="link">
              <img id="icon_btn" src="@/assets/plant_icon_bw.png">
              Ajouter une plante</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navigation,
    Footer
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
  background-color: #d8ffd1;
  color: #0e5e0b;
}
.dropdown{
  block-size: 45px;
  font-size: 22px;

}
</style>
