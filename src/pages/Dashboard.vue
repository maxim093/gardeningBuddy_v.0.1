<template>
  <div class="Dashboard" :class="mode">
    <dashboard-header></dashboard-header>
    <section class="Dashboard-Weather">
      <weather-widget></weather-widget>
    </section>
    <section class="Dashboard-Calender">
      <full-calender></full-calender>
    </section>
    <dashboard-sidebar @toggle="toggle"> </dashboard-sidebar>
    <tabs-wrapper class="Dashboard-Tabs">
      <Tab title="Tab 1">afafafaf</Tab>
      <Tab title="Tab 2">Hfafafafafafaf</Tab>
      <Tab title="Tab 3">Hellafafafafafafafafafafaf3</Tab>
      <Tab title="Tab 4">Hafafafafa</Tab>
      <Tab title="Tab 5">Hafafafafa</Tab>
      <Tab title="Tab 6">Hafafafafa</Tab>
    </tabs-wrapper>

    <image-slider class="Dashboard-Swiper2"></image-slider>
    <image-slider class="Dashboard-Swiper3"></image-slider>
    <section class="Dashboard-Tipps"></section>
  </div>
</template>

<script>
import ImageSlider from "../components/libraries/ImageSlider";
import WeatherWidget from "../components/molecules/WeatherWidget";
import DashboardHeader from "../components/molecules/Dashboard/DashboardHeader";
import FullCalender from "../components/libraries/FullCalender";
import DashboardSidebar from "../components/molecules/Dashboard/DashboardSidebar";
import TabsWrapper from "../components/molecules/TabsWrapper";
import Tab from "../components/molecules/Tab";

export default {
  data() {
    return {
      mode: "dark",
    };
  },
  components: {
    WeatherWidget,
    DashboardHeader,
    FullCalender,
    DashboardSidebar,
    ImageSlider,
    Tab,
    TabsWrapper,
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
    "Sidebar Header Header Weather"
    "Sidebar Calender Calender Tabs"
    "Sidebar Calender Calender Tabs"
    "Sidebar Swiper2 Swiper3 Tipps"
    "Sidebar Swiper2 Swiper3 Tipps";
  grid-gap: 70px;
  height: 96vh;
  box-sizing: border-box;
  margin: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 2fr;
  background: #f3f3f3;
  color: #15202b;
  transition: background 0.3s ease-in-out;

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
    margin-top: -170px;
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
  &-Tipps {
    background: #70dbb8;
    grid-area: Tipps;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  &-Tabs {
    grid-area: Tabs;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  &-Swiper2 {
    grid-area: Swiper2;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    cursor: grab;
  }

  &-Swiper3 {
    grid-area: Swiper3;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    cursor: grab;
  }

  &-Todos {
    background: brown;
    grid-area: Todos;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
}

.Dashboard.dark {
  background: #192735;
  color: #f3f3f3;
}
</style>
