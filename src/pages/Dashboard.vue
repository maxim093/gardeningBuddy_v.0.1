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
    <dashboard-sidebar></dashboard-sidebar>
    <section class="Dashboard-Tipps"></section>
    <swiper-classic class="Dashboard-Swiper1"></swiper-classic>
    <image-slider class="Dashboard-Swiper2"></image-slider>
  </div>
</template>

<script>
import SwiperClassic from "../components/libraries/SwiperClassic";
import ImageSlider from "../components/libraries/ImageSlider";
import WeatherWidget from "../components/molecules/WeatherWidget";
import DashboardHeader from "../components/molecules/Dashboard/DashboardHeader";
import FullCalender from "../components/libraries/FullCalender";
import DashboardSidebar from "../components/molecules/Dashboard/DashboardSidebar";

export default {
  components: {
    SwiperClassic,
    WeatherWidget,
    DashboardHeader,
    FullCalender,
    DashboardSidebar,
    ImageSlider,
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
  grid-template-columns: 1.3fr 3fr 2fr 2fr 1fr;
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
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Calender {
    grid-area: Calender;
  }
  &-Sidebar {
    background: #52b788;
    color: rgb(46, 46, 46);
    grid-area: Sidebar;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Header {
    grid-area: Header;
  }
  &-Tipps {
    background: purple;
    grid-area: Tipps;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Swiper1 {
    grid-area: Swiper1;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Swiper2 {
    grid-area: Swiper2;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  &-Todos {
    background: brown;
    grid-area: Todos;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
