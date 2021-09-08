<template>
  <div class="AddPlantBox">
    <h2>Ganz schön leer hier 🙁 Lass uns etwas pflanzen!</h2>

    <h3>Unsere Vorschläge</h3>
    <swiper-sec></swiper-sec>
    <h3>Oder Suche nach etwas Bestimmtem</h3>
    <!-- SEARCH PLANT -->
    <form @submit.prevent="searchPlant" class="AddPlantBox__searchWrapper">
      <base-input-field v-model.trim="searchedPlant" label="Pflanze"></base-input-field>
      <base-button class="Btn--green">Suchen</base-button>
    </form>
    <swiper v-if="plantInfo.id !== 0" @clicked="getClickedOption" :data="plantInfo" />

    <info-box-small :plant="plant"></info-box-small>
  </div>
</template>

<script>
import BaseButton from "../atoms/BaseButton.vue";
import BaseInputField from "../atoms/BaseInputField.vue";
import InfoBoxSmall from "./InfoBoxSmall.vue";
import Swiper from "./SwiperMain.vue";
import SwiperSec from "./Swiper.vue";

import { db } from "@/main";

export default {
  components: { BaseInputField, Swiper, SwiperSec, BaseButton, InfoBoxSmall },
  data() {
    return {
      plant: "",
      searchedPlant: "",
      plantInfo: {
        data: {},
        id: 0,
      },
    };
  },
  methods: {
    getClickedOption(value) {
      this.plant = value;
    },
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.searchedPlant.toLowerCase())
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("ERROR");
          }
          querySnapshot.forEach((doc) => {
            this.plantInfo.data = doc.data();
            this.plantInfo.id = doc.id;
          });

          console.log(this.plantInfo);
          this.plant = "";
        })
        .then(() => {})
        .catch((error) => {
          this.$store.dispatch("setError", error);
        });
    },
  },
};
</script>
,

<style lang="scss">
.AddPlantBox {
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  height: 80vh;
  // width: 40vw;

  width: 800px;
  margin-left: auto;
  position: relative;
  z-index: 5000;
  margin-right: 80px;
  border-radius: 15px;
  background: #fff;
  margin-top: 30px;
  padding: 30px;
  text-align: left;

  h3 {
    margin-bottom: 0;
    margin-top: 30px;
  }

  &__searchWrapper {
    display: flex;
    align-items: center;

    .Input {
      height: 48px;
    }

    .Btn {
      height: 50px;
      margin-left: 10px;
    }
  }
}
</style>
