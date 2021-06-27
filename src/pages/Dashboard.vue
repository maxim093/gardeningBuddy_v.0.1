<template>
  <div class="Dashboard" :class="mode">
    <dashboard-header></dashboard-header>
    <dashboard-sidebar @toggle="toggle"> </dashboard-sidebar>
  </div>
</template>

<script>
import DashboardHeader from "../components/molecules/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/molecules/Dashboard/DashboardSidebar";

export default {
  data() {
    return {
      mode: "dark",
    };
  },
  components: {
    DashboardHeader,
    DashboardSidebar,
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Dashboard {
  display: grid;
  grid-template-areas:
    "Sidebar Header Header Weather Weather"
    "Sidebar Calender Calender Tabs Tabs"
    "Sidebar Calender Calender Tabs Tabs"
    "Sidebar Calender Calender Swiper2 Swiper3"
    "Sidebar Calender Calender Swiper2 Swiper3";
  grid-gap: 70px;
  height: 100vh;
  box-sizing: border-box;
  padding: 25px;
  grid-template-columns: 0.75fr 1fr 0.75fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 2fr;
  background: #f3f3f3;
  color: #15202b;
  transition: background 0.3s ease-in-out;

  & * {
    border-radius: 20px;
  }

  &-Sidebar {
    background: #70dbb8;
    color: rgb(46, 46, 46);
    //color: rgba(255, 255, 255, 0.9);

    grid-area: Sidebar;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Header {
    grid-area: Header;
    width: 100vw;
  }
}

.Dashboard.dark {
  background: #192735;
  color: #f3f3f3;
}
</style>
