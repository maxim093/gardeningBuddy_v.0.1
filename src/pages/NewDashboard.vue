<template>
  <div class="NewDashboard">
    <burger-menu @menuClicked="openMenu"></burger-menu>
    <SideBar />
    <weather-box></weather-box>

    <info-box v-if="plant && !addNewPlant" :plantData="plant"></info-box>
    <add-plant-box v-if="addNewPlant" :user="user" :position="position" @savedPlant="getBed(position)"></add-plant-box>
    <raised-bed @clicked="getBed"></raised-bed>
    <!-- <img class="background" src="../assets/gartenKumpel/test.jpg" /> -->
  </div>
</template>

<script>
import SideBar from "../components/molecules/Dashboard/DashboardSidebar.vue";
import BurgerMenu from "../components/molecules/BurgerMenu.vue";
import WeatherBox from "../components/molecules/WeatherWidget.vue";
import InfoBox from "../components/molecules/InfoBox.vue";
import AddPlantBox from "../components/molecules/AddPlantBox.vue";
import RaisedBed from "../components/molecules/RaisedBed/NormalRaisedBed.vue";

import { db } from "@/main";

import gsap from "gsap";

const TL = gsap.timeline();

export default {
  beforeMount() {
    this.user = this.$store.getters.['user/GET_USER'];
  },
  mounted() {
    this.getBed({ row: "2", col: "4" });
  },
  components: {
    SideBar,
    BurgerMenu,
    InfoBox,
    WeatherBox,
    RaisedBed,
    AddPlantBox,
  },
  data() {
    return {
      choosenOption: null,
      addNewPlant: false,
      bed: {},
      plant: {
        data: {},
        id: 0,
      },
      user: {},
      position: {},
    };
  },
  methods: {
    openMenu(value) {
      if (value) {
        TL.fromTo(".Dashboard-Sidebar", { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1 });
      } else {
        TL.fromTo(".Dashboard-Sidebar", { x: 0, autoAlpha: 1 }, { x: -100, autoAlpha: 0, duration: 1 });
      }
    },
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.choosenOption.toLowerCase())
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            this.addPlant();
          }
          querySnapshot.forEach((doc) => {
            this.plant.data = doc.data();
            this.plant.id = doc.id;
          });
        })
        .then(() => {})
        .catch((error) => {
          this.$store.dispatch("error/setError", error);
        });
    },
    getBed(value) {
      this.$store.dispatch("bed/getBeds", { bedType: "normalRaisedBeds" });
      this.bed = this.$store.getters.['bed/GET_BED'](1);
      this.position = value;

      const row = this.bed[value.row];
      const col = value.col - 1;
      this.choosenOption = row[col];

      if (this.choosenOption.length > 0) {
        this.searchPlant();
        this.addNewPlant = false;
      } else {
        this.addNewPlant = true;
      }
    },
    addPlant() {
      this.addNewPlant = true;
    },
  },
  watch: {
    // highlight active element
    position: function(newValue, oldValue) {
      let newBtn = null;
      const foundNewRow = document.querySelector(`div[id="${newValue.row}"]`);
      if (foundNewRow) newBtn = foundNewRow.querySelector(`button[id="${newValue.col}"]`);

      let oldBtn = null;
      const foundOldBtn = document.querySelector(`div[id="${oldValue.row}"]`);
      if (foundOldBtn) oldBtn = foundOldBtn.querySelector(`button[id="${oldValue.col}"]`);

      if (oldBtn && newBtn) {
        oldBtn.classList.remove("active");
        newBtn.classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss">
.NewDashboard {
  width: 100vw;
  height: 100vh;
  // background: palegreen;
  background: url("../assets/gartenKumpel/Gardenbed.png") center / 70%;

  .BurgerMenu {
    margin-left: auto;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100vh;
    height: 100%;
  }

  .InfoBox {
    margin-top: 30px;
    padding: 30px;
  }

  button.place.active {
    border: 1px solid orange;
    background: rgba(205, 134, 63, 0.507);
  }
}
</style>
