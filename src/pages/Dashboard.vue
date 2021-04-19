<template>
  <div class="Dashboard">
    <dashboard-header></dashboard-header>
    <section class="Dashboard-Weather">
      <h3>Wetter</h3>
      <weather-widget></weather-widget>
    </section>
    <section class="Dashboard-Calender">
      <full-calender></full-calender>
    </section>
    <section class="Dashboard-Sidebar"></section>
    <section class="Dashboard-Tipps"></section>
    <swiper-classic class="Dashboard-Swiper1"></swiper-classic>
    <swiper-classic class="Dashboard-Swiper2"></swiper-classic>
  </div>
</template>

<script>
import SwiperClassic from "../components/libraries/SwiperClassic";
import WeatherWidget from "../components/molecules/WeatherWidget";
import DashboardHeader from "../components/molecules/Dashboard/DashboardHeader";
import FullCalender from "../components/libraries/FullCalender";

export default {
  components: {
    SwiperClassic,
    WeatherWidget,
    DashboardHeader,
    FullCalender,
  },
};
</script>

<style lang="scss" scoped>
.Dashboard {
  display: grid;
  grid-template-areas:
    "Sidebar Header Header Search Tipps"
    "Sidebar Calender Calender Swiper1 Tipps "
    "Sidebar Calender Calender Swiper1 Tipps"
    "Sidebar Weather Weather Swiper2 Tipps"
    "Sidebar Weather Weather Swiper2 Tipps";
  grid-gap: 40px;
  height: 100vh;
  box-sizing: border-box;
  margin: 20px;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  grid-template-rows: 1fr 3fr 2fr 2fr 2fr;

  & * {
    border-radius: 20px;
  }

  &-Weather {
    grid-area: Weather;

    & h3 {
      text-align: left;
      text-indent: 20px;
    }
  }

  &-Me {
    background: teal;
    grid-area: Me;
  }
  &-Calender {
    grid-area: Calender;
  }
  &-Sidebar {
    background: green;
    grid-area: Sidebar;
  }
  &-Header {
    grid-area: Header;
  }
  &-Tipps {
    background: purple;
    grid-area: Tipps;
  }
  &-Swiper1 {
    background: pink;
    grid-area: Swiper1;
    width: 100%;
  }
  &-Swiper2 {
    background: pink;
    grid-area: Swiper2;
    width: 100%;
  }

  &-Todos {
    background: brown;
    grid-area: Todos;
  }
}
</style>
