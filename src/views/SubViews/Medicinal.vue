<template>
  <v-container class="mt-4">
    <v-flex>
      <h1 class="titleMed ml-2 success--text titleMed">Medicinal Propeties</h1>
    </v-flex>
    <div class="fotoMedDiv">
      <!-- <v-img class="fotoMed" :src="require('@/assets/medical2.jpg')"></v-img> -->
    </div>

    <v-flex>
      <h3 class="extraMed">
        In your garden, in your patio, and even in your kitchen there are plants
        that yield unexpected benefits.
      </h3>

      <p class="basicMed">
        Health is closer than one might think. In fact, you may find it in your very,
        perhaps in that lush rosemary that grows on your backyard, or in the basil you keep
        in your kitchen. Here are 10 common plants that have healing properties you may not
        have known about:
      </p>
    </v-flex>
    <cards :plants="medicalplants"></cards>
  </v-container>
</template>

<script>
import cards from "../../components/cards.vue";
import axios from "axios";
export default {
  data() {
    return {
      myplants: []
    };
  },
  components: {
    cards
  },
  computed: {
    medicalplants() {
      return this.myplants.filter(plant => {
        console.log(plant);
        return plant.type.includes("medical");
      });
    }
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/pkm83")
      .then(response => (this.myplants = response.data.allplants))
      .catch(Error);

    console.log(response);
  }
};
</script>

<style>
.fotoMedDiv {
  height: 250px;
  width: 325px;
  margin-top: 80px;
  margin-left: 33px;
  margin-right: 0px;
  background-image: url("../../assets/medical2.jpg");
  background-size: 100%;
}
.extraMed {
  font-family: "Nothing You Could Do", cursive;
  font-size: 25px;
  line-height: 24px;
  margin-top: 20px;
}
.basicMed {
  font-family: monospace;
  font-weight: 1000;
  background-color: rgba(240, 255, 249, 0.838);
  margin-top: 20px;
  margin-left: 15px;
}
.titleMed {
  text-shadow: 1px 1px 1px #02020296;
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 70px;
  margin-top: 20px;
  line-height: 50px;
  z-index: 1;
  margin-left: -3px;
  position: absolute;
}

.fotoMed {
  width: 120%;
  margin-top: 65px;
  margin-left: 40px;
  object-fit: cover;
}
</style>