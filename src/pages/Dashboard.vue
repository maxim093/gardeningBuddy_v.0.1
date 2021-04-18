<template>
  <div class="Dashboard">
    <section class="Dashboard-Weather">b</section>
    <section class="Dashboard-Calender">b</section>
    <section class="Dashboard-Sidebar">b</section>
    <section class="Dashboard-Search">b</section>
    <section class="Dashboard-Tipps">b</section>

    <swiper-classic class="Dashboard-Swiper"></swiper-classic>

    <section class="Dashboard-Todos">b</section>
    <section class="Dashboard-Me">b</section>
  </div>
</template>

<script>
import SwiperClassic from "../components/libraries/SwiperClassic";
export default {
  components: {
    SwiperClassic,
  },
};
</script>

<style lang="scss" scoped>
.Dashboard {
  display: grid;
  grid-template-areas:
    "Sidebar Search Search Search Me"
    "Sidebar Calender Calender Calender Tipps "
    "Sidebar Calender Calender Calender Tipps"
    "Sidebar Swiper Swiper Swiper Todos"
    "Sidebar Weather Weather Weather Todos";
  grid-gap: 40px;
  height: 100vh;
  box-sizing: border-box;
  margin: 20px;
  grid-template-columns: minmax(0, 8fr) 4fr;

  & * {
    border-radius: 8px;
  }

  &-Weather {
    background: red;
    grid-area: Weather;
  }

  &-Me {
    background: teal;
    grid-area: Me;
  }
  &-Calender {
    background: blue;
    grid-area: Calender;
  }
  &-Sidebar {
    background: green;
    grid-area: Sidebar;
  }
  &-Search {
    background: orange;
    grid-area: Search;
  }
  &-Tipps {
    background: purple;
    grid-area: Tipps;
  }
  &-Swiper {
    background: pink;
    grid-area: Swiper;
    width: 100%;
  }

  &-Todos {
    background: brown;
    grid-area: Todos;
  }
}
</style>
