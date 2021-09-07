<template>
  <div class="NewDashboard">
    <burger-menu @menuClicked="openMenu"></burger-menu>
    <SideBar />
    <weather-box></weather-box>

    <info-box v-show="plant" :plantData="plant"></info-box>
    <raised-bed @clicked="getBed"></raised-bed>
    <!-- <img class="background" src="../assets/gartenKumpel/test.jpg" /> -->
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
  beforeMount() {
    this.user = this.$store.getters.GET_USER;
  },
  mounted() {
    this.getBed();
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
      bed: {},
      plant: {
        data: {},
        id: 0,
      },
      user: {},
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
        .where(`name`, "==", this.choosenOption)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("ERROR");
          }
          querySnapshot.forEach((doc) => {
            this.plant.data = doc.data();
            this.plant.id = doc.id;
          });
          console.log(this.plant);
        })
        .then(() => {})
        .catch((error) => {
          this.$store.dispatch("setError", error);
        });
    },
    getBed(value) {
      db.collection("beds")
        .doc(this.user.id)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("ERROR");
          } else {
            this.bed = querySnapshot.data();

            const row = this.bed.plants[value.row];
            const col = value.col - 1;

            this.choosenOption = row[col];
            if (this.choosenOption !== null) {
              this.searchPlant();
            }
          }
        })
        .catch((error) => {
          this.$store.dispatch("setError", error);
        });
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
}
</style>
