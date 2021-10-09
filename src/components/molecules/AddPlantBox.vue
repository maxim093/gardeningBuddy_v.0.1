<template>
  <div class="AddPlantBox">
    <h2>Ganz schön leer hier 🙁 Lass uns etwas pflanzen!</h2>

    <!-- SUGGESTIONS -->
    <div v-if="plantInfo.id === 0">
      <h3>Unsere Vorschläge</h3>
      <swiper-sec @clicked="getClickedOption"></swiper-sec>
    </div>

    <!-- SEARCH PLANT -->
    <h3>Oder Suche nach etwas Bestimmtem</h3>
    <form @submit.prevent="searchPlant" class="AddPlantBox__searchWrapper">
      <base-input-field v-model.trim="searchedPlant" label="Pflanze"></base-input-field>
      <base-button class="Btn--green">Suchen</base-button>
      <base-button v-if="plantInfo.id !== 0" @click="reset" class="Btn--pink">Zeige Vorschläge</base-button>
    </form>
    <swiper v-if="plantInfo.id !== 0" @clicked="getClickedOption" :data="plantInfo" />

    <info-box-small :plant="plant" @savePlant="savePlant"></info-box-small>
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
  props: ["user", "position"],
  emits: ["savedPlant"],
  mounted() {},
  updated() {
    this.plantPartner = this.$store.getters["bed/GET_PARTNER"](1, this.position);
    Object.values(this.plantPartner).forEach((value) => {
      this.$store.dispatch("bed/getGoodPartner", { name: value });
      this.$store.dispatch("bed/getBadPartner", { name: value });
    });
  },
  data() {
    return {
      plant: "",
      plantPartner: {},
      searched: false,
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
          this.$store.dispatch("error/setError", error);
        });
    },
    reset() {
      this.searchedPlant = "";
      this.plant = "";
      this.plantInfo = {
        data: {},
        id: 0,
      };
    },
    savePlant(value) {
      this.$store.dispatch("bed/getBeds", { bedType: "normalRaisedBeds" });
      const bed = this.$store.getters["bed/GET_BED"](1);
      bed[this.position.row][this.position.col - 1] = value;

      // info for parent component to refetch bed
      this.$emit("savedPlant");
      this.$store.dispatch("bed/saveBed", { updatedBed: bed, bedType: "normalRaisedBeds", number: 1 });
    },
  },
  computed: {
    checkGOODPARTNER() {
      return this.$store.getters["bed/GET_GOODPARTNER"].length;
    },
  },
};
</script>
,

<style lang="scss">
.AddPlantBox {
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  height: 85vh;
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
      padding: 15px 25px;
    }
  }
}
</style>
