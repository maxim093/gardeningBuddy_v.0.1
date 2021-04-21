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
    <swiper-classic class="Dashboard-Swiper1"></swiper-classic>
    <image-slider class="Dashboard-Swiper2"></image-slider>
    <section class="Dashboard-Tipps"></section>
    <section class="Dashboard-Bla"></section>
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
    "Sidebar Header Header Search Weather"
    "Sidebar Calender Calender Calender Swiper1"
    "Sidebar Swiper2 Swiper2 Bla Swiper1"
    "Sidebar Swiper2 Swiper2 Tipps Tipps"
    "Sidebar Swiper2 Swiper2 Tipps Tipps";
  grid-gap: 60px;
  height: 95vh;
  box-sizing: border-box;
  margin: 20px;
  grid-template-columns: 1.5fr 1fr 1fr 2fr 1fr;
  grid-template-rows: 1fr 4fr 1fr 1fr 3fr;

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
    margin-top: -200px;
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
  }
  &-Tipps {
    background: #70dbb8;
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
