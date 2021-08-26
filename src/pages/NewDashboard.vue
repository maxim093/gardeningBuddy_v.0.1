<template>
  <div class="NewDashboard">
    <burger-menu @menuClicked="openMenu"></burger-menu>

    <h1>New Dashboard</h1>
    <SideBar />
  </div>
</template>

<script>
import SideBar from "../components/molecules/Dashboard/DashboardSidebar.vue";
import BurgerMenu from "../components/molecules/BurgerMenu.vue";

import gsap from "gsap";

const TL = gsap.timeline();

export default {
  components: {
    SideBar,
    BurgerMenu,
  },
  data() {
    return {
      choosenOption: null,
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
}
</style>
