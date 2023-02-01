<template>
  <div class="home">
    <h1> Faire garder sa plante</h1>
    <p>

    </p>
    <label for="plants"></label>
    <select name="plants" id="plants">
      <optgroup label="Plantes">
        <option value="especes">Espèces</option>
        <option value="mimosa">Mimosa</option>
        <option value="hortancia">Hortancia</option>
        <option value="dahlia">Dahlia</option>
      </optgroup>
    </select>
    <p>


    </p>
  </div>
  <div id="add_plants">
    <button v-on:click="button_add += 1">Ajouter une plante</button>
  </div>
</template>


<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue'


export default {
  methods: {
    button_add() {
      var addplants = new Vue({
        el: '#add_plants',
        data: {
          counter: 0
        }
      })
      }
    },
  components: {
    Navigation,
    Footer
  }
}
</script>