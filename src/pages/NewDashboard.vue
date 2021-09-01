<template>
  <div class="NewDashboard">
    <burger-menu @menuClicked="openMenu"></burger-menu>
    <SideBar />
    <weather-box></weather-box>
    <info-box :plantData="plant"></info-box>
    <raised-bed></raised-bed>
    <!-- <img class="background" src="../assets/gartenKumpel/test.jpg" /> -->
    <img class="background" src="../assets/gartenKumpel/Gardenbed.png" />
  </div>
</template>

<script>
import SideBar from "../components/molecules/Dashboard/DashboardSidebar.vue";
import BurgerMenu from "../components/molecules/BurgerMenu.vue";

import WeatherBox from "../components/molecules/WeatherWidget.vue";

import InfoBox from "../components/molecules/InfoBox.vue";

import RaisedBed from "../components/molecules/RaisedBed/NormalRaisedBed.vue";

import { db } from "@/main";

import gsap from "gsap";

const TL = gsap.timeline();

export default {
  mounted() {
    this.searchPlant();
  },
  components: {
    SideBar,
    BurgerMenu,
    InfoBox,
    WeatherBox,
    RaisedBed,
  },
  data() {
    return {
      choosenOption: null,
      plant: {
        data: {},
        id: 0,
      },
    };
  },
  methods: {
    openMenu(value) {
      console.log(value);
      if (value) {
        TL.fromTo(".Dashboard-Sidebar", { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1 });
      } else {
        TL.fromTo(".Dashboard-Sidebar", { x: 0, autoAlpha: 1 }, { x: -100, autoAlpha: 0, duration: 1 });
      }
    },
    searchPlant() {
      this.addNewPlant = false;
      db.collection("plants")
        .where(`name`, "==", "Artischocke")
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("hey");
            // this.addPlant();
          }
          querySnapshot.forEach((doc) => {
            this.plant.data = doc.data();
            this.plant.id = doc.id;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>

<style lang="scss">
.NewDashboard {
  width: 100vw;
  height: 100vh;
  background: palegreen;

  h1 {
    margin: 0;
  }

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
}
</style>
