<template>
  <form id="plant_id" @submit="checkForm" method="post">
  <div class="add_plant">
    <div class="container-fluid justify-content-md-center">
      <div class="row justify-content-md-center">
        <div class="col-md-6 text-center">
          <h1>Faire garder sa plante</h1>
          <p>

          </p>
          <div class="row">
            <div class="col-12 pt-4">
              <span id="title_bloc">Veuillez choisir l'espèce de votre plante</span>
            </div>
          </div>
          <label for="plants"></label>
          <select class="form-select" aria-label="Default select example" id="plant_id" required>
            <option selected>-- Espèces --</option>
            <option value="1">Mimosa</option>
            <option value="2">Hortancia</option>
            <option value="3">Dahlia</option>
          </select>
          <div>
            <p></p>
            <div>
              <p></p>
            </div>
          </div>
          <router-link to="/ajouter_plante" custom v-slot="{ navigate }">
            <button class="btn btn_green" @click="navigate" role="link">
              <img id="icon_btn" src="@/assets/plant_icon_bw.png">
              Ajouter une plante</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </form>
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
